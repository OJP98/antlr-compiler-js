import Data from './Data';

export default class StrcutDeclaration extends Data {
  constructor(type, name, line, properties = []) {
    super(type, name, line);
    this.properties = properties;
  }

  getProperty(prop) {
    return this.properties.find((p) => p.name === prop);
  }
}
