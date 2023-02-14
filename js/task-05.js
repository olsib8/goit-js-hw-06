const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

const handleInput = (event) => {
  if (!event.currentTarget.value) {
    textOutput.textContent = "Anonymous";
  } else {
    textOutput.textContent = event.currentTarget.value.trim();
  }
};

textInput.addEventListener("input", handleInput);
