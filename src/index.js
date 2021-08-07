import antlr4 from 'antlr4';
import { MainNotDefined, MainHasArgs } from './classes/Error.js';
import DecafLexer from './grammar/DecafLexer.js';
import DecafParser from './grammar/DecafParser.js';
import { MethodDeclaration } from './declarations/declaration.js';
import DecafVisitor from './grammar/DecafVisitor.js';
// import DecafListener from './grammar/DecafListener.js';

const customListener = false;
var errors = [];

const input = `
class Program {
  void main(int param1, int param2) {
    int my_var1;
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

const numIndex = parser.ruleNames.findIndex(r => r == 'num');
const parameterIndex = parser.ruleNames.findIndex(r => r == 'parameter');

if (customListener)
{
  const metDeclListener = new MethodDeclaration();
  metDeclListener.NUM_INDEX = numIndex;
  metDeclListener.PARAMETER_INDEX = parameterIndex;

  const tree = parser.program();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(metDeclListener, tree);

  const mainMethod = metDeclListener.methods.find((m) => m.name == 'main');
  const symbols = metDeclListener.symbols;

  console.table(metDeclListener.methods);
  console.table(symbols);

  if (!mainMethod)
    errors.push(new MainNotDefined());

  if (mainMethod && mainMethod.args.length)
    errors.push(new MainHasArgs());

  // agregamos los errores al arreglo de errores
  symbols.forEach((s) => s.error ? errors.push(s.error) : '');

  console.log(errors.length ? ('ERRORS: ', errors) : 'No errors');
}
else
{
  const tree = parser.program();
  tree.accept(new DecafVisitor());
}

// tree.accept(methods);


