const buttons = document.querySelector('div#buttons');
const xDisplay = document.querySelector('span#x');
const operatorDisplay = document.querySelector('span#operator');
const yDisplay = document.querySelector('span#y');

let x = '';
let operator = '';
let y = '';
let editNumberIndex = 0;
let xIsResult = false;

function add(numOne, numTwo) {
  return numOne + numTwo;
}

function subtract(numOne, numTwo) {
  return numOne - numTwo;
}

function multiply(numOne, numTwo) {
  return numOne * numTwo;
}

function divide(numOne, numTwo) {
  return numOne / numTwo;
}

function operate(numOne, numTwo, operation) {
  switch (operation) {
    case '+':
      return add(numOne, numTwo);
    case '-':
      return subtract(numOne, numTwo);
    case '*':
      return multiply(numOne, numTwo);
    case '/':
      return divide(numOne, numTwo);
  }
}

function updateDisplay() {
  xDisplay.textContent = x;
  operatorDisplay.textContent = operator;
  yDisplay.textContent = y;
}

function addToNumber(addition) {
  if (editNumberIndex === 0) {
    if (xIsResult) {
      x = '';
      xIsResult = false;
    }
    x += addition
  } else if (editNumberIndex === 1) {
    y += addition
  }
  updateDisplay();
}

function setOperator(newOperator) {
  if (operator === '' && editNumberIndex === 0) {
    operator = newOperator;
    editNumberIndex++;
  } else if (editNumberIndex === 1 && y !== '') {
    evaluate();
    operator = newOperator;
    editNumberIndex++;
  }
  updateDisplay();
}

function addDecimalPoint() {
  if (editNumberIndex === 0 && !x.includes('.')) {
    if (xIsResult) {
      x = '';
      xIsResult = false;
    }
    if (x === '') {
      x = '0';
    }
    x += '.'
  } else if (editNumberIndex === 1 && !y.includes('.')) {
    if (y === '') {
      y = '0';
    }
    y += '.'
  }
  updateDisplay();
}

function evaluate() {
  if (x !== '' && operator !== '' && y === '') {
    x = "Syntax Error";
    operator = '';
    y = '';
    editNumberIndex = 0;
  } else if (x !== '' && operator === '/' && y === '0') {
    x = "Division by 0 not allowed";
    operator = '';
    y = '';
    editNumberIndex = 0;
  } else if (x !== '' && operator !== '' && y !== '') {
    const result = operate(+x, +y, operator).toString();
    if (result.includes('.') && result.split('.')[1].length > 10) {
      x = Number(result).toFixed(10).toString();
    } else {
      x = result;
    }
    operator = '';
    y = '';
    editNumberIndex = 0;
    xIsResult = true;
  }
  updateDisplay();
}

function backspace() {
  if (editNumberIndex === 0 && x.length > 0) {
    x = x.slice(0, -1);
  } else if (editNumberIndex === 1 && y.length === 0) {
    operator = '';
    editNumberIndex--;
  } else if (editNumberIndex === 1 && y.length > 0) {
    y = y.slice(0, -1);
  }
  updateDisplay();
}

function reset() {
  x = '';
  operator = '';
  y = '';
  editNumberIndex = 0;
  xIsResult = false;
  updateDisplay();
}

function handleButtonInput(event) {
  if (x === "Syntax Error" || x === "Division by 0 not allowed") {
    x = '';
    updateDisplay();
  }
  switch (event.target.id) {
    case 'nine':
      addToNumber(9);
      break;
    case 'eight':
      addToNumber(8);
      break;
    case 'seven':
      addToNumber(7);
      break;
    case 'six':
      addToNumber(6);
      break;
    case 'five':
      addToNumber(5);
      break;
    case 'four':
      addToNumber(4);
      break;
    case 'three':
      addToNumber(3);
      break;
    case 'two':
      addToNumber(2);
      break;
    case 'one':
      addToNumber(1);
      break;
    case 'zero':
      addToNumber(0);
      break;
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
    case 'decimal-point':
      addDecimalPoint();
      break;
    case 'equals':
      evaluate();
      break;
    case 'backspace':
      backspace();
      break;
    case 'all-clear':
      reset();
      break;
  }
}

buttons.addEventListener('click', handleButtonInput);