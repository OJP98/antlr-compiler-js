import { MultipleReturnTypesError } from '../classes/Error';
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

  if (!notNoneDataTypes.length)
    return new Symbol(DATA_TYPE.NONE, 'returnTypeFromArray');

  const expectedDataType = notNoneDataTypes[0].type;
  const notEqual = notNoneDataTypes.find(
    (symbol) => isNotEquals(symbol, expectedDataType),
  );

  if (notEqual) {
    const returnSymbol = new Symbol(DATA_TYPE.ERROR, 'multipleReturnTypes');
    const returnError = new MultipleReturnTypesError(returnSymbol.line);
    returnSymbol.Error = returnError;
    return returnSymbol;
  }

  return new Symbol(expectedDataType, 'returnTypeFromArray');
}

export function getTextBeforeChar(text, char) {
  const charIndex = text.indexOf(char);
  if (charIndex === -1)
    return null;
  return text.substring(0, charIndex);
}

export function getLastWord(label) {
  const splitted = label.split(' ');
  const lastWord = splitted.pop();
  return lastWord;
}

export function getMethodNameAndParamCount(label) {
  const splitted = label.split(' ');
  const methodName = splitted[1];
  const paramCount = splitted[2];
  return [methodName, paramCount];
}

export const print = (object) => {
  console.log(JSON.parse(JSON.stringify(object)));
};

export const getContentInsideBrackets = (text) => {
  const re = /\[(.*)]/;
  return text.match(re)[1];
};

export const isStack = (varName) => {
  if (typeof varName === 'number')
    return false;

  if (!varName.includes('['))
    return false;

  const bracketContent = getContentInsideBrackets(varName);
  // eslint-disable-next-line no-restricted-globals
  return isNaN(bracketContent);
};

export const translate = (varName) => {
  if (!varName.includes('['))
    return varName;

  const bracketContent = getContentInsideBrackets(varName);
  const mainContent = getTextBeforeChar(varName, '[');

  if (mainContent === 'G')
    return `${bracketContent}($s7)`;

  return `${bracketContent}($${mainContent})`;
};

export const getLabelAndTemp = (instruction) => {
  const splitted = instruction.split(' ');
  const temp = splitted[1];
  const label = splitted[5];
  return [temp, label];
};

export const isGlobal = (varName) => varName.includes('G');
