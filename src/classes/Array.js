import { Data } from "./Data";

export class Array extends Data {
  constructor(type, name, length, value, signature, error) {
    super(type, name, signature, error);
    this.length = length;
    this.value = value;
  }
}