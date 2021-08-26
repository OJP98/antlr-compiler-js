import { InvalidOperationType } from '../classes/Error';
import Symbol from '../classes/Symbol';
import { DATA_TYPE } from '../enums/dataTypes';

function performOperation(symbol1, symbol2, operator) {
  const resultSymbol = new Symbol(DATA_TYPE.INT, 'arithExpr');
  switch (operator) {
    // Arithmetic operations
    case '*':
      resultSymbol.value = symbol1.value * symbol2.value;
      break;
    case '/':
      resultSymbol.value = symbol1.value / symbol2.value;
      break;
    case '%':
      resultSymbol.value = symbol1.value % symbol2.value;
      break;
    case '+':
      resultSymbol.value = symbol1.value + symbol2.value;
      break;
    case '-':
      resultSymbol.value = symbol1.value - symbol2.value;
      break;
    // Rel operations
    case '<':
      resultSymbol.value = symbol1.value < symbol2.value;
      resultSymbol.type = DATA_TYPE.BOOLEAN;
      break;
    case '>':
      resultSymbol.value = symbol1.value > symbol2.value;
      resultSymbol.type = DATA_TYPE.BOOLEAN;
      break;
    case '<=':
      resultSymbol.value = symbol1.value <= symbol2.value;
      resultSymbol.type = DATA_TYPE.BOOLEAN;
      break;
    case '>=':
      resultSymbol.value = symbol1.value >= symbol2.value;
      resultSymbol.type = DATA_TYPE.BOOLEAN;
      break;
    default:
      break;
  }
  return resultSymbol;
}

export const operationError = (line) => {
  const error = new InvalidOperationType(line);
  const errorSymbol = new Symbol(DATA_TYPE.ERROR, 'operationError');
  errorSymbol.error = error;
  return errorSymbol;
};

export function getOperationResult(symbol1, symbol2, operator, line) {
  if (symbol1.type !== DATA_TYPE.INT || symbol2.type !== DATA_TYPE.INT) {
    return operationError(line);
  }
  return performOperation(symbol1, symbol2, operator);
}

export function equalsOperation(symbol1, symbol2, line) {
  // Are the symbols the same type?
  if (symbol1.type !== symbol2.type)
    return operationError(line);

  // Next, check if the all the symbol types are allowed.
  const allowedDataTypes = [DATA_TYPE.INT, DATA_TYPE.BOOLEAN, DATA_TYPE.CHAR];
  if (!allowedDataTypes.includes(symbol1.type))
    return operationError(line);

  if (!allowedDataTypes.includes(symbol2.type))
    return operationError(line);

  return new Symbol(DATA_TYPE.BOOLEAN, 'eqExpr');
}

export function condOperation(symbol1, symbol2, line) {
  // Are both boolean expressions?
  if (symbol1.type !== DATA_TYPE.BOOLEAN || symbol2.type !== DATA_TYPE.BOOLEAN)
    return operationError(line);

  return new Symbol(DATA_TYPE.BOOLEAN, 'condExpr');
}
