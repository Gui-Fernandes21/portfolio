const inputArea = document.querySelector("input");
const keyboardContainer = document.querySelector(".keyboard-container");

keyboardContainer.addEventListener("click", () => {
  input.focus();
});

inputArea.addEventListener("focusin", () => {
  keyboardContainer.style.transform = "translateY(0px)";
  keyboardContainer.style.opacity = 1;
});

inputArea.addEventListener("focusout", () => {
  keyboardContainer.style.transform = "translateY(56vh)";
  keyboardContainer.style.opacity = 0;
});