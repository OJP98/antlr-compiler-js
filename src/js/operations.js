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
  const errorSymbol = new Symbol(DATA_TYPE.ERROR, 'arithExpr');
  errorSymbol.error = error;
  return errorSymbol;
};

export function getOperationResult(symbol1, symbol2, operator, line) {
  if (symbol1.type !== DATA_TYPE.INT || symbol2.type !== DATA_TYPE.INT) {
    return operationError(line);
  }
  return performOperation(symbol1, symbol2, operator);
}

// export function getCondOperation(symbol1, symbol2, operator, line) {
//   if (symbol1.type !== DATA_TYPE.BOOLEAN || symbol2.type !== DATA_TYPE.BOOLEAN) {
//     return operationError(line);
//   }
// }
