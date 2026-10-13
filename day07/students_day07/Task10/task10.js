const input = document.getElementById("listItem");
const button = document.querySelector("button");

button.addEventListener("click", function () {
    const value = input.value;

    if (value === "") {
        return;
    }

    const div = document.createElement("div");
    div.textContent = value;

    input.parentNode.insertBefore(div, input.nextSibling); /* Insert the new div after the input field */

    input.value = "";
});