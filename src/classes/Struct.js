import { Data } from "./Data";

export class Struct extends Data {
  constructor(type, name, properties = [], signature, errors) {
    super(type, name, signature, errors);
    this.properties = properties;
  }
}