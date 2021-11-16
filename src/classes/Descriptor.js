/* eslint-disable class-methods-use-this */
import MIPS from './MIPS';
// eslint-disable-next-line no-unused-vars
import { print } from '../js/utils';

export default class Descriptor {
  constructor() {
    this.reset();
  }

  operationTac(tac) {
    // x = y + z
    const {
      result, arg1, operator, arg2,
    } = tac;

    console.log(arg1, result);

    const yReg = this.getReg(arg1);
    if (typeof arg1 === 'number')
      this.loadImmediate(yReg, arg1);
    else if (!yReg.vars.includes(arg1))
      this.loadRegister(yReg, arg1);

    const zReg = this.getReg(arg2);
    if (typeof arg2 === 'number')
      this.loadImmediate(zReg, arg2);
    else if (!zReg.vars.includes(arg2))
      this.loadRegister(zReg, arg2);

    const xReg = this.getReg(result);
    this.setResultRegister(xReg, result);
    MIPS.operation(operator, xReg.id, yReg.id, zReg.id);

    // If x or y is a constant or a temp, clean them up
    if (typeof arg1 === 'number')
      yReg.vars = [];
    else if (arg1.includes('t'))
      this.deleteVarFromDesc(arg1);

    if (typeof arg2 === 'number')
      zReg.vars = [];
    else if (arg2.includes('t'))
      this.deleteVarFromDesc(arg2);
  }

  inmediateAssign(result, arg1) {
    const yReg = this.getReg(result);
    MIPS.loadImmediate(yReg.id, arg1);

    if (!yReg.vars.includes(result)) {
      yReg.vars.push(result);
      this.insertLocationToAddr(result, yReg.id);
    }
  }

  varAssign(result, arg1) {
    const yReg = this.getReg(arg1);

    if (!yReg.vars.includes(arg1))
      this.loadRegister(yReg, arg1);

    yReg.vars.push(result);

    let xAddr = this.getAddrFromVarName(result);
    if (!xAddr)
      xAddr = this.insertNewAddress(result, yReg.id);

    xAddr.locations.push(yReg.id);
    if (arg1.includes('t'))
      this.deleteVarFromDesc(arg1);
  }

  assignmentTac(tac) {
    // x = y
    const { result, arg1 } = tac;
    this.cleanupVarData(result);
    if (typeof arg1 === 'number')
      this.inmediateAssign(result, arg1);
    else
      this.varAssign(result, arg1);
  }

  processTac(tac, tacType) {
    if (tacType === 'AssignmentTAC')
      this.assignmentTac(tac);
    else if (tacType === 'TAC')
      this.operationTac(tac);
    console.log(tac);
    print(this);
  }

  getFirstAvailable() {
    return this.registers.find((reg) => !reg.vars.length);
  }

  spillVars(register) {
    register.vars.forEach((varName) => {
      const addr = this.getAddrFromVarName(varName);
      const regIndex = addr.locations.indexOf((a) => a === register.id);
      addr.locations.splice(regIndex, 1);

      if (varName.includes('[')) {
        MIPS.storeRegister(varName, register.id);
        addr.locations = [varName];
      }
    });
    register.vars = [];
  }

  storeRegVarsInMem(register, varName) {
    if (register.vars.length > 1) {
      const varIndex = register.vars.indexOf((v) => v === varName);
      register.vars.splice(varIndex, 1);
      this.spillVars(register);
    }
    register.vars = [];
  }

  getRegFromDuplicateVar() {
    // Devolver el registro con menos variables
    let selected = null;
    const vars = this.addresses.map((loc) => loc.varName);

    vars.forEach((evalVar) => {
      const contains = this.registers.filter((reg) => reg.vars.includes(evalVar));
      if (contains.length > 1) {
        const smallest = contains.reduce(
          (acc, curr) => (acc.vars.length > curr.vars.length ? curr : acc),
        );
        this.storeRegVarsInMem(smallest, evalVar);
        selected = smallest;
        // eslint-disable-next-line no-useless-return
        return;
      }
    });
    return selected;
  }

  getRegFromSpill() {
    // Select the register with least amount of vars
    const smallestReg = this.registers.reduce(
      (acc, curr) => (acc.vars.length > curr.vars.length ? curr : acc),
    );
    // Spill its vars
    this.spillVars(smallestReg);
    return smallestReg;
  }

