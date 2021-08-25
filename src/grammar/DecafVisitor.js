//
// Generated from ./src/grammar/Decaf.g4 by ANTLR 4.9.2
// jshint ignore: start
import Array from '../classes/Array';
import Method from '../classes/Method';
import Struct from '../classes/Struct';
import StructDeclaration from '../classes/StructDeclaration';
import Symbol from '../classes/Symbol';
import SymbolTable from '../classes/SymbolTable';
import antlr4 from 'antlr4';
import { DATA_TYPE, BOOLEAN_TYPE } from '../enums/dataTypes';
import {
  InvalidAssignmentError,
  InvalidExpressionTypeError,
  InvalidMethodCallError,
  UndeclaredIdError,
  UndeclaredMethodError,
  UndeclaredStructError
} from '../classes/Error';
import getOperationResult from '../js/operations';
import compareArrays from '../js/utils';

// This class defines a complete generic visitor for a parse tree produced by DecafParser.

export default class DecafVisitor extends antlr4.tree.ParseTreeVisitor {

  symbolTable = new SymbolTable();

  methods = [];
  symbols = [];
  errors = [];

  // Visit a parse tree produced by DecafParser#programInit.
  visitProgramInit(ctx) {
    const res = this.visitChildren(ctx);
    return res;
  }


