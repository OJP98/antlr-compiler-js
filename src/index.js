import antlr4 from 'antlr4';
import 'ace-builds';
import 'ace-builds/webpack-resolver';
import './style.css';
import { MainNotDefinedError } from './classes/Error.js';
import DecafLexer from './grammar/DecafLexer.js';
import DecafParser from './grammar/DecafParser.js';
import DecafVisitor from './grammar/DecafVisitor.js';

const details = document.getElementById("details");
const returnTag = document.createElement('h2');
returnTag.innerHTML = 'output';
document.getElementById("parseButton").addEventListener("click", main);

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/c_cpp");
editor.setKeyboardHandler("ace/keyboard/vim");
editor.setAutoScrollEditorIntoView(true);
editor.setShowPrintMargin(false);
editor.commands.addCommand({
  name: "parseFile",
  bindKey: {win: "Shift-enter", mac: "Shift-enter"},
  exec: () => main()
});
editor.setFontSize(20);
editor.execCommand("showKeyboardShortcuts")

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function main() {

  console.clear();
  removeAllChildNodes(details);
  details.appendChild(returnTag)

  var errors = [];
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

  // Main program
  const mainMethod = decafVisitor.methods.find((m) => m.name == 'main');

  if (!mainMethod)
    errors.push(new MainNotDefinedError().ErrorLog);

  const symbols = decafVisitor.symbols;
  const methods = decafVisitor.methods;

  console.table(methods);
  console.table(symbols);

  // agregamos los errores al arreglo de errores
  methods.forEach((m) => m.error ? errors.push(m.Error) : '');
  symbols.forEach((s) => s.error ? errors.push(s.Error) : '');

  if (errors.length)
  {
    const error_msg = document.createElement('p');
    error_msg.style = 'color: var(--red);'
    error_msg.innerHTML = 'Errors:';
    details.appendChild(error_msg);
    let counter = 1;
    errors.forEach((err) => {
      console.error(err);
      const p = document.createElement('p');
      p.innerHTML = `${counter}. ${err}`;
      p.style = 'color: white;'
      details.appendChild(p)
      counter++;
    });
  }
  else
  {
    const p = document.createElement('p');
    p.className = 'no-errors';
    p.innerHTML = 'No errors!';
    details.appendChild(p);
    console.info('No errors found!');
  }

}