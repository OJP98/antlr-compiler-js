// Generated from ./src/grammar/Decaf.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import DecafListener from './DecafListener.js';
import DecafVisitor from './DecafVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003-\u0119\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0007\u0002/\n\u0002\f\u0002\u000e\u00022\u000b\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u00039\n\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u0004G\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0007\u0005M\n\u0005\f\u0005\u000e\u0005P\u000b\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005T\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006]\n\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007",
    "\u0007e\n\u0007\f\u0007\u000e\u0007h\u000b\u0007\u0007\u0007j\n\u0007",
    "\f\u0007\u000e\u0007m\u000b\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bv\n\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u0081\n\t",
    "\u0003\n\u0003\n\u0003\n\u0005\n\u0086\n\n\u0003\u000b\u0003\u000b\u0007",
    "\u000b\u008a\n\u000b\f\u000b\u000e\u000b\u008d\u000b\u000b\u0003\u000b",
    "\u0007\u000b\u0090\n\u000b\f\u000b\u000e\u000b\u0093\u000b\u000b\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00bd\n\f\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00d0\n\r",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0005\u000e\u00de\n\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0007",
    "\u000e\u00ef\n\u000e\f\u000e\u000e\u000e\u00f2\u000b\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u00f9\n",
    "\u000f\f\u000f\u000e\u000f\u00fc\u000b\u000f\u0007\u000f\u00fe\n\u000f",
    "\f\u000f\u000e\u000f\u0101\u000b\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u010a",
    "\n\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0005\u0013",
    "\u0110\n\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0006\u0015\u0115",
    "\n\u0015\r\u0015\u000e\u0015\u0116\u0003\u0015\u0002\u0003\u001a\u0016",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c",
    "\u001e \"$&(\u0002\u0007\u0003\u0002\u0018\u001a\u0003\u0002\u001b\u001c",
    "\u0003\u0002\u001d \u0003\u0002!\"\u0003\u0002#$\u0002\u0136\u0002*",
    "\u0003\u0002\u0002\u0002\u00048\u0003\u0002\u0002\u0002\u0006F\u0003",
    "\u0002\u0002\u0002\bH\u0003\u0002\u0002\u0002\n\\\u0003\u0002\u0002",
    "\u0002\f^\u0003\u0002\u0002\u0002\u000eu\u0003\u0002\u0002\u0002\u0010",
    "\u0080\u0003\u0002\u0002\u0002\u0012\u0085\u0003\u0002\u0002\u0002\u0014",
    "\u0087\u0003\u0002\u0002\u0002\u0016\u00bc\u0003\u0002\u0002\u0002\u0018",
    "\u00cf\u0003\u0002\u0002\u0002\u001a\u00dd\u0003\u0002\u0002\u0002\u001c",
    "\u00f3\u0003\u0002\u0002\u0002\u001e\u0104\u0003\u0002\u0002\u0002 ",
    "\u0109\u0003\u0002\u0002\u0002\"\u010b\u0003\u0002\u0002\u0002$\u010f",
    "\u0003\u0002\u0002\u0002&\u0111\u0003\u0002\u0002\u0002(\u0114\u0003",
    "\u0002\u0002\u0002*+\u0007\u0003\u0002\u0002+,\u0007\u0004\u0002\u0002",
    ",0\u0007\u0005\u0002\u0002-/\u0005\u0004\u0003\u0002.-\u0003\u0002\u0002",
    "\u0002/2\u0003\u0002\u0002\u00020.\u0003\u0002\u0002\u000201\u0003\u0002",
    "\u0002\u000213\u0003\u0002\u0002\u000220\u0003\u0002\u0002\u000234\u0007",
    "\u0006\u0002\u00024\u0003\u0003\u0002\u0002\u000259\u0005\b\u0005\u0002",
    "69\u0005\u0006\u0004\u000279\u0005\f\u0007\u000285\u0003\u0002\u0002",
    "\u000286\u0003\u0002\u0002\u000287\u0003\u0002\u0002\u00029\u0005\u0003",
    "\u0002\u0002\u0002:;\u0005\n\u0006\u0002;<\u0005&\u0014\u0002<=\u0007",
    "\u0007\u0002\u0002=G\u0003\u0002\u0002\u0002>?\u0005\n\u0006\u0002?",
    "@\u0005&\u0014\u0002@A\u0007\b\u0002\u0002AB\u0005(\u0015\u0002BC\u0007",
    "\t\u0002\u0002CD\u0007\u0007\u0002\u0002DG\u0003\u0002\u0002\u0002E",
    "G\u0005\b\u0005\u0002F:\u0003\u0002\u0002\u0002F>\u0003\u0002\u0002",
    "\u0002FE\u0003\u0002\u0002\u0002G\u0007\u0003\u0002\u0002\u0002HI\u0007",
    "\n\u0002\u0002IJ\u0005&\u0014\u0002JN\u0007\u0005\u0002\u0002KM\u0005",
    "\u0006\u0004\u0002LK\u0003\u0002\u0002\u0002MP\u0003\u0002\u0002\u0002",
    "NL\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002OQ\u0003\u0002\u0002",
    "\u0002PN\u0003\u0002\u0002\u0002QS\u0007\u0006\u0002\u0002RT\u0007\u0007",
    "\u0002\u0002SR\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002T\t",
    "\u0003\u0002\u0002\u0002U]\u0007\u000b\u0002\u0002V]\u0007\f\u0002\u0002",
    "W]\u0007\r\u0002\u0002XY\u0007\n\u0002\u0002Y]\u0005&\u0014\u0002Z]",
    "\u0005\b\u0005\u0002[]\u0007\u000e\u0002\u0002\\U\u0003\u0002\u0002",
    "\u0002\\V\u0003\u0002\u0002\u0002\\W\u0003\u0002\u0002\u0002\\X\u0003",
    "\u0002\u0002\u0002\\Z\u0003\u0002\u0002\u0002\\[\u0003\u0002\u0002\u0002",
    "]\u000b\u0003\u0002\u0002\u0002^_\u0005\u000e\b\u0002_`\u0005&\u0014",
    "\u0002`k\u0007\u000f\u0002\u0002af\u0005\u0010\t\u0002bc\u0007\u0010",
    "\u0002\u0002ce\u0005\u0010\t\u0002db\u0003\u0002\u0002\u0002eh\u0003",
    "\u0002\u0002\u0002fd\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002",
    "gj\u0003\u0002\u0002\u0002hf\u0003\u0002\u0002\u0002ia\u0003\u0002\u0002",
    "\u0002jm\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002kl\u0003\u0002",
    "\u0002\u0002ln\u0003\u0002\u0002\u0002mk\u0003\u0002\u0002\u0002no\u0007",
    "\u0011\u0002\u0002op\u0005\u0014\u000b\u0002p\r\u0003\u0002\u0002\u0002",
    "qv\u0007\u000b\u0002\u0002rv\u0007\f\u0002\u0002sv\u0007\r\u0002\u0002",
    "tv\u0007\u000e\u0002\u0002uq\u0003\u0002\u0002\u0002ur\u0003\u0002\u0002",
    "\u0002us\u0003\u0002\u0002\u0002ut\u0003\u0002\u0002\u0002v\u000f\u0003",
    "\u0002\u0002\u0002wx\u0005\u0012\n\u0002xy\u0005&\u0014\u0002y\u0081",
    "\u0003\u0002\u0002\u0002z{\u0005\u0012\n\u0002{|\u0005&\u0014\u0002",
    "|}\u0007\b\u0002\u0002}~\u0007\t\u0002\u0002~\u0081\u0003\u0002\u0002",
    "\u0002\u007f\u0081\u0007\u000e\u0002\u0002\u0080w\u0003\u0002\u0002",
    "\u0002\u0080z\u0003\u0002\u0002\u0002\u0080\u007f\u0003\u0002\u0002",
    "\u0002\u0081\u0011\u0003\u0002\u0002\u0002\u0082\u0086\u0007\u000b\u0002",
    "\u0002\u0083\u0086\u0007\f\u0002\u0002\u0084\u0086\u0007\r\u0002\u0002",
    "\u0085\u0082\u0003\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002",
    "\u0085\u0084\u0003\u0002\u0002\u0002\u0086\u0013\u0003\u0002\u0002\u0002",
    "\u0087\u008b\u0007\u0005\u0002\u0002\u0088\u008a\u0005\u0006\u0004\u0002",
    "\u0089\u0088\u0003\u0002\u0002\u0002\u008a\u008d\u0003\u0002\u0002\u0002",
    "\u008b\u0089\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002",
    "\u008c\u0091\u0003\u0002\u0002\u0002\u008d\u008b\u0003\u0002\u0002\u0002",
    "\u008e\u0090\u0005\u0016\f\u0002\u008f\u008e\u0003\u0002\u0002\u0002",
    "\u0090\u0093\u0003\u0002\u0002\u0002\u0091\u008f\u0003\u0002\u0002\u0002",
    "\u0091\u0092\u0003\u0002\u0002\u0002\u0092\u0094\u0003\u0002\u0002\u0002",
    "\u0093\u0091\u0003\u0002\u0002\u0002\u0094\u0095\u0007\u0006\u0002\u0002",
    "\u0095\u0015\u0003\u0002\u0002\u0002\u0096\u0097\u0007\u0012\u0002\u0002",
    "\u0097\u0098\u0007\u000f\u0002\u0002\u0098\u0099\u0005\u001a\u000e\u0002",
    "\u0099\u009a\u0007\u0011\u0002\u0002\u009a\u009b\u0005\u0014\u000b\u0002",
    "\u009b\u00bd\u0003\u0002\u0002\u0002\u009c\u009d\u0007\u0012\u0002\u0002",
    "\u009d\u009e\u0007\u000f\u0002\u0002\u009e\u009f\u0005\u001a\u000e\u0002",
    "\u009f\u00a0\u0007\u0011\u0002\u0002\u00a0\u00a1\u0005\u0014\u000b\u0002",
    "\u00a1\u00a2\u0007\u0013\u0002\u0002\u00a2\u00a3\u0005\u0014\u000b\u0002",
    "\u00a3\u00bd\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007\u0014\u0002\u0002",
    "\u00a5\u00a6\u0007\u000f\u0002\u0002\u00a6\u00a7\u0005\u001a\u000e\u0002",
    "\u00a7\u00a8\u0007\u0011\u0002\u0002\u00a8\u00a9\u0005\u0014\u000b\u0002",
    "\u00a9\u00bd\u0003\u0002\u0002\u0002\u00aa\u00ab\u0007\u0015\u0002\u0002",
    "\u00ab\u00ac\u0005\u001a\u000e\u0002\u00ac\u00ad\u0007\u0007\u0002\u0002",
    "\u00ad\u00bd\u0003\u0002\u0002\u0002\u00ae\u00af\u0007\u0015\u0002\u0002",
    "\u00af\u00bd\u0007\u0007\u0002\u0002\u00b0\u00b1\u0005\u001c\u000f\u0002",
    "\u00b1\u00b2\u0007\u0007\u0002\u0002\u00b2\u00bd\u0003\u0002\u0002\u0002",
    "\u00b3\u00bd\u0005\u0014\u000b\u0002\u00b4\u00b5\u0005\u0018\r\u0002",
    "\u00b5\u00b6\u0007\u0016\u0002\u0002\u00b6\u00b7\u0005\u001a\u000e\u0002",
    "\u00b7\u00b8\u0007\u0007\u0002\u0002\u00b8\u00bd\u0003\u0002\u0002\u0002",
    "\u00b9\u00ba\u0005\u001a\u000e\u0002\u00ba\u00bb\u0007\u0007\u0002\u0002",
    "\u00bb\u00bd\u0003\u0002\u0002\u0002\u00bc\u0096\u0003\u0002\u0002\u0002",
    "\u00bc\u009c\u0003\u0002\u0002\u0002\u00bc\u00a4\u0003\u0002\u0002\u0002",
    "\u00bc\u00aa\u0003\u0002\u0002\u0002\u00bc\u00ae\u0003\u0002\u0002\u0002",
    "\u00bc\u00b0\u0003\u0002\u0002\u0002\u00bc\u00b3\u0003\u0002\u0002\u0002",
    "\u00bc\u00b4\u0003\u0002\u0002\u0002\u00bc\u00b9\u0003\u0002\u0002\u0002",
    "\u00bd\u0017\u0003\u0002\u0002\u0002\u00be\u00d0\u0005&\u0014\u0002",
    "\u00bf\u00c0\u0005&\u0014\u0002\u00c0\u00c1\u0007\b\u0002\u0002\u00c1",
    "\u00c2\u0005\u001a\u000e\u0002\u00c2\u00c3\u0007\t\u0002\u0002\u00c3",
    "\u00d0\u0003\u0002\u0002\u0002\u00c4\u00c5\u0005&\u0014\u0002\u00c5",
    "\u00c6\u0007\u0017\u0002\u0002\u00c6\u00c7\u0005\u0018\r\u0002\u00c7",
    "\u00d0\u0003\u0002\u0002\u0002\u00c8\u00c9\u0005&\u0014\u0002\u00c9",
    "\u00ca\u0007\b\u0002\u0002\u00ca\u00cb\u0005\u001a\u000e\u0002\u00cb",
    "\u00cc\u0007\t\u0002\u0002\u00cc\u00cd\u0007\u0017\u0002\u0002\u00cd",
    "\u00ce\u0005\u0018\r\u0002\u00ce\u00d0\u0003\u0002\u0002\u0002\u00cf",
    "\u00be\u0003\u0002\u0002\u0002\u00cf\u00bf\u0003\u0002\u0002\u0002\u00cf",
    "\u00c4\u0003\u0002\u0002\u0002\u00cf\u00c8\u0003\u0002\u0002\u0002\u00d0",
    "\u0019\u0003\u0002\u0002\u0002\u00d1\u00d2\b\u000e\u0001\u0002\u00d2",
    "\u00de\u0005\u0018\r\u0002\u00d3\u00de\u0005\u001c\u000f\u0002\u00d4",
    "\u00de\u0005 \u0011\u0002\u00d5\u00d6\u0007\u001c\u0002\u0002\u00d6",
    "\u00de\u0005\u001a\u000e\u0005\u00d7\u00d8\u0007%\u0002\u0002\u00d8",
    "\u00de\u0005\u001a\u000e\u0004\u00d9\u00da\u0007\u000f\u0002\u0002\u00da",
    "\u00db\u0005\u001a\u000e\u0002\u00db\u00dc\u0007\u0011\u0002\u0002\u00dc",
    "\u00de\u0003\u0002\u0002\u0002\u00dd\u00d1\u0003\u0002\u0002\u0002\u00dd",
    "\u00d3\u0003\u0002\u0002\u0002\u00dd\u00d4\u0003\u0002\u0002\u0002\u00dd",
    "\u00d5\u0003\u0002\u0002\u0002\u00dd\u00d7\u0003\u0002\u0002\u0002\u00dd",
    "\u00d9\u0003\u0002\u0002\u0002\u00de\u00f0\u0003\u0002\u0002\u0002\u00df",
    "\u00e0\f\n\u0002\u0002\u00e0\u00e1\t\u0002\u0002\u0002\u00e1\u00ef\u0005",
    "\u001a\u000e\u000b\u00e2\u00e3\f\t\u0002\u0002\u00e3\u00e4\t\u0003\u0002",
    "\u0002\u00e4\u00ef\u0005\u001a\u000e\n\u00e5\u00e6\f\b\u0002\u0002\u00e6",
    "\u00e7\t\u0004\u0002\u0002\u00e7\u00ef\u0005\u001a\u000e\t\u00e8\u00e9",
    "\f\u0007\u0002\u0002\u00e9\u00ea\t\u0005\u0002\u0002\u00ea\u00ef\u0005",
    "\u001a\u000e\b\u00eb\u00ec\f\u0006\u0002\u0002\u00ec\u00ed\t\u0006\u0002",
    "\u0002\u00ed\u00ef\u0005\u001a\u000e\u0007\u00ee\u00df\u0003\u0002\u0002",
    "\u0002\u00ee\u00e2\u0003\u0002\u0002\u0002\u00ee\u00e5\u0003\u0002\u0002",
    "\u0002\u00ee\u00e8\u0003\u0002\u0002\u0002\u00ee\u00eb\u0003\u0002\u0002",
    "\u0002\u00ef\u00f2\u0003\u0002\u0002\u0002\u00f0\u00ee\u0003\u0002\u0002",
    "\u0002\u00f0\u00f1\u0003\u0002\u0002\u0002\u00f1\u001b\u0003\u0002\u0002",
    "\u0002\u00f2\u00f0\u0003\u0002\u0002\u0002\u00f3\u00f4\u0005&\u0014",
    "\u0002\u00f4\u00ff\u0007\u000f\u0002\u0002\u00f5\u00fa\u0005\u001e\u0010",
    "\u0002\u00f6\u00f7\u0007\u0010\u0002\u0002\u00f7\u00f9\u0005\u001e\u0010",
    "\u0002\u00f8\u00f6\u0003\u0002\u0002\u0002\u00f9\u00fc\u0003\u0002\u0002",
    "\u0002\u00fa\u00f8\u0003\u0002\u0002\u0002\u00fa\u00fb\u0003\u0002\u0002",
    "\u0002\u00fb\u00fe\u0003\u0002\u0002\u0002\u00fc\u00fa\u0003\u0002\u0002",
    "\u0002\u00fd\u00f5\u0003\u0002\u0002\u0002\u00fe\u0101\u0003\u0002\u0002",
    "\u0002\u00ff\u00fd\u0003\u0002\u0002\u0002\u00ff\u0100\u0003\u0002\u0002",
    "\u0002\u0100\u0102\u0003\u0002\u0002\u0002\u0101\u00ff\u0003\u0002\u0002",
    "\u0002\u0102\u0103\u0007\u0011\u0002\u0002\u0103\u001d\u0003\u0002\u0002",
    "\u0002\u0104\u0105\u0005\u001a\u000e\u0002\u0105\u001f\u0003\u0002\u0002",
    "\u0002\u0106\u010a\u0005\"\u0012\u0002\u0107\u010a\u0005$\u0013\u0002",
    "\u0108\u010a\u0007(\u0002\u0002\u0109\u0106\u0003\u0002\u0002\u0002",
    "\u0109\u0107\u0003\u0002\u0002\u0002\u0109\u0108\u0003\u0002\u0002\u0002",
    "\u010a!\u0003\u0002\u0002\u0002\u010b\u010c\u0005(\u0015\u0002\u010c",
    "#\u0003\u0002\u0002\u0002\u010d\u0110\u0007&\u0002\u0002\u010e\u0110",
    "\u0007\'\u0002\u0002\u010f\u010d\u0003\u0002\u0002\u0002\u010f\u010e",
    "\u0003\u0002\u0002\u0002\u0110%\u0003\u0002\u0002\u0002\u0111\u0112",
    "\u0007)\u0002\u0002\u0112\'\u0003\u0002\u0002\u0002\u0113\u0115\u0007",
    "*\u0002\u0002\u0114\u0113\u0003\u0002\u0002\u0002\u0115\u0116\u0003",
    "\u0002\u0002\u0002\u0116\u0114\u0003\u0002\u0002\u0002\u0116\u0117\u0003",
    "\u0002\u0002\u0002\u0117)\u0003\u0002\u0002\u0002\u001908FNS\\fku\u0080",
    "\u0085\u008b\u0091\u00bc\u00cf\u00dd\u00ee\u00f0\u00fa\u00ff\u0109\u010f",
    "\u0116"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class DecafParser extends antlr4.Parser {

    static grammarFileName = "Decaf.g4";
    static literalNames = [ null, "'class'", "'Program'", "'{'", "'}'", 
                            "';'", "'['", "']'", "'struct'", "'int'", "'char'", 
                            "'boolean'", "'void'", "'('", "','", "')'", 
                            "'if'", "'else'", "'while'", "'return'", "'='", 
                            "'.'", "'*'", "'/'", "'%'", "'+'", "'-'", "'<'", 
                            "'>'", "'<='", "'>='", "'=='", "'!='", "'&&'", 
                            "'||'", "'!'", "'true'", "'false'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "CHAR_LITERAL", 
                             "ID", "DIGIT", "LETTER", "ALPHA_NUM", "WS" ];
    static ruleNames = [ "program", "declaration", "varDeclaration", "structDeclaration", 
                         "varType", "methodDeclaration", "methodType", "parameter", 
                         "parameterType", "block", "statement", "location", 
                         "expression", "methodCall", "arg", "literal", "int_literal", 
                         "bool_literal", "id", "num" ];

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
    			return this.precpred(this._ctx, 8);
    		case 1:
    			return this.precpred(this._ctx, 7);
    		case 2:
    			return this.precpred(this._ctx, 6);
    		case 3:
    			return this.precpred(this._ctx, 5);
    		case 4:
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
	        localctx = new ProgramInitContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.match(DecafParser.T__0);
	        this.state = 41;
	        this.match(DecafParser.T__1);
	        this.state = 42;
	        this.match(DecafParser.T__2);
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DecafParser.T__7) | (1 << DecafParser.T__8) | (1 << DecafParser.T__9) | (1 << DecafParser.T__10) | (1 << DecafParser.T__11))) !== 0)) {
	            this.state = 43;
	            this.declaration();
	            this.state = 48;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 49;
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
	        this.state = 54;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new DeclarationStructContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 51;
	            this.structDeclaration();
	            break;

	        case 2:
	            localctx = new DeclarationVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 52;
	            this.varDeclaration();
	            break;

	        case 3:
	            localctx = new DeclarationMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 53;
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
	        this.state = 68;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new VarDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 56;
	            this.varType();
	            this.state = 57;
	            this.id();
	            this.state = 58;
	            this.match(DecafParser.T__4);
	            break;

	        case 2:
	            localctx = new ArrDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 60;
	            this.varType();
	            this.state = 61;
	            this.id();
	            this.state = 62;
	            this.match(DecafParser.T__5);
	            this.state = 63;
	            this.num();
	            this.state = 64;
	            this.match(DecafParser.T__6);
	            this.state = 65;
	            this.match(DecafParser.T__4);
	            break;

	        case 3:
	            localctx = new StructOfStructContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 67;
	            this.structDeclaration();
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
	        localctx = new StructDeclContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.match(DecafParser.T__7);
	        this.state = 71;
	        this.id();
	        this.state = 72;
	        this.match(DecafParser.T__2);
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DecafParser.T__7) | (1 << DecafParser.T__8) | (1 << DecafParser.T__9) | (1 << DecafParser.T__10) | (1 << DecafParser.T__11))) !== 0)) {
	            this.state = 73;
	            this.varDeclaration();
	            this.state = 78;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 79;
	        this.match(DecafParser.T__3);
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DecafParser.T__4) {
	            this.state = 80;
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
	        this.state = 90;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new IntVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 83;
	            this.match(DecafParser.T__8);
	            break;

	        case 2:
	            localctx = new CharVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 84;
	            this.match(DecafParser.T__9);
	            break;

	        case 3:
	            localctx = new BooleanVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 85;
	            this.match(DecafParser.T__10);
	            break;

	        case 4:
	            localctx = new StructVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 86;
	            this.match(DecafParser.T__7);
	            this.state = 87;
	            this.id();
	            break;

	        case 5:
	            localctx = new StructDeclarationVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 88;
	            this.structDeclaration();
	            break;

	        case 6:
	            localctx = new VoidVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 89;
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
	        localctx = new MethodDeclContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.methodType();
	        this.state = 93;
	        this.id();
	        this.state = 94;
	        this.match(DecafParser.T__12);
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DecafParser.T__8) | (1 << DecafParser.T__9) | (1 << DecafParser.T__10) | (1 << DecafParser.T__11))) !== 0)) {
	            this.state = 95;
	            this.parameter();
	            this.state = 100;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===DecafParser.T__13) {
	                this.state = 96;
	                this.match(DecafParser.T__13);
	                this.state = 97;
	                this.parameter();
	                this.state = 102;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 107;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 108;
	        this.match(DecafParser.T__14);
	        this.state = 109;
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
	    try {
	        this.state = 115;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DecafParser.T__8:
	            localctx = new IntMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 111;
	            this.match(DecafParser.T__8);
	            break;
	        case DecafParser.T__9:
	            localctx = new CharMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 112;
	            this.match(DecafParser.T__9);
	            break;
	        case DecafParser.T__10:
	            localctx = new BooleanMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 113;
	            this.match(DecafParser.T__10);
	            break;
	        case DecafParser.T__11:
	            localctx = new VoidMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 114;
	            this.match(DecafParser.T__11);
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



	parameter() {
	    let localctx = new ParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, DecafParser.RULE_parameter);
	    try {
	        this.state = 126;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new IdParamContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 117;
	            this.parameterType();
	            this.state = 118;
	            this.id();
	            break;

	        case 2:
	            localctx = new IdArrParamContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 120;
	            this.parameterType();
	            this.state = 121;
	            this.id();
	            this.state = 122;
	            this.match(DecafParser.T__5);
	            this.state = 123;
	            this.match(DecafParser.T__6);
	            break;

	        case 3:
	            localctx = new VoidParamContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 125;
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
	    try {
	        this.state = 131;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DecafParser.T__8:
	            localctx = new IntParamContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 128;
	            this.match(DecafParser.T__8);
	            break;
	        case DecafParser.T__9:
	            localctx = new CharParamContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 129;
	            this.match(DecafParser.T__9);
	            break;
	        case DecafParser.T__10:
	            localctx = new BooleanParamContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 130;
	            this.match(DecafParser.T__10);
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, DecafParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        localctx = new BlockDeclContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        this.match(DecafParser.T__2);
	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DecafParser.T__7) | (1 << DecafParser.T__8) | (1 << DecafParser.T__9) | (1 << DecafParser.T__10) | (1 << DecafParser.T__11))) !== 0)) {
	            this.state = 134;
	            this.varDeclaration();
	            this.state = 139;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 143;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DecafParser.T__2) | (1 << DecafParser.T__12) | (1 << DecafParser.T__15) | (1 << DecafParser.T__17) | (1 << DecafParser.T__18) | (1 << DecafParser.T__25))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (DecafParser.T__34 - 35)) | (1 << (DecafParser.T__35 - 35)) | (1 << (DecafParser.T__36 - 35)) | (1 << (DecafParser.CHAR_LITERAL - 35)) | (1 << (DecafParser.ID - 35)) | (1 << (DecafParser.DIGIT - 35)))) !== 0)) {
	            this.state = 140;
	            this.statement();
	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 146;
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
	    try {
	        this.state = 186;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new IfStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 148;
	            this.match(DecafParser.T__15);
	            this.state = 149;
	            this.match(DecafParser.T__12);
	            this.state = 150;
	            this.expression(0);
	            this.state = 151;
	            this.match(DecafParser.T__14);
	            this.state = 152;
	            this.block();
	            break;

	        case 2:
	            localctx = new IfElseStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 154;
	            this.match(DecafParser.T__15);
	            this.state = 155;
	            this.match(DecafParser.T__12);
	            this.state = 156;
	            this.expression(0);
	            this.state = 157;
	            this.match(DecafParser.T__14);
	            this.state = 158;
	            this.block();
	            this.state = 159;
	            this.match(DecafParser.T__16);
	            this.state = 160;
	            this.block();
	            break;

	        case 3:
	            localctx = new WhileStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 162;
	            this.match(DecafParser.T__17);
	            this.state = 163;
	            this.match(DecafParser.T__12);
	            this.state = 164;
	            this.expression(0);
	            this.state = 165;
	            this.match(DecafParser.T__14);
	            this.state = 166;
	            this.block();
	            break;

	        case 4:
	            localctx = new ReturnExprStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 168;
	            this.match(DecafParser.T__18);
	            this.state = 169;
	            this.expression(0);
	            this.state = 170;
	            this.match(DecafParser.T__4);
	            break;

	        case 5:
	            localctx = new ReturnVoidStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 172;
	            this.match(DecafParser.T__18);
	            this.state = 173;
	            this.match(DecafParser.T__4);
	            break;

	        case 6:
	            localctx = new MethodStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 174;
	            this.methodCall();
	            this.state = 175;
	            this.match(DecafParser.T__4);
	            break;

	        case 7:
	            localctx = new BlockStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 177;
	            this.block();
	            break;

	        case 8:
	            localctx = new AssignmentStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 178;
	            this.location();
	            this.state = 179;
	            this.match(DecafParser.T__19);
	            this.state = 180;
	            this.expression(0);
	            this.state = 181;
	            this.match(DecafParser.T__4);
	            break;

	        case 9:
	            localctx = new ExpressionStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 183;
	            this.expression(0);
	            this.state = 184;
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
	        this.state = 205;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new IdLocationContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 188;
	            this.id();
	            break;

	        case 2:
	            localctx = new ArrLocationContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 189;
	            this.id();
	            this.state = 190;
	            this.match(DecafParser.T__5);
	            this.state = 191;
	            this.expression(0);
	            this.state = 192;
	            this.match(DecafParser.T__6);
	            break;

	        case 3:
	            localctx = new IdDotLocationContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 194;
	            this.id();
	            this.state = 195;
	            this.match(DecafParser.T__20);
	            this.state = 196;
	            this.location();
	            break;

	        case 4:
	            localctx = new IdArrDotLocationContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 198;
	            this.id();
	            this.state = 199;
	            this.match(DecafParser.T__5);
	            this.state = 200;
	            this.expression(0);
	            this.state = 201;
	            this.match(DecafParser.T__6);
	            this.state = 202;
	            this.match(DecafParser.T__20);
	            this.state = 203;
	            this.location();
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
	        this.state = 219;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LocationExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 208;
	            this.location();
	            break;

	        case 2:
	            localctx = new MethodCallExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 209;
	            this.methodCall();
	            break;

	        case 3:
	            localctx = new LiteralExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 210;
	            this.literal();
	            break;

	        case 4:
	            localctx = new NegativeExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 211;
	            this.match(DecafParser.T__25);
	            this.state = 212;
	            this.expression(3);
	            break;

	        case 5:
	            localctx = new NotExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 213;
	            this.match(DecafParser.T__34);
	            this.state = 214;
	            this.expression(2);
	            break;

	        case 6:
	            localctx = new ParExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 215;
	            this.match(DecafParser.T__12);
	            this.state = 216;
	            this.expression(0);
	            this.state = 217;
	            this.match(DecafParser.T__14);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 238;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 236;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new FirstArithOpExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DecafParser.RULE_expression);
	                    this.state = 221;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 222;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DecafParser.T__21) | (1 << DecafParser.T__22) | (1 << DecafParser.T__23))) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 223;
	                    this.expression(9);
	                    break;

	                case 2:
	                    localctx = new SecondArithOpExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DecafParser.RULE_expression);
	                    this.state = 224;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 225;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===DecafParser.T__24 || _la===DecafParser.T__25)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 226;
	                    this.expression(8);
	                    break;

	                case 3:
	                    localctx = new RelOpExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DecafParser.RULE_expression);
	                    this.state = 227;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 228;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DecafParser.T__26) | (1 << DecafParser.T__27) | (1 << DecafParser.T__28) | (1 << DecafParser.T__29))) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 229;
	                    this.expression(7);
	                    break;

	                case 4:
	                    localctx = new EqOpExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DecafParser.RULE_expression);
	                    this.state = 230;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 231;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===DecafParser.T__30 || _la===DecafParser.T__31)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 232;
	                    this.expression(6);
	                    break;

	                case 5:
	                    localctx = new CondOpExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DecafParser.RULE_expression);
	                    this.state = 233;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 234;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===DecafParser.T__32 || _la===DecafParser.T__33)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 235;
	                    this.expression(5);
	                    break;

	                } 
	            }
	            this.state = 240;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
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
	        localctx = new MethodCallDeclContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 241;
	        this.id();
	        this.state = 242;
	        this.match(DecafParser.T__12);
	        this.state = 253;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 13)) & ~0x1f) == 0 && ((1 << (_la - 13)) & ((1 << (DecafParser.T__12 - 13)) | (1 << (DecafParser.T__25 - 13)) | (1 << (DecafParser.T__34 - 13)) | (1 << (DecafParser.T__35 - 13)) | (1 << (DecafParser.T__36 - 13)) | (1 << (DecafParser.CHAR_LITERAL - 13)) | (1 << (DecafParser.ID - 13)) | (1 << (DecafParser.DIGIT - 13)))) !== 0)) {
	            this.state = 243;
	            this.arg();
	            this.state = 248;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===DecafParser.T__13) {
	                this.state = 244;
	                this.match(DecafParser.T__13);
	                this.state = 245;
	                this.arg();
	                this.state = 250;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 255;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 256;
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
	        localctx = new ArgDeclContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
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



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, DecafParser.RULE_literal);
	    try {
	        this.state = 263;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DecafParser.DIGIT:
	            localctx = new IntLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 260;
	            this.int_literal();
	            break;
	        case DecafParser.T__35:
	        case DecafParser.T__36:
	            localctx = new BoolLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 261;
	            this.bool_literal();
	            break;
	        case DecafParser.CHAR_LITERAL:
	            localctx = new CharLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 262;
	            this.match(DecafParser.CHAR_LITERAL);
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



	int_literal() {
	    let localctx = new Int_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, DecafParser.RULE_int_literal);
	    try {
	        localctx = new NumLiteralContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
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
	    this.enterRule(localctx, 34, DecafParser.RULE_bool_literal);
	    try {
	        this.state = 269;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DecafParser.T__35:
	            localctx = new TrueLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 267;
	            this.match(DecafParser.T__35);
	            break;
	        case DecafParser.T__36:
	            localctx = new FalseLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 268;
	            this.match(DecafParser.T__36);
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



	id() {
	    let localctx = new IdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, DecafParser.RULE_id);
	    try {
	        localctx = new IdDeclContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271;
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
	    this.enterRule(localctx, 38, DecafParser.RULE_num);
	    try {
	        localctx = new NumDeclContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 274; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 273;
	        		this.match(DecafParser.DIGIT);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 276; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,22, this._ctx);
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
DecafParser.CHAR_LITERAL = 38;
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
DecafParser.RULE_literal = 15;
DecafParser.RULE_int_literal = 16;
DecafParser.RULE_bool_literal = 17;
DecafParser.RULE_id = 18;
DecafParser.RULE_num = 19;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ProgramInitContext extends ProgramContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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
	        listener.enterProgramInit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitProgramInit(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitProgramInit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.ProgramInitContext = ProgramInitContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DeclarationStructContext extends DeclarationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	structDeclaration() {
	    return this.getTypedRuleContext(StructDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterDeclarationStruct(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitDeclarationStruct(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitDeclarationStruct(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.DeclarationStructContext = DeclarationStructContext;

class DeclarationMethodContext extends DeclarationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	methodDeclaration() {
	    return this.getTypedRuleContext(MethodDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterDeclarationMethod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitDeclarationMethod(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitDeclarationMethod(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.DeclarationMethodContext = DeclarationMethodContext;

class DeclarationVarContext extends DeclarationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	varDeclaration() {
	    return this.getTypedRuleContext(VarDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterDeclarationVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitDeclarationVar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitDeclarationVar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.DeclarationVarContext = DeclarationVarContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ArrDeclContext extends VarDeclarationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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
	        listener.enterArrDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitArrDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitArrDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.ArrDeclContext = ArrDeclContext;

class StructOfStructContext extends VarDeclarationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	structDeclaration() {
	    return this.getTypedRuleContext(StructDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterStructOfStruct(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitStructOfStruct(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitStructOfStruct(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.StructOfStructContext = StructOfStructContext;

class VarDeclContext extends VarDeclarationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	varType() {
	    return this.getTypedRuleContext(VarTypeContext,0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterVarDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitVarDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitVarDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.VarDeclContext = VarDeclContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class StructDeclContext extends StructDeclarationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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
	        listener.enterStructDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitStructDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitStructDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.StructDeclContext = StructDeclContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IntVarContext extends VarTypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterIntVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitIntVar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitIntVar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.IntVarContext = IntVarContext;

class VoidVarContext extends VarTypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterVoidVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitVoidVar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitVoidVar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.VoidVarContext = VoidVarContext;

class CharVarContext extends VarTypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterCharVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitCharVar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitCharVar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.CharVarContext = CharVarContext;

class StructVarContext extends VarTypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterStructVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitStructVar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitStructVar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.StructVarContext = StructVarContext;

class BooleanVarContext extends VarTypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterBooleanVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitBooleanVar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitBooleanVar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.BooleanVarContext = BooleanVarContext;

class StructDeclarationVarContext extends VarTypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	structDeclaration() {
	    return this.getTypedRuleContext(StructDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterStructDeclarationVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitStructDeclarationVar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitStructDeclarationVar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.StructDeclarationVarContext = StructDeclarationVarContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class MethodDeclContext extends MethodDeclarationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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
	        listener.enterMethodDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitMethodDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitMethodDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.MethodDeclContext = MethodDeclContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IntMethodContext extends MethodTypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterIntMethod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitIntMethod(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitIntMethod(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.IntMethodContext = IntMethodContext;

class CharMethodContext extends MethodTypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterCharMethod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitCharMethod(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitCharMethod(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.CharMethodContext = CharMethodContext;

class BooleanMethodContext extends MethodTypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterBooleanMethod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitBooleanMethod(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitBooleanMethod(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.BooleanMethodContext = BooleanMethodContext;

class VoidMethodContext extends MethodTypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterVoidMethod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitVoidMethod(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitVoidMethod(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.VoidMethodContext = VoidMethodContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IdParamContext extends ParameterContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	parameterType() {
	    return this.getTypedRuleContext(ParameterTypeContext,0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterIdParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitIdParam(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitIdParam(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.IdParamContext = IdParamContext;

class IdArrParamContext extends ParameterContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	parameterType() {
	    return this.getTypedRuleContext(ParameterTypeContext,0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterIdArrParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitIdArrParam(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitIdArrParam(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.IdArrParamContext = IdArrParamContext;

class VoidParamContext extends ParameterContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterVoidParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitVoidParam(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitVoidParam(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.VoidParamContext = VoidParamContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BooleanParamContext extends ParameterTypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterBooleanParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitBooleanParam(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitBooleanParam(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.BooleanParamContext = BooleanParamContext;

class CharParamContext extends ParameterTypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterCharParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitCharParam(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitCharParam(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.CharParamContext = CharParamContext;

class IntParamContext extends ParameterTypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterIntParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitIntParam(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitIntParam(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.IntParamContext = IntParamContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BlockDeclContext extends BlockContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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
	        listener.enterBlockDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitBlockDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitBlockDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.BlockDeclContext = BlockDeclContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ReturnExprStmtContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterReturnExprStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitReturnExprStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitReturnExprStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.ReturnExprStmtContext = ReturnExprStmtContext;

class WhileStmtContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterWhileStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitWhileStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitWhileStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.WhileStmtContext = WhileStmtContext;

class IfStmtContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterIfStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitIfStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitIfStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.IfStmtContext = IfStmtContext;

class BlockStmtContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterBlockStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitBlockStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitBlockStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.BlockStmtContext = BlockStmtContext;

class IfElseStmtContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterIfElseStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitIfElseStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitIfElseStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.IfElseStmtContext = IfElseStmtContext;

class ReturnVoidStmtContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterReturnVoidStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitReturnVoidStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitReturnVoidStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.ReturnVoidStmtContext = ReturnVoidStmtContext;

class ExpressionStmtContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterExpressionStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitExpressionStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitExpressionStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.ExpressionStmtContext = ExpressionStmtContext;

class AssignmentStmtContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	location() {
	    return this.getTypedRuleContext(LocationContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterAssignmentStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitAssignmentStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitAssignmentStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.AssignmentStmtContext = AssignmentStmtContext;

class MethodStmtContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	methodCall() {
	    return this.getTypedRuleContext(MethodCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterMethodStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitMethodStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitMethodStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.MethodStmtContext = MethodStmtContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IdLocationContext extends LocationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterIdLocation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitIdLocation(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitIdLocation(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.IdLocationContext = IdLocationContext;

class IdDotLocationContext extends LocationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	location() {
	    return this.getTypedRuleContext(LocationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterIdDotLocation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitIdDotLocation(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitIdDotLocation(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.IdDotLocationContext = IdDotLocationContext;

class ArrLocationContext extends LocationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterArrLocation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitArrLocation(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitArrLocation(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.ArrLocationContext = ArrLocationContext;

class IdArrDotLocationContext extends LocationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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
	        listener.enterIdArrDotLocation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitIdArrDotLocation(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitIdArrDotLocation(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.IdArrDotLocationContext = IdArrDotLocationContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class MethodCallExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	methodCall() {
	    return this.getTypedRuleContext(MethodCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterMethodCallExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitMethodCallExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitMethodCallExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.MethodCallExprContext = MethodCallExprContext;

class ParExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterParExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitParExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitParExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.ParExprContext = ParExprContext;

class NotExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterNotExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitNotExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitNotExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.NotExprContext = NotExprContext;

class EqOpExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

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

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterEqOpExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitEqOpExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitEqOpExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.EqOpExprContext = EqOpExprContext;

class RelOpExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

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

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterRelOpExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitRelOpExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitRelOpExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.RelOpExprContext = RelOpExprContext;

class LocationExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	location() {
	    return this.getTypedRuleContext(LocationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterLocationExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitLocationExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitLocationExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.LocationExprContext = LocationExprContext;

class CondOpExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

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

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterCondOpExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitCondOpExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitCondOpExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.CondOpExprContext = CondOpExprContext;

class LiteralExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterLiteralExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitLiteralExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitLiteralExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.LiteralExprContext = LiteralExprContext;

class NegativeExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterNegativeExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitNegativeExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitNegativeExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.NegativeExprContext = NegativeExprContext;

class SecondArithOpExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

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

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterSecondArithOpExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitSecondArithOpExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitSecondArithOpExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.SecondArithOpExprContext = SecondArithOpExprContext;

class FirstArithOpExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

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

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterFirstArithOpExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitFirstArithOpExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitFirstArithOpExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.FirstArithOpExprContext = FirstArithOpExprContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class MethodCallDeclContext extends MethodCallContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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
	        listener.enterMethodCallDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitMethodCallDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitMethodCallDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.MethodCallDeclContext = MethodCallDeclContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ArgDeclContext extends ArgContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterArgDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitArgDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitArgDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.ArgDeclContext = ArgDeclContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IntLiteralContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	int_literal() {
	    return this.getTypedRuleContext(Int_literalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterIntLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitIntLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitIntLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.IntLiteralContext = IntLiteralContext;

class CharLiteralContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CHAR_LITERAL() {
	    return this.getToken(DecafParser.CHAR_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterCharLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitCharLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitCharLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.CharLiteralContext = CharLiteralContext;

class BoolLiteralContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	bool_literal() {
	    return this.getTypedRuleContext(Bool_literalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterBoolLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitBoolLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitBoolLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.BoolLiteralContext = BoolLiteralContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NumLiteralContext extends Int_literalContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	num() {
	    return this.getTypedRuleContext(NumContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterNumLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitNumLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitNumLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.NumLiteralContext = NumLiteralContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class FalseLiteralContext extends Bool_literalContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterFalseLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitFalseLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitFalseLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.FalseLiteralContext = FalseLiteralContext;

class TrueLiteralContext extends Bool_literalContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterTrueLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitTrueLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitTrueLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.TrueLiteralContext = TrueLiteralContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IdDeclContext extends IdContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(DecafParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterIdDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitIdDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitIdDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.IdDeclContext = IdDeclContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NumDeclContext extends NumContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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
	        listener.enterNumDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitNumDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitNumDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.NumDeclContext = NumDeclContext;


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
DecafParser.LiteralContext = LiteralContext; 
DecafParser.Int_literalContext = Int_literalContext; 
DecafParser.Bool_literalContext = Bool_literalContext; 
DecafParser.IdContext = IdContext; 
DecafParser.NumContext = NumContext; 
