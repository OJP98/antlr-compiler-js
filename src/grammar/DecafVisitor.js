// Generated from ./src/grammar/Decaf.g4 by ANTLR 4.9.2
// jshint ignore: start
import Array from '../classes/Array';
import IntermediateCode from '../classes/IntermediateCode';
import Method from '../classes/Method';
import MethodTable from '../scripts/MethodTable';
import Struct from '../classes/Struct';
import StructDeclaration from '../classes/StructDeclaration';
import StructTable from '../scripts/StructTable';
import Symbol from '../classes/Symbol';
import SymbolTable from '../scripts/SymbolTable';
import Temp from '../classes/Temp';
import antlr4 from 'antlr4';
import { DATA_TYPE, BOOLEAN_TYPE } from '../enums/dataTypes';
import { compareArrays, getReturnTypeFromArray } from '../js/utils';
import {
  ArraySubscriptError,
  InvalidAssignmentError,
  InvalidExpressionTypeError,
  InvalidMethodCallError,
  InvalidOperationType,
  InvalidPropertyError,
  NegativeArraySubscriptError,
  SymbolNotArrayError,
  UndeclaredIdError,
  UndeclaredMethodError,
  UndeclaredStructError
} from '../classes/Error';
import {
  condOperation,
  equalsOperation,
  getResultSymbolFromOp,
} from '../js/operations';
import TAC, { AssignmentTAC, LabelTAC, UnaryTAC } from '../classes/TAC';
import EXPR_OP from '../enums/expressionTypes';
import LABEL_TYPE from '../enums/labelTypes';

// This class defines a complete generic visitor for a parse tree produced by DecafParser.

export default class DecafVisitor extends antlr4.tree.ParseTreeVisitor {

  declaringStructProps = false;
  symbolTable = new SymbolTable();
  methodTable = new MethodTable();
  structTable = new StructTable();
  globalSize = 0;

  symbols = [];
  errors = [];

  // Visit a parse tree produced by DecafParser#programInit.
  visitProgramInit(ctx) {
    const res = this.visitChildren(ctx);
    this.globalSize = this.symbolTable.getLastScopeSize();
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
    return this.visit(ctx.methodDeclaration());
  }


  // Visit a parse tree produced by DecafParser#varDecl.
  visitVarDecl(ctx) {
    const varType = this.visit(ctx.varType());
    const varId = this.visit(ctx.id());
    const startLine = ctx.start.line;
    const { type, structId } = varType;
    let symbol;

    if (structId) {
      const structDecl = this.structTable.lookup(structId);
      symbol = new Struct(type, varId, startLine, structDecl, structId);
    } else {
      symbol = new Symbol(type, varId, startLine);
    }

    if (!this.declaringStructProps)
      this.symbolTable.bind(symbol);
    else 
      this.structTable.newProperty(symbol);

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
    const { structId, type } = varType;
    let symbol = null;

    if (structId) {
      const structDecl = this.structTable.lookup(structId);
      symbol = new Struct(type, varId, startLine, structDecl, structId, +num);
    } else {
      symbol = new Array(type, varId, num, startLine);
    }

    if (!this.declaringStructProps)
      this.symbolTable.bind(symbol);
    else 
      this.structTable.newProperty(symbol);

    if (symbol.error)
      this.errors.push(symbol.error);

    return symbol;
  }


  visitStructOfStruct(ctx) {
    return this.visit(ctx.structDeclaration());
  }


  // Visit a parse tree produced by DecafParser#structDecl.
  visitStructDecl(ctx) {
    const type = DATA_TYPE.STRUCT_DECL;
    const id = this.visit(ctx.id());
    this.declaringStructProps = true;
    const properties = ctx.varDeclaration();
    const props = [];

    const structDecl = new StructDeclaration(
      type, id, ctx.start.line
    );

    // Add the struct to the current scope and create a new one
    this.structTable.bind(structDecl);
    this.symbolTable.enter();

    // Go through each var declaration, don't forget visitVarDecl
    // Already adds the variables to the symbols table
    properties.forEach(varDecl => props.push(
      this.visit(varDecl))
    );
    structDecl.Properties = props;

    if (structDecl.error)
      this.errors.push(structDecl.error)

    this.symbolTable.exit();
    this.declaringStructProps = false;
    return structDecl;
  }


  // Visit a parse tree produced by DecafParser#intVar.
  visitIntVar() {
    return { type: DATA_TYPE.INT };
  }


