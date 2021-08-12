import Data from './Data';

export default class Struct extends Data {
  constructor(type, name, line, column, properties = [], signature) {
    super(type, name, signature, line, column);
    this.properties = properties;
  }

  set Properties(props) {
    this.properties = props;
  }
}
