const inputChange = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inputChange.addEventListener("input", onTextChange);
function onTextChange(event) {
  spanText.style.fontSize = `${event.currentTarget.value}px`;
}