  // Visit a parse tree produced by DecafParser#charVar.
  visitCharVar() {
    return { type: DATA_TYPE.CHAR };
  }


  // Visit a parse tree produced by DecafParser#booleanVar.
  visitBooleanVar() {
    return { type: DATA_TYPE.BOOLEAN };
  }


  // Visit a parse tree produced by DecafParser#structVar.
  visitStructVar(ctx) {
    const structId = this.visit(ctx.id());
    return { structId, type: DATA_TYPE.STRUCT };
  }


  // Visit a parse tree produced by DecafParser#structDeclarationVar.
  visitStructDeclarationVar(ctx) {
    return { type: this.visitChildren(ctx) };
  }


  // Visit a parse tree produced by DecafParser#voidVar.
  visitVoidVar() {
    return { type: DATA_TYPE.VOID };
  }


  // Visit a parse tree produced by DecafParser#methodDecl.
  visitMethodDecl(ctx) {
    // Get the method type and id
    const methodType = this.visit(ctx.methodType());
    const methodId = this.visit(ctx.id());
    const params = ctx.parameter();

    const method = new Method(
      methodType, methodId, ctx.start.line
    );
    this.methodTable.bind(method);

    let tac = new LabelTAC(`DEF ${method.name}`, LABEL_TYPE.DEF);
    IntermediateCode.methodDecl(tac);

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
    const block = this.visit(ctx.block());

    if (block.type === DATA_TYPE.ERROR)
      return block;

    method.ReturnType = block.type;

    // Finally, check for any errors and push them if exist
    if (method.error)
      this.errors.push(method.error)

    const methodSize = this.symbolTable.getLastScopeSize();

    // Exit the newly created symbol table
    this.symbolTable.exit();
    method.size = methodSize;

    tac = new LabelTAC(`END DEF ${method.name}`, LABEL_TYPE.END_DEF);
    IntermediateCode.methodEnd(tac);
    Temp.Reset();
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
    const type = this.visit(ctx.parameterType());
    const name = this.visit(ctx.id())
    const symbol = new Symbol(
      type, name, ctx.start.line
    );

    symbol.isParam = true;

    this.symbolTable.bind(symbol);
    if (symbol.error)
      this.errors.push(symbol.error);

    return symbol;
  }


