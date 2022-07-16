const add = function (firstN, nextN) {
  let result = firstNumber + nextNumber;
  return result;
};

const substract = function (firstN, nextN) {
  let result = firstNumber - nextNumber;
  return result;
};

const multiply = function (firstN, nextN) {
  let result = firstNumber * nextNumber;
  return result;
};

const divide = function (firstN, nextN) {
  let result = firstNumber / nextNumber;
  return result;
};

const populateDisplay = function (key) {
  let keyPushed = key.path[0].outerText;
  let display = document.querySelector("#calculatorDisplay");
  let outputNumber = (display.textContent += keyPushed);
  if (outputNumber.length === 9) {
    numericKeys.forEach((key) =>
      key.removeEventListener("click", populateDisplay)
    );
  }
  if (keyPushed === ".") {
    decimalButton.removeEventListener("click", populateDisplay);
  }
  firstNumber = Number(outputNumber);
};
const decimalButton = document.querySelector(".decimalPointKey");
const numericKeys = document.querySelectorAll("div#numericKeys>button");
numericKeys.forEach((key) => key.addEventListener("click", populateDisplay));

const calculatorFunctions = function (key) {
  let keyPushed = key.path[0].outerText;
  if (keyPushed === "AC") {
    display.textContent = "";
    numericKeys.forEach((key) =>
      key.addEventListener("click", populateDisplay)
    );
  }
  // if (keyPushed === "C") {
  // }
  // if (keyPushed === "\xB1") {
  // }
};
const display = document.querySelector("#calculatorDisplay");
const functionKeys = document.querySelectorAll("div#functionKeys>button");
functionKeys.forEach((key) =>
  key.addEventListener("click", calculatorFunctions)
);

const operands = {
  firstNumber: 0,
  nextNumber: 10,
};
console.log(operands);
let firstNumber = operands.firstNumber;
let nextNumber = operands.nextNumber;

const operate = function (key, firstN, nextN) {
  let keyPushed = key.path[0].outerText;
  switch (true) {
    case keyPushed === "+":
      display.textContent = "";
      break;
    case keyPushed === "\u2212":
      console.log("Minus");
      console.log(substract(firstNumber, nextNumber));
      break;
    case keyPushed === "\xD7":
      console.log("Times");
      console.log(multiply(firstNumber, nextNumber));
      break;
    case keyPushed === "\xF7":
      console.log("Divided");
      console.log(divide(firstNumber, nextNumber));
      break;
    case keyPushed === "=":
      display.textContent = add(firstNumber, nextNumber);
      break;
  }
};
const operationKeys = document.querySelectorAll("div#operationKeys>button");
operationKeys.forEach((key) => key.addEventListener("click", operate));
