const input = document.querySelector("input");
const keys = document.querySelectorAll(".keyboard-item");



keys.forEach((key) => {
  key.addEventListener("click", () => {
    const keyValue = key.dataset.value;

    if (keyValue === "escape") {
      return (input.value = input.value.slice(0, input.value.length - 1));
    } 
    
    else if (keyValue === "space") {
      return (input.value += " ");
    } 
    
    else if (keyValue === "caps") {
      const toggleCaps = key.children[1];
      if (toggleCaps.classList.contains("active")) {
        capsToggle(false);
        return toggleCaps.classList.remove("active");
      } else {
        capsToggle(true);
        return toggleCaps.classList.add("active");
      }
    } 
    
    else if (keyValue === "enter") {
      return alert("you have entered: " + input.value);
    } 
    
    else {
      const capsKey = [...keys].find((child) => child.dataset.value === "caps")
        .children[1];

      if (capsKey.classList.contains("active")) {
        input.value += keyValue.toUpperCase();
      } else {
        input.value += keyValue.toLowerCase();
      }
    }
  });
});

function capsToggle(arg) {
  keys.forEach((key) => {
    if (arg) {
      key.style.textTransform = "uppercase";
    } else {
      key.style.textTransform = "lowercase";
    }
  });
}

function transformCapsDeactivated() {
  keys.forEach((key) => {
  });
}
