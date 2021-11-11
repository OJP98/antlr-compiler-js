/* eslint-disable class-methods-use-this */
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
    MIPS.terminate();
  }

  generatePerInstruction(instruction) {
    const tacType = instruction.constructor.name;
    if (tacType === 'LabelTAC')
      this.generateLabel(instruction);
    else
      this.descriptor.processTac(instruction, tacType);
  }

  generateMethod(instruction) {
    const methodName = getMethodName(instruction);
    if (methodName === 'main')
      MIPS.mainMethod();
    MIPS.labelStart(methodName);
  }

  generateLabel(label) {
    const { labelType } = label;
    const instruction = label.result;

    if (labelType === 'DEF')
      this.generateMethod(instruction);

    else if (labelType === 'END_DEF')
      MIPS.labelEnd();

    else if (labelType === 'METHOD_RETURN') {
      // TODO
    }
  }
}
