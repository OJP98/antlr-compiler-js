import { MethodAlreadyDeclaredError } from './Error';

export default class MethodTable {
  constructor() {
    this.methodTable = [];
  }

  bind(entry) {
    if (this.methodTable.find((m) => m.name === entry.name)) {
      const error = new MethodAlreadyDeclaredError(entry.name, entry.line);
      entry.Error = error;
      return error;
    }
    this.methodTable.push(entry);
    return null;
  }

  lookup(methodId) {
    return this.methodTable.find((method) => method.name === methodId);
  }
}
