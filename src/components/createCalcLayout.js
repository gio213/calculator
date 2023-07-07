// create calculator layout
const createCalcLayout = () => {
  const calcLayout = document.createElement("div");
  calcLayout.classList.add("calc-layout");
  const calcDisplay = document.createElement("div");
  calcDisplay.classList.add("calcDisplay");
  calcDisplay.textContent = "0";
  calcLayout.appendChild(calcDisplay);

  const calcButtons = document.createElement("div");
  calcButtons.classList.add("calcButtons");

  calcLayout.appendChild(calcButtons);

  const buttons = [
    "AC",
    "DEL",
    "%",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "π",
    "=",
  ];

  buttons.forEach((button) => {
    const calcButton = document.createElement("button");
    calcButton.classList.add("calc-button");
    calcButton.textContent = button;
    calcButtons.appendChild(calcButton);
  });

  return calcLayout;
};

export default createCalcLayout;
