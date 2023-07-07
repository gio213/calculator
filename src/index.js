import createCalcLayout from "./components/createCalcLayout";

const app = document.querySelector(".app");
app.appendChild(createCalcLayout());

// get elements from returned layout
let number = [];

const calcDisplay = document.querySelector(".calcDisplay");
const calcButtons = document.querySelector(".calcButtons");
const calcButton = document.querySelectorAll(".calc-button");

// get buttons value
calcButton.forEach((button) => {
  console.log(button);
  button.addEventListener("click", () => {
    console.log(button.textContent);
    let buttonValue = button.textContent;
    isNumber(buttonValue);
    return buttonValue;
  });
});

// calculate numbers
const isNumber = (buttonValue) => {
  switch (buttonValue) {
    case "AC":
      number = [];
      calcDisplay.textContent = "0";
      break;
    case "DEL":
      number.pop();
      calcDisplay.textContent = number.join("");
      break;
    case "%":
      number.push("%");
      calcDisplay.textContent = number.join("");
      break;
    case "/":
      number.push("/");
      calcDisplay.textContent = number.join("");
      break;
    case "x":
      number.push("*");
      calcDisplay.textContent = number.join("");
      break;
    case "-":
      number.push("-");
      calcDisplay.textContent = number.join("");
      break;
    case "+":
      number.push("+");
      calcDisplay.textContent = number.join("");
      break;
    case "=":
      let result = eval(number.join(""));
      calcDisplay.textContent = result;
      number = [];
      break;
    case "π":
      number.push(Math.PI);
      calcDisplay.textContent = number.join("");
      break;

    default:
      number.push(buttonValue);
      calcDisplay.textContent = number.join("");
      break;
  }
};
