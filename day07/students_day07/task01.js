let count = 0;

const box = document.querySelector("footer div");

box.addEventListener("click", function () {
    count = count + 1;
    box.textContent = count;
});