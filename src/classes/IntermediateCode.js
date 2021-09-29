export default class IntermediateCode {
  static set CodeLines(codeLines) {
    this.codeLines = codeLines;
  }

  static get CodeLines() {
    return this.codeLines;
  }

  static methodDecl(tac) {
    this.pushTAC(tac);
    this.tabs += 1;
  }

  static methodEnd(tac) {
    this.tabs -= 1;
    this.pushTAC(tac);
  }

  static ifLabel(isTrue) {
    const boolean = isTrue ? 'TRUE' : 'FALSE';
    this.ifCount += 1;
    this.pushCodeLine(`IF_${boolean}_${this.ifCount}:`);
    const count = isTrue ? 1 : -1;
    this.tabs += count;
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
