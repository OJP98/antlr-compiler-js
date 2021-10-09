// eslint-disable-next-line max-classes-per-file
export class Temporary {
  constructor(temp) {
    this.blocked = false;
    this.addr = `t${temp}`;
  }

  block() {
    this.blocked = true;
  }
}

export default class Temp {
  static set TotalTemps(totalTemps) {
    this.totalTemps = totalTemps;
  }

  static New(blockTemp = false) {
    const newTemp = this.totalTemps.pop();
    if (blockTemp)
      newTemp.blocked = true;
    return newTemp;
  }

  static PushBack(temp) {
    if (!temp.blocked)
      this.totalTemps.push(temp);
  }

  static Reuse() {
    return `t${this.totalTemps}`;
  }

  static Reset() {
    const totalTemps = [];
    for (let i = 0; i < 100; i += 1) {
      totalTemps.push(new Temporary(i));
    }
    this.TotalTemps = totalTemps.reverse();
  }
}
