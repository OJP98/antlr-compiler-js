import { MethodAlreadyDeclaredError } from '../classes/Error';

export default class MethodTable {
  constructor() {
    this.methodTable = [];
  }

  bind(entry) {
    if (this.methodTable.find((m) => m.name === entry.name)) {
      const error = new MethodAlreadyDeclaredError(entry.name, entry.line);
      entry.Error = error;
    }
    this.methodTable.push(entry);
  }

  lookup(methodId) {
    return this.methodTable.find((method) => method.name === methodId);
  }
}
