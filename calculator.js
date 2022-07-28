// const calculator = document.querySelector(".calculator");
// const keys = document.querySelector(".keys");
// const displaytext = document.querySelector(".display");

// calculator.querySelector(".keys");

// keys.addEventListener("click", (e) => {
//   if (e.target.matches("button")) {
//     const key = e.target;
//     const action = key.dataset.action;
//     const Keycontent = keys.textContent;
//     const dipslaynum = displaytext.textContent;
//     if (!action) {
//       if (dipslaynum === "0") {
//         displaytext = keycontent;
//       }
//     }
//   }

//   // if (!action) {
//   //   console.log("number key");
//   //   (displaytext.textContent = keys), value;
//   // }
//   // if (
//   //   action === "add" ||
//   //   action === "subtract" ||
//   //   action === "multiply" ||
//   //   action === "divide"
//   // ) {
//   //   console.log("operator key");
//   // }
// });
// class Calculator {
//   constructor(previousOperandTextElement, currentOperandTextElement) {
//     this.previousOperandTextElement = previousOperandTextElement;
//     this.currentOperandTextElement = currentOperandTextElement;
//   }
//   clear() {
//     this.currentOperand = "";
//     this.previousOperand = "";
//     this.Operation = undefined;
//   }

//   delete() {}

//   appendNumber(number) {
//     this.currentOperand = this.currentOperand.toString() + number.toString();
//   }

//   chooseOperation() {}

//   compute() {}

//   updateDisplay() {
//     this.currentOperandTextElement.innerText = this.currentOperand;
//   }
// }

// const numberButtons = document.querySelectorAll("[data-number]");
// const numberOperations = document.querySelectorAll("[data-operation]");
// const equals = document.querySelector("[data-equals]");
// const deleteButton = document.querySelector("[data-delete]");
// const allClearButton = document.querySelector("[data-clear]");
// const previousOperandTextElement = document.querySelector(
//   "[data-previous-Operand]"
// );
// const currentOperandTextElement = document.querySelector(
//   "[data-current-Operand]"
// );

// const calculator = new Calculator(
//   previousOperandTextElement,
//   currentOperandTextElement
// );

// numberButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     calculator.appendNumber(button.innerText);
//     calculator.updateDisplay();
//   });
// });
const output = document.querySelector("#result");
function display(dec) {
  output.value += dec;
  return dec;
}
function clearScreen(clear) {
  result.value = "";
}

function solve() {
  let x = document.querySelector("#result").value;
  let y = eval(x);
  output.value = y;
  return y;
}
