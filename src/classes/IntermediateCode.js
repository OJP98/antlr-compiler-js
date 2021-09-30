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

  static get IfCount() {
    return this.ifCount;
  }

  static methodDecl(tac) {
    this.pushTAC(tac);
    this.tabs += 1;
  }

  static methodEnd(tac) {
    this.tabs -= 1;
    this.pushTAC(tac);
  }

  static gotoIfTrueLabel(cond) {
    const string = `IF ${cond} GOTO IF_TRUE_${this.ifCount}:`;
    const tac = new LabelTAC(string, 'GOTO_IF_TRUE');
    this.pushCodeLine(string);
    this.tacList.push(tac);
  }

  static gotoIfFalseLabel() {
    const string = `GOTO IF_FALSE_${this.ifCount}:`;
    const tac = new LabelTAC(string, 'GOTO_IF_FALSE');
    this.pushCodeLine(string);
    this.tacList.push(tac);
    this.ifCount += 1;
  }

  static gotoEndIfLabel(ifId) {
    const string = `GOTO END_IF_${ifId}`;
    const tac = new LabelTAC(string, 'GOTO_END_IF');
    this.pushCodeLine(string);
    this.tacList.push(tac);
  }

  static ifTrueLabel(ifId) {
    const string = `IF_TRUE_${ifId}:`;
    const tac = new LabelTAC(string, 'IF_TRUE');
    this.pushCodeLine(string);
    this.tacList.push(tac);
    this.tabs += 1;
  }

  static ifFalseLabel(ifId, isElse = false) {
    const string = `IF_FALSE_${ifId}:`;
    const tac = new LabelTAC(string, 'IF_FALSE');
    this.tabs -= 1;
    this.pushCodeLine(string);
    this.tacList.push(tac);

    if (isElse)
      this.tabs += 1;
  }

  static endIfLabel(ifId) {
    this.tabs -= 1;
    const string = `END_IF_${ifId}:`;
    const tac = new LabelTAC(string, 'END_IF');
    this.pushCodeLine(string);
    this.tacList.push(tac);
  }

  static pushTAC(tac) {
    this.tacList.push(tac);
    this.pushCodeLine(tac.asString);
  }

  static pushCodeLine(codeLine) {
    const tabs = '  '.repeat(this.tabs);
    this.codeLines.push(`${tabs} ${codeLine}`);
    console.log(codeLine);
  }

  static Initialize() {
    this.tabs = 0;
    this.ifCount = 0;
    this.CodeLines = [];
    this.tacList = [];
  }
}
