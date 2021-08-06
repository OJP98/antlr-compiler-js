import { Data } from "./Data";

export class Struct extends Data {
  constructor(type, name, properties = [], signature, error) {
    super(type, name, signature, error);
    this.properties = properties;
  }
}