  // Visit a parse tree produced by DecafParser#declarationStruct.
  visitDeclarationStruct(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#declarationVar.
  visitDeclarationVar(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#declarationMethod.
  visitDeclarationMethod(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#varDecl.
  visitVarDecl(ctx) {
    const varType = this.visit(ctx.varType());
    const varId = this.visit(ctx.id());
    const startLine = ctx.start.line;
    const startCol = ctx.start.column;
    const { structId, type } = varType;
    let symbol = null;
    
    if (structId) {
       const structDecl = this.symbolTable.lookup(structId);
       symbol = new Struct(
         type, varId, startLine, startCol, structDecl, structId
       );
    } else {
      symbol = new Symbol(
        type, varId, ctx.start.line, ctx.start.column
      );
    }

    this.symbolTable.bind(symbol);

    if (symbol.error)
      this.errors.push(symbol.error);

    return symbol;
  }


  // Visit a parse tree produced by DecafParser#arrDecl.
  visitArrDecl(ctx) {
    const varType = this.visit(ctx.varType());
    const varId = this.visit(ctx.id());
    const num = this.visit(ctx.num());
    const startLine = ctx.start.line;
    const startCol = ctx.start.column;
    const { structId, type } = varType;
    let symbol = null;
    
    if (structId) {
       const structDecl = this.symbolTable.lookup(structId);
       symbol = new Struct(
         type, varId, startLine, startCol, structDecl, structId, num
       );
    } else {
      symbol = new Array(
        varType, varId, num, startLine, startCol
      );
    }

    this.symbolTable.bind(symbol);

    if (symbol.error)
      this.errors.push(symbol.error);

    return symbol;
  }


  // Visit a parse tree produced by DecafParser#structDecl.
  visitStructDecl(ctx) {
    const type = DATA_TYPE.STRUCT_DECL;
    const id = this.visit(ctx.id());
    const properties = ctx.varDeclaration();
    const props = [];

    const struct = new StructDeclaration(
      type, id, ctx.start.line, ctx.start.column
    );

    // Add the struct to the current scope and create a new one
    this.symbolTable.bind(struct);
    this.symbolTable.enter();

    // Go through each var declaration, don't forget visitVarDecl
    // Already adds the variables to the symbols table
    properties.forEach(varDecl => props.push(
      this.visit(varDecl))
    );
    struct.properties = props;

    if (struct.error)
      this.errors.push(struct.error)

    this.symbolTable.exit();
    return struct;
  }


  // Visit a parse tree produced by DecafParser#intVar.
  visitIntVar() {
    return { structId: null, type: DATA_TYPE.INT };
  }


  // Visit a parse tree produced by DecafParser#charVar.
  visitCharVar() {
    return { structId: null, type: DATA_TYPE.CHAR };
  }


  // Visit a parse tree produced by DecafParser#booleanVar.
  visitBooleanVar() {
    return { structId: null, type: DATA_TYPE.BOOLEAN };
  }


  // Visit a parse tree produced by DecafParser#structVar.
  visitStructVar(ctx) {
    const structId = this.visit(ctx.id());
    return { structId, type: DATA_TYPE.STRUCT };
  }


  // Visit a parse tree produced by DecafParser#structDeclarationVar.
  visitStructDeclarationVar(ctx) {
    return { structId: null, type: this.visitChildren(ctx) };
  }


  // Visit a parse tree produced by DecafParser#voidVar.
  visitVoidVar() {
    return { structId: null, type: DATA_TYPE.VOID };
  }


  // Visit a parse tree produced by DecafParser#methodDecl.
  visitMethodDecl(ctx) {
    // Get the method type and id
    const methodType = this.visit(ctx.methodType());
    const methodId = this.visit(ctx.id());
    const params = ctx.parameter();

    const method = new Method(
      methodType, methodId, ctx.start.line, ctx.start.column
    );
    this.symbolTable.bind(method);

    // Create a new symbol table entry
    this.symbolTable.enter();

    // Get and push the parameters to the symbol table
    const parameters = params.reduce((acc, curr) => {
      const param = this.visit(curr);
      acc.push(param);
      return acc;
    }, []);
    // Assign the parameters to the created method
    method.args = parameters;

    // Visit block and assign it's return type to the method
    const blockReturn = this.visit(ctx.block());
    method.ReturnType = blockReturn.type;
    console.log(method);

    // Finally, check for any errors and push them if exist
    if (method.error)
      this.errors.push(method.error)

    // Exit the newly created symbol table
    this.symbolTable.exit();
    return method;
  }


  // Visit a parse tree produced by DecafParser#intMethod.
  visitIntMethod() {
    return DATA_TYPE.INT;
  }


  // Visit a parse tree produced by DecafParser#charMethod.
  visitCharMethod() {
    return DATA_TYPE.CHAR;
  }


  // Visit a parse tree produced by DecafParser#booleanMethod.
  visitBooleanMethod() {
    return DATA_TYPE.BOOLEAN;
  }


  // Visit a parse tree produced by DecafParser#voidMethod.
  visitVoidMethod() {
    return DATA_TYPE.VOID;
  }


  // Visit a parse tree produced by DecafParser#idParam.
  visitIdParam(ctx) {
    const type = this.visit(ctx.parameterType())
    const name = this.visit(ctx.id())
    const symbol = new Symbol(
      type, name, ctx.start.line, ctx.start.column
    );

    const bindError = this.symbolTable.bind(symbol);
    if (bindError)
      this.errors.push(bindError);

    return symbol;
  }


  // Visit a parse tree produced by DecafParser#idArrParam.
  visitIdArrParam(ctx) {
    this.visitIdParam(ctx);
  }


  // Visit a parse tree produced by DecafParser#voidParam.
  visitVoidParam() {
    return DATA_TYPE.VOID;
  }


  // Visit a parse tree produced by DecafParser#intParam.
  visitIntParam() {
    return DATA_TYPE.INT;
  }


  // Visit a parse tree produced by DecafParser#charParam.
  visitCharParam() {
    return DATA_TYPE.CHAR;
  }


  // Visit a parse tree produced by DecafParser#booleanParam.
  visitBooleanParam() {
    return DATA_TYPE.BOOLEAN;
  }


  // Visit a parse tree produced by DecafParser#blockDecl.
  visitBlockDecl(ctx) {
    const varDeclarations = ctx.varDeclaration();
    const statements = ctx.statement();
    let returnTypes = [];

    // Execute every var declaration without waiting for a response.
    // The visitVarDecl already adds each var to its symbol table.
    varDeclarations.forEach(varDecl => this.visit(varDecl));

    // Get every statement
    statements.forEach(stmt => {
      const returnType = this.visit(stmt);
      returnTypes.push(returnType);
    });

    // TODO: Get the current method return type in the scope ir order to compare
    // if every other expression returns that same return type

    // TODO: We'll have to check each return type if theres more then one
    // console.log(returnTypes);

    return returnTypes[0];
  }


  // Visit a parse tree produced by DecafParser#ifStmt.
  visitIfStmt(ctx) {
    const expression = this.visit(ctx.expression());
    const block = this.visit(ctx.block());

    if (expression.type !== DATA_TYPE.BOOLEAN) {
      const expressionError = new InvalidExpressionTypeError('if', ctx.start.line);
      this.errors.push(expressionError);
      return DATA_TYPE.ERROR;
    }

    return DATA_TYPE.VOID;
  }


  // Visit a parse tree produced by DecafParser#ifElseStmt.
  visitIfElseStmt(ctx) {
    const expression = this.visit(ctx.expression());
    const [block1, block2] = this.visit(ctx.block());

    if (expression.type !== DATA_TYPE.BOOLEAN) {
      const expressionError = new InvalidExpressionTypeError('if', ctx.start.line);
      this.errors.push(expressionError);
      return DATA_TYPE.ERROR;
    }

    return DATA_TYPE.VOID;
  }


  // Visit a parse tree produced by DecafParser#whileStmt.
  visitWhileStmt(ctx) {
    const expression = this.visit(ctx.expression());
    const block = this.visit(ctx.block());

    if (expression.type !== DATA_TYPE.BOOLEAN) {
      const expressionError = new InvalidExpressionTypeError('while', ctx.start.line);
      this.errors.push(expressionError);
      return DATA_TYPE.ERROR;
    }

    return DATA_TYPE.VOID;
  }


  // Visit a parse tree produced by DecafParser#returnExprStmt.
  visitReturnExprStmt(ctx) {
    const expression = this.visit(ctx.expression());

    if (expression.type === DATA_TYPE.ERROR)
      this.errors.push(expression.error);

    return expression;
  }


  // Visit a parse tree produced by DecafParser#returnVoidStmt.
  visitReturnVoidStmt() {
    return new Symbol(DATA_TYPE.VOID, 'voidReturn');
  }


  // Visit a parse tree produced by DecafParser#methodStmt.
  visitMethodStmt(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#blockStmt.
  visitBlockStmt(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#assignmentStmt.
  visitAssignmentStmt(ctx) {
    const symbol = this.visit(ctx.location());
    const expr = this.visit(ctx.expression());

    if (symbol.error || expr.error)
      return DATA_TYPE.ERROR;
    

    // Are both sides of the assignment of the same type?
    if (symbol.type !== expr.type) {
      const assignmentError = new InvalidAssignmentError(
        symbol.name, symbol.type, expr.type, ctx.start.line
      );
      symbol.error = assignmentError;
      this.errors.push(assignmentError);
    }

    return symbol;
  }


  // Visit a parse tree produced by DecafParser#expressionStmt.
  visitExpressionStmt(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#idLocation.
  visitIdLocation(ctx) {
    const id = this.visit(ctx.id());
    let symbol = this.symbolTable.lookup(id);

    if (!symbol) {
      const error = new UndeclaredIdError(id, ctx.parentCtx.start.line);
      symbol = new Symbol(DATA_TYPE.ERROR, id);
      symbol.error = error;
    }

    return symbol;
  }


  // Visit a parse tree produced by DecafParser#arrLocation.
  visitArrLocation(ctx) {
    const symbol = this.visitIdLocation(ctx);

    // Does the symbol contain an error?
    if (symbol.type === DATA_TYPE.ERROR)
      return symbol;
    
    // TODO: check ir expr return type is an integer value
    const expr = this.visit(ctx.expression());

    return symbol;
  }


  // Visit a parse tree produced by DecafParser#idDotLocation.
  visitIdDotLocation(ctx) {
    const struct = this.visitIdLocation(ctx);
    const location = this.visit(ctx.location());

    // Does the struct id exists?
    if (struct.type === DATA_TYPE.ERROR) {
      this.errors.push(struct.error);
      return struct;
    }

    // Is the symbol a struct?
    if (struct.type !== DATA_TYPE.STRUCT) {
      const structError = new UndeclaredStructError(struct.name, ctx.parentCtx.start.line);
      struct.error = structError;
      this.errors.push(structError);
      return struct;
    }

    // Get the struct property
    const structProp = struct.getProperty(location.name, ctx.parentCtx.start.line);
    // Does the struct property exists?
    if (structProp.type === DATA_TYPE.ERROR)
      this.errors.push(structProp.error);
    
    return structProp;
  }


  // Visit a parse tree produced by DecafParser#idArrDotLocation.
  visitIdArrDotLocation(ctx) {
    const struct = this.visitArrLocation(ctx);
    const location = this.visit(ctx.location());

    // Does the struct id exists?
    if (struct.type === DATA_TYPE.ERROR) {
      this.errors.push(struct.error);
      return struct;
    }

    // Is the symbol a struct?
    if (struct.type !== DATA_TYPE.STRUCT) {
      const struct = new UndeclaredStructError(symbol.name, ctx.parentCtx.start.line);
      struct.error = struct;
      this.errors.push(struct);
      return struct;
    }

    // Get the struct property
    const structProp = struct.getProperty(location.name, ctx.parentCtx.start.line);
    // Does the struct property exists?
    if (structProp.type === DATA_TYPE.ERROR)
      this.errors.push(structProp.error);
    
    return structProp;
  }


  // Visit a parse tree produced by DecafParser#methodCallExpr.
  visitMethodCallExpr(ctx) {
    return this.visit(ctx.methodCall());
  }


  // Visit a parse tree produced by DecafParser#parExpr.
  visitParExpr(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#notExpr.
  visitNotExpr(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#eqOpExpr.
  visitEqOpExpr(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#relOpExpr.
  visitRelOpExpr(ctx) {
    return this.visitFirstArithOpExpr(ctx);
  }


  // Visit a parse tree produced by DecafParser#locationExpr.
  visitLocationExpr(ctx) {
    const location = this.visit(ctx.location());
    return location;
  }


  // Visit a parse tree produced by DecafParser#condOpExpr.
  visitCondOpExpr(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#literalExpr.
  visitLiteralExpr(ctx) {
    return this.visit(ctx.literal());
  }


  // Visit a parse tree produced by DecafParser#negativeExpr.
  visitNegativeExpr(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#secondArithOpExpr.
  visitSecondArithOpExpr(ctx) {
    return this.visitFirstArithOpExpr(ctx);
  }


  // Visit a parse tree produced by DecafParser#firstArithOpExpr.
  visitFirstArithOpExpr(ctx) {
    const [expr1, expr2] = this.visit(ctx.expression());
    const operator = ctx.op.text;
    const result = getOperationResult(expr1, expr2, operator, ctx.start.line);

    if (result.type === DATA_TYPE.ERROR)
      this.errors.push(result.error);

    return result;
  }


  // Visit a parse tree produced by DecafParser#methodCallDecl.
  visitMethodCallDecl(ctx) {
    const methodId = this.visit(ctx.id());
    const args = this.visit(ctx.arg());
    const method = this.symbolTable.lookup(methodId);
    const errorSymbol = new Symbol(DATA_TYPE.ERROR, methodId);

    // Does the specified method exists?
    if (!method) {
      const notFoundError = new UndeclaredMethodError(methodId, ctx.start.line);
      errorSymbol.error = notFoundError;
      this.errors.push(notFoundError);
      return errorSymbol;
    }

    const methodTypes = method.args.map((arg) => arg.type);
    const argTypes = args.map((arg) => arg.type);

    // Are the signatures the same? (length and types)
    if (!compareArrays(methodTypes, argTypes)) {
      const argsTypeError = new InvalidMethodCallError(methodId, ctx.start.line);
      errorSymbol.error = argsTypeError;
      this.errors.push(argsTypeError);
      return errorSymbol;
    }

    return method;
  }


  // Visit a parse tree produced by DecafParser#argDecl.
  visitArgDecl(ctx) {
    return this.visit(ctx.expression());
  }


  // Visit a parse tree produced by DecafParser#intLiteral.
  visitIntLiteral(ctx) {
    return this.visit(ctx.int_literal());
  }


  // Visit a parse tree produced by DecafParser#charLiteral.
  visitCharLiteral(ctx) {
    return this.visit(ctx.char_literal());
  }


  // Visit a parse tree produced by DecafParser#boolLiteral.
  visitBoolLiteral(ctx) {
    return this.visit(ctx.bool_literal());
  }


  // Visit a parse tree produced by DecafParser#charLiteralDecl.
  visitCharLiteralDecl(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#numLiteral.
  visitNumLiteral(ctx) {
    const num = this.visit(ctx.num());
    const intLiteral = new Symbol(
      DATA_TYPE.INT, 'intLiteral', ctx.start.line, null, num
    );
    return intLiteral;
  }


  // Visit a parse tree produced by DecafParser#trueLiteral.
  visitTrueLiteral(ctx) {
    return new Symbol(
      DATA_TYPE.BOOLEAN, 'boolLiteral', ctx.start.line, null, BOOLEAN_TYPE.TRUE
    );    
  }


  // Visit a parse tree produced by DecafParser#falseLiteral.
  visitFalseLiteral(ctx) {
    return new Symbol(
      DATA_TYPE.BOOLEAN, 'boolLiteral', ctx.start.line, null, BOOLEAN_TYPE.FALSE
    );    
  }


  // Visit a parse tree produced by DecafParser#idDecl.
  visitIdDecl(ctx) {
    return ctx.getText();
  }


  // Visit a parse tree produced by DecafParser#numDecl.
  visitNumDecl(ctx) {
    return ctx.getText();
  }



}
