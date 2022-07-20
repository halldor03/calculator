const mem = {
  currentNumber: null,
  firstNumber: null,
  nextNumber: null,
  operator: null,
};
let currentNumber = mem.currentNumber;
let firstNumber = mem.firstNumber;
let nextNumber = mem.nextNumber;
let operator = mem.operator;

const display = document.querySelector("#calculatorDisplay");
const numericKeys = document.querySelectorAll("div#numericKeys>button");
const functionKeys = document.querySelectorAll("div#functionKeys>button");
const operationKeys = document.querySelectorAll("div#operationKeys>button");
const decimalButton = document.querySelector(".decimalPointKey");
const equalsButton = document.querySelector(".equalsKey");

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

const calculatorFunctions = function (key) {
  let keyPushed = key.path[0].outerText;
  if (keyPushed === "AC") {
    firstNumber = 0;
    nextNumber = 0;
    display.innerText = "";
  }
  // if (keyPushed === "C") {
  // }
  // if (keyPushed === "\xB1") {
  // }
};
functionKeys.forEach((key) =>
  key.addEventListener("click", calculatorFunctions)
);

const populateDisplay = function () {
  for (let i = 0; i < numericKeys.length; i++) {
    numericKeys[i].addEventListener("click", () => {
      let keyPushed = numericKeys[i].value;
      let outputNumber = (display.innerText += keyPushed);
      if (outputNumber.length > 9) {
        display.innerText = outputNumber.substring(0, 9);
      }
      if (outputNumber.includes(".")) {
        decimalButton.disabled = true;
      }
      currentNumber = parseFloat(outputNumber);
      return currentNumber;
    });
  }
};

const inputNumber = function () {
  if (display.innerText === "") {
    populateDisplay();
  }
};
inputNumber();

const inputOperator = function (key) {
  let keyPushed = key.path[0].outerText;
  switch (true) {
    case keyPushed === "+":
      decimalButton.disabled = false;
      firstNumber = currentNumber;
      display.innerText = "";
      for (let i = 0; i < numericKeys.length; i++) {
        numericKeys[i].addEventListener("click", () => {
          nextNumber = parseFloat(display.innerText);
          console.log("First number: " + firstNumber);
          console.log("Second number: " + nextNumber);
          return nextNumber;
        });
      }
  }
  return (operator = "+");
};
operationKeys.forEach((key) => key.addEventListener("click", inputOperator));

const operate = function (op) {
  console.log("First number: " + firstNumber);
  console.log("Second number: " + nextNumber);
  switch (true) {
    case operator === "+":
      return console.log("Sum: " + add(firstNumber, nextNumber));
    case "-":
      return substract(firstNumber, nextNumber);
    case "*":
      return multiply(firstNumber, nextNumber);
    case "/":
      return divide(firstNumber, nextNumber);
  }
};
equalsButton.addEventListener("click", operate);
