import antlr4 from 'antlr4';
import { MainNotDefined, MainHasArgs } from './classes/Error.js';
import DecafLexer from './grammar/DecafLexer.js';
import DecafParser from './grammar/DecafParser.js';
import { MethodDeclaration, Visitor } from './declarations/declaration.js';
// import DecafListener from './grammar/DecafListener.js';
// import DecafVisitor from './grammar/DecafVisitor.js';

var errors = [];

const input = `
class Program {
  int global1;
  char global2;
  int arr[0];

  int iniciar_variables(int var1, int var2) {
    global1 = 1;
    return global1;
  }

    void main() {
    int my_var1;
    my_var = iniciar_variables();
  }
}
`
const chars = new antlr4.InputStream(input);
const lexer = new DecafLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new DecafParser(tokens);
parser.buildParseTrees = true;

console.log(parser.ruleNames);

const numIndex = parser.ruleNames.findIndex(r => r == 'num');
const parameterIndex = parser.ruleNames.findIndex(r => r == 'parameter');

const metDeclVisitor = new MethodDeclaration();
metDeclVisitor.NUM_INDEX = numIndex;
metDeclVisitor.PARAMETER_INDEX = parameterIndex;

const tree = parser.program();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(metDeclVisitor, tree);

const mainMethod = metDeclVisitor.methods.find((m) => m.name == 'main');
const symbols = metDeclVisitor.symbols;

console.table(metDeclVisitor.methods);
console.table(symbols);

if (!mainMethod)
  errors.push(new MainNotDefined());

if (mainMethod && mainMethod.args.length)
  errors.push(new MainHasArgs());

// agregamos los errores al arreglo de errores
symbols.forEach((s) => s.error ? errors.push(s.error) : '');

console.log(errors.length ? ('ERRORS: ', errors) : 'No errors');
// tree.accept(methods);


