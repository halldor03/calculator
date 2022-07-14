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

const numericKeys = document.querySelector("#numericKeys>button");
const numericKeyPressed = () => {
  let keyContent = numericKeys.textContent;
  console.log(keyContent);
  // let test = document.getElementsByClassName("eightKey");
  // console.log(test);
  const displayContent = document.querySelector("#calculatorDisplay");
};
numericKeys.addEventListener("click", numericKeyPressed);
