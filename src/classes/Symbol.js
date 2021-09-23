import Data from './Data';

export default class Symbol extends Data {
  constructor(type, name, line, value) {
    super(type, name, line);
    this.value = value;
    this.code = this.value;
  }
}
