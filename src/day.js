export class CalculateWD {
  constructor(month, year, date) {
    this.month = month;
    this.year = year;
    this.date = date;
  }
  zeller() {
    if (this.month === 1 || this.month === 2) {
      this.month += 12;
      this.year--;
    }
    let z = parseInt(
      (this.date +
        (13 * (this.month + 1)) / 5 +
        this.year +
        this.year / 4 -
        this.year / 100 +
        this.year / 400) %
        7
    );

    return z;
  }
}

// ......................................End................................
