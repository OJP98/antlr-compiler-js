/* eslint-disable import/no-cycle */
/* eslint-disable no-restricted-globals */
import { translate } from '../js/utils';

export default class MIPS {
  constructor() {
    this.reset();
    this.isMain = false;
    this.space = 0;
    this.params = 0;
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
      return 'mul';
    if (operation === '>')
      return 'sgt';
    if (operation === '==')
      return 'seq';
    if (operation === '<')
      return 'slt';
    if (operation === '||')
      return 'or';
    if (operation === '&&')
      return 'and';
    // TODO: <=, >=
    return 'NULL?';
  }

  static mainMethod(size, hasInput) {
    this.isMain = true;
    this.tabs = 0;
    this.dataSection(hasInput);
    this.labelStart('main');
    this.loadAddress('$s7', 'G');
    if (size > 0) {
      this.storeWord('($sp)', '$fp');
      this.pushCodeLine(`sub $fp, $sp, ${size}`);
      this.loadAddress('$sp', '($fp)');
    }
  }

  static inputInt() {
    MIPS.labelStart('InputInt');
    // Mensaje para imprimir
    this.loadImmediate('$v0', '4');
    this.loadAddress('$a0', 'intPrompt');
    this.pushCodeLine('syscall');
    // Pedir entero al usuario
    this.loadImmediate('$v0', '5');
    this.pushCodeLine('syscall');
  }

  static outputInt() {
    this.labelStart('OutputInt');
    this.loadImmediate('$v0', '1');
    this.pushCodeLine('syscall');
    this.loadImmediate('$v0', '4');
    this.loadAddress('$a0', 'newline');
    this.pushCodeLine('syscall');
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
  }

  static labelEnd() {
    if (!this.isMain)
      this.jumpReturn();
    this.tabs -= 1;
    this.pushCodeLine('\n');
  }

  static moveRegister(dest, src) {
    if (!isNaN(src))
      this.pushCodeLine(`li ${dest}, ${src}`);
    else
      this.pushCodeLine(`move ${dest}, ${src}`);
  }

  static juampAndLink(methodName) {
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
    this.pushCodeLine(`lw ${translate(dest)}, ${translate(src)}`);
  }

  static storeWord(dest, src) {
    this.pushCodeLine(`sw ${translate(src)}, ${translate(dest)}`);
  }

  static increaseRegister(amount) {
    if (amount === 0)
      return;
    this.pushCodeLine('sub $sp, $sp, 4');
    this.pushCodeLine('sw, $ra, ($sp)');
    this.pushCodeLine('sub $sp, $sp, 4');
    this.pushCodeLine('sw $fp, ($sp)');
    this.pushCodeLine(`sub $fp, $sp, ${amount}`);
    this.loadAddress('$sp', '($fp)');
  }

  static decreaseRegister(amount) {
    if (amount === 0)
      return;
    this.pushCodeLine(`add $sp, $fp, ${amount}`);
    this.pushCodeLine('lw $fp, ($sp)');
    this.pushCodeLine('add $sp, $sp, 4');
    this.pushCodeLine('lw $ra, ($sp)');
    this.pushCodeLine('add $sp, $sp, 4');
  }

  static methodParam(location) {
    const param = `$a${this.params}`;
    if (!location.includes('['))
      this.moveRegister(param, location);
    else
      this.loadWord(param, location);
    this.params += 1;
  }

  static immediateMethodParam(constant) {
    const param = `$a${this.params}`;
    this.loadImmediate(param, constant);
    this.params += 1;
  }

  static storeParams(paramArray) {
    paramArray.forEach((param) => {
      this.storeWord(param.addr, `$a${this.params}`);
      this.params += 1;
    });
    this.params -= paramArray.length;
  }

  static unloadParams(amount) {
    this.params -= amount;
  }

  static branchGreaterThanZero(reg1, labelTrue) {
    this.pushCodeLine(`bgtz ${reg1}, ${labelTrue}`);
  }

  static jump(label) {
    this.pushCodeLine(`j ${label}`);
  }

  static dataSection(hasInput) {
    this.pushCodeLine('.data');
    this.pushCodeLine('.align 2');
    this.tabs += 1;
    this.pushCodeLine(`G: .space ${this.space}`);
    this.pushCodeLine('newline: .asciiz "\\n"');
    if (hasInput)
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
    this.params = 0;
    this.codeLines = [];
    this.mainLines = [];
    this.isMain = false;
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

  static getLastInstruction() {
    if (this.isMain)
      return this.mainLines.slice();
    return this.codeLines.slice();
  }
}
