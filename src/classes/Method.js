// eslint-disable-next-line import/no-cycle
import Data from './Data';
import { MethodReturnTypeError, MainHasArgsError } from './Error';
import { DATA_TYPE } from '../enums/dataTypes';

export default class Method extends Data {
  constructor(type, name, line, column) {
    super(type, name, line, column);
    this.args = [];
    this.returnType = null;
  }

  set ReturnType(returnType) {
    this.returnType = returnType;
    this.error = this.checkForErrors();
  }

  checkForErrors() {
    if (this.error)
      return this.error;

    if (this.returnType && this.type === DATA_TYPE.VOID && this.returnType !== DATA_TYPE.VOID)
      return new MethodReturnTypeError(this.line, this.column);

    if (this.name === 'main' && this.args.length)
      return new MainHasArgsError();

    return null;
  }
}
