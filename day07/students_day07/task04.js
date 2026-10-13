const buttons = document.querySelectorAll("footer button");
const plusBtn = buttons[0];
const minusBtn = buttons[1];

const colorSelect = document.querySelector("footer select");

let fontSize = 16;

plusBtn.addEventListener("click", function () {
    fontSize = fontSize + 2;
    document.body.style.fontSize = fontSize + "px";
});

minusBtn.addEventListener("click", function () {
    fontSize = fontSize - 2;
    document.body.style.fontSize = fontSize + "px";
});

colorSelect.addEventListener("change", function () {
    document.body.style.backgroundColor = colorSelect.value;
});