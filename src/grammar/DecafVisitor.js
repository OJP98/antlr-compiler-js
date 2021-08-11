//
// Generated from ./src/grammar/Decaf.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import {Method} from '../classes/Method';
import {Symbol} from '../classes/Symbol';
import {Array} from '../classes/Array';
import {SymbolTable} from '../classes/SymbolTable';
import { DATA_TYPE, BOOLEAN_TYPE } from '../enums/dataTypes';

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

    const symbol = new Symbol(
      varType, varId, ctx.start.line, ctx.start.column
    );
    this.symbolTable.bind(symbol);

    return symbol;
  }


  // Visit a parse tree produced by DecafParser#arrDecl.
  visitArrDecl(ctx) {
    const varType = this.visit(ctx.varType());
    const varId = this.visit(ctx.id());
    const num = this.visit(ctx.num());

    const array = new Array(
      varType, varId, num,
      ctx.start.line, ctx.start.column
    );
    this.symbolTable.bind(array);

    return array;
  }


  // Visit a parse tree produced by DecafParser#structDecl.
  visitStructDecl(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#intVar.
  visitIntVar() {
    return DATA_TYPE.INT;
  }


  // Visit a parse tree produced by DecafParser#charVar.
  visitCharVar() {
    return DATA_TYPE.CHAR;
  }


  // Visit a parse tree produced by DecafParser#booleanVar.
  visitBooleanVar() {
    return DATA_TYPE.BOOLEAN;
  }


  // Visit a parse tree produced by DecafParser#structVar.
  visitStructVar(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#structDeclarationVar.
  visitStructDeclarationVar(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#voidVar.
  visitVoidVar() {
    return DATA_TYPE.VOID;
  }


  // Visit a parse tree produced by DecafParser#methodDecl.
  visitMethodDecl(ctx) {
    // Create a new symbol table entry
    this.symbolTable.enter();

    // Get the method type and id
    const methodType = this.visit(ctx.methodType());
    const methodId = this.visit(ctx.id());

    // Get and push the parameters to the symbol table
    const params = ctx.parameter();
    const parameters = params.reduce((acc, curr) => {
      const param = this.visit(curr);
      this.symbolTable.bind(param);
      acc.push(param);
      return acc;
    }, []);
    
    // Create a new method and bind it as well
    const method = new Method(
      methodType,  methodId, parameters,
      ctx.start.line, ctx.start.column,
    );

    this.symbolTable.bind(method);

    const blockReturn = this.visit(ctx.block());
    method.ReturnType = blockReturn;
    this.methods.push(method);
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
    return new Symbol(type, name, ctx.start.line, ctx.start.column);
  }


  // Visit a parse tree produced by DecafParser#idArrParam.
  visitIdArrParam(ctx) {
    const type = this.visit(ctx.parameterType())
    const name = this.visit(ctx.id())
    return new Symbol(type, name, ctx.start.line, ctx.start.colum);
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
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#ifElseStmt.
  visitIfElseStmt(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#whileStmt.
  visitWhileStmt(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#returnExprStmt.
  visitReturnExprStmt(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#returnVoidStmt.
  visitReturnVoidStmt() {
    return DATA_TYPE.VOID;
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
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#expressionStmt.
  visitExpressionStmt(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#idLocation.
  visitIdLocation(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#arrLocation.
  visitArrLocation(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#idDotLocation.
  visitIdDotLocation(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#idArrDotLocation.
  visitIdArrDotLocation(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#methodCallExpr.
  visitMethodCallExpr(ctx) {
    return this.visitChildren(ctx);
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
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#locationExpr.
  visitLocationExpr(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#condOpExpr.
  visitCondOpExpr(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#literalExpr.
  visitLiteralExpr(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#negativeExpr.
  visitNegativeExpr(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#secondArithOpExpr.
  visitSecondArithOpExpr(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#firstArithOpExpr.
  visitFirstArithOpExpr(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#methodCallDecl.
  visitMethodCallDecl(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#argDecl.
  visitArgDecl(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#intLiteral.
  visitIntLiteral(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#charLiteral.
  visitCharLiteral(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#boolLiteral.
  visitBoolLiteral(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#charLiteralDecl.
  visitCharLiteralDecl(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#numLiteral.
  visitNumLiteral(ctx) {
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by DecafParser#trueLiteral.
  visitTrueLiteral() {
    return BOOLEAN_TYPE.TRUE;
  }


  // Visit a parse tree produced by DecafParser#falseLiteral.
  visitFalseLiteral() {
    return BOOLEAN_TYPE.FALSE;
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
