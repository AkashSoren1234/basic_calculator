import color_switcher_styles from "./color_palette.json" assert { type: "json" };
import focus_color_changer from "./focus_color_changer.js";
import theme_changer from "./theme_changer.js";

let color_switchers = document.querySelectorAll(".color_circle");
let buttons = document.querySelectorAll("button");
let displayOutput = document.querySelector(
  ".display-output-container"
).firstElementChild;

let firstNumber = "";
let operator = "";
let secondNumber = "";
let output = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.classList.contains("numbers")) {
      if (firstNumber.length == 0) {
        firstNumber = display_function(firstNumber, displayOutput, e);
      } else {
        if (operator.length == 0) {
          if (firstNumber.length < 10) {
            firstNumber = display_function(firstNumber, displayOutput, e);
          }
        } else {
          if (secondNumber.length < 10) {
            secondNumber = display_function(secondNumber, displayOutput, e);
          }
        }
      }
    } else if (e.target.classList.contains("decimal")) {
      if (firstNumber.length == 0) {
        if (firstNumber.length < 10) {
          firstNumber = display_function(firstNumber, displayOutput, e);
        }
      } else {
        if (!firstNumber.includes(".")) {
          if (secondNumber.length == 0) {
            if (firstNumber.length < 10) {
              firstNumber = display_function(firstNumber, displayOutput, e);
            }
          } else {
            if (secondNumber.length < 10) {
              secondNumber = display_function(secondNumber, displayOutput, e);
            }
          }
        } else {
          if (operator.length != 0) {
            if (!secondNumber.includes(".")) {
              if (secondNumber.length < 10) {
                secondNumber = display_function(secondNumber, displayOutput, e);
              }
            }
          }
        }
      }
    } else if (e.target.classList.contains("operation")) {
      if (operator.length == 0) {
        if (firstNumber.length != 0) {
          if (secondNumber.length == 0) {
            operator = e.target.id;
          }
        }
      } else {
        output = calculation(firstNumber, secondNumber, operator);
        output = output.toString();
        if (output.length > 14) {
          output = output.substring(0, 14);
          displayOutput.textContent = output;
        } else {
          displayOutput.textContent = output;
        }
        firstNumber = output;
        output = "";
        secondNumber = "";
        operator = e.target.id;
      }
    } else if (e.target.classList.contains("equals")) {
      if (output.length == 0) {
        if (firstNumber.length != 0) {
          if (secondNumber.length != 0) {
            if (operator.length != 0) {
              output = calculation(firstNumber, secondNumber, operator);
              output = output.toString();
              if (output.length - 14 > 0) {
                let diff = output.length - 14;
                let fontsize = 2.5 - diff / 7;
                displayOutput.style.fontSize = `${fontsize}rem`;
                displayOutput.textContent = output;
              } else {
                displayOutput.textContent = output;
              }
            }
          }
        }
      }
    } else if (e.target.classList.contains("reset")) {
      firstNumber = "";
      secondNumber = "";
      operator = "";
      output = "";
      displayOutput.textContent = "0";
    } else {
      if (secondNumber.length != 0) {
        if (output.length != 0) {
          output = output.slice(0, -1);
          if (output.length != 0) {
            displayOutput.textContent = output;
          } else {
            displayOutput.textContent = secondNumber;
          }
        } else {
          secondNumber = secondNumber.slice(0, -1);
          if (secondNumber.length != 0) {
            displayOutput.textContent = secondNumber;
          } else {
            displayOutput.textContent = firstNumber;
          }
        }
      } else {
        if (firstNumber.length != 0) {
          firstNumber = firstNumber.slice(0, -1);
          if (firstNumber.length != 0) {
            displayOutput.textContent = firstNumber;
          } else {
            displayOutput.textContent = "0";
            operator = "";
          }
        }
      }
    }
  });
});

function display_function(x, z, e) {
  x = x + e.target.textContent;
  z.textContent = x;
  return x;
}

function calculation(x, y, z) {
  if (z == "add") {
    return parseFloat((parseFloat(x) + parseFloat(y)).toFixed(3));
  } else if (z == "minus") {
    return parseFloat((parseFloat(x) - parseFloat(y)).toFixed(3));
  } else if (z == "multiply") {
    return parseFloat((parseFloat(x) * parseFloat(y)).toFixed(3));
  } else {
    return parseFloat((parseFloat(x) / parseFloat(y)).toFixed(3));
  }
}

color_switchers.forEach((color_switcher) => {
  color_switcher.addEventListener("click", (e) => {
    if (e.target.id == "color-one") {
      theme_changer(color_switcher_styles["color_one"], e.target.id);
      focus_color_changer(color_switcher_styles["color_one"]);
    } else if (e.target.id == "color-two") {
      theme_changer(color_switcher_styles["color_two"], e.target.id);
      focus_color_changer(color_switcher_styles["color_two"]);
    } else {
      theme_changer(color_switcher_styles["color_three"], e.target.id);
      focus_color_changer(color_switcher_styles["color_three"]);
    }
  });
});
