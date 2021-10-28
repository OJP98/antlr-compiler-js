export default class Descriptor {
  constructor() {
    this.reset();
  }

  getReg(tac) {
    console.log('This is the getReg function', tac, this.registers);
  }

  getAddrFromName(varName) {
    return this.addresses.find((addr) => addr.varName === varName);
  }

  getRegById(regId) {
    return this.registers.find((reg) => reg.id === regId);
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
    const address = this.getAddrFromName(varName);

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
  }

  // ST x, R
  storeRegister(regId, varName) {
    // change addr. desc. for x to include its own memory loc.
    const addr = this.getAddrFromName(varName);
    if (!addr)
      return;
    this.insertLocationToAddr(varName, regId);
  }

  // x = y + z == OP Rx, Ry, Rz
  setResultRegister(destRegId, resultVar) {
    const destReg = this.getRegById(destRegId);

    // Change addr. desc. for x so that its only loc. is Rx
    const addr = this.getAddrFromName(resultVar);
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
    const destAddr = this.getAddrFromName(destVar);
    destAddr.locations = [srcReg.id];
  }

  initializeRegisters() {
    this.registers = [
      { id: 'r1', vars: [] },
      { id: 'r2', vars: [] },
      { id: 'r3', vars: [] },
      { id: 'r4', vars: [] },
      { id: 'r5', vars: [] },
      { id: 'r6', vars: [] },
      { id: 'r7', vars: [] },
    ];
  }

  reset() {
    this.registers = [];
    this.addresses = [];
    this.initializeRegisters();
  }
}
