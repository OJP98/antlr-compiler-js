import antlr4 from 'antlr4'

export default class ConsoleErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
    this.syntaxErrors = [];
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    const errorMsg = `line ${line}:${column} ${msg}`;
    this.syntaxErrors.push(errorMsg);
    console.error(errorMsg);
  }

  clearSyntaxErrors() {
    this.syntaxErrors = [];
  }
}