let numbers = document.querySelectorAll(".numbers");
let operations = document.querySelectorAll(".operation");
let decimal = document.querySelector(".decimal");
let reset = document.querySelector(".reset");
let equals = document.querySelector(".equals");
let backspace = document.querySelector(".delete");

function focus_color_changer(x) {
  numbers.forEach((number) => {
    number.addEventListener("mousedown", () => {
      number.style.boxShadow = `0 0 2px 3px ${x["remaining_key_shadow"]}`;
      number.addEventListener("mouseup", () => {
        number.style.boxShadow = `0 4px 3px 1px ${x["remaining_key_shadow"]}`;
      });
    });
  });
  operations.forEach((operation) => {
    operation.addEventListener("mousedown", () => {
      operation.style.boxShadow = `0 0 2px 3px ${x["remaining_key_shadow"]}`;
      operation.addEventListener("mouseup", () => {
        operation.style.boxShadow = `0 4px 3px 1px ${x["remaining_key_shadow"]}`;
      });
    });
  });
  decimal.addEventListener("mousedown", () => {
    decimal.style.boxShadow = `0 0 2px 3px ${x["remaining_key_shadow"]}`;
    decimal.addEventListener("mouseup", () => {
      decimal.style.boxShadow = `0 4px 3px 1px ${x["remaining_key_shadow"]}`;
    });
  });
  reset.addEventListener("mousedown", () => {
    reset.style.boxShadow = `0 0 2px 3px ${x["delete_and_reset_key_shadow"]}`;
    reset.addEventListener("mouseup", () => {
      reset.style.boxShadow = `0 4px 3px 1px ${x["delete_and_reset_key_shadow"]}`;
    });
  });
  backspace.addEventListener("mousedown", () => {
    backspace.style.boxShadow = `0 0 2px 3px ${x["delete_and_reset_key_shadow"]}`;
    backspace.addEventListener("mouseup", () => {
      backspace.style.boxShadow = `0 4px 3px 1px ${x["delete_and_reset_key_shadow"]}`;
    });
  });
  equals.addEventListener("mousedown", () => {
    equals.style.boxShadow = `0 0 2px 3px ${x["equals_key_shadow"]}`;
    equals.addEventListener("mouseup", () => {
      equals.style.boxShadow = `0 4px 3px 1px ${x["equals_key_shadow"]}`;
    });
  });
}

export default focus_color_changer;
