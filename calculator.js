const sum = function (...operands) {
  return operands.reduce((acc, operand) => acc + operand, 0);
}
const subtract = function (...operands) {
  return operands.reduce((acc, operand) => acc - operand, 0);
}

const multiply = function (...operands) {
  return operands.reduce((acc, operand) => acc * operand, 0);
}

const divide = function (...operands) {
  return operands.reduce((acc, operand) => acc / operand, 0);
}