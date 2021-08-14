import Data from './Data';

export default class StrcutDeclaration extends Data {
  constructor(type, name, line, column, properties = []) {
    super(type, name, line, column);
    this.properties = properties;
  }

  getProperty(prop) {
    return this.properties.find((p) => p.name === prop);
  }
}
