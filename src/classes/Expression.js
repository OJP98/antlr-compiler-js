export default class Expression {
  constructor(type, line) {
    this.type = type;
    this.line = line;
    this.code = '';
  }

  static get Code() {
    return ' = ';
  }
}
