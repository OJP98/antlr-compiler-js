import Symbol from '../classes/Symbol';
import { DATA_TYPE } from '../enums/dataTypes';

export function compareArrays(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

function getErrorFromArray(symbolArray) {
  return symbolArray.find((symbol) => symbol.type === DATA_TYPE.ERROR);
}

function isNotEquals(symbol, returnType) {
  return symbol.type !== DATA_TYPE.NONE && symbol.type !== returnType;
}

function filterNoneType(symbolArray) {
  return symbolArray.filter((symbol) => symbol.type !== DATA_TYPE.NONE);
}

export function getReturnTypeFromArray(returnTypesArray) {
  const typeError = getErrorFromArray(returnTypesArray);
  if (typeError)
    return typeError;

  const notNoneDataTypes = filterNoneType(returnTypesArray);

  if (!notNoneDataTypes)
    return new Symbol(DATA_TYPE.NONE, 'returnTypeFromArray');

  const expectedDataType = notNoneDataTypes[0].type;
  const notEqual = notNoneDataTypes.find(
    (symbol) => isNotEquals(symbol, expectedDataType),
  );

  if (notEqual)
    return new Symbol(DATA_TYPE.ERROR, 'multipleReturnTypes', notEqual.line);

  return new Symbol(expectedDataType, 'returnTypeFromArray');
}
