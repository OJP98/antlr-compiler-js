import { DATA_TYPE } from "../enums/dataTypes";

export default class Data {
  constructor(type, name, line, column) {
    this.type = type;
    this.name = name;
    this.line = line;
    this.column = column;
    this.error = null;
  }

  get Error() {
    return this.error ? `${this.error.details}\nAt line ${this.line}` : null;
  }

  set Error(error) {
    this.error = error;
    this.type = DATA_TYPE.ERROR;
  }

  checkForErrors() {
    return this.error || null;
  }
}
