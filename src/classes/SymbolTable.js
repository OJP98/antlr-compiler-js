import { IdAlreadyDeclaredError } from './Error';

export default class SymbolTable {
  constructor() {
    this.symbolTable = [[]];
    this.allRegisters = [];
  }

  bind(entry) {
    const table = this.symbolTable.pop();
    this.allRegisters.push(entry);

    if (table.find((s) => s.name === entry.name)) {
      const error = new IdAlreadyDeclaredError(entry.name, entry.line, entry.column);
      entry.Error = error;
      table.push(entry);
      this.symbolTable.push(table);
      return error;
    }

    table.push(entry);
    this.symbolTable.push(table);
    // console.log(this.symbolTable);
    // console.log('Bind', entry);
    return null;
  }

  enter() {
    this.symbolTable.push([]);
    // console.log('New entry');
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
    // console.log('Exit');
    this.symbolTable.pop();
  }
}
