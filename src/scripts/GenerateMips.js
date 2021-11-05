import MIPS from '../classes/MIPS';
import Descriptor from '../classes/Descriptor';
import { getMethodName } from '../js/utils';

export default class MipsCode {
  constructor(symbolTable, methodTable, structTable, instructions) {
    this.symbolTable = symbolTable;
    this.methodTable = methodTable;
    this.structTable = structTable;
    this.instructions = instructions;
    this.descriptor = new Descriptor();
    MIPS.reset();
  }

  // eslint-disable-next-line class-methods-use-this
  get CodeLines() {
    return MIPS.CodeLines;
  }

  initialize(globalSize = 0) {
    MIPS.initialize(globalSize);
    this.generateMips();
  }

  generateMips() {
    this.instructions.forEach((i) => {
      this.generatePerInstruction(i);
    });
  }

  generatePerInstruction(instruction) {
    const tacType = instruction.constructor.name;
    if (tacType === 'LabelTAC')
      this.generateLabel(instruction);
    else
      this.descriptor.processTac(instruction, tacType);
  }

  // eslint-disable-next-line class-methods-use-this
  generateLabel(label) {
    const { labelType } = label;
    const instruction = label.result;

    if (labelType === 'DEF')
      MIPS.labelStart(getMethodName(instruction));

    else if (labelType === 'END_DEF')
      MIPS.labelEnd();

    else if (labelType === 'METHOD_RETURN') {
      // TODO
    }
  }
}
