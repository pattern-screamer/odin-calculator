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
let inputNumber = 0;

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

const funnelDigitInput = function (digit) {
  if (inputNumber === 0) {
    updateNumOne(digit);
  } else if (inputNumber === 1) {
    updateNumTwo(digit);
  }
}

//Button event listeners
const handleDigitInput = function (event) {
  switch (event.target.id) {
    case 'zero':
      funnelDigitInput(0);
      break;
  }
}

const handleOperatorInput = function (event) {
  
}

const equals = function () {

}

const clear = function () {
  numOne = '';
  operator = '';
  numTwo = '';
  inputNumber = 0;
  displayNumOne.textContent = '';
  displayOperator.textContent = '';
  displayNumTwo.textContent = '';
}

const shiftInputNumber = function () {
  inputNumber++;
}

const digitButtons = document.querySelector('#digit-buttons');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');

digitButtons.addEventListener('click', handleDigitInput);
equalsButton.addEventListener('click', equals);
clearButton.addEventListener('click', clear);