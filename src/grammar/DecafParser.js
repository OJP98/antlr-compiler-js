// Generated from ./src/grammar/Decaf.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import DecafListener from './DecafListener.js';
import DecafVisitor from './DecafVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003-\u013e\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0007\u0002=\n\u0002\f\u0002\u000e\u0002@\u000b\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003G\n\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    "T\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005",
    "Z\n\u0005\f\u0005\u000e\u0005]\u000b\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u0005a\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0005\u0006j\n\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007r",
    "\n\u0007\f\u0007\u000e\u0007u\u000b\u0007\u0007\u0007w\n\u0007\f\u0007",
    "\u000e\u0007z\u000b\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0005\b\u0083\n\b\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u008e\n\t\u0003",
    "\n\u0003\n\u0003\n\u0005\n\u0093\n\n\u0003\u000b\u0003\u000b\u0007\u000b",
    "\u0097\n\u000b\f\u000b\u000e\u000b\u009a\u000b\u000b\u0003\u000b\u0007",
    "\u000b\u009d\n\u000b\f\u000b\u000e\u000b\u00a0\u000b\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0005\f\u00ab\n\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00c2\n\f\u0003\f",
    "\u0005\f\u00c5\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0005\r\u00d8\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00e6\n\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e",
    "\u00f4\n\u000e\f\u000e\u000e\u000e\u00f7\u000b\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u00fe\n\u000f",
    "\f\u000f\u000e\u000f\u0101\u000b\u000f\u0007\u000f\u0103\n\u000f\f\u000f",
    "\u000e\u000f\u0106\u000b\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u010f\n\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u0114\n\u0012\u0003",
    "\u0013\u0003\u0013\u0005\u0013\u0118\n\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0005\u0014\u011e\n\u0014\u0003\u0015\u0003",
    "\u0015\u0005\u0015\u0122\n\u0015\u0003\u0016\u0003\u0016\u0005\u0016",
    "\u0126\n\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u012b",
    "\n\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019",
    "\u0003\u0019\u0003\u001a\u0003\u001a\u0005\u001a\u0135\n\u001a\u0003",
    "\u001b\u0003\u001b\u0003\u001c\u0006\u001c\u013a\n\u001c\r\u001c\u000e",
    "\u001c\u013b\u0003\u001c\u0002\u0003\u001a\u001d\u0002\u0004\u0006\b",
    "\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.",
    "0246\u0002\u0002\u0002\u015c\u00028\u0003\u0002\u0002\u0002\u0004F\u0003",
    "\u0002\u0002\u0002\u0006S\u0003\u0002\u0002\u0002\bU\u0003\u0002\u0002",
    "\u0002\ni\u0003\u0002\u0002\u0002\fk\u0003\u0002\u0002\u0002\u000e\u0082",
    "\u0003\u0002\u0002\u0002\u0010\u008d\u0003\u0002\u0002\u0002\u0012\u0092",
    "\u0003\u0002\u0002\u0002\u0014\u0094\u0003\u0002\u0002\u0002\u0016\u00c4",
    "\u0003\u0002\u0002\u0002\u0018\u00d7\u0003\u0002\u0002\u0002\u001a\u00e5",
    "\u0003\u0002\u0002\u0002\u001c\u00f8\u0003\u0002\u0002\u0002\u001e\u0109",
    "\u0003\u0002\u0002\u0002 \u010e\u0003\u0002\u0002\u0002\"\u0113\u0003",
    "\u0002\u0002\u0002$\u0117\u0003\u0002\u0002\u0002&\u011d\u0003\u0002",
    "\u0002\u0002(\u0121\u0003\u0002\u0002\u0002*\u0125\u0003\u0002\u0002",
    "\u0002,\u012a\u0003\u0002\u0002\u0002.\u012c\u0003\u0002\u0002\u0002",
    "0\u0130\u0003\u0002\u0002\u00022\u0134\u0003\u0002\u0002\u00024\u0136",
    "\u0003\u0002\u0002\u00026\u0139\u0003\u0002\u0002\u000289\u0007\u0003",
    "\u0002\u00029:\u0007\u0004\u0002\u0002:>\u0007\u0005\u0002\u0002;=\u0005",
    "\u0004\u0003\u0002<;\u0003\u0002\u0002\u0002=@\u0003\u0002\u0002\u0002",
    "><\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?A\u0003\u0002\u0002",
    "\u0002@>\u0003\u0002\u0002\u0002AB\u0007\u0006\u0002\u0002B\u0003\u0003",
    "\u0002\u0002\u0002CG\u0005\b\u0005\u0002DG\u0005\u0006\u0004\u0002E",
    "G\u0005\f\u0007\u0002FC\u0003\u0002\u0002\u0002FD\u0003\u0002\u0002",
    "\u0002FE\u0003\u0002\u0002\u0002G\u0005\u0003\u0002\u0002\u0002HI\u0005",
    "\n\u0006\u0002IJ\u00054\u001b\u0002JK\u0007\u0007\u0002\u0002KT\u0003",
    "\u0002\u0002\u0002LM\u0005\n\u0006\u0002MN\u00054\u001b\u0002NO\u0007",
    "\b\u0002\u0002OP\u00056\u001c\u0002PQ\u0007\t\u0002\u0002QR\u0007\u0007",
    "\u0002\u0002RT\u0003\u0002\u0002\u0002SH\u0003\u0002\u0002\u0002SL\u0003",
    "\u0002\u0002\u0002T\u0007\u0003\u0002\u0002\u0002UV\u0007\n\u0002\u0002",
    "VW\u00054\u001b\u0002W[\u0007\u0005\u0002\u0002XZ\u0005\u0006\u0004",
    "\u0002YX\u0003\u0002\u0002\u0002Z]\u0003\u0002\u0002\u0002[Y\u0003\u0002",
    "\u0002\u0002[\\\u0003\u0002\u0002\u0002\\^\u0003\u0002\u0002\u0002]",
    "[\u0003\u0002\u0002\u0002^`\u0007\u0006\u0002\u0002_a\u0007\u0007\u0002",
    "\u0002`_\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002a\t\u0003",
    "\u0002\u0002\u0002bj\u0007\u000b\u0002\u0002cj\u0007\f\u0002\u0002d",
    "j\u0007\r\u0002\u0002ef\u0007\n\u0002\u0002fj\u00054\u001b\u0002gj\u0005",
    "\b\u0005\u0002hj\u0007\u000e\u0002\u0002ib\u0003\u0002\u0002\u0002i",
    "c\u0003\u0002\u0002\u0002id\u0003\u0002\u0002\u0002ie\u0003\u0002\u0002",
    "\u0002ig\u0003\u0002\u0002\u0002ih\u0003\u0002\u0002\u0002j\u000b\u0003",
    "\u0002\u0002\u0002kl\u0005\u000e\b\u0002lm\u00054\u001b\u0002mx\u0007",
    "\u000f\u0002\u0002ns\u0005\u0010\t\u0002op\u0007\u0010\u0002\u0002p",
    "r\u0005\u0010\t\u0002qo\u0003\u0002\u0002\u0002ru\u0003\u0002\u0002",
    "\u0002sq\u0003\u0002\u0002\u0002st\u0003\u0002\u0002\u0002tw\u0003\u0002",
    "\u0002\u0002us\u0003\u0002\u0002\u0002vn\u0003\u0002\u0002\u0002wz\u0003",
    "\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002",
    "y{\u0003\u0002\u0002\u0002zx\u0003\u0002\u0002\u0002{|\u0007\u0011\u0002",
    "\u0002|}\u0005\u0014\u000b\u0002}\r\u0003\u0002\u0002\u0002~\u0083\u0007",
    "\u000b\u0002\u0002\u007f\u0083\u0007\f\u0002\u0002\u0080\u0083\u0007",
    "\r\u0002\u0002\u0081\u0083\u0007\u000e\u0002\u0002\u0082~\u0003\u0002",
    "\u0002\u0002\u0082\u007f\u0003\u0002\u0002\u0002\u0082\u0080\u0003\u0002",
    "\u0002\u0002\u0082\u0081\u0003\u0002\u0002\u0002\u0083\u000f\u0003\u0002",
    "\u0002\u0002\u0084\u0085\u0005\u0012\n\u0002\u0085\u0086\u00054\u001b",
    "\u0002\u0086\u008e\u0003\u0002\u0002\u0002\u0087\u0088\u0005\u0012\n",
    "\u0002\u0088\u0089\u00054\u001b\u0002\u0089\u008a\u0007\b\u0002\u0002",
    "\u008a\u008b\u0007\t\u0002\u0002\u008b\u008e\u0003\u0002\u0002\u0002",
    "\u008c\u008e\u0007\u000e\u0002\u0002\u008d\u0084\u0003\u0002\u0002\u0002",
    "\u008d\u0087\u0003\u0002\u0002\u0002\u008d\u008c\u0003\u0002\u0002\u0002",
    "\u008e\u0011\u0003\u0002\u0002\u0002\u008f\u0093\u0007\u000b\u0002\u0002",
    "\u0090\u0093\u0007\f\u0002\u0002\u0091\u0093\u0007\r\u0002\u0002\u0092",
    "\u008f\u0003\u0002\u0002\u0002\u0092\u0090\u0003\u0002\u0002\u0002\u0092",
    "\u0091\u0003\u0002\u0002\u0002\u0093\u0013\u0003\u0002\u0002\u0002\u0094",
    "\u0098\u0007\u0005\u0002\u0002\u0095\u0097\u0005\u0006\u0004\u0002\u0096",
    "\u0095\u0003\u0002\u0002\u0002\u0097\u009a\u0003\u0002\u0002\u0002\u0098",
    "\u0096\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099",
    "\u009e\u0003\u0002\u0002\u0002\u009a\u0098\u0003\u0002\u0002\u0002\u009b",
    "\u009d\u0005\u0016\f\u0002\u009c\u009b\u0003\u0002\u0002\u0002\u009d",
    "\u00a0\u0003\u0002\u0002\u0002\u009e\u009c\u0003\u0002\u0002\u0002\u009e",
    "\u009f\u0003\u0002\u0002\u0002\u009f\u00a1\u0003\u0002\u0002\u0002\u00a0",
    "\u009e\u0003\u0002\u0002\u0002\u00a1\u00a2\u0007\u0006\u0002\u0002\u00a2",
    "\u0015\u0003\u0002\u0002\u0002\u00a3\u00a4\u0007\u0012\u0002\u0002\u00a4",
    "\u00a5\u0007\u000f\u0002\u0002\u00a5\u00a6\u0005\u001a\u000e\u0002\u00a6",
    "\u00a7\u0007\u0011\u0002\u0002\u00a7\u00aa\u0005\u0014\u000b\u0002\u00a8",
    "\u00a9\u0007\u0013\u0002\u0002\u00a9\u00ab\u0005\u0014\u000b\u0002\u00aa",
    "\u00a8\u0003\u0002\u0002\u0002\u00aa\u00ab\u0003\u0002\u0002\u0002\u00ab",
    "\u00c5\u0003\u0002\u0002\u0002\u00ac\u00ad\u0007\u0014\u0002\u0002\u00ad",
    "\u00ae\u0007\u000f\u0002\u0002\u00ae\u00af\u0005\u001a\u000e\u0002\u00af",
    "\u00b0\u0007\u0011\u0002\u0002\u00b0\u00b1\u0005\u0014\u000b\u0002\u00b1",
    "\u00c5\u0003\u0002\u0002\u0002\u00b2\u00b3\u0007\u0015\u0002\u0002\u00b3",
    "\u00b4\u0005\u001a\u000e\u0002\u00b4\u00b5\u0007\u0007\u0002\u0002\u00b5",
    "\u00c5\u0003\u0002\u0002\u0002\u00b6\u00b7\u0007\u0015\u0002\u0002\u00b7",
    "\u00c5\u0007\u0007\u0002\u0002\u00b8\u00b9\u0005\u001c\u000f\u0002\u00b9",
    "\u00ba\u0007\u0007\u0002\u0002\u00ba\u00c5\u0003\u0002\u0002\u0002\u00bb",
    "\u00c5\u0005\u0014\u000b\u0002\u00bc\u00bd\u0005\u0018\r\u0002\u00bd",
    "\u00be\u0007\u0016\u0002\u0002\u00be\u00bf\u0005\u001a\u000e\u0002\u00bf",
    "\u00c5\u0003\u0002\u0002\u0002\u00c0\u00c2\u0005\u001a\u000e\u0002\u00c1",
    "\u00c0\u0003\u0002\u0002\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2",
    "\u00c3\u0003\u0002\u0002\u0002\u00c3\u00c5\u0007\u0007\u0002\u0002\u00c4",
    "\u00a3\u0003\u0002\u0002\u0002\u00c4\u00ac\u0003\u0002\u0002\u0002\u00c4",
    "\u00b2\u0003\u0002\u0002\u0002\u00c4\u00b6\u0003\u0002\u0002\u0002\u00c4",
    "\u00b8\u0003\u0002\u0002\u0002\u00c4\u00bb\u0003\u0002\u0002\u0002\u00c4",
    "\u00bc\u0003\u0002\u0002\u0002\u00c4\u00c1\u0003\u0002\u0002\u0002\u00c5",
    "\u0017\u0003\u0002\u0002\u0002\u00c6\u00d8\u00054\u001b\u0002\u00c7",
    "\u00c8\u00054\u001b\u0002\u00c8\u00c9\u0007\b\u0002\u0002\u00c9\u00ca",
    "\u0005\u001a\u000e\u0002\u00ca\u00cb\u0007\t\u0002\u0002\u00cb\u00d8",
    "\u0003\u0002\u0002\u0002\u00cc\u00cd\u00054\u001b\u0002\u00cd\u00ce",
    "\u0007\u0017\u0002\u0002\u00ce\u00cf\u0005\u0018\r\u0002\u00cf\u00d8",
    "\u0003\u0002\u0002\u0002\u00d0\u00d1\u00054\u001b\u0002\u00d1\u00d2",
    "\u0007\b\u0002\u0002\u00d2\u00d3\u0005\u001a\u000e\u0002\u00d3\u00d4",
    "\u0007\t\u0002\u0002\u00d4\u00d5\u0007\u0017\u0002\u0002\u00d5\u00d6",
    "\u0005\u0018\r\u0002\u00d6\u00d8\u0003\u0002\u0002\u0002\u00d7\u00c6",
    "\u0003\u0002\u0002\u0002\u00d7\u00c7\u0003\u0002\u0002\u0002\u00d7\u00cc",
    "\u0003\u0002\u0002\u0002\u00d7\u00d0\u0003\u0002\u0002\u0002\u00d8\u0019",
    "\u0003\u0002\u0002\u0002\u00d9\u00da\b\u000e\u0001\u0002\u00da\u00e6",
    "\u0005\u0018\r\u0002\u00db\u00e6\u0005\u001c\u000f\u0002\u00dc\u00e6",
    "\u0005,\u0017\u0002\u00dd\u00de\u0007\u0018\u0002\u0002\u00de\u00e6",
    "\u0005\u001a\u000e\u0005\u00df\u00e0\u0007\u0019\u0002\u0002\u00e0\u00e6",
    "\u0005\u001a\u000e\u0004\u00e1\u00e2\u0007\u000f\u0002\u0002\u00e2\u00e3",
    "\u0005\u001a\u000e\u0002\u00e3\u00e4\u0007\u0011\u0002\u0002\u00e4\u00e6",
    "\u0003\u0002\u0002\u0002\u00e5\u00d9\u0003\u0002\u0002\u0002\u00e5\u00db",
    "\u0003\u0002\u0002\u0002\u00e5\u00dc\u0003\u0002\u0002\u0002\u00e5\u00dd",
    "\u0003\u0002\u0002\u0002\u00e5\u00df\u0003\u0002\u0002\u0002\u00e5\u00e1",
    "\u0003\u0002\u0002\u0002\u00e6\u00f5\u0003\u0002\u0002\u0002\u00e7\u00e8",
    "\f\b\u0002\u0002\u00e8\u00e9\u0005\"\u0012\u0002\u00e9\u00ea\u0005\u001a",
    "\u000e\t\u00ea\u00f4\u0003\u0002\u0002\u0002\u00eb\u00ec\f\u0007\u0002",
    "\u0002\u00ec\u00ed\u0005$\u0013\u0002\u00ed\u00ee\u0005\u001a\u000e",
    "\b\u00ee\u00f4\u0003\u0002\u0002\u0002\u00ef\u00f0\f\u0006\u0002\u0002",
    "\u00f0\u00f1\u0005 \u0011\u0002\u00f1\u00f2\u0005\u001a\u000e\u0007",
    "\u00f2\u00f4\u0003\u0002\u0002\u0002\u00f3\u00e7\u0003\u0002\u0002\u0002",
    "\u00f3\u00eb\u0003\u0002\u0002\u0002\u00f3\u00ef\u0003\u0002\u0002\u0002",
    "\u00f4\u00f7\u0003\u0002\u0002\u0002\u00f5\u00f3\u0003\u0002\u0002\u0002",
    "\u00f5\u00f6\u0003\u0002\u0002\u0002\u00f6\u001b\u0003\u0002\u0002\u0002",
    "\u00f7\u00f5\u0003\u0002\u0002\u0002\u00f8\u00f9\u00054\u001b\u0002",
    "\u00f9\u0104\u0007\u000f\u0002\u0002\u00fa\u00ff\u0005\u001e\u0010\u0002",
    "\u00fb\u00fc\u0007\u0010\u0002\u0002\u00fc\u00fe\u0005\u001e\u0010\u0002",
    "\u00fd\u00fb\u0003\u0002\u0002\u0002\u00fe\u0101\u0003\u0002\u0002\u0002",
    "\u00ff\u00fd\u0003\u0002\u0002\u0002\u00ff\u0100\u0003\u0002\u0002\u0002",
    "\u0100\u0103\u0003\u0002\u0002\u0002\u0101\u00ff\u0003\u0002\u0002\u0002",
    "\u0102\u00fa\u0003\u0002\u0002\u0002\u0103\u0106\u0003\u0002\u0002\u0002",
    "\u0104\u0102\u0003\u0002\u0002\u0002\u0104\u0105\u0003\u0002\u0002\u0002",
    "\u0105\u0107\u0003\u0002\u0002\u0002\u0106\u0104\u0003\u0002\u0002\u0002",
    "\u0107\u0108\u0007\u0011\u0002\u0002\u0108\u001d\u0003\u0002\u0002\u0002",
    "\u0109\u010a\u0005\u001a\u000e\u0002\u010a\u001f\u0003\u0002\u0002\u0002",
    "\u010b\u010f\u0005&\u0014\u0002\u010c\u010f\u0005(\u0015\u0002\u010d",
    "\u010f\u0005*\u0016\u0002\u010e\u010b\u0003\u0002\u0002\u0002\u010e",
    "\u010c\u0003\u0002\u0002\u0002\u010e\u010d\u0003\u0002\u0002\u0002\u010f",
    "!\u0003\u0002\u0002\u0002\u0110\u0114\u0007\u001a\u0002\u0002\u0111",
    "\u0114\u0007\u001b\u0002\u0002\u0112\u0114\u0007\u001c\u0002\u0002\u0113",
    "\u0110\u0003\u0002\u0002\u0002\u0113\u0111\u0003\u0002\u0002\u0002\u0113",
    "\u0112\u0003\u0002\u0002\u0002\u0114#\u0003\u0002\u0002\u0002\u0115",
    "\u0118\u0007\u001d\u0002\u0002\u0116\u0118\u0007\u0018\u0002\u0002\u0117",
    "\u0115\u0003\u0002\u0002\u0002\u0117\u0116\u0003\u0002\u0002\u0002\u0118",
    "%\u0003\u0002\u0002\u0002\u0119\u011e\u0007\u001e\u0002\u0002\u011a",
    "\u011e\u0007\u001f\u0002\u0002\u011b\u011e\u0007 \u0002\u0002\u011c",
    "\u011e\u0007!\u0002\u0002\u011d\u0119\u0003\u0002\u0002\u0002\u011d",
    "\u011a\u0003\u0002\u0002\u0002\u011d\u011b\u0003\u0002\u0002\u0002\u011d",
    "\u011c\u0003\u0002\u0002\u0002\u011e\'\u0003\u0002\u0002\u0002\u011f",
    "\u0122\u0007\"\u0002\u0002\u0120\u0122\u0007#\u0002\u0002\u0121\u011f",
    "\u0003\u0002\u0002\u0002\u0121\u0120\u0003\u0002\u0002\u0002\u0122)",
    "\u0003\u0002\u0002\u0002\u0123\u0126\u0007$\u0002\u0002\u0124\u0126",
    "\u0007%\u0002\u0002\u0125\u0123\u0003\u0002\u0002\u0002\u0125\u0124",
    "\u0003\u0002\u0002\u0002\u0126+\u0003\u0002\u0002\u0002\u0127\u012b",
    "\u00050\u0019\u0002\u0128\u012b\u0005.\u0018\u0002\u0129\u012b\u0005",
    "2\u001a\u0002\u012a\u0127\u0003\u0002\u0002\u0002\u012a\u0128\u0003",
    "\u0002\u0002\u0002\u012a\u0129\u0003\u0002\u0002\u0002\u012b-\u0003",
    "\u0002\u0002\u0002\u012c\u012d\u0007&\u0002\u0002\u012d\u012e\u0007",
    "+\u0002\u0002\u012e\u012f\u0007&\u0002\u0002\u012f/\u0003\u0002\u0002",
    "\u0002\u0130\u0131\u00056\u001c\u0002\u01311\u0003\u0002\u0002\u0002",
    "\u0132\u0135\u0007\'\u0002\u0002\u0133\u0135\u0007(\u0002\u0002\u0134",
    "\u0132\u0003\u0002\u0002\u0002\u0134\u0133\u0003\u0002\u0002\u0002\u0135",
    "3\u0003\u0002\u0002\u0002\u0136\u0137\u0007)\u0002\u0002\u01375\u0003",
    "\u0002\u0002\u0002\u0138\u013a\u0007*\u0002\u0002\u0139\u0138\u0003",
    "\u0002\u0002\u0002\u013a\u013b\u0003\u0002\u0002\u0002\u013b\u0139\u0003",
    "\u0002\u0002\u0002\u013b\u013c\u0003\u0002\u0002\u0002\u013c7\u0003",
    "\u0002\u0002\u0002!>FS[`isx\u0082\u008d\u0092\u0098\u009e\u00aa\u00c1",
    "\u00c4\u00d7\u00e5\u00f3\u00f5\u00ff\u0104\u010e\u0113\u0117\u011d\u0121",
    "\u0125\u012a\u0134\u013b"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class DecafParser extends antlr4.Parser {

    static grammarFileName = "Decaf.g4";
    static literalNames = [ null, "'class'", "'Program'", "'{'", "'}'", 
                            "';'", "'['", "']'", "'struct'", "'int'", "'char'", 
                            "'boolean'", "'void'", "'('", "','", "')'", 
                            "'if'", "'else'", "'while'", "'return'", "'='", 
                            "'.'", "'-'", "'!'", "'*'", "'/'", "'%'", "'+'", 
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
                         "expression", "methodCall", "arg", "op", "arith_op1", 
                         "arith_op2", "rel_op", "eq_op", "cond_op", "literal", 
                         "char_literal", "int_literal", "bool_literal", 
                         "id", "num" ];

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
	        localctx = new ProgramInitContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(DecafParser.T__0);
	        this.state = 55;
	        this.match(DecafParser.T__1);
	        this.state = 56;
	        this.match(DecafParser.T__2);
	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DecafParser.T__7) | (1 << DecafParser.T__8) | (1 << DecafParser.T__9) | (1 << DecafParser.T__10) | (1 << DecafParser.T__11))) !== 0)) {
	            this.state = 57;
	            this.declaration();
	            this.state = 62;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 63;
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
	        this.state = 68;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new DeclarationStructContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 65;
	            this.structDeclaration();
	            break;

	        case 2:
	            localctx = new DeclarationVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 66;
	            this.varDeclaration();
	            break;

	        case 3:
	            localctx = new DeclarationMethorContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 67;
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
	        this.state = 81;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new VarDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 70;
	            this.varType();
	            this.state = 71;
	            this.id();
	            this.state = 72;
	            this.match(DecafParser.T__4);
	            break;

	        case 2:
	            localctx = new ArrDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 74;
	            this.varType();
	            this.state = 75;
	            this.id();
	            this.state = 76;
	            this.match(DecafParser.T__5);
	            this.state = 77;
	            this.num();
	            this.state = 78;
	            this.match(DecafParser.T__6);
	            this.state = 79;
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
	        localctx = new StructDeclContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(DecafParser.T__7);
	        this.state = 84;
	        this.id();
	        this.state = 85;
	        this.match(DecafParser.T__2);
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DecafParser.T__7) | (1 << DecafParser.T__8) | (1 << DecafParser.T__9) | (1 << DecafParser.T__10) | (1 << DecafParser.T__11))) !== 0)) {
	            this.state = 86;
	            this.varDeclaration();
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 92;
	        this.match(DecafParser.T__3);
	        this.state = 94;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DecafParser.T__4) {
	            this.state = 93;
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
	        this.state = 103;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new IntVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 96;
	            this.match(DecafParser.T__8);
	            break;

	        case 2:
	            localctx = new CharVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 97;
	            this.match(DecafParser.T__9);
	            break;

	        case 3:
	            localctx = new BooleanVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 98;
	            this.match(DecafParser.T__10);
	            break;

	        case 4:
	            localctx = new StructVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 99;
	            this.match(DecafParser.T__7);
	            this.state = 100;
	            this.id();
	            break;

	        case 5:
	            localctx = new StructDeclarationVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 101;
	            this.structDeclaration();
	            break;

	        case 6:
	            localctx = new VoidVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 102;
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
	        this.state = 105;
	        this.methodType();
	        this.state = 106;
	        this.id();
	        this.state = 107;
	        this.match(DecafParser.T__12);
	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DecafParser.T__8) | (1 << DecafParser.T__9) | (1 << DecafParser.T__10) | (1 << DecafParser.T__11))) !== 0)) {
	            this.state = 108;
	            this.parameter();
	            this.state = 113;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===DecafParser.T__13) {
	                this.state = 109;
	                this.match(DecafParser.T__13);
	                this.state = 110;
	                this.parameter();
	                this.state = 115;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 120;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 121;
	        this.match(DecafParser.T__14);
	        this.state = 122;
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
	        this.state = 128;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DecafParser.T__8:
	            localctx = new IntMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 124;
	            this.match(DecafParser.T__8);
	            break;
	        case DecafParser.T__9:
	            localctx = new CharMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 125;
	            this.match(DecafParser.T__9);
	            break;
	        case DecafParser.T__10:
	            localctx = new BooleanMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 126;
	            this.match(DecafParser.T__10);
	            break;
	        case DecafParser.T__11:
	            localctx = new VoidMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 127;
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
	        this.state = 139;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ParamTypeContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 130;
	            this.parameterType();
	            this.state = 131;
	            this.id();
	            break;

	        case 2:
	            localctx = new ParamArrTypeContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 133;
	            this.parameterType();
	            this.state = 134;
	            this.id();
	            this.state = 135;
	            this.match(DecafParser.T__5);
	            this.state = 136;
	            this.match(DecafParser.T__6);
	            break;

	        case 3:
	            localctx = new ParamVoidContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 138;
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
	        this.state = 144;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DecafParser.T__8:
	            localctx = new ParamIntContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 141;
	            this.match(DecafParser.T__8);
	            break;
	        case DecafParser.T__9:
	            localctx = new ParamCharContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 142;
	            this.match(DecafParser.T__9);
	            break;
	        case DecafParser.T__10:
	            localctx = new ParamBooleanContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 143;
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
	        this.state = 146;
	        this.match(DecafParser.T__2);
	        this.state = 150;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DecafParser.T__7) | (1 << DecafParser.T__8) | (1 << DecafParser.T__9) | (1 << DecafParser.T__10) | (1 << DecafParser.T__11))) !== 0)) {
	            this.state = 147;
	            this.varDeclaration();
	            this.state = 152;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 156;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DecafParser.T__2) | (1 << DecafParser.T__4) | (1 << DecafParser.T__12) | (1 << DecafParser.T__15) | (1 << DecafParser.T__17) | (1 << DecafParser.T__18) | (1 << DecafParser.T__21) | (1 << DecafParser.T__22))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (DecafParser.T__35 - 36)) | (1 << (DecafParser.T__36 - 36)) | (1 << (DecafParser.T__37 - 36)) | (1 << (DecafParser.ID - 36)) | (1 << (DecafParser.DIGIT - 36)))) !== 0)) {
	            this.state = 153;
	            this.statement();
	            this.state = 158;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 159;
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
	        this.state = 194;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new IfStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 161;
	            this.match(DecafParser.T__15);
	            this.state = 162;
	            this.match(DecafParser.T__12);
	            this.state = 163;
	            this.expression(0);
	            this.state = 164;
	            this.match(DecafParser.T__14);
	            this.state = 165;
	            this.block();
	            this.state = 168;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DecafParser.T__16) {
	                this.state = 166;
	                this.match(DecafParser.T__16);
	                this.state = 167;
	                this.block();
	            }

	            break;

	        case 2:
	            localctx = new WhileStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 170;
	            this.match(DecafParser.T__17);
	            this.state = 171;
	            this.match(DecafParser.T__12);
	            this.state = 172;
	            this.expression(0);
	            this.state = 173;
	            this.match(DecafParser.T__14);
	            this.state = 174;
	            this.block();
	            break;

	        case 3:
	            localctx = new ReturnTypeStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 176;
	            this.match(DecafParser.T__18);
	            this.state = 177;
	            this.expression(0);
	            this.state = 178;
	            this.match(DecafParser.T__4);
	            break;

	        case 4:
	            localctx = new ReturnVoidStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 180;
	            this.match(DecafParser.T__18);
	            this.state = 181;
	            this.match(DecafParser.T__4);
	            break;

	        case 5:
	            localctx = new MethodStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 182;
	            this.methodCall();
	            this.state = 183;
	            this.match(DecafParser.T__4);
	            break;

	        case 6:
	            localctx = new BlockStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 185;
	            this.block();
	            break;

	        case 7:
	            localctx = new AssignmentStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 186;
	            this.location();
	            this.state = 187;
	            this.match(DecafParser.T__19);
	            this.state = 188;
	            this.expression(0);
	            break;

	        case 8:
	            localctx = new ExpressionStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 191;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 13)) & ~0x1f) == 0 && ((1 << (_la - 13)) & ((1 << (DecafParser.T__12 - 13)) | (1 << (DecafParser.T__21 - 13)) | (1 << (DecafParser.T__22 - 13)) | (1 << (DecafParser.T__35 - 13)) | (1 << (DecafParser.T__36 - 13)) | (1 << (DecafParser.T__37 - 13)) | (1 << (DecafParser.ID - 13)) | (1 << (DecafParser.DIGIT - 13)))) !== 0)) {
	                this.state = 190;
	                this.expression(0);
	            }

	            this.state = 193;
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
	        this.state = 213;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new IdLocationContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 196;
	            this.id();
	            break;

	        case 2:
	            localctx = new ArrLocationContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 197;
	            this.id();
	            this.state = 198;
	            this.match(DecafParser.T__5);
	            this.state = 199;
	            this.expression(0);
	            this.state = 200;
	            this.match(DecafParser.T__6);
	            break;

	        case 3:
	            localctx = new IdDotLocationContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 202;
	            this.id();
	            this.state = 203;
	            this.match(DecafParser.T__20);
	            this.state = 204;
	            this.location();
	            break;

	        case 4:
	            localctx = new IdArrDotLocationContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 206;
	            this.id();
	            this.state = 207;
	            this.match(DecafParser.T__5);
	            this.state = 208;
	            this.expression(0);
	            this.state = 209;
	            this.match(DecafParser.T__6);
	            this.state = 210;
	            this.match(DecafParser.T__20);
	            this.state = 211;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 227;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LocationExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 216;
	            this.location();
	            break;

	        case 2:
	            localctx = new MethodCallExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 217;
	            this.methodCall();
	            break;

	        case 3:
	            localctx = new LiteralExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 218;
	            this.literal();
	            break;

	        case 4:
	            localctx = new NegativeExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 219;
	            this.match(DecafParser.T__21);
	            this.state = 220;
	            this.expression(3);
	            break;

	        case 5:
	            localctx = new NotExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 221;
	            this.match(DecafParser.T__22);
	            this.state = 222;
	            this.expression(2);
	            break;

	        case 6:
	            localctx = new ParExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 223;
	            this.match(DecafParser.T__12);
	            this.state = 224;
	            this.expression(0);
	            this.state = 225;
	            this.match(DecafParser.T__14);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 243;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 241;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ArithExpr1Context(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DecafParser.RULE_expression);
	                    this.state = 229;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 230;
	                    this.arith_op1();
	                    this.state = 231;
	                    this.expression(7);
	                    break;

	                case 2:
	                    localctx = new ArithExpr2Context(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DecafParser.RULE_expression);
	                    this.state = 233;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 234;
	                    this.arith_op2();
	                    this.state = 235;
	                    this.expression(6);
	                    break;

	                case 3:
	                    localctx = new ArithExpr3Context(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DecafParser.RULE_expression);
	                    this.state = 237;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 238;
	                    this.op();
	                    this.state = 239;
	                    this.expression(5);
	                    break;

	                } 
	            }
	            this.state = 245;
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
	        localctx = new MethodCallDeclContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        this.id();
	        this.state = 247;
	        this.match(DecafParser.T__12);
	        this.state = 258;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 13)) & ~0x1f) == 0 && ((1 << (_la - 13)) & ((1 << (DecafParser.T__12 - 13)) | (1 << (DecafParser.T__21 - 13)) | (1 << (DecafParser.T__22 - 13)) | (1 << (DecafParser.T__35 - 13)) | (1 << (DecafParser.T__36 - 13)) | (1 << (DecafParser.T__37 - 13)) | (1 << (DecafParser.ID - 13)) | (1 << (DecafParser.DIGIT - 13)))) !== 0)) {
	            this.state = 248;
	            this.arg();
	            this.state = 253;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===DecafParser.T__13) {
	                this.state = 249;
	                this.match(DecafParser.T__13);
	                this.state = 250;
	                this.arg();
	                this.state = 255;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 260;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 261;
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
	        this.state = 263;
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
	        this.state = 268;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DecafParser.T__27:
	        case DecafParser.T__28:
	        case DecafParser.T__29:
	        case DecafParser.T__30:
	            localctx = new RelOpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 265;
	            this.rel_op();
	            break;
	        case DecafParser.T__31:
	        case DecafParser.T__32:
	            localctx = new EqOpContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 266;
	            this.eq_op();
	            break;
	        case DecafParser.T__33:
	        case DecafParser.T__34:
	            localctx = new CondOpContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 267;
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



	arith_op1() {
	    let localctx = new Arith_op1Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, DecafParser.RULE_arith_op1);
	    try {
	        this.state = 273;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DecafParser.T__23:
	            localctx = new MultOpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 270;
	            this.match(DecafParser.T__23);
	            break;
	        case DecafParser.T__24:
	            localctx = new DivOpContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 271;
	            this.match(DecafParser.T__24);
	            break;
	        case DecafParser.T__25:
	            localctx = new ModOpContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 272;
	            this.match(DecafParser.T__25);
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



	arith_op2() {
	    let localctx = new Arith_op2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, DecafParser.RULE_arith_op2);
	    try {
	        this.state = 277;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DecafParser.T__26:
	            localctx = new SumOpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 275;
	            this.match(DecafParser.T__26);
	            break;
	        case DecafParser.T__21:
	            localctx = new SubOpContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 276;
	            this.match(DecafParser.T__21);
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



	rel_op() {
	    let localctx = new Rel_opContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, DecafParser.RULE_rel_op);
	    try {
	        this.state = 283;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DecafParser.T__27:
	            localctx = new LowerOpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 279;
	            this.match(DecafParser.T__27);
	            break;
	        case DecafParser.T__28:
	            localctx = new HigherOpContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 280;
	            this.match(DecafParser.T__28);
	            break;
	        case DecafParser.T__29:
	            localctx = new LowerEqOpContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 281;
	            this.match(DecafParser.T__29);
	            break;
	        case DecafParser.T__30:
	            localctx = new HigherEqOpContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 282;
	            this.match(DecafParser.T__30);
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



	eq_op() {
	    let localctx = new Eq_opContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, DecafParser.RULE_eq_op);
	    try {
	        this.state = 287;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DecafParser.T__31:
	            localctx = new EqualsOpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 285;
	            this.match(DecafParser.T__31);
	            break;
	        case DecafParser.T__32:
	            localctx = new NotEqualsOpContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 286;
	            this.match(DecafParser.T__32);
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



	cond_op() {
	    let localctx = new Cond_opContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, DecafParser.RULE_cond_op);
	    try {
	        this.state = 291;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DecafParser.T__33:
	            localctx = new AndOpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 289;
	            this.match(DecafParser.T__33);
	            break;
	        case DecafParser.T__34:
	            localctx = new OrOpContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 290;
	            this.match(DecafParser.T__34);
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



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, DecafParser.RULE_literal);
	    try {
	        this.state = 296;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DecafParser.DIGIT:
	            localctx = new IntLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 293;
	            this.int_literal();
	            break;
	        case DecafParser.T__35:
	            localctx = new CharLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 294;
	            this.char_literal();
	            break;
	        case DecafParser.T__36:
	        case DecafParser.T__37:
	            localctx = new BoolLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 295;
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
	    this.enterRule(localctx, 44, DecafParser.RULE_char_literal);
	    try {
	        localctx = new CharLiteralDeclContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 298;
	        this.match(DecafParser.T__35);
	        this.state = 299;
	        this.match(DecafParser.LETTER);
	        this.state = 300;
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
	    this.enterRule(localctx, 46, DecafParser.RULE_int_literal);
	    try {
	        localctx = new NumLiteralContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
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
	    this.enterRule(localctx, 48, DecafParser.RULE_bool_literal);
	    try {
	        this.state = 306;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DecafParser.T__36:
	            localctx = new TrueLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 304;
	            this.match(DecafParser.T__36);
	            break;
	        case DecafParser.T__37:
	            localctx = new FalseLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 305;
	            this.match(DecafParser.T__37);
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
	    this.enterRule(localctx, 50, DecafParser.RULE_id);
	    try {
	        localctx = new IdDeclContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 308;
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
	    this.enterRule(localctx, 52, DecafParser.RULE_num);
	    try {
	        localctx = new NumDeclContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 311; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 310;
	        		this.match(DecafParser.DIGIT);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 313; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,30, this._ctx);
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
DecafParser.RULE_arith_op1 = 16;
DecafParser.RULE_arith_op2 = 17;
DecafParser.RULE_rel_op = 18;
DecafParser.RULE_eq_op = 19;
DecafParser.RULE_cond_op = 20;
DecafParser.RULE_literal = 21;
DecafParser.RULE_char_literal = 22;
DecafParser.RULE_int_literal = 23;
DecafParser.RULE_bool_literal = 24;
DecafParser.RULE_id = 25;
DecafParser.RULE_num = 26;

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

class DeclarationMethorContext extends DeclarationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	methodDeclaration() {
	    return this.getTypedRuleContext(MethodDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterDeclarationMethor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitDeclarationMethor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitDeclarationMethor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.DeclarationMethorContext = DeclarationMethorContext;

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


class ParamTypeContext extends ParameterContext {

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
	        listener.enterParamType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitParamType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitParamType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.ParamTypeContext = ParamTypeContext;

class ParamArrTypeContext extends ParameterContext {

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
	        listener.enterParamArrType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitParamArrType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitParamArrType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.ParamArrTypeContext = ParamArrTypeContext;

class ParamVoidContext extends ParameterContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterParamVoid(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitParamVoid(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitParamVoid(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.ParamVoidContext = ParamVoidContext;

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


class ParamIntContext extends ParameterTypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterParamInt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitParamInt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitParamInt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.ParamIntContext = ParamIntContext;

class ParamCharContext extends ParameterTypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterParamChar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitParamChar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitParamChar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.ParamCharContext = ParamCharContext;

class ParamBooleanContext extends ParameterTypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterParamBoolean(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitParamBoolean(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitParamBoolean(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.ParamBooleanContext = ParamBooleanContext;

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


class ReturnTypeStmtContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterReturnTypeStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitReturnTypeStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitReturnTypeStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.ReturnTypeStmtContext = ReturnTypeStmtContext;

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

class ArithExpr1Context extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
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

	arith_op1() {
	    return this.getTypedRuleContext(Arith_op1Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterArithExpr1(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitArithExpr1(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitArithExpr1(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.ArithExpr1Context = ArithExpr1Context;

class ArithExpr2Context extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
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

	arith_op2() {
	    return this.getTypedRuleContext(Arith_op2Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterArithExpr2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitArithExpr2(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitArithExpr2(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.ArithExpr2Context = ArithExpr2Context;

class ArithExpr3Context extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
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

	op() {
	    return this.getTypedRuleContext(OpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterArithExpr3(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitArithExpr3(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitArithExpr3(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.ArithExpr3Context = ArithExpr3Context;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class EqOpContext extends OpContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	eq_op() {
	    return this.getTypedRuleContext(Eq_opContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterEqOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitEqOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitEqOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.EqOpContext = EqOpContext;

class RelOpContext extends OpContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	rel_op() {
	    return this.getTypedRuleContext(Rel_opContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterRelOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitRelOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitRelOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.RelOpContext = RelOpContext;

class CondOpContext extends OpContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	cond_op() {
	    return this.getTypedRuleContext(Cond_opContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterCondOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitCondOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitCondOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.CondOpContext = CondOpContext;

class Arith_op1Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_arith_op1;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DivOpContext extends Arith_op1Context {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterDivOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitDivOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitDivOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.DivOpContext = DivOpContext;

class ModOpContext extends Arith_op1Context {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterModOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitModOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitModOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.ModOpContext = ModOpContext;

class MultOpContext extends Arith_op1Context {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterMultOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitMultOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitMultOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.MultOpContext = MultOpContext;

class Arith_op2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecafParser.RULE_arith_op2;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SumOpContext extends Arith_op2Context {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterSumOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitSumOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitSumOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.SumOpContext = SumOpContext;

class SubOpContext extends Arith_op2Context {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterSubOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitSubOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitSubOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.SubOpContext = SubOpContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class HigherOpContext extends Rel_opContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterHigherOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitHigherOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitHigherOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.HigherOpContext = HigherOpContext;

class LowerOpContext extends Rel_opContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterLowerOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitLowerOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitLowerOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.LowerOpContext = LowerOpContext;

class HigherEqOpContext extends Rel_opContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterHigherEqOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitHigherEqOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitHigherEqOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.HigherEqOpContext = HigherEqOpContext;

class LowerEqOpContext extends Rel_opContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterLowerEqOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitLowerEqOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitLowerEqOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.LowerEqOpContext = LowerEqOpContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NotEqualsOpContext extends Eq_opContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterNotEqualsOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitNotEqualsOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitNotEqualsOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.NotEqualsOpContext = NotEqualsOpContext;

class EqualsOpContext extends Eq_opContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterEqualsOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitEqualsOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitEqualsOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.EqualsOpContext = EqualsOpContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class OrOpContext extends Cond_opContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterOrOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitOrOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitOrOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.OrOpContext = OrOpContext;

class AndOpContext extends Cond_opContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterAndOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitAndOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitAndOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.AndOpContext = AndOpContext;

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

	char_literal() {
	    return this.getTypedRuleContext(Char_literalContext,0);
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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CharLiteralDeclContext extends Char_literalContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LETTER() {
	    return this.getToken(DecafParser.LETTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.enterCharLiteralDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecafListener ) {
	        listener.exitCharLiteralDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecafVisitor ) {
	        return visitor.visitCharLiteralDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DecafParser.CharLiteralDeclContext = CharLiteralDeclContext;

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
DecafParser.OpContext = OpContext; 
DecafParser.Arith_op1Context = Arith_op1Context; 
DecafParser.Arith_op2Context = Arith_op2Context; 
DecafParser.Rel_opContext = Rel_opContext; 
DecafParser.Eq_opContext = Eq_opContext; 
DecafParser.Cond_opContext = Cond_opContext; 
DecafParser.LiteralContext = LiteralContext; 
DecafParser.Char_literalContext = Char_literalContext; 
DecafParser.Int_literalContext = Int_literalContext; 
DecafParser.Bool_literalContext = Bool_literalContext; 
DecafParser.IdContext = IdContext; 
DecafParser.NumContext = NumContext; 
