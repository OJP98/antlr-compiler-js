/* eslint-disable max-classes-per-file */
export default class Error {
  constructor(name, details) {
    this.name = name;
    this.details = details;
  }

  get ErrorLog() {
    return `${this.name}: ${this.details}`;
  }
}

export class MainNotDefinedError extends Error {
  constructor() {
    super('MainMethodNotDefined', 'Main method has not been defined.');
  }
}

export class MainHasArgsError extends Error {
  constructor() {
    super('MainMethodArgs', 'Main method contains one or more args.');
  }
}

export class ArrayLengthError extends Error {
  constructor(id) {
    super('ArrayLength', `Array "${id}" length can't be zero or lower.`);
  }
}

export class ArrayLengthNotIntError extends Error {
  constructor(id) {
    super('ArrayLengthNotInt', `Array length ${id} is not an integer value.`);
  }
}

export class MethodReturnTypeError extends Error {
  constructor() {
    super('MethodReturnType', 'Void method returns a data type.');
  }
}

export class IdAlreadyDeclaredError extends Error {
  constructor(id) {
    super('Id Already Declared', `"${id}" has been already declared in the current scope.`);
  }
}

export class InvalidConversion extends Error {
  constructor(type1, type2) {
    super('Invalid Conversion', `Invalid conversion from ${type1} to ${type2}`);
  }
}
