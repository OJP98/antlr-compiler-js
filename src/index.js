/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import './style.css';
import 'ace-builds';
import 'ace-builds/webpack-resolver';
import antlr4 from 'antlr4';
import ConsoleErrorListener from './grammar/ErrorListener';
import DecafLexer from './grammar/DecafLexer';
import DecafParser from './grammar/DecafParser';
import DecafVisitor from './grammar/DecafVisitor';
import IntermediateCode from './classes/IntermediateCode';
import Temp from './classes/Temp';
import dragDrop from './js/dragDrop';
import editor from './js/aceConfig';
import { MainNotDefinedError } from './classes/Error';
import assignFunctionToButtons,
{ assignCodeToTab, renderErrors } from './js/ui';

dragDrop();
assignFunctionToButtons();
editor.commands.addCommand({
  name: 'parseFile',
  bindKey: { win: 'Ctrl-enter', mac: 'Command-enter' },
  exec: () => main(),
});

const errorListener = new ConsoleErrorListener();
let errors = [];
document.getElementById('parseButton').addEventListener('click', main);

function main() {
  errors = [];
  Temp.Reset();
  IntermediateCode.Initialize();
  errorListener.clearSyntaxErrors();
  console.clear();

  const input = editor.getValue();

  const chars = new antlr4.InputStream(input);
  const lexer = new DecafLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new DecafParser(tokens);
  parser.buildParseTrees = true;
  parser.removeErrorListeners();
  parser.addErrorListener(errorListener);

  const tree = parser.program();

  if (errorListener.syntaxErrors.length) {
    errorListener.syntaxErrors.forEach((e) => errors.push(e));
  } else {
    const decafVisitor = new DecafVisitor();
    tree.accept(decafVisitor);

    const symbols = decafVisitor.symbolTable.allRegisters;
    const methods = decafVisitor.methodTable.methodTable;
    const visitorErrors = decafVisitor.errors;
    console.log(visitorErrors);

    // Main program
    const mainMethod = methods.find((m) => m.name === 'main');

    if (!mainMethod)
      errors.push(new MainNotDefinedError().ErrorLog);

    console.table(symbols);
    // console.table(methods);
    visitorErrors.forEach((e) => errors.push(e.ErrorLog));
  }

  renderErrors(errors);

  if (errors.length)
    IntermediateCode.Initialize();

  assignCodeToTab(IntermediateCode.CodeLines, 'intermediatecode');
  console.table(IntermediateCode.TacList);
}
