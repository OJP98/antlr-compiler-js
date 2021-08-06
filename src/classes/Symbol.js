import { Data } from "./Data";

export class Symbol extends Data {
  constructor(type, name, value, signature, error) {
    super(type, name, signature, error);
    this.value = value;
  }
}