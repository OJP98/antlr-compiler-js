import { Data } from "./Data";

export class Symbol extends Data {
  constructor(type, name, signature, errors, value) {
    super(type, name, signature, errors);
    this.value = value;
  }
}