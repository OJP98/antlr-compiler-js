export default class Temp {
  static set TotalTemps(totalTemps) {
    this.totalTemps = totalTemps;
  }

  static New() {
    this.totalTemps += 1;
    return `t${this.totalTemps}`;
  }

  static Reset() {
    this.TotalTemps = 0;
  }
}
