import { Symbol } from '../classes/Symbol';
import { Method } from '../classes/Method';
import { Array } from '../classes/Array';
import { ArrayLengthError } from '../classes/Error.js';
import DecafListener from '../grammar/DecafListener.js';
import DecafParser from '../grammar/DecafParser.js';
import antlr4 from 'antlr4';

export class MethodDeclaration extends DecafListener {
  PARAMETER_INDEX = 0;
  NUM_INDEX = 0;
  methods = [];
  symbols = [];

  enterMethodDecl(ctx) {
    let methodType = ctx.methodType().getText();
    let methodId = ctx.id().getText();
    let methodParams = [];

    ctx.children.map(child => {
      // Create a parameter if there is one
      if (child.ruleIndex == this.PARAMETER_INDEX)
      {
        let paramType = child.parameterType().getText();
        let paramId = child.id().getText();
        methodParams.push(
          new Symbol(paramType, paramId, null)
        );
      }
    });
    this.methods.push(
      new Method(methodType, methodId, methodParams)
    );

    // Now, we should iterate through the return block
    let returnBlock = ctx.block();

    // returnBlock.children.map(child => {
    //   if (child.ruleIndex === 10)
    //   {
    //     // console.log(child.statement().getText());
    //   }
    // });
  }

  

  enterDeclarationVar(ctx) {
    let varDecl = ctx.varDeclaration();
    let varType = varDecl.varType().getText();
    let varId = varDecl.id().getText();
    let arrayLength = 0;
    let arrayError = null;
    let isArray = false;

    // Let's check if there a num in here
    varDecl.children.map(child => {
      if (child.ruleIndex == this.NUM_INDEX)
      {
        // Get the array length and check if it's not lower than 0
        arrayLength = +varDecl.num().getText();
        if (arrayLength <= 0)
          arrayError = new ArrayLengthError();
        isArray = true;
      }
    });

    if (isArray)
      this.symbols.push(
        new Array(varType, varId, arrayLength, undefined, undefined, arrayError)
      );
    else
      this.symbols.push(
        new Symbol(varType, varId)
      );
  }

}

export class Visitor extends antlr4.tree.ParseTreeVisitor {

  visitMethodDeclaration(ctx)
  {
    console.log('METHOD: ', ctx);
    return this.visitChildren(ctx);
  }

  visitChildren(ctx) {
    if (!ctx) {
      return;
    }

    if (ctx.children) {
      return ctx.children.map(child => {
        if (child.children && child.children.length != 0) {
          return child.accept(this);
        } else {
          console.log(child.getText());
          return child.getText();
        }
      });
    }
  }
}
