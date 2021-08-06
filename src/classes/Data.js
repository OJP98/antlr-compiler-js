export class Data
{
  constructor(type, name, signature = null, errors = null) {
    this.type = type;
    this.name = name;
    this.signature = signature;
    this.errors = errors;
  }
}