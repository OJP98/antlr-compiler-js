// eslint-disable-next-line max-classes-per-file
export default class TAC {
  constructor(result, arg1, operator = null, arg2 = null) {
    this.result = result;
    this.arg1 = arg1;
    this.arg2 = arg2;
    this.operator = operator;
    this.string = this.generateString();
  }

  get asString() {
    return this.string;
  }

  generateString() {
    return `${this.result} = ${this.arg1} ${this.operator} ${this.arg2}`;
  }
}

export class UnaryTAC extends TAC {
  constructor(result, arg1, operator) {
    super(result, arg1, operator);
    this.string = this.generateString();
  }

  generateString() {
    return `${this.result} = ${this.operator}${this.arg1}`;
  }
}

export class LabelTAC extends TAC {
  constructor(result, labelType) {
    super(result);
    this.string = this.generateString();
    this.labelType = labelType;
  }

  generateString() {
    return this.result.toString();
  }
}

export class OperatorTAC extends TAC {
  constructor(operator, arg1) {
    super(null, arg1, operator);
    this.string = this.generateString();
  }

  generateString() {
    return `${this.operator} ${this.arg1}`;
  }
}

export class AssignmentTAC extends TAC {
  constructor(result, arg1, operator) {
    super(result, arg1, operator);
    this.string = this.generateString();
  }

  generateString() {
    return `${this.result} ${this.operator} ${this.arg1}`;
  }
}
