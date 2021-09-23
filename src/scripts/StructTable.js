import { IdAlreadyDeclaredError } from '../classes/Error';

export default class MethodTable {
  constructor() {
    this.structTable = [];
  }

  bind(entry) {
    if (this.structTable.find((m) => m.name === entry.name)) {
      const error = new IdAlreadyDeclaredError(entry.name, entry.line);
      entry.Error = error;
    }

    this.structTable.push(entry);
  }

  lookup(structId) {
    return this.structTable.find((struct) => struct.name === structId);
  }

  newProperty(property) {
    const lastStruct = this.structTable.pop();
    if (lastStruct.getProperty(property.name)) {
      const error = new IdAlreadyDeclaredError(property.name, property.line);
      property.Error = error;
    }
    property.isStructProp = true;
    lastStruct.properties.push(property);
    this.structTable.push(lastStruct);
  }
}
