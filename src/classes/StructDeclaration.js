import Data from './Data';

export default class StructDeclaration extends Data {
  constructor(type, name, line, properties = []) {
    super(type, name, line);
    this.properties = properties;
  }

  getProperty(prop) {
    return this.properties.find((p) => p.name === prop);
  }

  set Properties(properties) {
    this.properties = properties;
    this.assignWidthFromProperties();
  }

  assignWidthFromProperties() {
    this.width = this.properties.reduce((acc, curr) => acc + curr.width, 0);
  }
}