  // Visit a parse tree produced by DecafParser#idArrParam.
  visitIdArrParam(ctx) {
    const type = this.visit(ctx.parameterType());
    const name = this.visit(ctx.id())
    const symbol = new Array(
      type, name, 1, ctx.start.line
    );

    symbol.isParam = true;

    this.symbolTable.bind(symbol);
    if (symbol.error)
      this.errors.push(symbol.error);

    return symbol;
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
      const returnSymbol = this.visit(stmt);
      returnTypes = returnTypes.concat(returnSymbol);
    });

    // If we don't have stmts, then return NONE
    if (!returnTypes.length)
      return new Symbol(DATA_TYPE.NONE, 'BlockDecl');

    // If it's just one, return it
    if (returnTypes.length === 1)
      return returnTypes.pop();
    
    // Make sure all tye return types are the same
    const returnSymbol = getReturnTypeFromArray(returnTypes);
    if (returnSymbol.type === DATA_TYPE.ERROR && returnSymbol.name === 'multipleReturnTypes') {
      this.errors.push(returnSymbol.error);
    }

    return returnSymbol;
  }


  // Visit a parse tree produced by DecafParser#ifStmt.
  visitIfStmt(ctx) {
    const expression = this.visit(ctx.expression());

    if (expression.type === DATA_TYPE.ERROR) {
      this.errors.push(expression.error);
      return expression;
    }

    if (expression.type !== DATA_TYPE.BOOLEAN) {
      const errorSymbol = new Symbol(DATA_TYPE.ERROR, 'ifExprEror');
      errorSymbol.Error =  new InvalidExpressionTypeError('if', ctx.start.line);
      this.errors.push(errorSymbol.error);
      return errorSymbol;
    }

    const labelCount = IntermediateCode.LabelCount;

    // Generate both labels
    IntermediateCode.gotoIfTrueLabel(expression.addr, labelCount);
    IntermediateCode.gotoIfFalseLabel(labelCount);

    // If true, go to block and enter symbol table
    IntermediateCode.ifTrueLabel(labelCount);
    this.symbolTable.enterAndKeepOffset();
    const block = this.visit(ctx.block());
    this.symbolTable.exit();

    // Else...
    IntermediateCode.ifFalseLabel(labelCount);

    return block;
  }


  // Visit a parse tree produced by DecafParser#ifElseStmt.
  visitIfElseStmt(ctx) {
    const expression = this.visit(ctx.expression());

    // Is the epxression itself an error?
    if (expression.type === DATA_TYPE.ERROR) {
      this.errors.push(expression.error);
      return expression;
    }

    // The expression should be of boolean/ type
    if (expression.type !== DATA_TYPE.BOOLEAN) {
      const symbolError = new Symbol(DATA_TYPE.ERROR, 'ifExprEror');
      symbolError.Error =  new InvalidExpressionTypeError('if - else', ctx.start.line);
      this.errors.push(symbolError.error);
      return symbolError;
    }

    const blocks = ctx.block();
    const labelCount = IntermediateCode.LabelCount;

    // Generate both labels
    IntermediateCode.gotoIfTrueLabel(expression.addr, labelCount);
    IntermediateCode.gotoIfFalseLabel(labelCount);

    // If true, go to block
    IntermediateCode.ifTrueLabel(labelCount);
    this.symbolTable.enterAndKeepOffset();
    const block1 = this.visit(blocks[0]);
    this.symbolTable.exit();

    // Then, go to end if
    IntermediateCode.gotoEndIfLabel(labelCount);

    // Else...
    IntermediateCode.ifFalseLabel(labelCount, true);
    this.symbolTable.enterAndKeepOffset();
    const block2 = this.visit(blocks[1]);
    this.symbolTable.exit();

    // End if label
    IntermediateCode.endIfLabel(labelCount)

    return [block1, block2];

  }


  // Visit a parse tree produced by DecafParser#whileStmt.
  visitWhileStmt(ctx) {
    const labelCount = IntermediateCode.LabelCount;
    IntermediateCode.startWhileLabel(labelCount);

    const expression = this.visit(ctx.expression());

    if (expression.type === DATA_TYPE.ERROR) {
      this.errors.push(expression.error);
      return expression;
    }

    // The expression should be of boolean/ type
    if (expression.type !== DATA_TYPE.BOOLEAN) {
      const symbolError = new Symbol(DATA_TYPE.ERROR, 'ifExprEror');
      symbolError.Error =  new InvalidExpressionTypeError('while', ctx.start.line);
      this.errors.push(symbolError.error);
      return symbolError;
    }

    // Sending addr.addr makes it so that the temporary won't be pushed back
    const expressionAddr = expression.addr.addr || expression.addr
    IntermediateCode.gotoIfTrueLabel(expressionAddr, labelCount);
    IntermediateCode.gotoEndWhileLabel(labelCount);

    IntermediateCode.ifTrueLabel(labelCount);
    this.symbolTable.enterAndKeepOffset();
    const block = this.visit(ctx.block());
    this.symbolTable.exit();

    IntermediateCode.gotoWhileLabel(labelCount);
    IntermediateCode.endWhileLabel(labelCount);

    expression.addr && Temp.PushBack(expression.addr);

    return block;
  }


  // Visit a parse tree produced by DecafParser#returnExprStmt.
  visitReturnExprStmt(ctx) {
    const expression = this.visit(ctx.expression());

    if (expression.type === DATA_TYPE.ERROR)
      this.errors.push(expression.error);

    IntermediateCode.methodReturnLabel(expression.addr);

    return expression;
  }


  // Visit a parse tree produced by DecafParser#returnVoidStmt.
  visitReturnVoidStmt(ctx) {
    return new Symbol(DATA_TYPE.VOID, 'voidReturn', ctx.start.line);
  }


  // Visit a parse tree produced by DecafParser#methodStmt.
  visitMethodStmt(ctx) {
    const methodCall = this.visit(ctx.methodCall());

    if (methodCall.type === DATA_TYPE.ERROR)
      this.errors.push(methodCall.error);

    IntermediateCode.methodCallLabel(methodCall.name, methodCall.args?.length ?? 0);
    return new Symbol(DATA_TYPE.NONE, 'methodStmt', ctx.start.line);
  }


  // Visit a parse tree produced by DecafParser#blockStmt.
  visitBlockStmt(ctx) {
    return this.visit(ctx.block());
  }


  // Visit a parse tree produced by DecafParser#assignmentStmt.
  visitAssignmentStmt(ctx) {
    const symbol = this.visit(ctx.location());
    if (symbol.type === DATA_TYPE.ERROR) {
      this.errors.push(symbol.error);
      return symbol;
    }

    const expr = this.visit(ctx.expression());
    if (expr.type === DATA_TYPE.ERROR) {
      this.errors.push(expr.error);
      return expr;
    }

    // Are both sides of the assignment of the same type?
    if (symbol.type !== expr.type) {
      const assignmentError = new InvalidAssignmentError(
        symbol.name, symbol.type, expr.type, ctx.start.line
      );
      symbol.error = assignmentError;
      this.errors.push(assignmentError);
    }

    const resultSymbol = new Symbol(DATA_TYPE.NONE, 'assignmentStmt');
    resultSymbol.addr = symbol.addr;

    IntermediateCode.pushTAC(
      new AssignmentTAC(resultSymbol.addr, expr.addr, EXPR_OP.ASI)
    );

    return resultSymbol;
  }


  // Visit a parse tree produced by DecafParser#expressionStmt.
  visitExpressionStmt(ctx) {
    const expr = this.visit(ctx.expression());

    if (expr.type === DATA_TYPE.ERROR) {
      this.errors.push(expr.error);
      return expr;
    }

    return new Symbol(DATA_TYPE.NONE, 'epxressionStmt', ctx.start.line);
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
    let symbol = this.visitIdLocation(ctx);

    // Does the symbol id exists?
    if (symbol.type === DATA_TYPE.ERROR)
      return symbol;

    // Is it a struct with no length?
    if (symbol instanceof Struct && !symbol.length) {
      const errorSymbol = new Symbol(DATA_TYPE.ERROR, symbol.name);
      errorSymbol.Error = new SymbolNotArrayError(
        symbol.name, ctx.start.line
      );
      return errorSymbol;
    }

    // Is it an array?
    if (!(symbol instanceof Struct) && !(symbol instanceof Array)) {
      const errorSymbol = new Symbol(DATA_TYPE.ERROR, symbol.name);
      errorSymbol.Error = new SymbolNotArrayError(
        symbol.name, ctx.start.line
      );
      return errorSymbol;
    }

    const expr = this.visit(ctx.expression());

    // Does the expression contains an error?
    if (expr.type === DATA_TYPE.ERROR)
      return expr;

    // Is the [<expr>] an INT type?
    if (expr.type !== DATA_TYPE.INT) {
      const errorSymbol = new Symbol(DATA_TYPE.ERROR);
      errorSymbol.Error = new ArraySubscriptError(ctx.start.line);
      return errorSymbol;
    }

    // Is the <expr> lower than 0?
    if (expr.value && expr.value < 0) {
      const errorSymbol = new Symbol(DATA_TYPE.ERROR);
      errorSymbol.Error = new NegativeArraySubscriptError(symbol.name, ctx.start.line);
      return errorSymbol;
    }

    const dataTypeAddr = Temp.New();
    const dataTypeOffset = new TAC(dataTypeAddr, symbol.TypeWidth, '*', expr.addr);
    IntermediateCode.pushTAC(dataTypeOffset);

    const scopeAddr = Temp.New();
    const scopeOffset = new TAC(scopeAddr, symbol.offset, '+', dataTypeAddr);
    IntermediateCode.pushTAC(scopeOffset);
    const symbolClone = Object.assign(Object.create(Object.getPrototypeOf(symbol)), symbol);
    symbolClone.addr = symbol.returnAddrWithOffset(scopeAddr.addr);
    symbolClone.offset = scopeAddr;

    return symbolClone;
  }


  // Visit a parse tree produced by DecafParser#idDotLocation.
  visitIdDotLocation(ctx) {
    const struct = this.visitIdLocation(ctx);

    if (struct.type === DATA_TYPE.ERROR)
      return struct;

    // Is the symbol a struct?
    if (struct.type !== DATA_TYPE.STRUCT) {
      const errorSymbol = new Symbol(DATA_TYPE.ERROR, struct.name);
      errorSymbol.Error = new UndeclaredStructError(struct.name, ctx.parentCtx.start.line);
      return errorSymbol;
    }

    this.symbolTable.enter();
    const structProperties = struct.getArrayOfProperties();
    structProperties.forEach((p) => this.symbolTable.bind(p));

    const location = this.visit(ctx.location());
    this.symbolTable.exit();

    if (location.type === DATA_TYPE.ERROR)
      return location;

    // Get the struct property
    const locationStruct = struct.searchPropertyRecursively(location.name);
    if (!locationStruct) {
      const errorSymbol = new Symbol(DATA_TYPE.ERROR, location.name);
      errorSymbol.Error = new InvalidPropertyError(struct.name, location.name, ctx.parentCtx.start.line);
      return errorSymbol;
    }

    // Get the offset of the struct + the property in a new addres
    const offsetAddr = Temp.New();
    const offsetTac = new TAC(offsetAddr, struct.offset, '+', location.offset);
    IntermediateCode.pushTAC(offsetTac);
    location.addr = struct.returnAddrWithOffset(offsetAddr.addr);
    const locationClone = Object.assign(Object.create(Object.getPrototypeOf(location)), location);
    locationClone.offset = offsetAddr;
    return locationClone;

  }


  // Visit a parse tree produced by DecafParser#idArrDotLocation.
  visitIdArrDotLocation(ctx) {
    const struct = this.visitArrLocation(ctx);

    if (struct.type === DATA_TYPE.ERROR)
      return struct;

    // Is the symbol a struct?
    if (struct.type !== DATA_TYPE.STRUCT) {
      const errorSymbol = new Symbol(DATA_TYPE.ERROR, struct.name);
      errorSymbol.Error = new UndeclaredStructError(struct.name, ctx.parentCtx.start.line);
      return errorSymbol;
    }

    // Start a new entry of the symbol table and bind the struct props
    this.symbolTable.enter();
    const structProperties = struct.getArrayOfProperties();
    structProperties.forEach((p) => this.symbolTable.bind(p));

    // Now, get the location (struct property)
    const location = this.visit(ctx.location());
    this.symbolTable.exit();

    if (location.type === DATA_TYPE.ERROR)
      return location;

    const locationStruct = struct.searchPropertyRecursively(location.name);

    if (!locationStruct) {
      const errorSymbol = new Symbol(DATA_TYPE.ERROR, location.name);
      errorSymbol.Error = new InvalidPropertyError(struct.name, location.name, ctx.parentCtx.start.line);
      return errorSymbol;
    }

    const offsetAddr = Temp.New();
    const offsetTac = new TAC(offsetAddr, struct.offset, '+', location.offset);
    IntermediateCode.pushTAC(offsetTac);
    location.addr = struct.returnAddrWithOffset(offsetAddr.addr);
    const locationClone = Object.assign(Object.create(Object.getPrototypeOf(location)), location);
    locationClone.offset = offsetAddr;
    return locationClone;
  }


  // Visit a parse tree produced by DecafParser#methodCallExpr.
  visitMethodCallExpr(ctx) {
    const method = this.visit(ctx.methodCall());

    if (method.type === DATA_TYPE.ERROR)
      return method;

    if (method.type !== DATA_TYPE.VOID) {
      IntermediateCode.methodCallLabel(method.name, method?.args.length || 0);
      method.addr = 'R';
    }
    return method;
  }


  // Visit a parse tree produced by DecafParser#parExpr.
  visitParExpr(ctx) {
    return this.visit(ctx.expression());
  }


  // Visit a parse tree produced by DecafParser#notExpr.
  visitNotExpr(ctx) {
    const expr = this.visit(ctx.expression());

    if (expr.type === DATA_TYPE.ERROR)
      return expr;

    // Is the expression of the boolean type?
    if (expr.type !== DATA_TYPE.BOOLEAN)
      expr.Error = new InvalidOperationType(ctx.start.line);
    
    const exprAddr = expr.addr;
    expr.addr = Temp.New();
    expr.value = `!${expr.value}` || `!${expr.addr}`    

    IntermediateCode.pushTAC(
      new UnaryTAC(expr.addr, exprAddr, EXPR_OP.NOT)
    );

    return expr;
  }


  // Visit a parse tree produced by DecafParser#eqOpExpr.
  visitEqOpExpr(ctx) {
    const [expr1, expr2] = this.visit(ctx.expression());
    const operator = ctx.op.text;

    if (expr1.type === DATA_TYPE.ERROR || expr2.type === DATA_TYPE.ERROR)
      return expr1.error ? expr1 : expr2;

    const result = equalsOperation(expr1, expr2, ctx.start.line);

    result.addr = Temp.New();
    const tac = new TAC(result.addr, expr1.addr, operator, expr2.addr);
    IntermediateCode.pushTAC(tac);

    return result;
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
    const [expr1, expr2] = this.visit(ctx.expression());
    const operator = ctx.op.text;

    if (expr1.type === DATA_TYPE.ERROR || expr2.type === DATA_TYPE.ERROR)
      return expr1.error ? expr1 : expr2;

    const result = condOperation(expr1, expr2, ctx.start.line);

    result.addr = Temp.New();
    IntermediateCode.pushTAC(
      new TAC(result.addr, expr1.addr, operator, expr2.addr)
    );

    return result;
  }


  // Visit a parse tree produced by DecafParser#literalExpr.
  visitLiteralExpr(ctx) {
    const literal = this.visit(ctx.literal());
    literal.addr = literal.value;
    literal.code = literal.value;
    return literal;
  }


  // Visit a parse tree produced by DecafParser#negativeExpr.
  visitNegativeExpr(ctx) {
    const expr = this.visit(ctx.expression());

    if (expr.type === DATA_TYPE.ERROR)
      return expr;

    if (expr.type !== DATA_TYPE.INT)
      expr.Error = new InvalidOperationType(ctx.start.line);

    const exprAddr = expr.addr;
    expr.value = -(expr.value) || `-${expr.addr}`;
    expr.addr = Temp.New();
    IntermediateCode.pushTAC(
      new UnaryTAC(expr.addr, exprAddr, EXPR_OP.SUB)
    )

    return expr;
  }


  // Visit a parse tree produced by DecafParser#secondArithOpExpr.
  visitSecondArithOpExpr(ctx) {
    return this.visitFirstArithOpExpr(ctx);
  }


  // Visit a parse tree produced by DecafParser#firstArithOpExpr.
  visitFirstArithOpExpr(ctx) {
    const [expr1, expr2] = this.visit(ctx.expression());

    if (expr1.type === DATA_TYPE.ERROR || expr2.type === DATA_TYPE.ERROR)
      return expr1.error ? expr1 : expr2;

    const operator = ctx.op.text;
    const result = getResultSymbolFromOp(expr1, expr2, operator, ctx.start.line);

    result.addr = Temp.New();
    IntermediateCode.pushTAC(
      new TAC(result.addr, expr1.addr, operator, expr2.addr)
    );

    return result;
  }


  // Visit a parse tree produced by DecafParser#methodCallDecl.
  visitMethodCallDecl(ctx) {
    const methodId = this.visit(ctx.id());
    const args = this.visit(ctx.arg());
    const method = this.methodTable.lookup(methodId);
    const errorSymbol = new Symbol(DATA_TYPE.ERROR, methodId);

    // Does the specified method exists?
    if (!method) {
      const notFoundError = new UndeclaredMethodError(methodId, ctx.start.line);
      errorSymbol.Error = notFoundError;
      return errorSymbol;
    }

    // Is there an error in between the args?
    const argError = args.find((arg) => (arg.type === DATA_TYPE.ERROR));
    if (argError)
      return argError;

    const methodTypes = method.args.map((arg) => arg.type);
    const argTypes = args.map((arg) => arg.type);

    // Are the signatures the same? (length and types)
    if (!compareArrays(methodTypes, argTypes)) {
      const argsTypeError = new InvalidMethodCallError(methodId, ctx.start.line);
      errorSymbol.Error = argsTypeError;
      return errorSymbol;
    }

    // Assign a param label to each one of them
    args.forEach((param) => IntermediateCode.methodParam(param.addr));

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
		let char = ctx.getText();
		const cleanedChar = char.replace(/\"/g, '');
    return new Symbol(
      DATA_TYPE.CHAR, 'charLiteral', ctx.start.line, cleanedChar
    );
  }


  // Visit a parse tree produced by DecafParser#boolLiteral.
  visitBoolLiteral(ctx) {
    return this.visit(ctx.bool_literal());
  }

  // Visit a parse tree produced by DecafParser#numLiteral.
  visitNumLiteral(ctx) {
    const num = this.visit(ctx.num());
    const intLiteral = new Symbol(
      DATA_TYPE.INT, 'intLiteral', ctx.start.line, +num
    );
    return intLiteral;
  }


  // Visit a parse tree produced by DecafParser#trueLiteral.
  visitTrueLiteral(ctx) {
    return new Symbol(
      DATA_TYPE.BOOLEAN, 'boolLiteral', ctx.start.line, BOOLEAN_TYPE.TRUE
    );
  }


  // Visit a parse tree produced by DecafParser#falseLiteral.
  visitFalseLiteral(ctx) {
    return new Symbol(
      DATA_TYPE.BOOLEAN, 'boolLiteral', ctx.start.line, BOOLEAN_TYPE.FALSE
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