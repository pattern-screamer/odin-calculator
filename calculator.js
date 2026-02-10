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
  num1 += numOne;
  displayNumOne.textContent += numOne;
}

const setNumTwo = function (numTwo) {
  num2 += numTwo;
  displayNumTwo.textContent += numTwo;
}

const setOperator = function (operatorChar) {
  operator = operatorChar;
  displayOperator.textContent = operatorChar;
  inputStage++;
}

//Eventlistener functions
const handleDigitInput = function (event) {
  switch (event.target.id) {
    case 'zero':
      whichNumber(0);
      break;
  }
}

const whichNumber = function(digit) {
  if (inputStage === 0) {
    setNumOne(digit);
  } else if (inputStage === 1) {
    setNumTwo(digit);
  }
}

const handleOperatorInput = function (event) {
  if (inputStage === 0) {
    switch (event.target.id) {
      case 'plus':
        setOperator('+');
        break;
      case 'minus':
        setOperator('-');
        break;
      case 'star':
        setOperator('*');
        break;
      case 'slash':
        setOperator('/');
        break;
      case 'equals':
        equals();
        break;
      case 'clear':
        clear();
        break;
    }
  }
}

const equals = function() {
  inputStage = 0;
}

const clear = function () {
  displayNumOne.textContent = '';
  displayNumTwo.textContent = '';
  displayOperator.textContent = '';
  inputStage = 0;
}

//Display DOM references
const displayNumOne = document.querySelector('#num1');
const displayNumTwo = document.querySelector('#num2');
const displayOperator = document.querySelector('#operator');

//Button DOM references
const digitButtons = document.querySelector('#digit-buttons');
const operatorButtons = document.querySelector('#operator-buttons');

//Adding eventListeners
digitButtons.addEventListener('click', handleDigitInput);
operatorButtons.addEventListener('click', handleDigitInput);

let num1 = '';
let num2 = '';
let operator;
let inputStage;