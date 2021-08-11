import { Method } from "./Method";

export class Data
{
  constructor(type, name, signature, line = null, column = null) {
    this.type = type;
    this.name = name;
    this.signature = signature || null;
    this.error = null;
    this.line = line;
    this.column = column;
  }

  get Error() {
    if (!this.error)
      return;

    return `${this.error.name}: ${this.error.details}\nAt line ${this.line}`;
  }

  isMethod() {
    return this instanceof Method;
  }
}