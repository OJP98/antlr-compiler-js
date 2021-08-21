import Data from './Data';
import Symbol from './Symbol';
import {
  ArrayLengthError,
  UndeclaredStructError,
  InvalidPropertyError,
} from './Error';
import { DATA_TYPE } from '../enums/dataTypes';

export default class Struct extends Data {
  constructor(type, name, line, column, structDecl = null, structId, length = null) {
    super(type, name, line, column);
    this.structDecl = structDecl;
    this.structId = structId;
    this.length = length;
    this.error = this.checkForErrors();
  }

  set StructId(structDecl) {
    this.structDecl = structDecl;
  }

  checkForErrors() {
    if (this.error)
      return this.error;

    if (this.length !== null && this.length <= 0)
      return new ArrayLengthError(this.name, this.line);

    if (!this.structDecl)
      return new UndeclaredStructError(this.structId, this.line);

    return null;
  }

  getProperty(prop, line) {
    const structProp = this.structDecl.properties.find((p) => p.name === prop);

    if (!structProp) {
      const errorProp = new Symbol(DATA_TYPE.ERROR, prop);
      errorProp.error = new InvalidPropertyError(this.name, prop, line);
      return errorProp;
    }

    return structProp;
  }
}
