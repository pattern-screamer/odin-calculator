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

//Extract relevant data from mathematical calculation of syntax "(operand-one) (operator) (operand-two)"
const extractCalculation = function(string) {
  const stringArray = string.split(' ');
  const operationArray = [Number(stringArray[0]), Number(stringArray[2]), stringArray[1]];
  return operationArray;
}

//Front-end functions
const calculate = function (string) {
  return operate(...extractCalculation(string));
}