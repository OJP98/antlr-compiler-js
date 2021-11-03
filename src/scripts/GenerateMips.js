import MIPS from '../classes/MIPS';

export default class MipsCode {
  constructor(symbolTable, methodTable, structTable, instructions) {
    this.symbolTable = symbolTable;
    this.methodTable = methodTable;
    this.structTable = structTable;
    this.instructions = instructions;
    this.mips = new MIPS();
  }

  get CodeLines() {
    return this.mips.CodeLines;
  }

  initialize(globalSize = 0) {
    this.mips.initialize(globalSize);
  }
}
