const box = document.querySelector("footer div");

let typed = "";

document.addEventListener("keydown", function (event) {
    typed = typed + event.key;

    if (typed.length > 42) {
        typed = typed.slice(-42);
    }

    box.textContent = typed;
});