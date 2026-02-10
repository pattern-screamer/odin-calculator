//Math operations
const add = function (num1, num2) {
  return num1 + num2;
}

const subtract = function (num1, num2) {
  return num1 - num2;
}

const multiply = function (num1, num2) {
  return num1 * num2;
}

const divide = function (num1, num2) {
  return num1 / num2;
}

const operate = function (num1, num2, operator) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
  }
}

//Display variables
const displayNumOne = document.querySelector('#num-one');
const displayOperator = document.querySelector('#operator');
const displayNumTwo = document.querySelector('#num-two');

let numOne = '';
let operator = '';
let numTwo = '';

//DOM manipulation
const updateNumOne = function (digit) {
  numOne += digit;
  displayNumOne.textContent = numOne;
}

const updateOperator = function (operatorChar) {
  operator = operatorChar;
  displayOperator.textContent = operatorChar;
}

const updateNumTwo = function (digit) {
  numTwo += digit;
  displayNumTwo.textContent = numTwo;
}