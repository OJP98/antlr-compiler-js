import Data from './Data';
import { ArrayLengthError, ArrayLengthNotIntError } from './Error';

export default class Array extends Data {
  constructor(type, name, length, line, column, value, signature) {
    super(type, name, signature, line, column);
    this.value = value;
    this.length = +length;
    this.error = this.checkForErrors();
  }

  checkForErrors() {
    if (!Number.isInteger(this.length))
      return new ArrayLengthNotIntError();

    if (this.length <= 0)
      return new ArrayLengthError();

    return null;
  }
}
