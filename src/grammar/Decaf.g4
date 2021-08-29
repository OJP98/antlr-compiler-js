grammar Decaf;

program : 'class' 'Program' '{' declaration* '}'         # programInit ;

declaration : structDeclaration                          # declarationStruct
            | varDeclaration                             # declarationVar
            | methodDeclaration                          # declarationMethod
            ;

varDeclaration : varType id ';'                          # varDecl
               | varType id '[' num ']' ';'              # arrDecl
               | structDeclaration                       # structOfStruct
               ;

structDeclaration : 'struct' id '{' varDeclaration* '}' ';'?  # structDecl ;

varType : 'int'                                           # intVar
        | 'char'                                          # charVar
        | 'boolean'                                       # booleanVar
        | 'struct' id                                     # structVar
        | structDeclaration                               # structDeclarationVar
        | 'void'                                          # voidVar
        ;

methodDeclaration : methodType id '(' (parameter (',' parameter)*)* ')' block # methodDecl ;

methodType : 'int'                                        # intMethod
           | 'char'                                       # charMethod
           | 'boolean'                                    # booleanMethod
           | 'void'                                       # voidMethod
           ;

parameter : parameterType id                              # idParam
          | parameterType id '[' ']'                      # idArrParam
          | 'void'                                        # voidParam
          ;

parameterType : 'int'                                     # intParam
              | 'char'                                    # charParam
              | 'boolean'                                 # booleanParam
              ;

block : '{' (varDeclaration)* (statement)* '}'            # blockDecl ;

statement : 'if' '(' expression ')' block                 # ifStmt
          | 'if' '(' expression ')' block 'else' block    # ifElseStmt
          | 'while' '(' expression ')' block              # whileStmt
          | 'return' expression ';'                       # returnExprStmt
          | 'return' ';'                                  # returnVoidStmt 
          | methodCall ';'                                # methodStmt
          | block                                         # blockStmt
          | location '=' expression ';'                   # assignmentStmt
          | expression ';'                                # expressionStmt
          ;

location : id                                             # idLocation
         | id '[' expression ']'                          # arrLocation
         | id '.' location                                # idDotLocation
         | id '[' expression ']' '.' location             # idArrDotLocation
         ;

expression : location                                     # locationExpr
           | methodCall                                   # methodCallExpr
           | literal                                      # literalExpr
           | expression op=('*'|'/'|'%') expression       # firstArithOpExpr
           | expression op=('+'|'-') expression           # secondArithOpExpr
           | expression op=('<'|'>'|'<='|'>=') expression # relOpExpr
           | expression op=('=='|'!=') expression         # eqOpExpr
           | expression op=('&&'|'||') expression         # condOpExpr
           | '-' expression                               # negativeExpr
           | '!' expression                               # notExpr
           | '(' expression ')'                           # parExpr
           ;

methodCall : id '(' (arg (',' arg)*)* ')'                 # methodCallDecl ;

arg : expression                                          # argDecl ;

literal : int_literal                                     # intLiteral
        | bool_literal                                    # boolLiteral
        | CHAR_LITERAL                                    # charLiteral
        ;


int_literal : num                                         # numLiteral ;

bool_literal : 'true'                                     # trueLiteral 
             | 'false'                                    # falseLiteral
             ;

id : ID                                                   # idDecl ;

num : DIGIT+                                              # numDecl ;

CHAR_LITERAL : '"' LETTER '"';

ID : LETTER ALPHA_NUM* ;

DIGIT: [0-9]+ ;

LETTER : [a-zA-Z] | '_' ;

ALPHA_NUM : LETTER | DIGIT;

WS : [ \t\n\r] + -> skip ;