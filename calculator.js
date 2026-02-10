//Operations
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

//DOM-functions
const setNumOne = function (numOne) {
  num1 = numOne;
  displayNumOne.textContent = numOne;
}

const setNumTwo = function (numTwo) {
  num2 = numTwo;
  displayNumTwo.textContent = numTwo;
}

const setOperator = function (operatorChar) {
  operator = operatorChar;
  displayOperator.textContent = operatorChar;
}

const displayNumOne = document.querySelector('#num1');
const displayNumTwo = document.querySelector('#num2');
const displayOperator = document.querySelector('#operator');
const digitButtons = document.querySelector('#digit-buttons');
const utilityButtons = document.querySelector('#utility-buttons');

digitButtons.addEventListener()

let num1;
let num2;
let operator;