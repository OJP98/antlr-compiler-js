// eslint-disable-next-line import/no-cycle
import Method from './Method';

export default class Data {
  constructor(type, name, signature, line = null, column = null) {
    this.type = type;
    this.name = name;
    this.signature = signature || null;
    this.error = null;
    this.line = line;
    this.column = column;
  }

  get Error() {
    return this.error ? `${this.error.name}: ${this.error.details}\nAt line ${this.line}` : null;
  }

  set Error(error) {
    this.error = error;
  }

  isMethod() {
    return this instanceof Method;
  }
}
