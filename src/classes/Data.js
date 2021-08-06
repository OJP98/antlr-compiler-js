export class Data
{
  constructor(type, name, signature, error) {
    this.type = type;
    this.name = name;
    this.signature = signature || null;
    this.error = error || null;
  }
}