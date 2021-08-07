// Generated from ./src/grammar/Decaf.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by DecafParser.

export default class DecafVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by DecafParser#programInit.
	visitProgramInit(ctx) {
		const res = this.visitChildren(ctx);
		console.log(res);
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


	// Visit a parse tree produced by DecafParser#declarationMethor.
	visitDeclarationMethor(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#varDecl.
	visitVarDecl(ctx) {
		const varType = ctx.varType();
		const varId = ctx.id();
		// TODO: Add to symbol table
	  return { varType, varId };
	}


	// Visit a parse tree produced by DecafParser#arrDecl.
	visitArrDecl(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#structDecl.
	visitStructDecl(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#intVar.
	visitIntVar(ctx) {
	  return ctx.getText();
	}


	// Visit a parse tree produced by DecafParser#charVar.
	visitCharVar(ctx) {
	  return ctx.getText();
	}


	// Visit a parse tree produced by DecafParser#booleanVar.
	visitBooleanVar(ctx) {
	  return ctx.getText();
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
	visitVoidVar(ctx) {
	  return ctx.getText();
	}


	// Visit a parse tree produced by DecafParser#methodDecl.
	visitMethodDecl(ctx) {
		const methodType = ctx.methodType().getText();
		const methodId = ctx.id().getText();
		const params = ctx.parameter();
		let parameters = [];

		params.forEach(p => parameters.push(this.visitChildren(p)));
		
		//TODO: add method to symbol table

	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#intMethod.
	visitIntMethod(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#charMethod.
	visitCharMethod(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#booleanMethod.
	visitBooleanMethod(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#voidMethod.
	visitVoidMethod(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#paramType.
	visitParamType(ctx) {
		const paramType = ctx.parameterType();
		const paramId = ctx.id();
	  return { paramType, paramId };
	}


	// Visit a parse tree produced by DecafParser#paramArrType.
	visitParamArrType(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#paramVoid.
	visitParamVoid(ctx) {
	  return ctx.getText();
	}


	// Visit a parse tree produced by DecafParser#paramInt.
	visitParamInt(ctx) {
	  return ctx.getText();
	}


	// Visit a parse tree produced by DecafParser#paramChar.
	visitParamChar(ctx) {
	  return ctx.getText();
	}


	// Visit a parse tree produced by DecafParser#paramBoolean.
	visitParamBoolean(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#blockDecl.
	visitBlockDecl(ctx) {
		const varDeclarations = ctx.varDeclaration();
		const statements = ctx.statement();
		let stmts = [];

		// Execute every var declaration without waiting for a response
		varDeclarations.forEach(varDecl => this.visitChildren(varDecl));

		// Get every statement
		statements.forEach(stmt => stmts.push(this.visitChildren(stmt)));

		console.log(stmts);


		console.log(varDeclarations, statements);
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#ifStmt.
	visitIfStmt(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#whileStmt.
	visitWhileStmt(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#returnTypeStmt.
	visitReturnTypeStmt(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#returnVoidStmt.
	visitReturnVoidStmt(ctx) {
		return 'void';
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


	// Visit a parse tree produced by DecafParser#locationExpr.
	visitLocationExpr(ctx) {
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


	// Visit a parse tree produced by DecafParser#arithExpr1.
	visitArithExpr1(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#arithExpr2.
	visitArithExpr2(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#arithExpr3.
	visitArithExpr3(ctx) {
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


	// Visit a parse tree produced by DecafParser#relOp.
	visitRelOp(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#eqOp.
	visitEqOp(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#condOp.
	visitCondOp(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#multOp.
	visitMultOp(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#divOp.
	visitDivOp(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#modOp.
	visitModOp(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#sumOp.
	visitSumOp(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#subOp.
	visitSubOp(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#lowerOp.
	visitLowerOp(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#higherOp.
	visitHigherOp(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#lowerEqOp.
	visitLowerEqOp(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#higherEqOp.
	visitHigherEqOp(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#equalsOp.
	visitEqualsOp(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#notEqualsOp.
	visitNotEqualsOp(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#andOp.
	visitAndOp(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#orOp.
	visitOrOp(ctx) {
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
	visitTrueLiteral(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#falseLiteral.
	visitFalseLiteral(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by DecafParser#idDecl.
	visitIdDecl(ctx) {
	  return ctx.getText();
	}


	// Visit a parse tree produced by DecafParser#numDecl.
	visitNumDecl(ctx) {
	  return this.visitChildren(ctx);
	}



}