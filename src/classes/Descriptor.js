import MIPS from './MIPS';

export default class Descriptor {
  constructor() {
    this.reset();
  }

  assignmentTac(tac) {
    // x = y
    const { result, arg1 } = tac;

    let yReg = this.getRegFromVarName(arg1);

    if (!yReg) {
      yReg = this.getReg();
      if (typeof arg1 === 'number')
        MIPS.loadInmediate(yReg.id, arg1);
      else
        this.loadRegister(yReg.id, arg1);
    }

    yReg.vars.push(result);
    this.insertLocationToAddr(result, yReg.id);
    console.log(this);
  }

  processTac(tac, tacType) {
    console.log(tac);
    if (tacType === 'AssignmentTAC')
      this.assignmentTac(tac);
  }

  getFirstAvailable() {
    return this.registers.find((reg) => !reg.vars.length);
  }

  getReg() {
    const first = this.getFirstAvailable();
    if (first)
      return first;
    return null;
  }

  getAddrFromVarName(varName) {
    return this.addresses.find((addr) => addr.varName === varName);
  }

  getRegById(regId) {
    return this.registers.find((reg) => reg.id === regId);
  }

  getRegFromVarName(varName) {
    const addr = this.getAddrFromVarName(varName);
    if (!addr)
      return null;
    return this.getRegById(addr.locations[0]);
  }

  insertNewAddress(varName, regId) {
    const newAddr = {
      varName,
      locations: [regId],
    };
    this.addresses.push(newAddr);
    // THIS RETURN IS NOT NECESARY
    return newAddr;
  }

  insertLocationToAddr(varName, regId) {
    const address = this.getAddrFromVarName(varName);

    if (address)
      address.locations.push(regId);
    else {
      const newAddr = this.insertNewAddress(varName, regId);
      console.log('NEW ADDRESS INSERTED', newAddr);
    }
  }

  wipeRegIdFromAddresses(regId) {
    this.addresses.forEach((addr) => {
      const varIndex = addr.locations.indexOf(regId);
      if (varIndex > -1)
        addr.locations.splice(varIndex, 1);
    });
  }

  // LD R, x
  loadRegister(regId, varName) {
    // Change R so that it only holds x
    const reg = this.getRegById(regId);
    reg.vars = [varName];

    // change addr. desc. for x by adding R as additional loc.
    this.insertLocationToAddr(varName, reg.id);
    MIPS.loadAddress(regId, varName);
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
  setResultRegister(destRegId, resultVar) {
    const destReg = this.getRegById(destRegId);

    // Change addr. desc. for x so that its only loc. is Rx
    const addr = this.getAddrFromVarName(resultVar);
    addr.locations = [destReg.id];

    // Remove Rx from the addr. desc. of any var
    this.wipeRegIdFromAddresses(destReg.id);

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

  initializeRegisters() {
    this.registers = [
      { id: 't1', vars: [] },
      { id: 't2', vars: [] },
      { id: 't3', vars: [] },
      { id: 't4', vars: [] },
      { id: 't5', vars: [] },
      { id: 't6', vars: [] },
      { id: 't7', vars: [] },
      { id: 't8', vars: [] },
      { id: 't9', vars: [] },
    ];
  }

  reset() {
    this.registers = [];
    this.addresses = [];
    this.initializeRegisters();
  }
}
