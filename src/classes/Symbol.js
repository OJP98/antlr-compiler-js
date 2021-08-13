import Data from './Data';

export default class Symbol extends Data {
  constructor(type, name, line, column, value, signature) {
    super(type, name, line, column, signature);
    this.value = value;
  }
}
