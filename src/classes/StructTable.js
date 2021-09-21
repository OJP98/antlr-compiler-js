import { IdAlreadyDeclaredError } from './Error';

export default class MethodTable {
  constructor() {
    this.structTable = [];
  }

  bind(entry) {
    if (this.structTable.find((m) => m.name === entry.name)) {
      const error = new IdAlreadyDeclaredError(entry.name, entry.line);
      entry.Error = error;
      return error;
    }
    this.structTable.push(entry);
    return null;
  }

  lookup(structId) {
    return this.structTable.find((struct) => struct.name === structId);
  }
}
