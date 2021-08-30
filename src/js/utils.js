import { MethodReturnTypeError } from '../classes/Error';
import Symbol from '../classes/Symbol';
import { DATA_TYPE } from '../enums/dataTypes';

export function compareArrays(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

export function getErrorFromArray(symbolArray) {
  return symbolArray.find((symbol) => symbol.type === DATA_TYPE.ERROR);
}

function isNotEquals(symbol, returnType) {
  return symbol.type !== DATA_TYPE.NONE && symbol.type !== returnType;
}

export function getReturnTypeFromArray(returnTypesArray, expectedReturnType) {
  const error = this.getErrorFromArray(returnTypesArray);

  if (error)
    return error;

  const differentReturnType = this.returnTypesArray.find(
    (symbol) => isNotEquals(symbol, expectedReturnType),
  );

  if (differentReturnType) {
    differentReturnType.Error = new MethodReturnTypeError(
      '', expectedReturnType, differentReturnType.type,
    );
    return differentReturnType;
  }

  const everyReturnIsNone = this.returnTypesArray.every((symbol) => symbol.type === DATA_TYPE.NONE);

  if (everyReturnIsNone)
    return new Symbol(DATA_TYPE.VOID, 'returnType');

  const returnType = this.returnTypesArray.find((symbol) => symbol.type === expectedReturnType);
  return returnType;
}
