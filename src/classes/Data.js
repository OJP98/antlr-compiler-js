import { DATA_TYPE } from '../enums/dataTypes';

export default class Data {
  constructor(type, name, line) {
    this.type = type;
    this.name = name;
    this.line = line;
    this.error = null;
    this.setWidth();
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

  setWidth() {
    this.width = 0;
    if (this.type === DATA_TYPE.INT)
      this.width = 4;

    else if (this.type === DATA_TYPE.BOOLEAN)
      this.width = 2;

    else if (this.type === DATA_TYPE.CHAR)
      this.width = 4;
  }

  get Width() {
    return this.width;
  }
}
