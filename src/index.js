import antlr4 from 'antlr4';
import { MainNotDefined, MainHasArgs } from './classes/Error.js';
import DecafLexer from './grammar/DecafLexer.js';
import DecafParser from './grammar/DecafParser.js';
import DecafVisitor from './grammar/DecafVisitor.js';

var errors = [];

const input = `
class Program {
  void main() {
    int my_var2;
    char my_char[2];
    char my_second_char[4];
    return;
  }
}
`
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
  errors.push(new MainNotDefined());

if (mainMethod && mainMethod.args.length)
  errors.push(new MainHasArgs());

const symbols = decafVisitor.symbols;
const methods = decafVisitor.methods;

console.table(decafVisitor.methods);
console.table(symbols);

// agregamos los errores al arreglo de errores
symbols.forEach((s) => s.error ? errors.push(s.error.details) : '');
methods.forEach((m) => m.error ? errors.push(m.error.details) : '');

console.log(errors.length ? ('ERRORS: ', errors) : 'No errors');

