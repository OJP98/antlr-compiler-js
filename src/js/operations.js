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

export default function getOperationResult(symbol1, symbol2, operator, line) {
  if (symbol1.type !== DATA_TYPE.INT || symbol2.type !== DATA_TYPE.INT) {
    const operationError = new InvalidOperationType(line);
    const errorSymbol = new Symbol(DATA_TYPE.ERROR, 'arithExpr');
    errorSymbol.error = operationError;
    return errorSymbol;
  }

  const operationResult = performOperation(symbol1, symbol2, operator);
  return operationResult;
}
