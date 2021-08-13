import Data from './Data';

export default class Struct extends Data {
  constructor(type, name, structId = null, properties = [], signature) {
    super(type, name, signature);
    this.properties = properties;
    this.structId = structId;
  }

  set Properties(props) {
    this.properties = props;
  }

  set StructId(structId) {
    this.structId = structId;
  }

  getProperty(prop) {
    return this.properties.find((p) => p.name === prop);
  }
}
