const inputArea = document.querySelector("input");
const keyboardContainer = document.querySelector(".keyboard-container");

keyboardContainer.addEventListener("click", () => {
  triggerFocus(input);
});

inputArea.addEventListener("focusin", () => {
  keyboardContainer.style.transform = "translateY(0px)";
  keyboardContainer.style.opacity = 1;
});

inputArea.addEventListener("focusout", () => {
  keyboardContainer.style.transform = "translateY(56vh)";
  keyboardContainer.style.opacity = 0;
});

function triggerFocus(element) {
  var eventType = "onfocusin" in element ? "focusin" : "focus",
    bubbles = "onfocusin" in element,
    event;

  if ("createEvent" in document) {
    event = document.createEvent("Event");
    event.initEvent(eventType, bubbles, true);
  } else if ("Event" in window) {
    event = new Event(eventType, { bubbles: bubbles, cancelable: true });
  }

  element.focus();
  element.dispatchEvent(event);
}
