const mem = {
  firstNumber: "",
  nextNumber: "",
  operator: undefined,
};
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
    firstNumber = "";
    nextNumber = "";
    operator = undefined;
    display.innerText = "";
    decimalButton.disabled = false;
  }
  // if (keyPushed === "C") {
  // }
  // if (keyPushed === "\xB1") {
  // }
};
functionKeys.forEach((key) =>
  key.addEventListener("click", calculatorFunctions)
);

const addNumber = function (num) {
  if (firstNumber.length > 9) {
    firstNumber = firstNumber.substring(0, 9);
  }
  if (num === ".") {
    decimalButton.disabled = true;
  }
  firstNumber = parseFloat(firstNumber + num);
  return firstNumber;
};

const updateDisplay = function () {
  display.innerText = parseFloat(firstNumber);
};

numericKeys.forEach((key) =>
  key.addEventListener("click", () => {
    addNumber(key.innerText);
    updateDisplay();
  })
);

const inputOperator = function (key) {
  let keyPushed = key.path[0].outerText;
  switch (true) {
    case keyPushed === "+":
      console.log("First number: " + firstNumber);
      numericKeys.forEach((key) =>
        key.addEventListener("click", () => {
          display.innerText = key.innerText;
          nextNumber = display.innerText;
          console.log(nextNumber);
        })
      );
      return (operator = "+");
  }
};
operationKeys.forEach((key) => key.addEventListener("click", inputOperator));

const operate = function (op) {
  console.log("First number: " + firstNumber);
  console.log("Second number: " + nextNumber);
  switch (true) {
    case operator === "+":
      decimalButton.disabled = false;
      return (display.innerText = add(firstNumber, nextNumber));
    case "-":
      return substract(firstNumber, nextNumber);
    case "*":
      return multiply(firstNumber, nextNumber);
    case "/":
      return divide(firstNumber, nextNumber);
  }
};
equalsButton.addEventListener("click", operate);
