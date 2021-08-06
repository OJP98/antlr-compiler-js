import { Data } from "./Data";

export class Method extends Data {
  constructor(type, name, args, returnType, signature, errors) {
    super(type, name, signature, errors);
    this.args = args;
    this.returnType = returnType;
  }
}