const display = document.getElementById("display");

function appendToDisplay(input) {
  if (display.value === "0" || display.value === "Error") {
    display.value = "";
  }
  display.value += input;
}

function Clear() {
  display.value = "0";
}

function Calculate() {
  try {
    let expression = display.value.replace(/x/g, "*");

    if (!/^[0-9+\-*/().\s]*$/.test(expression)) {
      throw new Error("Invalid characters");
    }

    let result = Function(`"use strict"; return (${expression})`)();

    if (result === undefined || isNaN(result)) {
      throw new Error("Invalid calculation");
    }

    display.value = result;
  } catch {
    display.value = "Error";
    setTimeout(() => {
      Clear();
    }, 1000);
  }
}
