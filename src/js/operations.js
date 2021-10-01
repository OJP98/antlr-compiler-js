import { InvalidOperationType } from '../classes/Error';
import Symbol from '../classes/Symbol';
import { DATA_TYPE } from '../enums/dataTypes';

function getSymbolFromOperation(operator) {
  const relOperations = ['<', '>', '<=', '>='];
  const resultSymbol = new Symbol(DATA_TYPE.INT, 'arithExpr');
  if (relOperations.includes(operator))
    resultSymbol.type = DATA_TYPE.BOOLEAN;
  return resultSymbol;
}

export const operationErrorSymbol = (line) => {
  const error = new InvalidOperationType(line);
  const errorSymbol = new Symbol(DATA_TYPE.ERROR, 'operationError');
  errorSymbol.Error = error;
  return errorSymbol;
};

export function getResultSymbolFromOp(symbol1, symbol2, operator, line) {
  if (symbol1.type !== DATA_TYPE.INT || symbol2.type !== DATA_TYPE.INT) {
    return operationErrorSymbol(line);
  }
  return getSymbolFromOperation(operator);
}

export function equalsOperation(symbol1, symbol2, line) {
  // Are the symbols the same type?
  if (symbol1.type !== symbol2.type)
    return operationErrorSymbol(line);

  // Next, check if the all the symbol types are allowed.
  const allowedDataTypes = [DATA_TYPE.INT, DATA_TYPE.BOOLEAN, DATA_TYPE.CHAR];
  if (!allowedDataTypes.includes(symbol1.type))
    return operationErrorSymbol(line);

  if (!allowedDataTypes.includes(symbol2.type))
    return operationErrorSymbol(line);

  return new Symbol(DATA_TYPE.BOOLEAN, 'eqExpr');
}

export function condOperation(symbol1, symbol2, line) {
  // Are both boolean expressions?
  if (symbol1.type !== DATA_TYPE.BOOLEAN || symbol2.type !== DATA_TYPE.BOOLEAN)
    return operationErrorSymbol(line);

  return new Symbol(DATA_TYPE.BOOLEAN, 'condExpr');
}
