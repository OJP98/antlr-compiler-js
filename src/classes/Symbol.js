import Data from './Data';

export default class Symbol extends Data {
  constructor(type, name, line, column, value) {
    super(type, name, line, column);
    this.value = value;
  }
}
