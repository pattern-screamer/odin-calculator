//TOOD code I want to keep in here
import { operate } from './operations.js';
import ValueDisplayPair from './ValueDisplayPair.js';

const numOne = new ValueDisplayPair('', document.querySelector('#num-one'));
const operator = new ValueDisplayPair('', document.querySelector('#operator'));
const numTwo = new ValueDisplayPair('', document.querySelector('#num-two'));
const storedResult = new ValueDisplayPair('', document.querySelector('#result'))

let inputNumber = 0;

const updateOperator = function (operatorChar) {
  if (numOne.value.length > 0) {
    operator.setValue(operatorChar);
    if (inputNumber === 0) {
      shiftInputNumber();
    }
  } else if (storedResult.value.length > 0) {
    numOne.addDigit(storedResult.value);
    operator.setValue(operatorChar);
    if (inputNumber === 0) {
      shiftInputNumber();
    }
  }
}

const funnelDigitInput = function (digit) {
  if (inputNumber === 0) {
    numOne.addDigit(digit);
  } else if (inputNumber === 2) {
    numTwo.addDigit(digit);
  }
}

const equals = function () {
  if (numOne.value.length > 0 && operator.value.length > 0 && numTwo.value.length === 0) {
    printError("ERROR");
  } else if (numOne.value.length > 0 && operator.value.length === 0) {
    result = numOne.value;
    storedResult.setValue(numOne.value);
    clearPartial();
  } else if (numTwo.value.length > 0 && inputNumber === 2) {
    if ((Number(numTwo.value) === 0 || numTwo.value === '0.') && operator.value === '/') {
      printError("ERROR: CAN'T DIVIDE BY 0");
      result = '';
    } else {
      result = operate(Number(numOne.value), Number(numTwo.value), operator.value);
    }
    storedResult.setValue(String(result));
    if (result != '' || result === 0) {
      clearPartial();
    }
  }
}

const clearPartial = function () {
  numOne.setValue('');
  operator.setValue('');
  numTwo.setValue('');
  inputNumber = 0;
}

const clearFull = function () {
  numOne.setValue('');
  operator.setValue('');
  numTwo.setValue('');
  storedResult.setValue('');
  inputNumber = 0;
}

const shiftInputNumber = function () {
  inputNumber++;
}

const printError = function (errorMessage) {
  clearPartial();
  numOne.display.textContent = errorMessage;
}

const handleDigitInput = function (event) {
  if (inputNumber === 1) {
    shiftInputNumber();
  }
  if (inputNumber === 0 && storedResult.value.length > 0) {
    storedResult.setValue('');
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

const addDot = function () {
  if (inputNumber === 0 && !numOne.value.includes('.')) {
    if (numOne.value.length === 0) {
      numOne.addDigit(0);
    }
    numOne.addDigit('.');
  } else if ((inputNumber === 1 || inputNumber === 2) && operator.value.length > 0 && !numTwo.value.includes('.')) {
    if (numTwo.value.length === 0) {
      numTwo.addDigit(0);
    }
    numTwo.addDigit('.');
  }
}

const digitButtons = document.querySelector('#digit-buttons');
const operatorButtons = document.querySelector('#operator-buttons');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
const dotButton = document.querySelector('#dot');

digitButtons.addEventListener('click', handleDigitInput);
operatorButtons.addEventListener('click', handleOperatorInput);
equalsButton.addEventListener('click', equals);
clearButton.addEventListener('click', clearFull);
dotButton.addEventListener('click', addDot);