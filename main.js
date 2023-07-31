// two input numbers and operator
let firstNumber;
let secondNumber;
let operator;
let displayBox = document.querySelector(".display-box");

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

//Displaying clicked NUmber in the display box
let allNumbers = document.querySelectorAll(".numbers");
allNumbers = Array.from(allNumbers);
allNumbers.forEach((number) => {
  number.addEventListener("click", function () {
    displayBox.textContent = number.textContent;
  });
});
//console.log(allNumbers);
//console.log(operate("+", 10, 5));
