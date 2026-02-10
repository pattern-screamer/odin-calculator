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

//DOM manipulation functions
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

//Eventlistener functions
const handleDigitInput = function (event) {
  switch (event.target.id) {
    
  }
}

const handleOperatorInput = function (event) {
  switch (event.target.id) {
    
  }
}

const clear = function () {

}

//Display DOM references
const displayNumOne = document.querySelector('#num1');
const displayNumTwo = document.querySelector('#num2');
const displayOperator = document.querySelector('#operator');

//Button DOM references
const digitButtons = document.querySelector('#digit-buttons');
const operatorButtons = document.querySelector('#operator-buttons');
const clearButton = document.querySelector('#clear');

//Adding eventListeners
digitButtons.addEventListener('click', handleDigitInput);
operatorButtons.addEventListener('click', handleDigitInput);
clearButton.addEventListener('click', clear);

let num1;
let num2;
let operator;
