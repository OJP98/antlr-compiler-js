grammar Decaf;

program : 'class' 'Program' '{' declaration* '}' ;

declaration : structDeclaration | varDeclaration | methodDeclaration ;

varDeclaration : varType id ';' | varType id '[' num ']' ';' ;

structDeclaration : 'struct' id '{' varDeclaration* '}' ';'? ;

varType : 'int' | 'char' | 'boolean' | 'struct' id | structDeclaration | 'void' ;

methodDeclaration : methodType id '(' (parameter (',' parameter)*)* ')' block ;

methodType : 'int' | 'char' | 'boolean' | 'void' ;

parameter : parameterType id | parameterType id '[' ']' | 'void' ;

parameterType : 'int' | 'char' | 'boolean' ;

block : '{' (varDeclaration)* (statement)* '}' ;

statement : 'if' '(' expression ')' block ('else' block)?
          | 'while' '(' expression ')' block
          | 'return' expression? ';'
          | methodCall ';'
          | block
          | location '=' expression
          | expression? ';'
          ;

location : (id | id '[' expression ']') ('.' location)? ;

expression : location
            | methodCall
            | literal
            | expression arith_op1 expression      
            | expression arith_op2 expression          
            | expression op expression
            | '-' expression
            | '!' expression
            | '(' expression ')'
            ;

methodCall : id '(' (arg (',' arg)*)* ')' ;

arg : expression ;

op : rel_op | eq_op | cond_op ;

arith_op1 : '*' | '/' | '%' ;

arith_op2 : '+' | '-' ;

rel_op : '<' | '>' | '<=' | '>=' ;

eq_op : '==' | '!=' ;

cond_op : '&&' | '||' ;

literal : int_literal | char_literal | bool_literal ;

char_literal : '\'' LETTER '\'' ;

int_literal : num ;

bool_literal : 'true' | 'false' ;

id : ID ;

num : DIGIT+ ;

ID : LETTER ALPHA_NUM* ;

DIGIT: [0-9]+ ;

LETTER : [a-zA-Z] | '_' ;

ALPHA_NUM : LETTER | DIGIT;

WS : [ \t\n\r] + -> skip ;