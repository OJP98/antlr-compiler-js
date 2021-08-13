// Generated from c:\Users\Oscar\Desktop\UVG\Semestre10\Compis\js-antlr\src\grammar\Decaf.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class DecafParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, T__37=38, 
		ID=39, DIGIT=40, LETTER=41, ALPHA_NUM=42, WS=43;
	public static final int
		RULE_program = 0, RULE_declaration = 1, RULE_varDeclaration = 2, RULE_structDeclaration = 3, 
		RULE_varType = 4, RULE_methodDeclaration = 5, RULE_methodType = 6, RULE_parameter = 7, 
		RULE_parameterType = 8, RULE_block = 9, RULE_statement = 10, RULE_location = 11, 
		RULE_expression = 12, RULE_methodCall = 13, RULE_arg = 14, RULE_literal = 15, 
		RULE_char_literal = 16, RULE_int_literal = 17, RULE_bool_literal = 18, 
		RULE_id = 19, RULE_num = 20;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "declaration", "varDeclaration", "structDeclaration", "varType", 
			"methodDeclaration", "methodType", "parameter", "parameterType", "block", 
			"statement", "location", "expression", "methodCall", "arg", "literal", 
			"char_literal", "int_literal", "bool_literal", "id", "num"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'class'", "'Program'", "'{'", "'}'", "';'", "'['", "']'", "'struct'", 
			"'int'", "'char'", "'boolean'", "'void'", "'('", "','", "')'", "'if'", 
			"'else'", "'while'", "'return'", "'='", "'.'", "'*'", "'/'", "'%'", "'+'", 
			"'-'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'&&'", "'||'", 
			"'!'", "'''", "'true'", "'false'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, "ID", "DIGIT", "LETTER", "ALPHA_NUM", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Decaf.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public DecafParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgramContext extends ParserRuleContext {
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	 
		public ProgramContext() { }
		public void copyFrom(ProgramContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ProgramInitContext extends ProgramContext {
		public List<DeclarationContext> declaration() {
			return getRuleContexts(DeclarationContext.class);
		}
		public DeclarationContext declaration(int i) {
			return getRuleContext(DeclarationContext.class,i);
		}
		public ProgramInitContext(ProgramContext ctx) { copyFrom(ctx); }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			_localctx = new ProgramInitContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(42);
			match(T__0);
			setState(43);
			match(T__1);
			setState(44);
			match(T__2);
			setState(48);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__11))) != 0)) {
				{
				{
				setState(45);
				declaration();
				}
				}
				setState(50);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(51);
			match(T__3);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclarationContext extends ParserRuleContext {
		public DeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaration; }
	 
		public DeclarationContext() { }
		public void copyFrom(DeclarationContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class DeclarationStructContext extends DeclarationContext {
		public StructDeclarationContext structDeclaration() {
			return getRuleContext(StructDeclarationContext.class,0);
		}
		public DeclarationStructContext(DeclarationContext ctx) { copyFrom(ctx); }
	}
	public static class DeclarationMethodContext extends DeclarationContext {
		public MethodDeclarationContext methodDeclaration() {
			return getRuleContext(MethodDeclarationContext.class,0);
		}
		public DeclarationMethodContext(DeclarationContext ctx) { copyFrom(ctx); }
	}
	public static class DeclarationVarContext extends DeclarationContext {
		public VarDeclarationContext varDeclaration() {
			return getRuleContext(VarDeclarationContext.class,0);
		}
		public DeclarationVarContext(DeclarationContext ctx) { copyFrom(ctx); }
	}

	public final DeclarationContext declaration() throws RecognitionException {
		DeclarationContext _localctx = new DeclarationContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_declaration);
		try {
			setState(56);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				_localctx = new DeclarationStructContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(53);
				structDeclaration();
				}
				break;
			case 2:
				_localctx = new DeclarationVarContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(54);
				varDeclaration();
				}
				break;
			case 3:
				_localctx = new DeclarationMethodContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(55);
				methodDeclaration();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarDeclarationContext extends ParserRuleContext {
		public VarDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varDeclaration; }
	 
		public VarDeclarationContext() { }
		public void copyFrom(VarDeclarationContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ArrDeclContext extends VarDeclarationContext {
		public VarTypeContext varType() {
			return getRuleContext(VarTypeContext.class,0);
		}
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public NumContext num() {
			return getRuleContext(NumContext.class,0);
		}
		public ArrDeclContext(VarDeclarationContext ctx) { copyFrom(ctx); }
	}
	public static class VarDeclContext extends VarDeclarationContext {
		public VarTypeContext varType() {
			return getRuleContext(VarTypeContext.class,0);
		}
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public VarDeclContext(VarDeclarationContext ctx) { copyFrom(ctx); }
	}

	public final VarDeclarationContext varDeclaration() throws RecognitionException {
		VarDeclarationContext _localctx = new VarDeclarationContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_varDeclaration);
		try {
			setState(69);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				_localctx = new VarDeclContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(58);
				varType();
				setState(59);
				id();
				setState(60);
				match(T__4);
				}
				break;
			case 2:
				_localctx = new ArrDeclContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(62);
				varType();
				setState(63);
				id();
				setState(64);
				match(T__5);
				setState(65);
				num();
				setState(66);
				match(T__6);
				setState(67);
				match(T__4);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StructDeclarationContext extends ParserRuleContext {
		public StructDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structDeclaration; }
	 
		public StructDeclarationContext() { }
		public void copyFrom(StructDeclarationContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class StructDeclContext extends StructDeclarationContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public List<VarDeclarationContext> varDeclaration() {
			return getRuleContexts(VarDeclarationContext.class);
		}
		public VarDeclarationContext varDeclaration(int i) {
			return getRuleContext(VarDeclarationContext.class,i);
		}
		public StructDeclContext(StructDeclarationContext ctx) { copyFrom(ctx); }
	}

	public final StructDeclarationContext structDeclaration() throws RecognitionException {
		StructDeclarationContext _localctx = new StructDeclarationContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_structDeclaration);
		int _la;
		try {
			_localctx = new StructDeclContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(71);
			match(T__7);
			setState(72);
			id();
			setState(73);
			match(T__2);
			setState(77);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__11))) != 0)) {
				{
				{
				setState(74);
				varDeclaration();
				}
				}
				setState(79);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(80);
			match(T__3);
			setState(82);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__4) {
				{
				setState(81);
				match(T__4);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarTypeContext extends ParserRuleContext {
		public VarTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varType; }
	 
		public VarTypeContext() { }
		public void copyFrom(VarTypeContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class IntVarContext extends VarTypeContext {
		public IntVarContext(VarTypeContext ctx) { copyFrom(ctx); }
	}
	public static class VoidVarContext extends VarTypeContext {
		public VoidVarContext(VarTypeContext ctx) { copyFrom(ctx); }
	}
	public static class CharVarContext extends VarTypeContext {
		public CharVarContext(VarTypeContext ctx) { copyFrom(ctx); }
	}
	public static class StructVarContext extends VarTypeContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public StructVarContext(VarTypeContext ctx) { copyFrom(ctx); }
	}
	public static class BooleanVarContext extends VarTypeContext {
		public BooleanVarContext(VarTypeContext ctx) { copyFrom(ctx); }
	}
	public static class StructDeclarationVarContext extends VarTypeContext {
		public StructDeclarationContext structDeclaration() {
			return getRuleContext(StructDeclarationContext.class,0);
		}
		public StructDeclarationVarContext(VarTypeContext ctx) { copyFrom(ctx); }
	}

	public final VarTypeContext varType() throws RecognitionException {
		VarTypeContext _localctx = new VarTypeContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_varType);
		try {
			setState(91);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				_localctx = new IntVarContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(84);
				match(T__8);
				}
				break;
			case 2:
				_localctx = new CharVarContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(85);
				match(T__9);
				}
				break;
			case 3:
				_localctx = new BooleanVarContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(86);
				match(T__10);
				}
				break;
			case 4:
				_localctx = new StructVarContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(87);
				match(T__7);
				setState(88);
				id();
				}
				break;
			case 5:
				_localctx = new StructDeclarationVarContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(89);
				structDeclaration();
				}
				break;
			case 6:
				_localctx = new VoidVarContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(90);
				match(T__11);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MethodDeclarationContext extends ParserRuleContext {
		public MethodDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_methodDeclaration; }
	 
		public MethodDeclarationContext() { }
		public void copyFrom(MethodDeclarationContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class MethodDeclContext extends MethodDeclarationContext {
		public MethodTypeContext methodType() {
			return getRuleContext(MethodTypeContext.class,0);
		}
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public List<ParameterContext> parameter() {
			return getRuleContexts(ParameterContext.class);
		}
		public ParameterContext parameter(int i) {
			return getRuleContext(ParameterContext.class,i);
		}
		public MethodDeclContext(MethodDeclarationContext ctx) { copyFrom(ctx); }
	}

	public final MethodDeclarationContext methodDeclaration() throws RecognitionException {
		MethodDeclarationContext _localctx = new MethodDeclarationContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_methodDeclaration);
		int _la;
		try {
			_localctx = new MethodDeclContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(93);
			methodType();
			setState(94);
			id();
			setState(95);
			match(T__12);
			setState(106);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__11))) != 0)) {
				{
				{
				setState(96);
				parameter();
				setState(101);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__13) {
					{
					{
					setState(97);
					match(T__13);
					setState(98);
					parameter();
					}
					}
					setState(103);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				}
				setState(108);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(109);
			match(T__14);
			setState(110);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MethodTypeContext extends ParserRuleContext {
		public MethodTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_methodType; }
	 
		public MethodTypeContext() { }
		public void copyFrom(MethodTypeContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class IntMethodContext extends MethodTypeContext {
		public IntMethodContext(MethodTypeContext ctx) { copyFrom(ctx); }
	}
	public static class CharMethodContext extends MethodTypeContext {
		public CharMethodContext(MethodTypeContext ctx) { copyFrom(ctx); }
	}
	public static class BooleanMethodContext extends MethodTypeContext {
		public BooleanMethodContext(MethodTypeContext ctx) { copyFrom(ctx); }
	}
	public static class VoidMethodContext extends MethodTypeContext {
		public VoidMethodContext(MethodTypeContext ctx) { copyFrom(ctx); }
	}

	public final MethodTypeContext methodType() throws RecognitionException {
		MethodTypeContext _localctx = new MethodTypeContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_methodType);
		try {
			setState(116);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__8:
				_localctx = new IntMethodContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(112);
				match(T__8);
				}
				break;
			case T__9:
				_localctx = new CharMethodContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(113);
				match(T__9);
				}
				break;
			case T__10:
				_localctx = new BooleanMethodContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(114);
				match(T__10);
				}
				break;
			case T__11:
				_localctx = new VoidMethodContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(115);
				match(T__11);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterContext extends ParserRuleContext {
		public ParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameter; }
	 
		public ParameterContext() { }
		public void copyFrom(ParameterContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class IdParamContext extends ParameterContext {
		public ParameterTypeContext parameterType() {
			return getRuleContext(ParameterTypeContext.class,0);
		}
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public IdParamContext(ParameterContext ctx) { copyFrom(ctx); }
	}
	public static class IdArrParamContext extends ParameterContext {
		public ParameterTypeContext parameterType() {
			return getRuleContext(ParameterTypeContext.class,0);
		}
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public IdArrParamContext(ParameterContext ctx) { copyFrom(ctx); }
	}
	public static class VoidParamContext extends ParameterContext {
		public VoidParamContext(ParameterContext ctx) { copyFrom(ctx); }
	}

	public final ParameterContext parameter() throws RecognitionException {
		ParameterContext _localctx = new ParameterContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_parameter);
		try {
			setState(127);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				_localctx = new IdParamContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(118);
				parameterType();
				setState(119);
				id();
				}
				break;
			case 2:
				_localctx = new IdArrParamContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(121);
				parameterType();
				setState(122);
				id();
				setState(123);
				match(T__5);
				setState(124);
				match(T__6);
				}
				break;
			case 3:
				_localctx = new VoidParamContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(126);
				match(T__11);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterTypeContext extends ParserRuleContext {
		public ParameterTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterType; }
	 
		public ParameterTypeContext() { }
		public void copyFrom(ParameterTypeContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class BooleanParamContext extends ParameterTypeContext {
		public BooleanParamContext(ParameterTypeContext ctx) { copyFrom(ctx); }
	}
	public static class CharParamContext extends ParameterTypeContext {
		public CharParamContext(ParameterTypeContext ctx) { copyFrom(ctx); }
	}
	public static class IntParamContext extends ParameterTypeContext {
		public IntParamContext(ParameterTypeContext ctx) { copyFrom(ctx); }
	}

	public final ParameterTypeContext parameterType() throws RecognitionException {
		ParameterTypeContext _localctx = new ParameterTypeContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_parameterType);
		try {
			setState(132);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__8:
				_localctx = new IntParamContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(129);
				match(T__8);
				}
				break;
			case T__9:
				_localctx = new CharParamContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(130);
				match(T__9);
				}
				break;
			case T__10:
				_localctx = new BooleanParamContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(131);
				match(T__10);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	 
		public BlockContext() { }
		public void copyFrom(BlockContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class BlockDeclContext extends BlockContext {
		public List<VarDeclarationContext> varDeclaration() {
			return getRuleContexts(VarDeclarationContext.class);
		}
		public VarDeclarationContext varDeclaration(int i) {
			return getRuleContext(VarDeclarationContext.class,i);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public BlockDeclContext(BlockContext ctx) { copyFrom(ctx); }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_block);
		int _la;
		try {
			_localctx = new BlockDeclContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(134);
			match(T__2);
			setState(138);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__11))) != 0)) {
				{
				{
				setState(135);
				varDeclaration();
				}
				}
				setState(140);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(144);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << T__12) | (1L << T__15) | (1L << T__17) | (1L << T__18) | (1L << T__25) | (1L << T__34) | (1L << T__35) | (1L << T__36) | (1L << T__37) | (1L << ID) | (1L << DIGIT))) != 0)) {
				{
				{
				setState(141);
				statement();
				}
				}
				setState(146);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(147);
			match(T__3);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	 
		public StatementContext() { }
		public void copyFrom(StatementContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ReturnExprStmtContext extends StatementContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ReturnExprStmtContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class WhileStmtContext extends StatementContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public WhileStmtContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class IfStmtContext extends StatementContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public IfStmtContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class BlockStmtContext extends StatementContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public BlockStmtContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class IfElseStmtContext extends StatementContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public List<BlockContext> block() {
			return getRuleContexts(BlockContext.class);
		}
		public BlockContext block(int i) {
			return getRuleContext(BlockContext.class,i);
		}
		public IfElseStmtContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class ReturnVoidStmtContext extends StatementContext {
		public ReturnVoidStmtContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class ExpressionStmtContext extends StatementContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpressionStmtContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class AssignmentStmtContext extends StatementContext {
		public LocationContext location() {
			return getRuleContext(LocationContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public AssignmentStmtContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class MethodStmtContext extends StatementContext {
		public MethodCallContext methodCall() {
			return getRuleContext(MethodCallContext.class,0);
		}
		public MethodStmtContext(StatementContext ctx) { copyFrom(ctx); }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_statement);
		try {
			setState(187);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				_localctx = new IfStmtContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(149);
				match(T__15);
				setState(150);
				match(T__12);
				setState(151);
				expression(0);
				setState(152);
				match(T__14);
				setState(153);
				block();
				}
				break;
			case 2:
				_localctx = new IfElseStmtContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(155);
				match(T__15);
				setState(156);
				match(T__12);
				setState(157);
				expression(0);
				setState(158);
				match(T__14);
				setState(159);
				block();
				setState(160);
				match(T__16);
				setState(161);
				block();
				}
				break;
			case 3:
				_localctx = new WhileStmtContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(163);
				match(T__17);
				setState(164);
				match(T__12);
				setState(165);
				expression(0);
				setState(166);
				match(T__14);
				setState(167);
				block();
				}
				break;
			case 4:
				_localctx = new ReturnExprStmtContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(169);
				match(T__18);
				setState(170);
				expression(0);
				setState(171);
				match(T__4);
				}
				break;
			case 5:
				_localctx = new ReturnVoidStmtContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(173);
				match(T__18);
				setState(174);
				match(T__4);
				}
				break;
			case 6:
				_localctx = new MethodStmtContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(175);
				methodCall();
				setState(176);
				match(T__4);
				}
				break;
			case 7:
				_localctx = new BlockStmtContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(178);
				block();
				}
				break;
			case 8:
				_localctx = new AssignmentStmtContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(179);
				location();
				setState(180);
				match(T__19);
				setState(181);
				expression(0);
				setState(182);
				match(T__4);
				}
				break;
			case 9:
				_localctx = new ExpressionStmtContext(_localctx);
				enterOuterAlt(_localctx, 9);
				{
				setState(184);
				expression(0);
				setState(185);
				match(T__4);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LocationContext extends ParserRuleContext {
		public LocationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_location; }
	 
		public LocationContext() { }
		public void copyFrom(LocationContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class IdLocationContext extends LocationContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public IdLocationContext(LocationContext ctx) { copyFrom(ctx); }
	}
	public static class IdDotLocationContext extends LocationContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public LocationContext location() {
			return getRuleContext(LocationContext.class,0);
		}
		public IdDotLocationContext(LocationContext ctx) { copyFrom(ctx); }
	}
	public static class ArrLocationContext extends LocationContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ArrLocationContext(LocationContext ctx) { copyFrom(ctx); }
	}
	public static class IdArrDotLocationContext extends LocationContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public LocationContext location() {
			return getRuleContext(LocationContext.class,0);
		}
		public IdArrDotLocationContext(LocationContext ctx) { copyFrom(ctx); }
	}

	public final LocationContext location() throws RecognitionException {
		LocationContext _localctx = new LocationContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_location);
		try {
			setState(206);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				_localctx = new IdLocationContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(189);
				id();
				}
				break;
			case 2:
				_localctx = new ArrLocationContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(190);
				id();
				setState(191);
				match(T__5);
				setState(192);
				expression(0);
				setState(193);
				match(T__6);
				}
				break;
			case 3:
				_localctx = new IdDotLocationContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(195);
				id();
				setState(196);
				match(T__20);
				setState(197);
				location();
				}
				break;
			case 4:
				_localctx = new IdArrDotLocationContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(199);
				id();
				setState(200);
				match(T__5);
				setState(201);
				expression(0);
				setState(202);
				match(T__6);
				setState(203);
				match(T__20);
				setState(204);
				location();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	 
		public ExpressionContext() { }
		public void copyFrom(ExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class MethodCallExprContext extends ExpressionContext {
		public MethodCallContext methodCall() {
			return getRuleContext(MethodCallContext.class,0);
		}
		public MethodCallExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ParExprContext extends ExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ParExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class NotExprContext extends ExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public NotExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class EqOpExprContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public EqOpExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class RelOpExprContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public RelOpExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LocationExprContext extends ExpressionContext {
		public LocationContext location() {
			return getRuleContext(LocationContext.class,0);
		}
		public LocationExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class CondOpExprContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public CondOpExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LiteralExprContext extends ExpressionContext {
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public LiteralExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class NegativeExprContext extends ExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public NegativeExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class SecondArithOpExprContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public SecondArithOpExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class FirstArithOpExprContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public FirstArithOpExprContext(ExpressionContext ctx) { copyFrom(ctx); }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 24;
		enterRecursionRule(_localctx, 24, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(220);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				{
				_localctx = new LocationExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(209);
				location();
				}
				break;
			case 2:
				{
				_localctx = new MethodCallExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(210);
				methodCall();
				}
				break;
			case 3:
				{
				_localctx = new LiteralExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(211);
				literal();
				}
				break;
			case 4:
				{
				_localctx = new NegativeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(212);
				match(T__25);
				setState(213);
				expression(3);
				}
				break;
			case 5:
				{
				_localctx = new NotExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(214);
				match(T__34);
				setState(215);
				expression(2);
				}
				break;
			case 6:
				{
				_localctx = new ParExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(216);
				match(T__12);
				setState(217);
				expression(0);
				setState(218);
				match(T__14);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(239);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(237);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
					case 1:
						{
						_localctx = new FirstArithOpExprContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(222);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(223);
						((FirstArithOpExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__21) | (1L << T__22) | (1L << T__23))) != 0)) ) {
							((FirstArithOpExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(224);
						expression(9);
						}
						break;
					case 2:
						{
						_localctx = new SecondArithOpExprContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(225);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(226);
						((SecondArithOpExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==T__24 || _la==T__25) ) {
							((SecondArithOpExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(227);
						expression(8);
						}
						break;
					case 3:
						{
						_localctx = new RelOpExprContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(228);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(229);
						((RelOpExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__26) | (1L << T__27) | (1L << T__28) | (1L << T__29))) != 0)) ) {
							((RelOpExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(230);
						expression(7);
						}
						break;
					case 4:
						{
						_localctx = new EqOpExprContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(231);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(232);
						((EqOpExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==T__30 || _la==T__31) ) {
							((EqOpExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(233);
						expression(6);
						}
						break;
					case 5:
						{
						_localctx = new CondOpExprContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(234);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(235);
						((CondOpExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==T__32 || _la==T__33) ) {
							((CondOpExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(236);
						expression(5);
						}
						break;
					}
					} 
				}
				setState(241);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class MethodCallContext extends ParserRuleContext {
		public MethodCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_methodCall; }
	 
		public MethodCallContext() { }
		public void copyFrom(MethodCallContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class MethodCallDeclContext extends MethodCallContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public List<ArgContext> arg() {
			return getRuleContexts(ArgContext.class);
		}
		public ArgContext arg(int i) {
			return getRuleContext(ArgContext.class,i);
		}
		public MethodCallDeclContext(MethodCallContext ctx) { copyFrom(ctx); }
	}

	public final MethodCallContext methodCall() throws RecognitionException {
		MethodCallContext _localctx = new MethodCallContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_methodCall);
		int _la;
		try {
			_localctx = new MethodCallDeclContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(242);
			id();
			setState(243);
			match(T__12);
			setState(254);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__12) | (1L << T__25) | (1L << T__34) | (1L << T__35) | (1L << T__36) | (1L << T__37) | (1L << ID) | (1L << DIGIT))) != 0)) {
				{
				{
				setState(244);
				arg();
				setState(249);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__13) {
					{
					{
					setState(245);
					match(T__13);
					setState(246);
					arg();
					}
					}
					setState(251);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				}
				setState(256);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(257);
			match(T__14);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgContext extends ParserRuleContext {
		public ArgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arg; }
	 
		public ArgContext() { }
		public void copyFrom(ArgContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ArgDeclContext extends ArgContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ArgDeclContext(ArgContext ctx) { copyFrom(ctx); }
	}

	public final ArgContext arg() throws RecognitionException {
		ArgContext _localctx = new ArgContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_arg);
		try {
			_localctx = new ArgDeclContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(259);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralContext extends ParserRuleContext {
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	 
		public LiteralContext() { }
		public void copyFrom(LiteralContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class IntLiteralContext extends LiteralContext {
		public Int_literalContext int_literal() {
			return getRuleContext(Int_literalContext.class,0);
		}
		public IntLiteralContext(LiteralContext ctx) { copyFrom(ctx); }
	}
	public static class CharLiteralContext extends LiteralContext {
		public Char_literalContext char_literal() {
			return getRuleContext(Char_literalContext.class,0);
		}
		public CharLiteralContext(LiteralContext ctx) { copyFrom(ctx); }
	}
	public static class BoolLiteralContext extends LiteralContext {
		public Bool_literalContext bool_literal() {
			return getRuleContext(Bool_literalContext.class,0);
		}
		public BoolLiteralContext(LiteralContext ctx) { copyFrom(ctx); }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_literal);
		try {
			setState(264);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DIGIT:
				_localctx = new IntLiteralContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(261);
				int_literal();
				}
				break;
			case T__35:
				_localctx = new CharLiteralContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(262);
				char_literal();
				}
				break;
			case T__36:
			case T__37:
				_localctx = new BoolLiteralContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(263);
				bool_literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Char_literalContext extends ParserRuleContext {
		public Char_literalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_char_literal; }
	 
		public Char_literalContext() { }
		public void copyFrom(Char_literalContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class CharLiteralDeclContext extends Char_literalContext {
		public TerminalNode LETTER() { return getToken(DecafParser.LETTER, 0); }
		public CharLiteralDeclContext(Char_literalContext ctx) { copyFrom(ctx); }
	}

	public final Char_literalContext char_literal() throws RecognitionException {
		Char_literalContext _localctx = new Char_literalContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_char_literal);
		try {
			_localctx = new CharLiteralDeclContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(266);
			match(T__35);
			setState(267);
			match(LETTER);
			setState(268);
			match(T__35);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Int_literalContext extends ParserRuleContext {
		public Int_literalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_int_literal; }
	 
		public Int_literalContext() { }
		public void copyFrom(Int_literalContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class NumLiteralContext extends Int_literalContext {
		public NumContext num() {
			return getRuleContext(NumContext.class,0);
		}
		public NumLiteralContext(Int_literalContext ctx) { copyFrom(ctx); }
	}

	public final Int_literalContext int_literal() throws RecognitionException {
		Int_literalContext _localctx = new Int_literalContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_int_literal);
		try {
			_localctx = new NumLiteralContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(270);
			num();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Bool_literalContext extends ParserRuleContext {
		public Bool_literalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bool_literal; }
	 
		public Bool_literalContext() { }
		public void copyFrom(Bool_literalContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class FalseLiteralContext extends Bool_literalContext {
		public FalseLiteralContext(Bool_literalContext ctx) { copyFrom(ctx); }
	}
	public static class TrueLiteralContext extends Bool_literalContext {
		public TrueLiteralContext(Bool_literalContext ctx) { copyFrom(ctx); }
	}

	public final Bool_literalContext bool_literal() throws RecognitionException {
		Bool_literalContext _localctx = new Bool_literalContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_bool_literal);
		try {
			setState(274);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__36:
				_localctx = new TrueLiteralContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(272);
				match(T__36);
				}
				break;
			case T__37:
				_localctx = new FalseLiteralContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(273);
				match(T__37);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdContext extends ParserRuleContext {
		public IdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_id; }
	 
		public IdContext() { }
		public void copyFrom(IdContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class IdDeclContext extends IdContext {
		public TerminalNode ID() { return getToken(DecafParser.ID, 0); }
		public IdDeclContext(IdContext ctx) { copyFrom(ctx); }
	}

	public final IdContext id() throws RecognitionException {
		IdContext _localctx = new IdContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_id);
		try {
			_localctx = new IdDeclContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(276);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NumContext extends ParserRuleContext {
		public NumContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_num; }
	 
		public NumContext() { }
		public void copyFrom(NumContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class NumDeclContext extends NumContext {
		public List<TerminalNode> DIGIT() { return getTokens(DecafParser.DIGIT); }
		public TerminalNode DIGIT(int i) {
			return getToken(DecafParser.DIGIT, i);
		}
		public NumDeclContext(NumContext ctx) { copyFrom(ctx); }
	}

	public final NumContext num() throws RecognitionException {
		NumContext _localctx = new NumContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_num);
		try {
			int _alt;
			_localctx = new NumDeclContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(279); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(278);
					match(DIGIT);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(281); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 12:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 8);
		case 1:
			return precpred(_ctx, 7);
		case 2:
			return precpred(_ctx, 6);
		case 3:
			return precpred(_ctx, 5);
		case 4:
			return precpred(_ctx, 4);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3-\u011e\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\3\2\3\2\3\2\3\2\7\2\61\n\2\f"+
		"\2\16\2\64\13\2\3\2\3\2\3\3\3\3\3\3\5\3;\n\3\3\4\3\4\3\4\3\4\3\4\3\4\3"+
		"\4\3\4\3\4\3\4\3\4\5\4H\n\4\3\5\3\5\3\5\3\5\7\5N\n\5\f\5\16\5Q\13\5\3"+
		"\5\3\5\5\5U\n\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6^\n\6\3\7\3\7\3\7\3\7\3"+
		"\7\3\7\7\7f\n\7\f\7\16\7i\13\7\7\7k\n\7\f\7\16\7n\13\7\3\7\3\7\3\7\3\b"+
		"\3\b\3\b\3\b\5\bw\n\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\5\t\u0082\n"+
		"\t\3\n\3\n\3\n\5\n\u0087\n\n\3\13\3\13\7\13\u008b\n\13\f\13\16\13\u008e"+
		"\13\13\3\13\7\13\u0091\n\13\f\13\16\13\u0094\13\13\3\13\3\13\3\f\3\f\3"+
		"\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f"+
		"\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3"+
		"\f\5\f\u00be\n\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3"+
		"\r\3\r\3\r\3\r\5\r\u00d1\n\r\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3"+
		"\16\3\16\3\16\3\16\5\16\u00df\n\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\7\16\u00f0\n\16\f\16\16\16\u00f3"+
		"\13\16\3\17\3\17\3\17\3\17\3\17\7\17\u00fa\n\17\f\17\16\17\u00fd\13\17"+
		"\7\17\u00ff\n\17\f\17\16\17\u0102\13\17\3\17\3\17\3\20\3\20\3\21\3\21"+
		"\3\21\5\21\u010b\n\21\3\22\3\22\3\22\3\22\3\23\3\23\3\24\3\24\5\24\u0115"+
		"\n\24\3\25\3\25\3\26\6\26\u011a\n\26\r\26\16\26\u011b\3\26\2\3\32\27\2"+
		"\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*\2\7\3\2\30\32\3\2\33\34\3"+
		"\2\35 \3\2!\"\3\2#$\2\u0139\2,\3\2\2\2\4:\3\2\2\2\6G\3\2\2\2\bI\3\2\2"+
		"\2\n]\3\2\2\2\f_\3\2\2\2\16v\3\2\2\2\20\u0081\3\2\2\2\22\u0086\3\2\2\2"+
		"\24\u0088\3\2\2\2\26\u00bd\3\2\2\2\30\u00d0\3\2\2\2\32\u00de\3\2\2\2\34"+
		"\u00f4\3\2\2\2\36\u0105\3\2\2\2 \u010a\3\2\2\2\"\u010c\3\2\2\2$\u0110"+
		"\3\2\2\2&\u0114\3\2\2\2(\u0116\3\2\2\2*\u0119\3\2\2\2,-\7\3\2\2-.\7\4"+
		"\2\2.\62\7\5\2\2/\61\5\4\3\2\60/\3\2\2\2\61\64\3\2\2\2\62\60\3\2\2\2\62"+
		"\63\3\2\2\2\63\65\3\2\2\2\64\62\3\2\2\2\65\66\7\6\2\2\66\3\3\2\2\2\67"+
		";\5\b\5\28;\5\6\4\29;\5\f\7\2:\67\3\2\2\2:8\3\2\2\2:9\3\2\2\2;\5\3\2\2"+
		"\2<=\5\n\6\2=>\5(\25\2>?\7\7\2\2?H\3\2\2\2@A\5\n\6\2AB\5(\25\2BC\7\b\2"+
		"\2CD\5*\26\2DE\7\t\2\2EF\7\7\2\2FH\3\2\2\2G<\3\2\2\2G@\3\2\2\2H\7\3\2"+
		"\2\2IJ\7\n\2\2JK\5(\25\2KO\7\5\2\2LN\5\6\4\2ML\3\2\2\2NQ\3\2\2\2OM\3\2"+
		"\2\2OP\3\2\2\2PR\3\2\2\2QO\3\2\2\2RT\7\6\2\2SU\7\7\2\2TS\3\2\2\2TU\3\2"+
		"\2\2U\t\3\2\2\2V^\7\13\2\2W^\7\f\2\2X^\7\r\2\2YZ\7\n\2\2Z^\5(\25\2[^\5"+
		"\b\5\2\\^\7\16\2\2]V\3\2\2\2]W\3\2\2\2]X\3\2\2\2]Y\3\2\2\2][\3\2\2\2]"+
		"\\\3\2\2\2^\13\3\2\2\2_`\5\16\b\2`a\5(\25\2al\7\17\2\2bg\5\20\t\2cd\7"+
		"\20\2\2df\5\20\t\2ec\3\2\2\2fi\3\2\2\2ge\3\2\2\2gh\3\2\2\2hk\3\2\2\2i"+
		"g\3\2\2\2jb\3\2\2\2kn\3\2\2\2lj\3\2\2\2lm\3\2\2\2mo\3\2\2\2nl\3\2\2\2"+
		"op\7\21\2\2pq\5\24\13\2q\r\3\2\2\2rw\7\13\2\2sw\7\f\2\2tw\7\r\2\2uw\7"+
		"\16\2\2vr\3\2\2\2vs\3\2\2\2vt\3\2\2\2vu\3\2\2\2w\17\3\2\2\2xy\5\22\n\2"+
		"yz\5(\25\2z\u0082\3\2\2\2{|\5\22\n\2|}\5(\25\2}~\7\b\2\2~\177\7\t\2\2"+
		"\177\u0082\3\2\2\2\u0080\u0082\7\16\2\2\u0081x\3\2\2\2\u0081{\3\2\2\2"+
		"\u0081\u0080\3\2\2\2\u0082\21\3\2\2\2\u0083\u0087\7\13\2\2\u0084\u0087"+
		"\7\f\2\2\u0085\u0087\7\r\2\2\u0086\u0083\3\2\2\2\u0086\u0084\3\2\2\2\u0086"+
		"\u0085\3\2\2\2\u0087\23\3\2\2\2\u0088\u008c\7\5\2\2\u0089\u008b\5\6\4"+
		"\2\u008a\u0089\3\2\2\2\u008b\u008e\3\2\2\2\u008c\u008a\3\2\2\2\u008c\u008d"+
		"\3\2\2\2\u008d\u0092\3\2\2\2\u008e\u008c\3\2\2\2\u008f\u0091\5\26\f\2"+
		"\u0090\u008f\3\2\2\2\u0091\u0094\3\2\2\2\u0092\u0090\3\2\2\2\u0092\u0093"+
		"\3\2\2\2\u0093\u0095\3\2\2\2\u0094\u0092\3\2\2\2\u0095\u0096\7\6\2\2\u0096"+
		"\25\3\2\2\2\u0097\u0098\7\22\2\2\u0098\u0099\7\17\2\2\u0099\u009a\5\32"+
		"\16\2\u009a\u009b\7\21\2\2\u009b\u009c\5\24\13\2\u009c\u00be\3\2\2\2\u009d"+
		"\u009e\7\22\2\2\u009e\u009f\7\17\2\2\u009f\u00a0\5\32\16\2\u00a0\u00a1"+
		"\7\21\2\2\u00a1\u00a2\5\24\13\2\u00a2\u00a3\7\23\2\2\u00a3\u00a4\5\24"+
		"\13\2\u00a4\u00be\3\2\2\2\u00a5\u00a6\7\24\2\2\u00a6\u00a7\7\17\2\2\u00a7"+
		"\u00a8\5\32\16\2\u00a8\u00a9\7\21\2\2\u00a9\u00aa\5\24\13\2\u00aa\u00be"+
		"\3\2\2\2\u00ab\u00ac\7\25\2\2\u00ac\u00ad\5\32\16\2\u00ad\u00ae\7\7\2"+
		"\2\u00ae\u00be\3\2\2\2\u00af\u00b0\7\25\2\2\u00b0\u00be\7\7\2\2\u00b1"+
		"\u00b2\5\34\17\2\u00b2\u00b3\7\7\2\2\u00b3\u00be\3\2\2\2\u00b4\u00be\5"+
		"\24\13\2\u00b5\u00b6\5\30\r\2\u00b6\u00b7\7\26\2\2\u00b7\u00b8\5\32\16"+
		"\2\u00b8\u00b9\7\7\2\2\u00b9\u00be\3\2\2\2\u00ba\u00bb\5\32\16\2\u00bb"+
		"\u00bc\7\7\2\2\u00bc\u00be\3\2\2\2\u00bd\u0097\3\2\2\2\u00bd\u009d\3\2"+
		"\2\2\u00bd\u00a5\3\2\2\2\u00bd\u00ab\3\2\2\2\u00bd\u00af\3\2\2\2\u00bd"+
		"\u00b1\3\2\2\2\u00bd\u00b4\3\2\2\2\u00bd\u00b5\3\2\2\2\u00bd\u00ba\3\2"+
		"\2\2\u00be\27\3\2\2\2\u00bf\u00d1\5(\25\2\u00c0\u00c1\5(\25\2\u00c1\u00c2"+
		"\7\b\2\2\u00c2\u00c3\5\32\16\2\u00c3\u00c4\7\t\2\2\u00c4\u00d1\3\2\2\2"+
		"\u00c5\u00c6\5(\25\2\u00c6\u00c7\7\27\2\2\u00c7\u00c8\5\30\r\2\u00c8\u00d1"+
		"\3\2\2\2\u00c9\u00ca\5(\25\2\u00ca\u00cb\7\b\2\2\u00cb\u00cc\5\32\16\2"+
		"\u00cc\u00cd\7\t\2\2\u00cd\u00ce\7\27\2\2\u00ce\u00cf\5\30\r\2\u00cf\u00d1"+
		"\3\2\2\2\u00d0\u00bf\3\2\2\2\u00d0\u00c0\3\2\2\2\u00d0\u00c5\3\2\2\2\u00d0"+
		"\u00c9\3\2\2\2\u00d1\31\3\2\2\2\u00d2\u00d3\b\16\1\2\u00d3\u00df\5\30"+
		"\r\2\u00d4\u00df\5\34\17\2\u00d5\u00df\5 \21\2\u00d6\u00d7\7\34\2\2\u00d7"+
		"\u00df\5\32\16\5\u00d8\u00d9\7%\2\2\u00d9\u00df\5\32\16\4\u00da\u00db"+
		"\7\17\2\2\u00db\u00dc\5\32\16\2\u00dc\u00dd\7\21\2\2\u00dd\u00df\3\2\2"+
		"\2\u00de\u00d2\3\2\2\2\u00de\u00d4\3\2\2\2\u00de\u00d5\3\2\2\2\u00de\u00d6"+
		"\3\2\2\2\u00de\u00d8\3\2\2\2\u00de\u00da\3\2\2\2\u00df\u00f1\3\2\2\2\u00e0"+
		"\u00e1\f\n\2\2\u00e1\u00e2\t\2\2\2\u00e2\u00f0\5\32\16\13\u00e3\u00e4"+
		"\f\t\2\2\u00e4\u00e5\t\3\2\2\u00e5\u00f0\5\32\16\n\u00e6\u00e7\f\b\2\2"+
		"\u00e7\u00e8\t\4\2\2\u00e8\u00f0\5\32\16\t\u00e9\u00ea\f\7\2\2\u00ea\u00eb"+
		"\t\5\2\2\u00eb\u00f0\5\32\16\b\u00ec\u00ed\f\6\2\2\u00ed\u00ee\t\6\2\2"+
		"\u00ee\u00f0\5\32\16\7\u00ef\u00e0\3\2\2\2\u00ef\u00e3\3\2\2\2\u00ef\u00e6"+
		"\3\2\2\2\u00ef\u00e9\3\2\2\2\u00ef\u00ec\3\2\2\2\u00f0\u00f3\3\2\2\2\u00f1"+
		"\u00ef\3\2\2\2\u00f1\u00f2\3\2\2\2\u00f2\33\3\2\2\2\u00f3\u00f1\3\2\2"+
		"\2\u00f4\u00f5\5(\25\2\u00f5\u0100\7\17\2\2\u00f6\u00fb\5\36\20\2\u00f7"+
		"\u00f8\7\20\2\2\u00f8\u00fa\5\36\20\2\u00f9\u00f7\3\2\2\2\u00fa\u00fd"+
		"\3\2\2\2\u00fb\u00f9\3\2\2\2\u00fb\u00fc\3\2\2\2\u00fc\u00ff\3\2\2\2\u00fd"+
		"\u00fb\3\2\2\2\u00fe\u00f6\3\2\2\2\u00ff\u0102\3\2\2\2\u0100\u00fe\3\2"+
		"\2\2\u0100\u0101\3\2\2\2\u0101\u0103\3\2\2\2\u0102\u0100\3\2\2\2\u0103"+
		"\u0104\7\21\2\2\u0104\35\3\2\2\2\u0105\u0106\5\32\16\2\u0106\37\3\2\2"+
		"\2\u0107\u010b\5$\23\2\u0108\u010b\5\"\22\2\u0109\u010b\5&\24\2\u010a"+
		"\u0107\3\2\2\2\u010a\u0108\3\2\2\2\u010a\u0109\3\2\2\2\u010b!\3\2\2\2"+
		"\u010c\u010d\7&\2\2\u010d\u010e\7+\2\2\u010e\u010f\7&\2\2\u010f#\3\2\2"+
		"\2\u0110\u0111\5*\26\2\u0111%\3\2\2\2\u0112\u0115\7\'\2\2\u0113\u0115"+
		"\7(\2\2\u0114\u0112\3\2\2\2\u0114\u0113\3\2\2\2\u0115\'\3\2\2\2\u0116"+
		"\u0117\7)\2\2\u0117)\3\2\2\2\u0118\u011a\7*\2\2\u0119\u0118\3\2\2\2\u011a"+
		"\u011b\3\2\2\2\u011b\u0119\3\2\2\2\u011b\u011c\3\2\2\2\u011c+\3\2\2\2"+
		"\31\62:GOT]glv\u0081\u0086\u008c\u0092\u00bd\u00d0\u00de\u00ef\u00f1\u00fb"+
		"\u0100\u010a\u0114\u011b";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}