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
      if (num2 === 0) {
        printError("ERROR: CAN'T DIVIDE BY 0");
        return '';
      } else {
        return divide(num1, num2);
      }
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
  if (numOne.length > 0) {
    operator = operatorChar;
    displayOperator.textContent = operatorChar;
    if (inputNumber === 0) {
      shiftInputNumber();
    }
  } else if (storedResult.length > 0) {
    updateNumOne(storedResult);
    operator = operatorChar;
    displayOperator.textContent = operatorChar;
    if (inputNumber === 0) {
      shiftInputNumber();
    }
  }
}

const updateNumTwo = function (digit) {
  numTwo += digit;
  displayNumTwo.textContent = numTwo;
}

const funnelDigitInput = function (digit) {
  if (inputNumber === 0) {
    updateNumOne(digit);
  } else if (inputNumber === 2) {
    updateNumTwo(digit);
  }
}

//Button event listeners
const handleDigitInput = function (event) {
  if (inputNumber === 1) {
    shiftInputNumber();
  }
  if (inputNumber === 0 && storedResult.length > 0) {
    storeResult('');
    displayResult.textContent = storedResult;
  }
  switch (event.target.id) {
    case 'zero':
      funnelDigitInput(0);
      break;
    case 'one':
      funnelDigitInput(1);
      break;
    case 'two':
      funnelDigitInput(2);
      break;
    case 'three':
      funnelDigitInput(3);
      break;
    case 'four':
      funnelDigitInput(4);
      break;
    case 'five':
      funnelDigitInput(5);
      break;
    case 'six':
      funnelDigitInput(6);
      break;
    case 'seven':
      funnelDigitInput(7);
      break;
    case 'eight':
      funnelDigitInput(8);
      break;
    case 'nine':
      funnelDigitInput(9);
      break;
  }
}

const handleOperatorInput = function (event) {
  if (inputNumber < 2) {
    switch (event.target.id) {
      case 'plus':
        updateOperator('+');
        break;
      case 'minus':
        updateOperator('-');
        break;
      case 'star':
        updateOperator('*');
        break;
      case 'slash':
        updateOperator('/');
        break;
    }
  }
}

const equals = function () {
  if (numOne.length > 0 && operator.length > 0 && numTwo.length === 0) {
    printError("ERROR");
  } else if (numOne.length > 0 && operator.length === 0) {
    result = numOne;
    displayResult.textContent = numOne;
    storeResult(numOne);
    clearPartial();
  } else if (numTwo.length > 0 && inputNumber === 2) {
    result = operate(Number(numOne), Number(numTwo), operator);
    displayResult.textContent = String(result);
    storeResult(String(result));
    if (result != '') {
      clearPartial();
    }
  }
}

const clearPartial = function () {
  numOne = '';
  operator = '';
  numTwo = '';
  inputNumber = 0;
  displayNumOne.textContent = '';
  displayOperator.textContent = '';
  displayNumTwo.textContent = '';
}

const clearFull = function () {
  numOne = '';
  operator = '';
  numTwo = '';
  inputNumber = 0;
  displayNumOne.textContent = '';
  displayOperator.textContent = '';
  displayNumTwo.textContent = '';
  displayResult.textContent = '';
  storedResult = '';
}

const shiftInputNumber = function () {
  inputNumber++;
}

const digitButtons = document.querySelector('#digit-buttons');
const operatorButtons = document.querySelector('#operator-buttons');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
const displayResult = document.querySelector('#result');

digitButtons.addEventListener('click', handleDigitInput);
operatorButtons.addEventListener('click', handleOperatorInput);
equalsButton.addEventListener('click', equals);
clearButton.addEventListener('click', clearFull);

//Add result storing and manipulation functionality
let storedResult = '';

const storeResult = function (number) {
  storedResult = number;
}

//Print error
const printError = function (errorMessage) {
  clearPartial();
  displayNumOne.textContent = errorMessage;
}