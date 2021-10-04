import LABEL_TYPE from '../enums/labelTypes';
import { LabelTAC } from './TAC';

export default class IntermediateCode {
  static set CodeLines(codeLines) {
    this.codeLines = codeLines;
  }

  static get CodeLines() {
    return this.codeLines;
  }

  static get TacList() {
    return this.tacList;
  }

  static get LabelCount() {
    const prevIfCount = this.labelCount;
    this.labelCount += 1;
    return prevIfCount;
  }

  static set LabelCount(newCount) {
    this.labelCount = newCount;
  }

  static methodDecl(tac) {
    this.pushTAC(tac);
    this.tabs += 1;
  }

  static methodEnd(tac) {
    this.tabs -= 1;
    this.pushTAC(tac);
    this.pushCodeLine('\n');
  }

  static gotoWhileLabel(whileId) {
    const string = `GOTO WHILE_LOOP_${whileId}`;
    const tac = new LabelTAC(string, LABEL_TYPE.GOTO_START_WHILE);
    this.pushLabel(string, tac);
  }

  static gotoEndWhileLabel(whileId) {
    const string = `GOTO END_WHILE_${whileId}`;
    const tac = new LabelTAC(string, LABEL_TYPE.GOTO_END_WHILE);
    this.pushLabel(string, tac);
  }

  static startWhileLabel(whileId) {
    const string = `WHILE_LOOP_${whileId}`;
    const tac = new LabelTAC(string, LABEL_TYPE.WHILE_LOOP);
    this.pushLabel(string, tac);
    this.tabs += 1;
  }

  static endWhileLabel(whileId) {
    this.tabs -= 2;
    const string = `END_WHILE_${whileId}:`;
    const tac = new LabelTAC(string, LABEL_TYPE.END_WHILE);
    this.pushLabel(string, tac);
  }

  static gotoIfTrueLabel(addr, ifId) {
    const string = `IF ${addr} > 0 GOTO IF_TRUE_${ifId}`;
    const tac = new LabelTAC(string, LABEL_TYPE.GOTO_IF_TRUE);
    this.pushLabel(string, tac);
  }

  static gotoIfFalseLabel(ifId) {
    const string = `GOTO IF_FALSE_${ifId}`;
    const tac = new LabelTAC(string, LABEL_TYPE.GOTO_IF_FALSE);
    this.pushLabel(string, tac);
  }

  static gotoEndIfLabel(ifId) {
    const string = `GOTO END_IF_${ifId}`;
    const tac = new LabelTAC(string, LABEL_TYPE.GOTO_END_IF);
    this.pushLabel(string, tac);
  }

  static ifTrueLabel(ifId) {
    const string = `IF_TRUE_${ifId}:`;
    const tac = new LabelTAC(string, LABEL_TYPE.IF_TRUE);
    this.pushLabel(string, tac);
    this.tabs += 1;
  }

  static ifFalseLabel(ifId, isElse = false) {
    const string = `IF_FALSE_${ifId}:`;
    const tac = new LabelTAC(string, LABEL_TYPE.IF_FALSE);
    this.tabs -= 1;
    this.pushLabel(string, tac);

    if (isElse)
      this.tabs += 1;
  }

  static endIfLabel(ifId) {
    this.tabs -= 1;
    const string = `END_IF_${ifId}:`;
    const tac = new LabelTAC(string, LABEL_TYPE.END_IF);
    this.pushLabel(string, tac);
  }

  static pushTAC(tac) {
    this.tacList.push(tac);
    this.pushCodeLine(tac.asString);
  }

  static pushCodeLine(codeLine) {
    const tabs = '  '.repeat(this.tabs);
    this.codeLines.push(`${tabs}${codeLine}`);
  }

  static pushLabel(string, tac) {
    this.pushCodeLine(string);
    this.tacList.push(tac);
  }

  static Initialize() {
    this.tabs = 0;
    this.labelCount = 0;
    this.CodeLines = [];
    this.tacList = [];
  }
}
