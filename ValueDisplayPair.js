export default class ValueDisplayPair {
  constructor(value, display) {
    this.value = value;
    this.display = display;
  }

  addDigit(digit) {
    this.value += digit;
    this.display.textContent = this.value;
  }

  removeLastDigit() {
    this.value = this.value.slice(0, -1);
    this.display.textContent = this.value;
  }

  setValue(value) {
    this.value = value;
    this.display.textContent = value;
  }
}