const handleDigitClick = function (event) {
  switch (event.target.id) {
    case 'zero':
      handleDigitInput(0);
      break;
    case 'one':
      handleDigitInput(1);
      break;
    case 'two':
      handleDigitInput(2);
      break;
    case 'three':
      handleDigitInput(3);
      break;
    case 'four':
      handleDigitInput(4);
      break;
    case 'five':
      handleDigitInput(5);
      break;
    case 'six':
      handleDigitInput(6);
      break;
    case 'seven':
      handleDigitInput(7);
      break;
    case 'eight':
      handleDigitInput(8);
      break;
    case 'nine':
      handleDigitInput(9);
  }
}

const handleDigitInput = function (digit) {
  
}

const clear = function () {

}

const digitButtons = document.querySelector('#digit-buttons');
const utilityButtons = document.querySelector('#utility-buttons');

let num1;
let num2;
let operator;

digitButtons.addEventListener('click', handleDigitClick);
utilityButtons.addEventListener('click', handleUtilityClick);