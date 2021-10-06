import Data from './Data';
import Symbol from './Symbol';
import {
  ArrayLengthError,
  UndeclaredStructError,
  InvalidPropertyError,
} from './Error';
import { DATA_TYPE } from '../enums/dataTypes';

export default class Struct extends Data {
  constructor(type, name, line, structDecl = null, structId, length = null) {
    super(type, name, line);
    this.structDecl = structDecl;
    this.structId = structId;
    this.length = length;
    this.checkForErrors();
    this.assignWidthFromStructDecl();
    this.assignPropertiesFromStructDecl();
  }

  get TypeWidth() {
    return this.typeWidth;
  }

  set StructId(structDecl) {
    this.structDecl = structDecl;
  }

  set Offset(offset) {
    this.offset = offset;
    this.assignOffsetToProperties();
  }

  setGlobalRegister() {
    this.addr = `G[${this.offset}]`;
    this.assignAddrToProps();
  }

  setLocalRegister() {
    this.addr = `fp[${this.offset}]`;
    this.assignAddrToProps();
  }

  assignAddrToProps() {
    // eslint-disable-next-line no-return-assign
    this.properties.forEach((prop) => prop.addr = this.addr);
  }

  assignWidthFromStructDecl() {
    if (this.structDecl) {
      this.width = this.structDecl.width;
      this.typeWidth = this.width;
    } else {
      this.width = null;
    }

    if (this.length)
      this.width *= this.length;
  }

  assignOffsetToProperties() {
    const props = [];

    this.properties.forEach((prop) => {
      const propClone = Object.assign(Object.create(Object.getPrototypeOf(prop)), prop);
      propClone.line = this.line;
      props.push(propClone);
    });

    this.properties = props;
  }

  assignPropertiesFromStructDecl() {
    this.properties = this.structDecl?.properties || [];
  }

  checkForErrors() {
    if (this.error)
      return;

    if (this.length !== null && this.length <= 0)
      this.Error = new ArrayLengthError(this.name, this.line);

    if (!this.structDecl)
      this.Error = new UndeclaredStructError(this.structId, this.line);
  }

  getProperty(prop, line) {
    const structProp = this.properties.find((p) => p.name === prop);

    if (!structProp) {
      const errorProp = new Symbol(DATA_TYPE.ERROR, prop);
      errorProp.Error = new InvalidPropertyError(this.name, prop, line);
      return errorProp;
    }

    return structProp;
  }

  getArrayOfProperties() {
    return this.properties || [];
  }

  searchPropertyRecursively(propertyId) {
    return this.properties.some((property) => {
      if (property.name === propertyId) {
        return this;
      }

      if (property.type === DATA_TYPE.STRUCT)
        return property.searchPropertyRecursively(propertyId);

      return null;
    });
  }
}
