// JavaScript
let firstNumber = [];
let secondNumber = [];
let operatorsButtons = document.querySelectorAll(".operators");
let displayBox = document.querySelector(".display-box");
let placedOperator;
let equalOperator = document.querySelector(".equalOperator");
let isOperatorClicked = false;
let clearBtn = document.querySelector(".clear-btn");
let result;

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
function sub(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}
function mult(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}
function div(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

function operate(operator, number1, number2) {
  if (operator === "+") {
    return add(number1, number2);
  } else if (operator === "-") {
    return sub(number1, number2);
  } else if (operator === "*") {
    return mult(number1, number2);
  } else if (operator === "/") {
    return div(number1, number2);
  } else {
    return "invalid operator";
  }
}

// Event listener for numbers
let allNumbers = document.querySelectorAll(".numbers");
allNumbers.forEach((number) => {
  number.addEventListener("click", function () {
    if (!isOperatorClicked) {
      firstNumber.push(Number(number.textContent));
    } else {
      secondNumber.push(Number(number.textContent));
    }
    displayBox.textContent += number.textContent;
  });
});

// Event listener for operators
operatorsButtons.forEach((operator) => {
  operator.addEventListener("click", function () {
    placedOperator = operator.textContent;
    displayBox.textContent = operator.textContent;
    isOperatorClicked = true;
  });
});

// Event listener for equalOperator
equalOperator.addEventListener("click", function () {
  firstNumber = firstNumber.reduce((acc, num) => acc * 10 + num, 0);
  secondNumber = secondNumber.reduce((acc, num) => acc * 10 + num, 0);
  result = operate(placedOperator, firstNumber, secondNumber);
  displayBox.textContent = result;
});

// Event listener for clear button
clearBtn.addEventListener("click", function () {
  firstNumber = [];
  secondNumber = [];
  displayBox.textContent = "";
  isOperatorClicked = false;
});
