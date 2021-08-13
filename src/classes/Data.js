export default class Data {
  constructor(type, name, line, column, signature = null) {
    this.type = type;
    this.name = name;
    this.line = line;
    this.column = column;
    this.signature = signature;
    this.error = null;
  }

  get Error() {
    return this.error ? `${this.error.details}\nAt line ${this.line}` : null;
  }

  set Error(error) {
    this.error = error;
  }

  checkForErrors() {
    return this.error || null;
  }
}
