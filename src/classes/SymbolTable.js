import { IdAlreadyDeclaredError } from "./Error";

export class SymbolTable {
  constructor() {
    this.symbolTable = [[]];
    this.allRegisters = [];
  }

  bind(entry) {
    const table = this.symbolTable.pop();
    this.allRegisters.push(entry);

    if (table.find((s) => s.name === entry.name)) {
      entry.error = new IdAlreadyDeclaredError()
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
    this.symbolTable = new Array();
  }

  lookup(symbol) {
    // return the symbol if exists
  }

  exit() {
    console.log('Exit');
    this.symbolTable.pop();
  }

}
