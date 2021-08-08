import { Data } from "./Data";
import { MethodReturnTypeError } from './Error';
import { DATA_TYPE } from "../enums/dataTypes";


export class Method extends Data {
  constructor(type, name, args, returnType, signature) {
    super(type, name, signature);
    this.args = args;
    this.returnType = returnType || undefined;
    this.error = this.checkForErrors();
  }

  checkForErrors() {
    if (this.type === DATA_TYPE.VOID &&  this.returnType !== DATA_TYPE.VOID)
      return new MethodReturnTypeError();

    return null;
  }
}
