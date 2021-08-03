import antlr4 from 'antlr4';
import DecafLexer from './grammar/DecafLexer.js';
import DecafParser from './grammar/DecafParser.js';
import DecafListener from './grammar/DecafListener.js';

const input = "class Program { char var1; int var2; int var3; }"
const chars = new antlr4.InputStream(input);
const lexer = new DecafLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new DecafParser(tokens);
parser.buildParseTrees = true;

const tree = parser.program();
const printer = new ProgramPrinter();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);

class Visitor {
  visitChildren(ctx) {
    if (!ctx) {
      return;
    }

    if (ctx.children) {
      return ctx.children.map(child => {
        if (child.children && child.children.length != 0) {
          return child.accept(this);
        } else {
          return child.getText();
        }
      });
    }
  }
}

tree.accept(new Visitor());

class ProgramPrinter extends DecafListener {
    // override default listener behavior
    exitId(ctx) {
      if (ctx.children) {
        return ctx.children.map((child) => {
          if (child.children && child.children.length != 0) {
            return child.accept(this);
          } else {
            const text = child.getText();
            console.log(text);
            return text;
          }
        });
      }
    }
}