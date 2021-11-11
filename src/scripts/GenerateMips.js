/* eslint-disable class-methods-use-this */
import MIPS from '../classes/MIPS';
import Descriptor from '../classes/Descriptor';
import { getLastWord, getMethodNameAndParamCount } from '../js/utils';

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
    const methodName = getLastWord(instruction);
    if (methodName === 'main') {
      MIPS.mainMethod();
      MIPS.labelStart(methodName);
    } else if (methodName === 'InputInt') {
      MIPS.labelStart(methodName);
      MIPS.inputInt();
    } else if (methodName === 'OutputInt') {
      MIPS.labelStart(methodName);
      MIPS.outputInt();
    }
  }

  generateMethodCall(instruction) {
    const [methodName, paramCount] = getMethodNameAndParamCount(instruction);
    MIPS.juampAndLink(methodName);
    MIPS.unloadParams(paramCount);
  }

  generateMethodParam(instruction) {
    const varName = getLastWord(instruction);
    const addr = this.descriptor.getAddrFromVarName(varName);
    const lastAddr = addr ? addr.locations[addr.locations.length - 1] : varName;
    MIPS.methodParam(lastAddr);
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
    } else if (labelType === 'METHOD_PARAM')
      this.generateMethodParam(instruction);

    else if (labelType === 'METHOD_CALL')
      this.generateMethodCall(instruction);
  }
}
