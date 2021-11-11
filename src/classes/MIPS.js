export default class MIPS {
  constructor() {
    this.reset();
    this.isMain = false;
    this.space = 0;
  }

  // eslint-disable-next-line class-methods-use-this
  static operationString(operation) {
    if (operation === '+')
      return 'add';
    if (operation === '-')
      return 'sub';
    if (operation === '/')
      return 'div';
    if (operation === '*')
      return 'mult';
    return 'NULL?';
  }

  static mainMethod() {
    this.isMain = true;
    this.tabs = 0;
    this.dataSection();
  }

  static inputInt() {
    // Mensaje para imprimir
    this.loadImmediate('$v0', '4');
    this.loadAddress('$a0', 'intPrompt');
    this.pushCodeLine('syscall');
    // Pedir entero al usuario
    this.loadImmediate('$v0', '5');
    this.pushCodeLine('syscall');
    this.moveRegister('$a0', '$v0');
    this.pushCodeLine('jr $ra');
  }

  static outputInt() {
    this.loadImmediate('$v0', '1');
    this.moveRegister('$a0', '$a1');
    this.pushCodeLine('syscall');
    this.pushCodeLine('jr $ra');
  }

  static get CodeLines() {
    return this.codeLines;
  }

  static pushCodeLine(codeLine) {
    const tabs = '    '.repeat(this.tabs);
    const str = `${tabs}${codeLine}`;
    if (this.isMain)
      this.mainLines.push(str);
    else
      this.codeLines.push(str);
  }

  static labelStart(methodName) {
    this.pushCodeLine(`${methodName}:`);
    this.tabs += 1;
    if (methodName === 'InputInt')
      this.inputInt();
    else if (methodName === 'OutputInt')
      this.outputInt();
  }

  static labelEnd() {
    this.tabs -= 1;
    this.pushCodeLine('\n');
  }

  static moveRegister(dest, src) {
    this.pushCodeLine(`move ${dest}, ${src}`);
  }

  static storeRegister(dest, src) {
    this.pushCodeLine(`st ${dest}, ${src}`);
  }

  static jalLabel(methodName) {
    this.pushCodeLine(`jal ${methodName}`);
  }

  static jumpReturn() {
    this.pushCodeLine('jr $ra');
  }

  static operation(operation, dest, x, y) {
    const operationString = this.operationString(operation);
    this.pushCodeLine(`${operationString} ${dest}, ${x}, ${y}`);
  }

  static loadAddress(dest, src) {
    this.pushCodeLine(`la ${dest}, ${src}`);
  }

  static loadImmediate(dest, src) {
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

  static dataSection() {
    this.pushCodeLine('.data');
    this.pushCodeLine('.align 2');
    this.tabs += 1;
    this.pushCodeLine(`G_: .space ${this.space}`);
    this.pushCodeLine('intPrompt: .asciiz "Ingrese un número entero: "');
    this.tabs -= 1;
    this.breakLine();
    this.pushCodeLine('.text');
    this.tabs += 1;
  }

  static initialize(space = 0) {
    this.space = space;
    this.tabs += 1;
  }

  static breakLine() {
    this.pushCodeLine('\n');
  }

  static reset() {
    this.tabs = 0;
    this.codeLines = [];
    this.mainLines = [];
  }

  static terminate() {
    this.tabs += 1;
    this.pushCodeLine('j terminate');
    this.tabs -= 1;
    this.breakLine();
    this.codeLines = this.mainLines.concat(this.codeLines);
    this.isMain = false;
    this.pushCodeLine('terminate:');
    this.tabs += 1;
    this.pushCodeLine('li $v0, 10');
    this.pushCodeLine('syscall');
    this.tabs -= 1;
  }
}
