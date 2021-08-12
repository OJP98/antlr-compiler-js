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
      entry.Error = new IdAlreadyDeclaredError(entry.name);
      return;
    }

    table.push(entry);
    this.symbolTable.push(table);
    console.log('Bind', entry);
    console.table(this.symbolTable);
  }

  enter() {
    this.symbolTable.push([]);
    console.log('New entry');
  }

  empty() {
    this.symbolTable = [];
  }

  lookup(symbolId) {
    const allSymbols = this.symbolTable.flat();
    const symbol = allSymbols.find((s) => s.name === symbolId);
    return symbol || undefined;
  }

  exit() {
    console.log('Exit');
    this.symbolTable.pop();
  }
}
