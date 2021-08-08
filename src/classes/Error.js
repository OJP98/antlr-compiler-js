export class Error {
  constructor(name, details) {
    this.name = name;
    this.details = details;
  }
}

export class MainNotDefined extends Error {
  constructor() {
    super('MainMethodNotDefined', 'Main method has not been defined.');
  }
}

export class MainHasArgs extends Error {
  constructor() {
    super('MainMethodArgs', 'Main method contains one or more args.');
  }
}

export class ArrayLengthError extends Error {
  constructor() {
    super('ArrayLength', 'Array length can\'t be zero or lower.');
  }
}

export class ArrayLengthNotIntError extends Error {
  constructor() {
    super('ArrayLengthNotInt', 'Array length is not an integer value.');
  }
}

export class MethodReturnTypeError extends Error {
  constructor() {
    super('MethodReturnType', 'Void method returns a data type.');
  }
}
