import { IdAlreadyDeclaredError } from '../classes/Error';

export default class SymbolTable {
  constructor() {
    this.symbolTable = [[]];
    this.allRegisters = [];
    this.currOffset = 0;
    this.prevOffset = 0;
    this.totalRegisters = 0;
  }

  bind(entry) {
    const currentTable = this.symbolTable.pop();
    this.allRegisters.push(entry);

    if (currentTable.find((s) => s.name === entry.name)) {
      const error = new IdAlreadyDeclaredError(entry.name, entry.line);
      entry.Error = error;
    }

    if (!entry.isStructProp) {
      this.setNewOffset(entry);
      this.setRegister(entry);
    }

    currentTable.push(entry);
    this.symbolTable.push(currentTable);
  }

  enter() {
    this.prevOffset = this.currOffset;
    this.currOffset = 0;
    this.symbolTable.push([]);
  }

  enterAndKeepOffset() {
    this.prevOffset = this.currOffset;
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
    this.currOffset = this.prevOffset;
    this.symbolTable.pop();
  }

  isFirstScope() {
    return this.symbolTable.length === 0;
  }

  setNewOffset(entry) {
    entry.Offset = this.currOffset;
    this.currOffset += entry.width;
  }

  getLastScopeSize() {
    const lastScope = this.symbolTable[this.symbolTable.length - 1];
    return lastScope.reduce((acc, curr) => curr.width + acc, 0);
  }

  setRegister(entry) {
    if (this.isFirstScope()) {
      entry.setGlobalRegister();
    } else {
      entry.setLocalRegister();
    }
    this.totalRegisters += 1;
  }
}
