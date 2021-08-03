// Generated from .\Decaf\Decaf.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import DecafListener from './DecafListener.js';
import DecafVisitor from './DecafVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003-\u011b\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002",
    ";\n\u0002\f\u0002\u000e\u0002>\u000b\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u0003E\n\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004R\n\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005X\n\u0005\f\u0005",
    "\u000e\u0005[\u000b\u0005\u0003\u0005\u0003\u0005\u0005\u0005_\n\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0005\u0006h\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007p\n\u0007\f\u0007\u000e",
    "\u0007s\u000b\u0007\u0007\u0007u\n\u0007\f\u0007\u000e\u0007x\u000b",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u0088",
    "\n\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0007\u000b\u008e\n\u000b",
    "\f\u000b\u000e\u000b\u0091\u000b\u000b\u0003\u000b\u0007\u000b\u0094",
    "\n\u000b\f\u000b\u000e\u000b\u0097\u000b\u000b\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00a2",
    "\n\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0005\f\u00ac\n\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0005\f\u00b8\n\f\u0003\f\u0005\f\u00bb\n",
    "\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00c3\n\r",
    "\u0003\r\u0003\r\u0005\r\u00c7\n\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00d5\n\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00e1\n\u000e",
    "\f\u000e\u000e\u000e\u00e4\u000b\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u00eb\n\u000f\f\u000f\u000e",
    "\u000f\u00ee\u000b\u000f\u0007\u000f\u00f0\n\u000f\f\u000f\u000e\u000f",
    "\u00f3\u000b\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00fd\n\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0005\u0016",
    "\u010a\n\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001b\u0006\u001b\u0117\n\u001b\r\u001b\u000e\u001b\u0118\u0003\u001b",
    "\u0002\u0003\u001a\u001c\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.024\u0002\u000b\u0003\u0002\u000b",
    "\u000e\u0003\u0002\u000b\r\u0003\u0002\u0018\u0019\u0003\u0002\u001a",
    "\u001b\u0004\u0002\u0018\u001b\u001d\u001d\u0003\u0002\u001e!\u0003",
    "\u0002\"#\u0003\u0002$%\u0003\u0002\'(\u0002\u012c\u00026\u0003\u0002",
    "\u0002\u0002\u0004D\u0003\u0002\u0002\u0002\u0006Q\u0003\u0002\u0002",
    "\u0002\bS\u0003\u0002\u0002\u0002\ng\u0003\u0002\u0002\u0002\fi\u0003",
    "\u0002\u0002\u0002\u000e|\u0003\u0002\u0002\u0002\u0010\u0087\u0003",
    "\u0002\u0002\u0002\u0012\u0089\u0003\u0002\u0002\u0002\u0014\u008b\u0003",
    "\u0002\u0002\u0002\u0016\u00ba\u0003\u0002\u0002\u0002\u0018\u00c2\u0003",
    "\u0002\u0002\u0002\u001a\u00d4\u0003\u0002\u0002\u0002\u001c\u00e5\u0003",
    "\u0002\u0002\u0002\u001e\u00f6\u0003\u0002\u0002\u0002 \u00fc\u0003",
    "\u0002\u0002\u0002\"\u00fe\u0003\u0002\u0002\u0002$\u0100\u0003\u0002",
    "\u0002\u0002&\u0102\u0003\u0002\u0002\u0002(\u0104\u0003\u0002\u0002",
    "\u0002*\u0109\u0003\u0002\u0002\u0002,\u010b\u0003\u0002\u0002\u0002",
    ".\u010f\u0003\u0002\u0002\u00020\u0111\u0003\u0002\u0002\u00022\u0113",
    "\u0003\u0002\u0002\u00024\u0116\u0003\u0002\u0002\u000267\u0007\u0003",
    "\u0002\u000278\u0007\u0004\u0002\u00028<\u0007\u0005\u0002\u00029;\u0005",
    "\u0004\u0003\u0002:9\u0003\u0002\u0002\u0002;>\u0003\u0002\u0002\u0002",
    "<:\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=?\u0003\u0002\u0002",
    "\u0002><\u0003\u0002\u0002\u0002?@\u0007\u0006\u0002\u0002@\u0003\u0003",
    "\u0002\u0002\u0002AE\u0005\b\u0005\u0002BE\u0005\u0006\u0004\u0002C",
    "E\u0005\f\u0007\u0002DA\u0003\u0002\u0002\u0002DB\u0003\u0002\u0002",
    "\u0002DC\u0003\u0002\u0002\u0002E\u0005\u0003\u0002\u0002\u0002FG\u0005",
    "\n\u0006\u0002GH\u00052\u001a\u0002HI\u0007\u0007\u0002\u0002IR\u0003",
    "\u0002\u0002\u0002JK\u0005\n\u0006\u0002KL\u00052\u001a\u0002LM\u0007",
    "\b\u0002\u0002MN\u00054\u001b\u0002NO\u0007\t\u0002\u0002OP\u0007\u0007",
    "\u0002\u0002PR\u0003\u0002\u0002\u0002QF\u0003\u0002\u0002\u0002QJ\u0003",
    "\u0002\u0002\u0002R\u0007\u0003\u0002\u0002\u0002ST\u0007\n\u0002\u0002",
    "TU\u00052\u001a\u0002UY\u0007\u0005\u0002\u0002VX\u0005\u0006\u0004",
    "\u0002WV\u0003\u0002\u0002\u0002X[\u0003\u0002\u0002\u0002YW\u0003\u0002",
    "\u0002\u0002YZ\u0003\u0002\u0002\u0002Z\\\u0003\u0002\u0002\u0002[Y",
    "\u0003\u0002\u0002\u0002\\^\u0007\u0006\u0002\u0002]_\u0007\u0007\u0002",
    "\u0002^]\u0003\u0002\u0002\u0002^_\u0003\u0002\u0002\u0002_\t\u0003",
    "\u0002\u0002\u0002`h\u0007\u000b\u0002\u0002ah\u0007\f\u0002\u0002b",
    "h\u0007\r\u0002\u0002cd\u0007\n\u0002\u0002dh\u00052\u001a\u0002eh\u0005",
    "\b\u0005\u0002fh\u0007\u000e\u0002\u0002g`\u0003\u0002\u0002\u0002g",
    "a\u0003\u0002\u0002\u0002gb\u0003\u0002\u0002\u0002gc\u0003\u0002\u0002",
    "\u0002ge\u0003\u0002\u0002\u0002gf\u0003\u0002\u0002\u0002h\u000b\u0003",
    "\u0002\u0002\u0002ij\u0005\u000e\b\u0002jk\u00052\u001a\u0002kv\u0007",
    "\u000f\u0002\u0002lq\u0005\u0010\t\u0002mn\u0007\u0010\u0002\u0002n",
    "p\u0005\u0010\t\u0002om\u0003\u0002\u0002\u0002ps\u0003\u0002\u0002",
    "\u0002qo\u0003\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002ru\u0003\u0002",
    "\u0002\u0002sq\u0003\u0002\u0002\u0002tl\u0003\u0002\u0002\u0002ux\u0003",
    "\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002",
    "wy\u0003\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002yz\u0007\u0011\u0002",
    "\u0002z{\u0005\u0014\u000b\u0002{\r\u0003\u0002\u0002\u0002|}\t\u0002",
    "\u0002\u0002}\u000f\u0003\u0002\u0002\u0002~\u007f\u0005\u0012\n\u0002",
    "\u007f\u0080\u00052\u001a\u0002\u0080\u0088\u0003\u0002\u0002\u0002",
    "\u0081\u0082\u0005\u0012\n\u0002\u0082\u0083\u00052\u001a\u0002\u0083",
    "\u0084\u0007\b\u0002\u0002\u0084\u0085\u0007\t\u0002\u0002\u0085\u0088",
    "\u0003\u0002\u0002\u0002\u0086\u0088\u0007\u000e\u0002\u0002\u0087~",
    "\u0003\u0002\u0002\u0002\u0087\u0081\u0003\u0002\u0002\u0002\u0087\u0086",
    "\u0003\u0002\u0002\u0002\u0088\u0011\u0003\u0002\u0002\u0002\u0089\u008a",
    "\t\u0003\u0002\u0002\u008a\u0013\u0003\u0002\u0002\u0002\u008b\u008f",
    "\u0007\u0005\u0002\u0002\u008c\u008e\u0005\u0006\u0004\u0002\u008d\u008c",
    "\u0003\u0002\u0002\u0002\u008e\u0091\u0003\u0002\u0002\u0002\u008f\u008d",
    "\u0003\u0002\u0002\u0002\u008f\u0090\u0003\u0002\u0002\u0002\u0090\u0095",
    "\u0003\u0002\u0002\u0002\u0091\u008f\u0003\u0002\u0002\u0002\u0092\u0094",
    "\u0005\u0016\f\u0002\u0093\u0092\u0003\u0002\u0002\u0002\u0094\u0097",
    "\u0003\u0002\u0002\u0002\u0095\u0093\u0003\u0002\u0002\u0002\u0095\u0096",
    "\u0003\u0002\u0002\u0002\u0096\u0098\u0003\u0002\u0002\u0002\u0097\u0095",
    "\u0003\u0002\u0002\u0002\u0098\u0099\u0007\u0006\u0002\u0002\u0099\u0015",
    "\u0003\u0002\u0002\u0002\u009a\u009b\u0007\u0012\u0002\u0002\u009b\u009c",
    "\u0007\u000f\u0002\u0002\u009c\u009d\u0005\u001a\u000e\u0002\u009d\u009e",
    "\u0007\u0011\u0002\u0002\u009e\u00a1\u0005\u0014\u000b\u0002\u009f\u00a0",
    "\u0007\u0013\u0002\u0002\u00a0\u00a2\u0005\u0014\u000b\u0002\u00a1\u009f",
    "\u0003\u0002\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2\u00bb",
    "\u0003\u0002\u0002\u0002\u00a3\u00a4\u0007\u0014\u0002\u0002\u00a4\u00a5",
    "\u0007\u000f\u0002\u0002\u00a5\u00a6\u0005\u001a\u000e\u0002\u00a6\u00a7",
    "\u0007\u0011\u0002\u0002\u00a7\u00a8\u0005\u0014\u000b\u0002\u00a8\u00bb",
    "\u0003\u0002\u0002\u0002\u00a9\u00ab\u0007\u0015\u0002\u0002\u00aa\u00ac",
    "\u0005\u001a\u000e\u0002\u00ab\u00aa\u0003\u0002\u0002\u0002\u00ab\u00ac",
    "\u0003\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad\u00bb",
    "\u0007\u0007\u0002\u0002\u00ae\u00af\u0005\u001c\u000f\u0002\u00af\u00b0",
    "\u0007\u0007\u0002\u0002\u00b0\u00bb\u0003\u0002\u0002\u0002\u00b1\u00bb",
    "\u0005\u0014\u000b\u0002\u00b2\u00b3\u0005\u0018\r\u0002\u00b3\u00b4",
    "\u0007\u0016\u0002\u0002\u00b4\u00b5\u0005\u001a\u000e\u0002\u00b5\u00bb",
    "\u0003\u0002\u0002\u0002\u00b6\u00b8\u0005\u001a\u000e\u0002\u00b7\u00b6",
    "\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8\u00b9",
    "\u0003\u0002\u0002\u0002\u00b9\u00bb\u0007\u0007\u0002\u0002\u00ba\u009a",
    "\u0003\u0002\u0002\u0002\u00ba\u00a3\u0003\u0002\u0002\u0002\u00ba\u00a9",
    "\u0003\u0002\u0002\u0002\u00ba\u00ae\u0003\u0002\u0002\u0002\u00ba\u00b1",
    "\u0003\u0002\u0002\u0002\u00ba\u00b2\u0003\u0002\u0002\u0002\u00ba\u00b7",
    "\u0003\u0002\u0002\u0002\u00bb\u0017\u0003\u0002\u0002\u0002\u00bc\u00c3",
    "\u00052\u001a\u0002\u00bd\u00be\u00052\u001a\u0002\u00be\u00bf\u0007",
    "\b\u0002\u0002\u00bf\u00c0\u0005\u001a\u000e\u0002\u00c0\u00c1\u0007",
    "\t\u0002\u0002\u00c1\u00c3\u0003\u0002\u0002\u0002\u00c2\u00bc\u0003",
    "\u0002\u0002\u0002\u00c2\u00bd\u0003\u0002\u0002\u0002\u00c3\u00c6\u0003",
    "\u0002\u0002\u0002\u00c4\u00c5\u0007\u0017\u0002\u0002\u00c5\u00c7\u0005",
    "\u0018\r\u0002\u00c6\u00c4\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003",
    "\u0002\u0002\u0002\u00c7\u0019\u0003\u0002\u0002\u0002\u00c8\u00c9\b",
    "\u000e\u0001\u0002\u00c9\u00d5\u0005\u0018\r\u0002\u00ca\u00d5\u0005",
    "\u001c\u000f\u0002\u00cb\u00d5\u0005*\u0016\u0002\u00cc\u00cd\u0007",
    "\u001b\u0002\u0002\u00cd\u00d5\u0005\u001a\u000e\u0005\u00ce\u00cf\u0007",
    "\u001c\u0002\u0002\u00cf\u00d5\u0005\u001a\u000e\u0004\u00d0\u00d1\u0007",
    "\u000f\u0002\u0002\u00d1\u00d2\u0005\u001a\u000e\u0002\u00d2\u00d3\u0007",
    "\u0011\u0002\u0002\u00d3\u00d5\u0003\u0002\u0002\u0002\u00d4\u00c8\u0003",
    "\u0002\u0002\u0002\u00d4\u00ca\u0003\u0002\u0002\u0002\u00d4\u00cb\u0003",
    "\u0002\u0002\u0002\u00d4\u00cc\u0003\u0002\u0002\u0002\u00d4\u00ce\u0003",
    "\u0002\u0002\u0002\u00d4\u00d0\u0003\u0002\u0002\u0002\u00d5\u00e2\u0003",
    "\u0002\u0002\u0002\u00d6\u00d7\f\b\u0002\u0002\u00d7\u00d8\t\u0004\u0002",
    "\u0002\u00d8\u00e1\u0005\u001a\u000e\t\u00d9\u00da\f\u0007\u0002\u0002",
    "\u00da\u00db\t\u0005\u0002\u0002\u00db\u00e1\u0005\u001a\u000e\b\u00dc",
    "\u00dd\f\u0006\u0002\u0002\u00dd\u00de\u0005 \u0011\u0002\u00de\u00df",
    "\u0005\u001a\u000e\u0007\u00df\u00e1\u0003\u0002\u0002\u0002\u00e0\u00d6",
    "\u0003\u0002\u0002\u0002\u00e0\u00d9\u0003\u0002\u0002\u0002\u00e0\u00dc",
    "\u0003\u0002\u0002\u0002\u00e1\u00e4\u0003\u0002\u0002\u0002\u00e2\u00e0",
    "\u0003\u0002\u0002\u0002\u00e2\u00e3\u0003\u0002\u0002\u0002\u00e3\u001b",
    "\u0003\u0002\u0002\u0002\u00e4\u00e2\u0003\u0002\u0002\u0002\u00e5\u00e6",
    "\u00052\u001a\u0002\u00e6\u00f1\u0007\u000f\u0002\u0002\u00e7\u00ec",
    "\u0005\u001e\u0010\u0002\u00e8\u00e9\u0007\u0010\u0002\u0002\u00e9\u00eb",
    "\u0005\u001e\u0010\u0002\u00ea\u00e8\u0003\u0002\u0002\u0002\u00eb\u00ee",
    "\u0003\u0002\u0002\u0002\u00ec\u00ea\u0003\u0002\u0002\u0002\u00ec\u00ed",
    "\u0003\u0002\u0002\u0002\u00ed\u00f0\u0003\u0002\u0002\u0002\u00ee\u00ec",
    "\u0003\u0002\u0002\u0002\u00ef\u00e7\u0003\u0002\u0002\u0002\u00f0\u00f3",
    "\u0003\u0002\u0002\u0002\u00f1\u00ef\u0003\u0002\u0002\u0002\u00f1\u00f2",
    "\u0003\u0002\u0002\u0002\u00f2\u00f4\u0003\u0002\u0002\u0002\u00f3\u00f1",
    "\u0003\u0002\u0002\u0002\u00f4\u00f5\u0007\u0011\u0002\u0002\u00f5\u001d",
    "\u0003\u0002\u0002\u0002\u00f6\u00f7\u0005\u001a\u000e\u0002\u00f7\u001f",
    "\u0003\u0002\u0002\u0002\u00f8\u00fd\u0005\"\u0012\u0002\u00f9\u00fd",
    "\u0005$\u0013\u0002\u00fa\u00fd\u0005&\u0014\u0002\u00fb\u00fd\u0005",
    "(\u0015\u0002\u00fc\u00f8\u0003\u0002\u0002\u0002\u00fc\u00f9\u0003",
    "\u0002\u0002\u0002\u00fc\u00fa\u0003\u0002\u0002\u0002\u00fc\u00fb\u0003",
    "\u0002\u0002\u0002\u00fd!\u0003\u0002\u0002\u0002\u00fe\u00ff\t\u0006",
    "\u0002\u0002\u00ff#\u0003\u0002\u0002\u0002\u0100\u0101\t\u0007\u0002",
    "\u0002\u0101%\u0003\u0002\u0002\u0002\u0102\u0103\t\b\u0002\u0002\u0103",
    "\'\u0003\u0002\u0002\u0002\u0104\u0105\t\t\u0002\u0002\u0105)\u0003",
    "\u0002\u0002\u0002\u0106\u010a\u0005.\u0018\u0002\u0107\u010a\u0005",
    ",\u0017\u0002\u0108\u010a\u00050\u0019\u0002\u0109\u0106\u0003\u0002",
    "\u0002\u0002\u0109\u0107\u0003\u0002\u0002\u0002\u0109\u0108\u0003\u0002",
    "\u0002\u0002\u010a+\u0003\u0002\u0002\u0002\u010b\u010c\u0007&\u0002",
    "\u0002\u010c\u010d\u0007+\u0002\u0002\u010d\u010e\u0007&\u0002\u0002",
    "\u010e-\u0003\u0002\u0002\u0002\u010f\u0110\u00054\u001b\u0002\u0110",
    "/\u0003\u0002\u0002\u0002\u0111\u0112\t\n\u0002\u0002\u01121\u0003\u0002",
    "\u0002\u0002\u0113\u0114\u0007)\u0002\u0002\u01143\u0003\u0002\u0002",
    "\u0002\u0115\u0117\u0007*\u0002\u0002\u0116\u0115\u0003\u0002\u0002",
    "\u0002\u0117\u0118\u0003\u0002\u0002\u0002\u0118\u0116\u0003\u0002\u0002",
    "\u0002\u0118\u0119\u0003\u0002\u0002\u0002\u01195\u0003\u0002\u0002",
    "\u0002\u001b<DQY^gqv\u0087\u008f\u0095\u00a1\u00ab\u00b7\u00ba\u00c2",
    "\u00c6\u00d4\u00e0\u00e2\u00ec\u00f1\u00fc\u0109\u0118"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class DecafParser extends antlr4.Parser {

    static grammarFileName = "Decaf.g4";
    static literalNames = [ null, "'class'", "'Program'", "'{'", "'}'", 
                            "';'", "'['", "']'", "'struct'", "'int'", "'char'", 
                            "'boolean'", "'void'", "'('", "','", "')'", 
                            "'if'", "'else'", "'while'", "'return'", "'='", 
                            "'.'", "'*'", "'/'", "'+'", "'-'", "'!'", "'%'", 
                            "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", 
                            "'&&'", "'||'", "'''", "'true'", "'false'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "ID", 
                             "DIGIT", "LETTER", "ALPHA_NUM", "WS" ];
    static ruleNames = [ "program", "declaration", "varDeclaration", "structDeclaration", 
                         "varType", "methodDeclaration", "methodType", "parameter", 
                         "parameterType", "block", "statement", "location", 
                         "expression", "methodCall", "arg", "op", "arith_op", 
                         "rel_op", "eq_op", "cond_op", "literal", "char_literal", 
                         "int_literal", "bool_literal", "id", "num" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DecafParser.ruleNames;
        this.literalNames = DecafParser.literalNames;
        this.symbolicNames = DecafParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 12:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
    		case 2:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DecafParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(DecafParser.T__0);
	        this.state = 53;
	        this.match(DecafParser.T__1);
	        this.state = 54;
	        this.match(DecafParser.T__2);
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DecafParser.T__7) | (1 << DecafParser.T__8) | (1 << DecafParser.T__9) | (1 << DecafParser.T__10) | (1 << DecafParser.T__11))) !== 0)) {
	            this.state = 55;
	            this.declaration();
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 61;
	        this.match(DecafParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DecafParser.RULE_declaration);
	    try {
	        this.state = 66;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 63;
	            this.structDeclaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 64;
	            this.varDeclaration();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 65;
	            this.methodDeclaration();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varDeclaration() {
	    let localctx = new VarDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DecafParser.RULE_varDeclaration);
	    try {
	        this.state = 79;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 68;
	            this.varType();
	            this.state = 69;
	            this.id();
	            this.state = 70;
	            this.match(DecafParser.T__4);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 72;
	            this.varType();
	            this.state = 73;
	            this.id();
	            this.state = 74;
	            this.match(DecafParser.T__5);
	            this.state = 75;
	            this.num();
	            this.state = 76;
	            this.match(DecafParser.T__6);
	            this.state = 77;
	            this.match(DecafParser.T__4);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	structDeclaration() {
	    let localctx = new StructDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DecafParser.RULE_structDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(DecafParser.T__7);
	        this.state = 82;
	        this.id();
	        this.state = 83;
	        this.match(DecafParser.T__2);
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DecafParser.T__7) | (1 << DecafParser.T__8) | (1 << DecafParser.T__9) | (1 << DecafParser.T__10) | (1 << DecafParser.T__11))) !== 0)) {
	            this.state = 84;
	            this.varDeclaration();
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 90;
	        this.match(DecafParser.T__3);
	        this.state = 92;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DecafParser.T__4) {
	            this.state = 91;
	            this.match(DecafParser.T__4);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varType() {
	    let localctx = new VarTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DecafParser.RULE_varType);
	    try {
	        this.state = 101;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 94;
	            this.match(DecafParser.T__8);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 95;
	            this.match(DecafParser.T__9);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 96;
	            this.match(DecafParser.T__10);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 97;
	            this.match(DecafParser.T__7);
	            this.state = 98;
	            this.id();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 99;
	            this.structDeclaration();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 100;
	            this.match(DecafParser.T__11);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	methodDeclaration() {
	    let localctx = new MethodDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DecafParser.RULE_methodDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.methodType();
	        this.state = 104;
	        this.id();
	        this.state = 105;
	        this.match(DecafParser.T__12);
	        this.state = 116;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DecafParser.T__8) | (1 << DecafParser.T__9) | (1 << DecafParser.T__10) | (1 << DecafParser.T__11))) !== 0)) {
	            this.state = 106;
	            this.parameter();
	            this.state = 111;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===DecafParser.T__13) {
	                this.state = 107;
	                this.match(DecafParser.T__13);
	                this.state = 108;
	                this.parameter();
	                this.state = 113;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 118;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 119;
	        this.match(DecafParser.T__14);
	        this.state = 120;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	methodType() {
	    let localctx = new MethodTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DecafParser.RULE_methodType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DecafParser.T__8) | (1 << DecafParser.T__9) | (1 << DecafParser.T__10) | (1 << DecafParser.T__11))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameter() {
	    let localctx = new ParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, DecafParser.RULE_parameter);
	    try {
	        this.state = 133;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 124;
	            this.parameterType();
	            this.state = 125;
	            this.id();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 127;
	            this.parameterType();
	            this.state = 128;
	            this.id();
	            this.state = 129;
	            this.match(DecafParser.T__5);
	            this.state = 130;
	            this.match(DecafParser.T__6);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 132;
	            this.match(DecafParser.T__11);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameterType() {
	    let localctx = new ParameterTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, DecafParser.RULE_parameterType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DecafParser.T__8) | (1 << DecafParser.T__9) | (1 << DecafParser.T__10))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, DecafParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.match(DecafParser.T__2);
	        this.state = 141;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DecafParser.T__7) | (1 << DecafParser.T__8) | (1 << DecafParser.T__9) | (1 << DecafParser.T__10) | (1 << DecafParser.T__11))) !== 0)) {
	            this.state = 138;
	            this.varDeclaration();
	            this.state = 143;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 147;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DecafParser.T__2) | (1 << DecafParser.T__4) | (1 << DecafParser.T__12) | (1 << DecafParser.T__15) | (1 << DecafParser.T__17) | (1 << DecafParser.T__18) | (1 << DecafParser.T__24) | (1 << DecafParser.T__25))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (DecafParser.T__35 - 36)) | (1 << (DecafParser.T__36 - 36)) | (1 << (DecafParser.T__37 - 36)) | (1 << (DecafParser.ID - 36)) | (1 << (DecafParser.DIGIT - 36)))) !== 0)) {
	            this.state = 144;
	            this.statement();
	            this.state = 149;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 150;
	        this.match(DecafParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, DecafParser.RULE_statement);
	    var _la = 0; // Token type
	    try {
	        this.state = 184;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 152;
	            this.match(DecafParser.T__15);
	            this.state = 153;
	            this.match(DecafParser.T__12);
	            this.state = 154;
	            this.expression(0);
	            this.state = 155;
	            this.match(DecafParser.T__14);
	            this.state = 156;
	            this.block();
	            this.state = 159;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DecafParser.T__16) {
	                this.state = 157;
	                this.match(DecafParser.T__16);
	                this.state = 158;
	                this.block();
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 161;
	            this.match(DecafParser.T__17);
	            this.state = 162;
	            this.match(DecafParser.T__12);
	            this.state = 163;
	            this.expression(0);
	            this.state = 164;
	            this.match(DecafParser.T__14);
	            this.state = 165;
	            this.block();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 167;
	            this.match(DecafParser.T__18);
	            this.state = 169;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 13)) & ~0x1f) == 0 && ((1 << (_la - 13)) & ((1 << (DecafParser.T__12 - 13)) | (1 << (DecafParser.T__24 - 13)) | (1 << (DecafParser.T__25 - 13)) | (1 << (DecafParser.T__35 - 13)) | (1 << (DecafParser.T__36 - 13)) | (1 << (DecafParser.T__37 - 13)) | (1 << (DecafParser.ID - 13)) | (1 << (DecafParser.DIGIT - 13)))) !== 0)) {
	                this.state = 168;
	                this.expression(0);
	            }

	            this.state = 171;
	            this.match(DecafParser.T__4);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 172;
	            this.methodCall();
	            this.state = 173;
	            this.match(DecafParser.T__4);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 175;
	            this.block();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 176;
	            this.location();
	            this.state = 177;
	            this.match(DecafParser.T__19);
	            this.state = 178;
	            this.expression(0);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 181;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 13)) & ~0x1f) == 0 && ((1 << (_la - 13)) & ((1 << (DecafParser.T__12 - 13)) | (1 << (DecafParser.T__24 - 13)) | (1 << (DecafParser.T__25 - 13)) | (1 << (DecafParser.T__35 - 13)) | (1 << (DecafParser.T__36 - 13)) | (1 << (DecafParser.T__37 - 13)) | (1 << (DecafParser.ID - 13)) | (1 << (DecafParser.DIGIT - 13)))) !== 0)) {
	                this.state = 180;
	                this.expression(0);
	            }

	            this.state = 183;
	            this.match(DecafParser.T__4);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	location() {
	    let localctx = new LocationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, DecafParser.RULE_location);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 186;
	            this.id();
	            break;

	        case 2:
	            this.state = 187;
	            this.id();
	            this.state = 188;
	            this.match(DecafParser.T__5);
	            this.state = 189;
	            this.expression(0);
	            this.state = 190;
	            this.match(DecafParser.T__6);
	            break;

	        }
	        this.state = 196;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        if(la_===1) {
	            this.state = 194;
	            this.match(DecafParser.T__20);
	            this.state = 195;
	            this.location();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 24;
	    this.enterRecursionRule(localctx, 24, DecafParser.RULE_expression, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 199;
	            this.location();
	            break;

	        case 2:
	            this.state = 200;
	            this.methodCall();
	            break;

	        case 3:
	            this.state = 201;
	            this.literal();
	            break;

	        case 4:
	            this.state = 202;
	            this.match(DecafParser.T__24);
	            this.state = 203;
	            this.expression(3);
	            break;

	        case 5:
	            this.state = 204;
	            this.match(DecafParser.T__25);
	            this.state = 205;
	            this.expression(2);
	            break;

	        case 6:
	            this.state = 206;
	            this.match(DecafParser.T__12);
	            this.state = 207;
	            this.expression(0);
	            this.state = 208;
	            this.match(DecafParser.T__14);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 224;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 222;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, DecafParser.RULE_expression);
	                    this.state = 212;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 213;
	                    _la = this._input.LA(1);
	                    if(!(_la===DecafParser.T__21 || _la===DecafParser.T__22)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 214;
	                    this.expression(7);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, DecafParser.RULE_expression);
	                    this.state = 215;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 216;
	                    _la = this._input.LA(1);
	                    if(!(_la===DecafParser.T__23 || _la===DecafParser.T__24)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 217;
	                    this.expression(6);
	                    break;

	                case 3:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, DecafParser.RULE_expression);
	                    this.state = 218;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 219;
	                    this.op();
	                    this.state = 220;
	                    this.expression(5);
	                    break;

	                } 
	            }
	            this.state = 226;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	methodCall() {
	    let localctx = new MethodCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, DecafParser.RULE_methodCall);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 227;
	        this.id();
	        this.state = 228;
	        this.match(DecafParser.T__12);
	        this.state = 239;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 13)) & ~0x1f) == 0 && ((1 << (_la - 13)) & ((1 << (DecafParser.T__12 - 13)) | (1 << (DecafParser.T__24 - 13)) | (1 << (DecafParser.T__25 - 13)) | (1 << (DecafParser.T__35 - 13)) | (1 << (DecafParser.T__36 - 13)) | (1 << (DecafParser.T__37 - 13)) | (1 << (DecafParser.ID - 13)) | (1 << (DecafParser.DIGIT - 13)))) !== 0)) {
	            this.state = 229;
	            this.arg();
	            this.state = 234;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===DecafParser.T__13) {
	                this.state = 230;
	                this.match(DecafParser.T__13);
	                this.state = 231;
	                this.arg();
	                this.state = 236;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 241;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 242;
	        this.match(DecafParser.T__14);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arg() {
	    let localctx = new ArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, DecafParser.RULE_arg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 244;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	op() {
	    let localctx = new OpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, DecafParser.RULE_op);
	    try {
	        this.state = 250;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DecafParser.T__21:
	        case DecafParser.T__22:
	        case DecafParser.T__23:
	        case DecafParser.T__24:
	        case DecafParser.T__26:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 246;
	            this.arith_op();
	            break;
	        case DecafParser.T__27:
	        case DecafParser.T__28:
	        case DecafParser.T__29:
	        case DecafParser.T__30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 247;
	            this.rel_op();
	            break;
	        case DecafParser.T__31:
	        case DecafParser.T__32:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 248;
	            this.eq_op();
	            break;
	        case DecafParser.T__33:
	        case DecafParser.T__34:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 249;
	            this.cond_op();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arith_op() {
	    let localctx = new Arith_opContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, DecafParser.RULE_arith_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 252;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DecafParser.T__21) | (1 << DecafParser.T__22) | (1 << DecafParser.T__23) | (1 << DecafParser.T__24) | (1 << DecafParser.T__26))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rel_op() {
	    let localctx = new Rel_opContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, DecafParser.RULE_rel_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DecafParser.T__27) | (1 << DecafParser.T__28) | (1 << DecafParser.T__29) | (1 << DecafParser.T__30))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	eq_op() {
	    let localctx = new Eq_opContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, DecafParser.RULE_eq_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        _la = this._input.LA(1);
	        if(!(_la===DecafParser.T__31 || _la===DecafParser.T__32)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cond_op() {
	    let localctx = new Cond_opContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, DecafParser.RULE_cond_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        _la = this._input.LA(1);
	        if(!(_la===DecafParser.T__33 || _la===DecafParser.T__34)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, DecafParser.RULE_literal);
	    try {
	        this.state = 263;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DecafParser.DIGIT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 260;
	            this.int_literal();
	            break;
	        case DecafParser.T__35:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 261;
	            this.char_literal();
	            break;
	        case DecafParser.T__36:
	        case DecafParser.T__37:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 262;
	            this.bool_literal();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	char_literal() {
	    let localctx = new Char_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, DecafParser.RULE_char_literal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
	        this.match(DecafParser.T__35);
	        this.state = 266;
	        this.match(DecafParser.LETTER);
	        this.state = 267;
	        this.match(DecafParser.T__35);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	int_literal() {
	    let localctx = new Int_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, DecafParser.RULE_int_literal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 269;
	        this.num();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bool_literal() {
	    let localctx = new Bool_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, DecafParser.RULE_bool_literal);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271;
	        _la = this._input.LA(1);
	        if(!(_la===DecafParser.T__36 || _la===DecafParser.T__37)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	id() {
	    let localctx = new IdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, DecafParser.RULE_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273;
	        this.match(DecafParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	num() {
	    let localctx = new NumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, DecafParser.RULE_num);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 276; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 275;
	        		this.match(DecafParser.DIGIT);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 278; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,24, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

DecafParser.EOF = antlr4.Token.EOF;
DecafParser.T__0 = 1;
DecafParser.T__1 = 2;
DecafParser.T__2 = 3;
DecafParser.T__3 = 4;
DecafParser.T__4 = 5;
DecafParser.T__5 = 6;
DecafParser.T__6 = 7;
DecafParser.T__7 = 8;
DecafParser.T__8 = 9;
DecafParser.T__9 = 10;
DecafParser.T__10 = 11;
DecafParser.T__11 = 12;
DecafParser.T__12 = 13;
DecafParser.T__13 = 14;
DecafParser.T__14 = 15;
DecafParser.T__15 = 16;
DecafParser.T__16 = 17;
DecafParser.T__17 = 18;
DecafParser.T__18 = 19;
DecafParser.T__19 = 20;
DecafParser.T__20 = 21;
DecafParser.T__21 = 22;
DecafParser.T__22 = 23;
DecafParser.T__23 = 24;
DecafParser.T__24 = 25;
DecafParser.T__25 = 26;
DecafParser.T__26 = 27;
DecafParser.T__27 = 28;
DecafParser.T__28 = 29;
DecafParser.T__29 = 30;
DecafParser.T__30 = 31;
DecafParser.T__31 = 32;
DecafParser.T__32 = 33;
DecafParser.T__33 = 34;
DecafParser.T__34 = 35;
DecafParser.T__35 = 36;
DecafParser.T__36 = 37;
DecafParser.T__37 = 38;
DecafParser.ID = 39;
DecafParser.DIGIT = 40;
DecafParser.LETTER = 41;
DecafParser.ALPHA_NUM = 42;
DecafParser.WS = 43;

DecafParser.RULE_program = 0;
DecafParser.RULE_declaration = 1;
DecafParser.RULE_varDeclaration = 2;
DecafParser.RULE_structDeclaration = 3;
DecafParser.RULE_varType = 4;
DecafParser.RULE_methodDeclaration = 5;
DecafParser.RULE_methodType = 6;
DecafParser.RULE_parameter = 7;
DecafParser.RULE_parameterType = 8;
DecafParser.RULE_block = 9;
DecafParser.RULE_statement = 10;
DecafParser.RULE_location = 11;
DecafParser.RULE_expression = 12;
DecafParser.RULE_methodCall = 13;
DecafParser.RULE_arg = 14;
DecafParser.RULE_op = 15;
DecafParser.RULE_arith_op = 16;
DecafParser.RULE_rel_op = 17;
DecafParser.RULE_eq_op = 18;
DecafParser.RULE_cond_op = 19;
DecafParser.RULE_literal = 20;
DecafParser.RULE_char_literal = 21;
DecafParser.RULE_int_literal = 22;
DecafParser.RULE_bool_literal = 23;
DecafParser.RULE_id = 24;
DecafParser.RULE_num = 25;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_program;
    }

	declaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_declaration;
    }

	structDeclaration() {
	    return this.getTypedRuleContext(StructDeclarationContext,0);
	};

	varDeclaration() {
	    return this.getTypedRuleContext(VarDeclarationContext,0);
	};

	methodDeclaration() {
	    return this.getTypedRuleContext(MethodDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_varDeclaration;
    }

	varType() {
	    return this.getTypedRuleContext(VarTypeContext,0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	num() {
	    return this.getTypedRuleContext(NumContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterVarDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitVarDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitVarDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StructDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_structDeclaration;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	varDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VarDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(VarDeclarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterStructDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitStructDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitStructDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_varType;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	structDeclaration() {
	    return this.getTypedRuleContext(StructDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterVarType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitVarType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitVarType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MethodDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_methodDeclaration;
    }

	methodType() {
	    return this.getTypedRuleContext(MethodTypeContext,0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterContext);
	    } else {
	        return this.getTypedRuleContext(ParameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterMethodDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitMethodDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitMethodDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MethodTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_methodType;
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterMethodType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitMethodType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitMethodType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_parameter;
    }

	parameterType() {
	    return this.getTypedRuleContext(ParameterTypeContext,0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitParameter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitParameter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParameterTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_parameterType;
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterParameterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitParameterType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitParameterType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_block;
    }

	varDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VarDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(VarDeclarationContext,i);
	    }
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_statement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	block = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockContext);
	    } else {
	        return this.getTypedRuleContext(BlockContext,i);
	    }
	};

	methodCall() {
	    return this.getTypedRuleContext(MethodCallContext,0);
	};

	location() {
	    return this.getTypedRuleContext(LocationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LocationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_location;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	location() {
	    return this.getTypedRuleContext(LocationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterLocation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitLocation(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitLocation(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_expression;
    }

	location() {
	    return this.getTypedRuleContext(LocationContext,0);
	};

	methodCall() {
	    return this.getTypedRuleContext(MethodCallContext,0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	op() {
	    return this.getTypedRuleContext(OpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MethodCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_methodCall;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	arg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgContext);
	    } else {
	        return this.getTypedRuleContext(ArgContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterMethodCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitMethodCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitMethodCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_arg;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterArg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitArg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitArg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_op;
    }

	arith_op() {
	    return this.getTypedRuleContext(Arith_opContext,0);
	};

	rel_op() {
	    return this.getTypedRuleContext(Rel_opContext,0);
	};

	eq_op() {
	    return this.getTypedRuleContext(Eq_opContext,0);
	};

	cond_op() {
	    return this.getTypedRuleContext(Cond_opContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Arith_opContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_arith_op;
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterArith_op(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitArith_op(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitArith_op(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Rel_opContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_rel_op;
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterRel_op(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitRel_op(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitRel_op(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Eq_opContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_eq_op;
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterEq_op(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitEq_op(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitEq_op(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Cond_opContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_cond_op;
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterCond_op(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitCond_op(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitCond_op(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_literal;
    }

	int_literal() {
	    return this.getTypedRuleContext(Int_literalContext,0);
	};

	char_literal() {
	    return this.getTypedRuleContext(Char_literalContext,0);
	};

	bool_literal() {
	    return this.getTypedRuleContext(Bool_literalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Char_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_char_literal;
    }

	LETTER() {
	    return this.getToken(DecafParser.LETTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterChar_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitChar_literal(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitChar_literal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Int_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_int_literal;
    }

	num() {
	    return this.getTypedRuleContext(NumContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterInt_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitInt_literal(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitInt_literal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Bool_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_bool_literal;
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterBool_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitBool_literal(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitBool_literal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_id;
    }

	ID() {
	    return this.getToken(DecafParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitId(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_num;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DecafParser.DIGIT);
	    } else {
	        return this.getToken(DecafParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterNum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitNum(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitNum(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




DecafParser.ProgramContext = ProgramContext; 
DecafParser.DeclarationContext = DeclarationContext; 
DecafParser.VarDeclarationContext = VarDeclarationContext; 
DecafParser.StructDeclarationContext = StructDeclarationContext; 
DecafParser.VarTypeContext = VarTypeContext; 
DecafParser.MethodDeclarationContext = MethodDeclarationContext; 
DecafParser.MethodTypeContext = MethodTypeContext; 
DecafParser.ParameterContext = ParameterContext; 
DecafParser.ParameterTypeContext = ParameterTypeContext; 
DecafParser.BlockContext = BlockContext; 
DecafParser.StatementContext = StatementContext; 
DecafParser.LocationContext = LocationContext; 
DecafParser.ExpressionContext = ExpressionContext; 
DecafParser.MethodCallContext = MethodCallContext; 
DecafParser.ArgContext = ArgContext; 
DecafParser.OpContext = OpContext; 
DecafParser.Arith_opContext = Arith_opContext; 
DecafParser.Rel_opContext = Rel_opContext; 
DecafParser.Eq_opContext = Eq_opContext; 
DecafParser.Cond_opContext = Cond_opContext; 
DecafParser.LiteralContext = LiteralContext; 
DecafParser.Char_literalContext = Char_literalContext; 
DecafParser.Int_literalContext = Int_literalContext; 
DecafParser.Bool_literalContext = Bool_literalContext; 
DecafParser.IdContext = IdContext; 
DecafParser.NumContext = NumContext; 
