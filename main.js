let displayBoxRow2 = document.querySelector(".display-box-row2");
let displayBoxRow1 = document.querySelector(".display-box-row1");

// delete and clear
const deleteBtn = document.querySelector(".dlt-btn");
const clearBtn = document.querySelector(".clear-btn");

clearBtn.addEventListener("click", () => {
  displayBoxRow2.textContent = "";
});
deleteBtn.addEventListener("click", () => {
  let newContent = displayBoxRow2.textContent.slice(
    0,
    displayBoxRow2.textContent.length - 1
  );
  displayBoxRow2.textContent = newContent;
});

let allNumbersAndOperator = document.querySelectorAll(".valClick");

allNumbersAndOperator = Array.from(allNumbersAndOperator);

allNumbersAndOperator.map((item) => {
  item.addEventListener("click", () => {
    //adding clicked value to display box
  });
});
