import { operate } from './operations.js';
import ValueDisplayPair from './ValueDisplayPair.js';

const numOne = new ValueDisplayPair('', document.querySelector('#num-one'));
const operator = new ValueDisplayPair('', document.querySelector('#operator'));
const numTwo = new ValueDisplayPair('', document.querySelector('#num-two'));

let inputNumber = 0;

//DOM manipulation
const updateNumOne = function (digit) {
  numOne.value += digit;
  numOne.display.textContent = numOne.value;
}

const updateNumTwo = function (digit) {
  numTwo.value += digit;
  numTwo.display.textContent = numTwo.value;
}

const updateOperator = function (operatorChar) {
  if (numOne.value.length > 0) {
    operator.value = operatorChar;
    operator.display.textContent = operatorChar;
    if (inputNumber === 0) {
      shiftInputNumber();
    }
  } else if (storedResult.length > 0) {
    updateNumOne(storedResult);
    operator.value = operatorChar;
    operator.display.textContent = operatorChar;
    if (inputNumber === 0) {
      shiftInputNumber();
    }
  }
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
  if (numOne.value.length > 0 && operator.value.length > 0 && numTwo.value.length === 0) {
    printError("ERROR");
  } else if (numOne.value.length > 0 && operator.value.length === 0) {
    result = numOne.value;
    displayResult.textContent = numOne.value;
    storeResult(numOne.value);
    clearPartial();
  } else if (numTwo.value.length > 0 && inputNumber === 2) {
    if (Number(numTwo.value) === 0) {
      printError("ERROR: CAN'T DIVIDE BY 0");
      result = '';
    } else {
      result = operate(Number(numOne.value), Number(numTwo.value), operator.value);
    }
    displayResult.textContent = String(result);
    storeResult(String(result));
    if (result != '' || result === 0) {
      clearPartial();
    }
  }
}

const clearPartial = function () {
  numOne.value = '';
  operator.value = '';
  numTwo.value = '';
  inputNumber = 0;
  numOne.display.textContent = '';
  operator.display.textContent = '';
  numTwo.display.textContent = '';
}

const clearFull = function () {
  numOne.value = '';
  operator.value = '';
  numTwo.value = '';
  inputNumber = 0;
  numOne.display.textContent = '';
  operator.display.textContent = '';
  numTwo.display.textContent = '';
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
  numOne.display.textContent = errorMessage;
}