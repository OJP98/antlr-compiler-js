import Data from './Data';
import { UndeclaredStructError } from './Error';

export default class Struct extends Data {
  constructor(type, name, line, column, structDecl = null, structId, signature) {
    super(type, name, line, column, signature);
    this.structDecl = structDecl;
    this.structId = structId;
    this.error = this.checkForErrors();
  }

  set StructId(structDecl) {
    this.structDecl = structDecl;
  }

  checkForErrors() {
    if (this.error)
      return this.error;

    if (!this.structDecl)
      return new UndeclaredStructError(this.structId, this.line);

    return null;
  }

  getProperty(prop) {
    return this.structDecl.properties.find((p) => p.name === prop);
  }
}
