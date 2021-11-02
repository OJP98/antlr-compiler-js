import {
  MethodReturnTypeError,
  MainHasArgsError,
} from './Error';
import { DATA_TYPE } from '../enums/dataTypes';

export default class Method {
  constructor(type, name, line) {
    this.type = type;
    this.name = name;
    this.line = line;
    this.args = [];
    this.returnType = null;
    this.size = 0;
  }

  set ReturnType(returnType) {
    this.returnType = returnType === DATA_TYPE.NONE ? DATA_TYPE.VOID : returnType;
    const error = this.checkForErrors();
    // TODO: This was "this.Error", but needed to change it because of error repetition;
    if (error)
      this.error = error;
  }

  set Error(error) {
    this.error = error;
    this.type = DATA_TYPE.ERROR;
  }

  checkForErrors() {
    if (this.error)
      return this.error;

    if (this.returnType && this.type !== this.returnType)
      return new MethodReturnTypeError(this.name, this.type, this.returnType, this.line);

    if (this.name === 'main' && this.args.length)
      return new MainHasArgsError();

    return null;
  }
}
