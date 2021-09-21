export default class StructDeclaration {
  constructor(type, name, line, properties = []) {
    this.type = type;
    this.name = name;
    this.line = line;
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
