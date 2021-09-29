import { DATA_TYPE } from '../enums/dataTypes';

export default class Data {
  constructor(type, name, line) {
    this.type = type;
    this.name = name;
    this.line = line;
    this.error = null;
    this.offset = null;
    this.width = null;
    this.addr = null;
    this.setWidth();
  }

  get Error() {
    return this.error ? `${this.error.details}\nAt line ${this.line}` : null;
  }

  set Error(error) {
    this.error = error;
    this.type = DATA_TYPE.ERROR;
  }

  set Offset(offset) {
    this.offset = offset;
  }

  checkForErrors() {
    return this.error || null;
  }

  setGlobalRegister() {
    this.addr = `G[${this.offset}]`;
  }

  setLocalRegister() {
    this.addr = `fp[${this.offset}]`;
  }

  setWidth() {
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
