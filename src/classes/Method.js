import { Data } from "./Data";

export class Method extends Data {
  constructor(type, name, args, returnType, signature, error) {
    super(type, name, signature, error);
    this.args = args;
    this.returnType = returnType || undefined;
  }
}