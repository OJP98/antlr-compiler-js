/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import antlr4 from 'antlr4';
import './style.css';
import { MainNotDefinedError } from './classes/Error';
import DecafLexer from './grammar/DecafLexer';
import DecafParser from './grammar/DecafParser';
import DecafVisitor from './grammar/DecafVisitor';
import ConsoleErrorListener from './grammar/ErrorListener';
import 'ace-builds';
import 'ace-builds/webpack-resolver';
import dragDrop from './js/dragDrop';
import editor from './js/aceConfig';
import Temp from './classes/Temp';

dragDrop();
editor.commands.addCommand({
  name: 'parseFile',
  bindKey: { win: 'Ctrl-enter', mac: 'Command-enter' },
  exec: () => main(),
});

const details = document.getElementById('typecheck');
const returnTag = document.createElement('h2');
const errorListener = new ConsoleErrorListener();
let errors = [];
returnTag.innerHTML = 'output';
document.getElementById('parseButton').addEventListener('click', main);

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function renderErrors() {
  if (errors.length) {
    const errorMsg = document.createElement('p');
    errorMsg.style = 'color: var(--red);';
    errorMsg.innerHTML = 'Errors:';
    details.appendChild(errorMsg);
    let counter = 1;
    errors.forEach((err) => {
      console.error(err);
      const p = document.createElement('p');
      p.innerHTML = `${counter}. ${err}`;
      p.style = 'color: white;';
      details.appendChild(p);
      counter += 1;
    });
  } else {
    const p = document.createElement('p');
    p.className = 'no-errors';
    p.innerHTML = 'No errors!';
    details.appendChild(p);
    console.info('No errors found!');
  }
}

function main() {
  errors = [];
  Temp.Reset();
  errorListener.clearSyntaxErrors();
  console.clear();
  removeAllChildNodes(details);
  details.appendChild(returnTag);

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
    console.table(methods);
    visitorErrors.forEach((e) => errors.push(e.ErrorLog));
  }
  renderErrors();
}
