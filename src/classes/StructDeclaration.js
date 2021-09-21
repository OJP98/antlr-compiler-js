import { DATA_TYPE } from '../enums/dataTypes';

export default class StructDeclaration {
  constructor(type, name, line, properties = []) {
    this.type = type;
    this.name = name;
    this.line = line;
    this.properties = properties;
    this.currentOffset = 0;
  }

  set Error(error) {
    this.error = error;
    this.type = DATA_TYPE.ERROR;
  }

  getProperty(prop) {
    return this.properties.find((p) => p.name === prop);
  }

  set Properties(properties) {
    this.properties = properties;
    this.assignWidthFromProperties();
    this.assignWidthToProperties();
  }

  assignWidthFromProperties() {
    this.width = this.properties.reduce((acc, curr) => acc + curr.width, 0);
  }

  assignWidthToProperties() {
    this.properties.forEach((prop) => {
      prop.offset = this.currentOffset;
      this.currentOffset += prop.width;
    });
  }
}
