/* eslint-disable no-restricted-globals */
/* eslint-disable class-methods-use-this */
import MIPS from '../classes/MIPS';
import Descriptor from '../classes/Descriptor';
import {
  getLastWord,
  getMethodNameAndParamCount,
  getLabelAndTemp,
} from '../js/utils';

export default class MipsCode {
  constructor(symbolTable, methodTable, structTable, instructions) {
    this.symbolTable = symbolTable;
    this.methodTable = methodTable;
    this.structTable = structTable;
    this.instructions = instructions;
    this.descriptor = new Descriptor();
    this.lastMethod = '';
    this.lastLbl = '';
    MIPS.reset();
  }

  get CodeLines() {
    return MIPS.CodeLines;
  }

  initialize(globalSize = 0) {
    MIPS.initialize(globalSize);
    this.generateMips();
  }

  getMethod(methodName) {
    return this.methodTable.find((method) => method.name === methodName);
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
    const method = this.getMethod(methodName);
    const { size, name } = method;
    this.lastMethod = name;
    // CHECK: Should we reset both registers and addresses?
    this.descriptor.initializeRegisters();
    MIPS.params = 0;

    if (methodName === 'main') {
      MIPS.mainMethod(
        size,
        this.methodTable.find((m) => m.name === 'OutputInt'),
      );
      return;
    }

    if (methodName === 'OutputInt') {
      MIPS.outputInt();
      return;
    }

    if (methodName === 'InputInt') {
      MIPS.inputInt();
      return;
    }

    MIPS.labelStart(methodName);
    MIPS.increaseRegister(size);
    const params = this.getMethod(methodName).args;
    // eslint-disable-next-line no-unused-expressions
    params.length && MIPS.storeParams(params);
  }

  generateMethodCall(instruction) {
    const [methodName, paramCount] = getMethodNameAndParamCount(instruction);
    this.descriptor.saveMachineState();
    MIPS.juampAndLink(methodName);
    MIPS.unloadParams(paramCount);
  }

  generateMethodParam(instruction) {
    const varName = getLastWord(instruction);

    if (!isNaN(varName)) {
      MIPS.immediateMethodParam(varName);
      return;
    }

    const addr = this.descriptor.getAddrFromVarName(varName);
    const lastAddr = addr ? addr.locations[addr.locations.length - 1] : varName;
    MIPS.methodParam(lastAddr);
  }

  generateMethodEnd(instruction) {
    const methodName = getLastWord(instruction);
    const method = this.getMethod(methodName);
    if (methodName !== 'main' && methodName !== 'OutputInt')
      MIPS.decreaseRegister(method.size);
    MIPS.labelEnd();
  }

  generateReturn(instruction) {
    const varName = getLastWord(instruction);
    const addr = this.descriptor.getAddrFromVarName(varName);
    const lastAddr = addr ? addr.locations[addr.locations.length - 1] : varName;
    MIPS.moveRegister('$v0', lastAddr);
    this.descriptor.reset();
  }

  genIfCond(instruction) {
    const [temp, label] = getLabelAndTemp(instruction);
    const reg = this.descriptor.getAddrFromVarName(temp);
    this.descriptor.saveMachineState();
    MIPS.branchGreaterThanZero(reg.locations.pop(), label);
    this.descriptor.deleteVarFromDesc(temp);
  }

  genIfFalseCond(instruction) {
    const label = getLastWord(instruction);
    MIPS.jump(label);
  }

  genIfTrueLbl(instruction) {
    MIPS.breakLine();
    const label = getLastWord(instruction);
    MIPS.labelStart(label);
  }

  genIfFalseLbl(instruction) {
    MIPS.breakLine();
    const label = getLastWord(instruction);
    if (this.lastLbl.labelType !== 'GOTO_END_IF') {
      MIPS.jump(label);
      MIPS.tabs -= 1;
    }
    MIPS.labelStart(label);
  }

  genEndIfLbl(instruction) {
    const label = getLastWord(instruction);
    MIPS.jump(label);
    MIPS.tabs -= 1;
  }

  genEndWhileLbl(instruction) {
    const label = getLastWord(instruction);
    MIPS.tabs -= 1;
    MIPS.labelStart(label);
    MIPS.tabs -= 1;
    MIPS.breakLine();
  }

  generateLabel(label) {
    const { labelType } = label;
    const instruction = label.result;

    if (labelType === 'DEF')
      this.generateMethod(instruction);

    else if (labelType === 'END_DEF')
      this.generateMethodEnd(instruction);

    else if (labelType === 'METHOD_RETURN' && this.lastMethod !== 'InputInt')
      this.generateReturn(instruction);

    else if (labelType === 'METHOD_PARAM')
      this.generateMethodParam(instruction);

    else if (labelType === 'METHOD_CALL')
      this.generateMethodCall(instruction);

    else if (labelType === 'GOTO_IF_TRUE')
      this.genIfCond(instruction);

    else if (labelType === 'GOTO_IF_FALSE')
      this.genIfFalseCond(instruction);

    else if (labelType === 'IF_TRUE')
      this.genIfTrueLbl(instruction);

    else if (labelType === 'IF_FALSE')
      this.genIfFalseLbl(instruction);

    else if (labelType === 'GOTO_END_IF')
      this.genEndIfLbl(instruction);

    else if (labelType === 'END_IF') {
      MIPS.breakLine();
      MIPS.tabs -= 1;
      MIPS.labelStart(getLastWord(instruction));
    } else if (labelType === 'WHILE_LOOP') {
      // this.descriptor.saveMachineState();
      MIPS.breakLine();
      MIPS.labelStart(instruction);
    } else if (labelType === 'END_WHILE')
      this.genEndWhileLbl(instruction);

    else if (labelType === 'GOTO_END_WHILE')
      MIPS.jump(getLastWord(instruction));

    else if (labelType === 'GOTO_START_WHILE') {
      this.descriptor.saveMachineState();
      MIPS.jump(getLastWord(instruction));
    }

    this.lastLbl = label;
  }
}
