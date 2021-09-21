import { IdAlreadyDeclaredError } from './Error';

export default class SymbolTable {
  constructor() {
    this.symbolTable = [[]];
    this.allRegisters = [];
  }

  bind(entry) {
    const currentTable = this.symbolTable.pop();
    this.allRegisters.push(entry);

    if (currentTable.find((s) => s.name === entry.name)) {
      const error = new IdAlreadyDeclaredError(entry.name, entry.line);
      entry.Error = error;
      currentTable.push(entry);
      this.symbolTable.push(currentTable);
      return error;
    }

    currentTable.push(entry);
    this.symbolTable.push(currentTable);
    return null;
  }

  enter() {
    this.symbolTable.push([]);
  }

  empty() {
    this.symbolTable = [];
  }

  lookup(symbolId) {
    const symbolTableCopy = this.symbolTable.slice();

    while (symbolTableCopy.length) {
      const currTable = symbolTableCopy.pop();
      const found = currTable.find((symbol) => symbol.name === symbolId);
      if (found)
        return found;
    }
    return null;
  }

  exit() {
    this.symbolTable.pop();
  }
}
