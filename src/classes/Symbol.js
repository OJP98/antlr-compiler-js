import { Data } from "./Data";

export class Symbol extends Data {
  constructor(type, name, line, column, value, signature) {
    super(type, name, signature, line, column);
    this.value = value;
  }
}
