import Data from './Data';
import { ArrayLengthError, ArrayLengthNotIntError } from './Error';

export default class Array extends Data {
  constructor(type, name, length, line, value) {
    super(type, name, line);
    this.typeWidth = this.width;
    this.value = value;
    this.length = +length;
    this.error = this.checkForErrors();
    this.width *= this.length;
  }

  get TypeWidth() {
    return this.typeWidth;
  }

  checkForErrors() {
    if (!Number.isInteger(this.length))
      return new ArrayLengthNotIntError(this.name, this.line, this.column);

    if (this.length <= 0)
      return new ArrayLengthError(this.name, this.line, this.column);

    return null;
  }
}
