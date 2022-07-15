const add = function (firstNumber, nextNumber) {
  let result = firstNumber + nextNumber;
  return result;
};

const substract = function (firstNumber, nextNumber) {
  let result = firstNumber - nextNumber;
  return result;
};

const multiply = function (firstNumber, nextNumber) {
  let result = firstNumber * nextNumber;
  return result;
};

const divide = function (firstNumber, nextNumber) {
  let result = firstNumber / nextNumber;
  return result;
};

const operate = function (firstNumber, nextNumber, operatorType) {
  console.log(typeof firstNumber);
  console.log(typeof operatorType);
  if (operatorType === "+") {
    return add(firstNumber, nextNumber);
  } else if (operatorType === "-") {
    return substract(firstNumber, nextNumber);
  } else if (operatorType === "*") {
    return multiply(firstNumber, nextNumber);
  } else if (operatorType === "/") {
    return divide(firstNumber, nextNumber);
  }
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
    console.log("hi");
    let decimalButton = document.querySelector(".decimalPointKey");
    decimalButton.removeEventListener("click", populateDisplay);
  }
};
const numericKeys = document.querySelectorAll("div#numericKeys>button");
numericKeys.forEach((key) => key.addEventListener("click", populateDisplay));

const calculatorFunctions = function (key) {
  let keyPushed = key.path[0].outerText;
  if (keyPushed === "AC") {
    let display = document.querySelector("#calculatorDisplay");
    let clearDisplay = (display.textContent = "");
  }
  // if (keyPushed === "C") {
  // }
  // if (keyPushed === "\xB1") {
  // }
};
const functionKeys = document.querySelectorAll("div#functionKeys>button");
functionKeys.forEach((key) =>
  key.addEventListener("click", calculatorFunctions)
);

// const operands = {
//   firstNumber: 0,
//   secondNumber: 0,
// };
// console.log(operands);

const calculatorOperations = function (key) {
  let keyPushed = key.path[0].outerText;
  switch (true) {
    case keyPushed === "\xF7":
      console.log("Divided");
      break;
    case keyPushed === "\xD7":
      console.log("Times");
      break;
    case keyPushed === "\u2212":
      console.log("Minus");
      break;
    case keyPushed === "+":
      console.log("Plus");
      break;
  }
};
const operationKeys = document.querySelectorAll("div#operationKeys>button");
operationKeys.forEach((key) =>
  key.addEventListener("click", calculatorOperations)
);
