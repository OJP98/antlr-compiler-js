export default class MIPS {
  constructor() {
    this.reset();
  }

  get CodeLines() {
    return this.codeLines;
  }

  pushCodeLine(codeLine) {
    const tabs = '    '.repeat(this.tabs);
    this.codeLines.push(`${tabs}${codeLine}`);
  }

  moveRegister(dest, src) {
    this.pushCodeLine(`move ${dest}, ${src}`);
  }

  jalLabel(methodName) {
    this.pushCodeLine(`jal ${methodName}`);
  }

  jumpReturn() {
    this.pushCodeLine('jr $ra');
  }

  operation(operation, dest, x, y) {
    this.pushCodeLine(`${operation} ${dest}, ${x}, ${y}`);
  }

  loadAddres(dest, src) {
    this.pushCodeLine(`la ${dest}, ${src}`);
  }

  loadInmediate(dest, src) {
    this.pushCodeLine(`li ${dest}, ${src}`);
  }

  loadWord(dest, src) {
    this.pushCodeLine(`lw ${dest}, ${src}`);
  }

  saveWord(dest, src) {
    this.pushCodeLine(`sw ${dest}, ${src}`);
  }

  incrementSP(amount) {
    this.pushCodeLine(`sub $sp, $sp, ${amount}`);
  }

  reduceSP(amount) {
    this.pushCodeLine(`add $sp, $sp, ${amount}`);
  }

  dataSection(space) {
    this.pushCodeLine('.data');
    this.pushCodeLine('.align 2');
    this.tabs += 1;
    this.pushCodeLine(`G_: .space ${space}`);
    this.tabs -= 1;
    this.breakLine();
  }

  mainSection() {
    this.pushCodeLine('.text');
    this.pushCodeLine('.globl main');
    this.pushCodeLine('.main:');
    this.tabs += 1;
  }

  initialize(space = 0) {
    this.dataSection(space);
    this.mainSection();
  }

  breakLine() {
    this.pushCodeLine('\n');
  }

  reset() {
    this.tabs = 0;
    this.codeLines = [];
  }
}
