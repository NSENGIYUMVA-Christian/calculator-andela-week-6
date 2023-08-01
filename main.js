// two input numbers and operator
let firstNumber = [];
let secondNumber = [];
let operatorsButtons = document.querySelectorAll(".operators");
let displayBox = document.querySelector(".display-box");
let placedOperator;
let equalOperator = document.querySelector(".equalOperator");
let isOperatorClicked = false;
let clearBtn = document.querySelector(".clear-btn");
console.log(clearBtn);
// functions for add, sub, mult and div
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

//operate function
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

//Displaying first number in the display box
let allNumbers = document.querySelectorAll(".numbers");
allNumbers = Array.from(allNumbers);
allNumbers.forEach((number) => {
  number.addEventListener("click", function () {
    displayBox.textContent += number.textContent;
    firstNumber.push(number.textContent);
  });
});

// iterate through operators
operatorsButtons.forEach((operator) => {
  operator.addEventListener("click", function () {
    placedOperator = operator.textContent;
    displayBox.textContent = operator.textContent;
    localStorage.setItem("firstNumber", JSON.stringify(firstNumber));
    isOperatorClicked = true;

    // Add the event listener for the second number input here
    allNumbers.forEach((number) => {
      number.addEventListener("click", function () {
        secondNumber.push(number.textContent);
      });
    });
    // displaying second number in display box
    for (let i = 0; i < secondNumber.length; i++) {
      displayBox.textContent += secondNumber[i];
    }
  });
});

// equalOperator
equalOperator.addEventListener("click", function () {
  firstNumber = Number(
    JSON.parse(localStorage.getItem("firstNumber")).join("")
  );
  secondNumber = Number(secondNumber.join(""));
  let result = operate(placedOperator, firstNumber, secondNumber);
  displayBox.textContent = result;
});

// clear functionality
clearBtn.addEventListener("click", function () {
  firstNumber = [];
  secondNumber = [];
  displayBox.textContent = "";
  isOperatorClicked = false;
});
