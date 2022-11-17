let main_body_background = document.querySelector("body");
let header_title = document.querySelector(".header-title");
let theme_title = document.querySelector(".theme-title");
let color_indicator = document.querySelectorAll(".color-indicator");
let theme_switcher_background = document.querySelector(".theme-color-switcher");
let color_switchers = document.querySelectorAll(".color_circle");
let display_output = document.querySelector(".display-output-container");
let button_container = document.querySelector(".button-container");
let numbers = document.querySelectorAll(".numbers");
let operations = document.querySelectorAll(".operation");
let backspace = document.querySelector(".delete");


function theme_changer(x, y) {
  main_body_background.style.backgroundColor = x["main_background"];
  header_title.style.color = x["header_and_display_text_color"];
  theme_title.style.color = x["header_and_display_text_color"];
  color_indicator.forEach((single_color_indicator) => {
    single_color_indicator.style.color = x["header_and_display_text_color"];
  });
  theme_switcher_background.style.backgroundColor =
    x["toggle_and_keypad_background"];
  color_switchers.forEach((color_switcher) => {
    color_switcher.style.backgroundColor = x["unactive_toggler"];
    if (color_switcher.id == y) {
      color_switcher.style.backgroundColor =
        x["equals_key_and_active_toggler_background"];
    }
  });
  display_output.style.backgroundColor = x["screen_background"];
  display_output.style.color = x["header_and_display_text_color"];
  button_container.style.backgroundColor = x["toggle_and_keypad_background"];
  numbers.forEach((number) => {
    number.style.backgroundColor = x["remaining_key_background"];
    number.style.boxShadow = `0 4px 3px 1px ${x["remaining_key_shadow"]}`;
    number.style.color = x["primary_text_color"];
  });
  decimal.style.backgroundColor = x["remaining_key_background"];
  decimal.style.boxShadow = `0 4px 3px 1px ${x["remaining_key_shadow"]}`;
  decimal.style.color = x["primary_text_color"];
  operations.forEach((operation) => {
    operation.style.backgroundColor = x["remaining_key_background"];
    operation.style.boxShadow = `0 4px 3px 1px ${x["remaining_key_shadow"]}`;
    operation.style.color = x["primary_text_color"];
  });
  reset.style.backgroundColor = x["delete_and_reset_key_background"];
  reset.style.boxShadow = `0 4px 3px 1px ${x["delete_and_reset_key_shadow"]}`;
  reset.style.color = x["delete_reset_text_color"];
  backspace.style.backgroundColor = x["delete_and_reset_key_background"];
  backspace.style.boxShadow = `0 4px 3px 1px ${x["delete_and_reset_key_shadow"]}`;
  backspace.style.color = x["delete_reset_text_color"];
  equals.style.backgroundColor = x["equals_key_and_active_toggler_background"];
  equals.style.boxShadow = `0 4px 3px 1px ${x["equals_key_shadow"]}`;
  equals.style.color = x["equals_text_color"];
}

export default theme_changer;
