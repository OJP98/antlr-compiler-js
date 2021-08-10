import antlr4 from 'antlr4';
import 'ace-builds';
import 'ace-builds/webpack-resolver';
import { MainNotDefinedError } from './classes/Error.js';
import DecafLexer from './grammar/DecafLexer.js';
import DecafParser from './grammar/DecafParser.js';
import DecafVisitor from './grammar/DecafVisitor.js';

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/c_cpp");
editor.setKeyboardHandler("ace/keyboard/vim");
editor.setAutoScrollEditorIntoView(true);
editor.commands.addCommand({
  name: "parseFile",
  bindKey: {win: "Shift-enter", mac: "Shift-enter"},
  exec: () => main()
});
editor.execCommand("showKeyboardShortcuts")


document.getElementById("parseButton").addEventListener("click", main);

function main() {
  console.clear();
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
    errors.forEach((err) => console.error(err));
  else
    console.info('No errors found!');

}