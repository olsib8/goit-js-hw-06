let counterValue = 0;
const container = document.querySelector("#counter");
const value = document.querySelector("#value");

const btnDec = container.firstElementChild;
const handleClickDec = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};
btnDec.addEventListener("click", handleClickDec);

const btnInc = container.lastElementChild;
const handleClickInc = () => {
    counterValue += 1;
    value.textContent = counterValue;
};
btnInc.addEventListener("click", handleClickInc);
