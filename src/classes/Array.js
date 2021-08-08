import { Data } from "./Data";
import {ArrayLengthError, ArrayLengthNotIntError} from "./Error";

export class Array extends Data {
  constructor(type, name, length, value, signature) {
    super(type, name, signature);
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
