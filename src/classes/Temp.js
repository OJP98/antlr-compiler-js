export default class Temp {
  static totalTemps = 0;

  static New() {
    this.totalTemps += 1;
    return `t${this.totalTemps}`;
  }

  static Reset() {
    this.totalTemps = 0;
  }
}
