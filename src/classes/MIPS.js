export default class MIPS {
  constructor() {
    this.reset();
  }

  static get CodeLines() {
    return this.codeLines;
  }

  static pushCodeLine(codeLine) {
    const tabs = '    '.repeat(this.tabs);
    this.codeLines.push(`${tabs}${codeLine}`);
  }

  static labelStart(methodName) {
    this.pushCodeLine(`${methodName}:`);
    this.tabs += 1;
  }

  static labelEnd() {
    this.tabs -= 1;
    this.pushCodeLine('\n');
  }

  static moveRegister(dest, src) {
    this.pushCodeLine(`move ${dest}, ${src}`);
  }

  static jalLabel(methodName) {
    this.pushCodeLine(`jal ${methodName}`);
  }

  static jumpReturn() {
    this.pushCodeLine('jr $ra');
  }

  static operation(operation, dest, x, y) {
    this.pushCodeLine(`${operation} ${dest}, ${x}, ${y}`);
  }

  static loadAddress(dest, src) {
    this.pushCodeLine(`la ${dest}, ${src}`);
  }

  static loadInmediate(dest, src) {
    this.pushCodeLine(`li ${dest}, ${src}`);
  }

  static loadWord(dest, src) {
    this.pushCodeLine(`lw ${dest}, ${src}`);
  }

  static saveWord(dest, src) {
    this.pushCodeLine(`sw ${dest}, ${src}`);
  }

  static incrementSP(amount) {
    this.pushCodeLine(`sub $sp, $sp, ${amount}`);
  }

  static reduceSP(amount) {
    this.pushCodeLine(`add $sp, $sp, ${amount}`);
  }

  static dataSection(space) {
    this.pushCodeLine('.data');
    this.pushCodeLine('.align 2');
    this.tabs += 1;
    this.pushCodeLine(`G_: .space ${space}`);
    this.tabs -= 1;
    this.breakLine();
  }

  static mainSection() {
    this.pushCodeLine('.text');
    this.pushCodeLine('.globl main');
  }

  static initialize(space = 0) {
    this.dataSection(space);
    this.mainSection();
  }

  static breakLine() {
    this.pushCodeLine('\n');
  }

  static reset() {
    this.tabs = 0;
    this.codeLines = [];
  }
}