  getReg(varName) {
    // First case: get reg that contains varName
    const regFromVarName = this.getRegFromVarName(varName);
    if (regFromVarName)
      return regFromVarName;

    // Second case: get first available register
    const firstRegAvailable = this.getFirstAvailable();
    if (firstRegAvailable)
      return firstRegAvailable;

    // Third case: check if any var has a duplicated register.
    const duplicateVar = this.getRegFromDuplicateVar();
    if (duplicateVar)
      return duplicateVar;

    const spillReg = this.getRegFromSpill();
    return spillReg;
  }

  getAddrFromVarName(varName) {
    return this.addresses.find((addr) => addr.varName === varName);
  }

  getRegById(regId) {
    return this.registers.find((reg) => reg.id === regId);
  }

  getRegFromVarName(varName) {
    return this.registers.find((reg) => reg.vars.includes(varName));
  }

  insertNewAddress(varName, regId) {
    const newAddr = {
      varName,
      locations: [varName, regId],
    };
    this.addresses.push(newAddr);
    return newAddr;
  }

  insertLocationToAddr(varName, regId) {
    const address = this.getAddrFromVarName(varName);

    if (address) {
      address.locations.push(regId);
      return address;
    }

    return this.insertNewAddress(varName, regId);
  }

  wipeRegIdFromAddresses(regId) {
    this.addresses.forEach((addr) => {
      const varIndex = addr.locations.indexOf(regId);
      if (varIndex > -1)
        addr.locations.splice(varIndex, 1);
    });
  }

  deleteVarFromDesc(varName) {
    this.cleanupVarData(varName);
    const addr = this.getAddrFromVarName(varName);
    const varIndex = this.addresses.indexOf(addr);
    if (varIndex > -1)
      this.addresses.splice(varIndex, 1);
  }

  /**
   * Deletes var from every Reg. and resets its addr
   * @param {string} varName variable Name
   */
  cleanupVarData(varName) {
    this.registers.forEach((reg) => {
      const varIndex = reg.vars.indexOf(varName);
      if (varIndex > -1)
        reg.vars.splice(varIndex, 1);
    });
    const addr = this.getAddrFromVarName(varName);

    if (addr)
      addr.locations = [varName];
  }

  // LD R, x
  loadRegister(reg, varName) {
    if (varName === '$v0') {
      MIPS.moveRegister(reg.id, varName);
      return;
    }

    // Change R so that it only holds x
    reg.vars = [varName];

    // change addr. desc. for x by adding R as additional loc.
    const addr = this.insertLocationToAddr(varName, reg.id);
    MIPS.loadWord(reg.id, addr.locations[0]);
  }

  loadImmediate(reg, value) {
    reg.vars = [value];
    MIPS.loadImmediate(reg.id, value);
  }

  // ST x, R
  storeRegister(regId, varName) {
    // change addr. desc. for x to include its own memory loc.
    const addr = this.getAddrFromVarName(varName);
    if (!addr)
      return;
    this.insertLocationToAddr(varName, regId);
  }

  // x = y + z == OP Rx, Ry, Rz
  setResultRegister(destReg, resultVar) {
    // Remove Rx from the addr. desc. of any var
    this.wipeRegIdFromAddresses(destReg.id);

    // Change addr. desc. for x so that its only loc. is Rx
    let addr = this.getAddrFromVarName(resultVar);
    if (!addr)
      addr = this.insertNewAddress(resultVar, destReg.id);

    addr.locations = [destReg.id];

    // Change reg. desc. for Rx so it only holds x
    destReg.vars = [resultVar];
  }

  // x = y
  assignmentRegister(srcRegId, destVar) {
    // Add x to reg. desc. for Ry
    const srcReg = this.getRegById(srcRegId);
    srcReg.vars.push(destVar);

    // Change addr. desc. for x so its only loc. is Ry
    const destAddr = this.getAddrFromVarName(destVar);
    destAddr.locations = [srcReg.id];
  }

  saveMachineState() {
    this.addresses.forEach((addr) => {
      const { varName, locations } = addr;
      if (varName.includes('[')) {
        const lastAddr = locations.pop();
        // eslint-disable-next-line no-unused-expressions
        !lastAddr.includes('[') && MIPS.saveWord(varName, lastAddr);
      }
    });
    this.reset();
  }

  initializeRegisters() {
    this.registers = [
      { id: '$t1', vars: [] },
      { id: '$t2', vars: [] },
      { id: '$t3', vars: [] },
      { id: '$t4', vars: [] },
      { id: '$t5', vars: [] },
      { id: '$t6', vars: [] },
      { id: '$t7', vars: [] },
      { id: '$t8', vars: [] },
      { id: '$t9', vars: [] },
    ];
  }

  reset() {
    this.registers = [];
    this.addresses = [];
    this.initializeRegisters();
  }
}
