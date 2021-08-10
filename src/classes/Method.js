import { Data } from "./Data";
import { MethodReturnTypeError, MainHasArgsError } from './Error';
import { DATA_TYPE } from "../enums/dataTypes";


export class Method extends Data {
  constructor(type, name, args, returnType, line, column, signature) {
    super(type, name, signature, line, column);
    this.args = args;
    this.returnType = returnType || undefined;
    this.error = this.checkForErrors();
  }

  checkForErrors() {
    if (this.type === DATA_TYPE.VOID && this.returnType !== DATA_TYPE.VOID)
      return new MethodReturnTypeError();

    if (this.name === 'main' && this.args.length)
      return new MainHasArgsError();


    return null;
  }
}
