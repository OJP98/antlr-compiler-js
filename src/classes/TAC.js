/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-expressions */
/* eslint-disable valid-typeof */
/* eslint-disable no-useless-constructor */
// eslint-disable-next-line max-classes-per-file
import Temp from './Temp';

export default class TAC {
  constructor(result, arg1 = null, operator = null, arg2 = null) {
    this.result = result;
    this.arg1 = arg1;
    this.operator = operator;
    this.arg2 = arg2;
    this.checkArgs();
  }

  get asString() {
    return this.generateString();
  }

  generateString() {
    return `${this.result} = ${this.arg1} ${this.operator} ${this.arg2}`;
  }

  isTemporary(temp) {
    return temp && typeof temp === 'object';
  }

  checkArgs() {
    if (this.isTemporary(this.arg1)) {
      Temp.PushBack(this.arg1);
      this.arg1 = this.arg1.addr;
    }

    if (this.isTemporary(this.arg2)) {
      Temp.PushBack(this.arg2);
      this.arg2 = this.arg2.addr;
    }

    if (this.isTemporary(this.result)) {
      this.result = this.result.addr;
    }
  }
}

export class UnaryTAC extends TAC {
  constructor(result, arg1, operator) {
    super(result, arg1, operator);
  }

  generateString() {
    return `${this.result} = ${this.operator}${this.arg1}`;
  }
}

export class LabelTAC extends TAC {
  constructor(result, labelType) {
    super(result);
    this.labelType = labelType;
  }

  generateString() {
    return this.result.toString();
  }
}

export class OperatorTAC extends TAC {
  constructor(operator, arg1) {
    super(null, arg1, operator);
  }

  generateString() {
    return `${this.operator} ${this.arg1}`;
  }
}

export class AssignmentTAC extends TAC {
  constructor(result, arg1, operator) {
    super(result, arg1, operator);
  }

  generateString() {
    return `${this.result} ${this.operator} ${this.arg1}`;
  }
}
