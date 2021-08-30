/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import antlr4 from 'antlr4';
import 'ace-builds';
import 'ace-builds/webpack-resolver';
import './style.css';
import { MainNotDefinedError } from './classes/Error';
import DecafLexer from './grammar/DecafLexer';
import DecafParser from './grammar/DecafParser';
import DecafVisitor from './grammar/DecafVisitor';

const details = document.getElementById('details');
const returnTag = document.createElement('h2');
returnTag.innerHTML = 'output';
document.getElementById('parseButton').addEventListener('click', main);

const editor = ace.edit('editor');
editor.setTheme('ace/theme/monokai');
editor.session.setMode('ace/mode/c_cpp');
editor.setKeyboardHandler('ace/keyboard/vim');
editor.setAutoScrollEditorIntoView(true);
editor.setShowPrintMargin(false);
editor.commands.addCommand({
  name: 'parseFile',
  bindKey: { win: 'Shift-enter', mac: 'Shift-enter' },
  exec: () => main(),
});
editor.setFontSize(20);
editor.execCommand('showKeyboardShortcuts');

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function main() {
  const errors = [];
  console.clear();
  removeAllChildNodes(details);
  details.appendChild(returnTag);

  const input = editor.getValue();

  const chars = new antlr4.InputStream(input);
  const lexer = new DecafLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new DecafParser(tokens);
  parser.buildParseTrees = true;

  console.log(parser.ruleNames);

  const tree = parser.program();
  const decafVisitor = new DecafVisitor();
  tree.accept(decafVisitor);

  const symbols = decafVisitor.symbolTable.allRegisters;
  const visitorErrors = decafVisitor.errors;

  // Main program
  const mainMethod = symbols.find((m) => m.name === 'main');

  if (!mainMethod)
    errors.push(new MainNotDefinedError().ErrorLog);

  console.table(symbols);

  visitorErrors.forEach((e) => errors.push(e.ErrorLog));
  // visitorErrors.forEach((e) => console.log(e));
  errors.concat(decafVisitor.errors);

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
