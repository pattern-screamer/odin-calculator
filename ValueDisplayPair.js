export default class ValueDisplayPair {
  constructor(value, display) {
    this.value = value;
    this.display = display;
  }

  addDigit(digit) {
    this.value += digit;
    this.display.textContent = this.value;
  }
}