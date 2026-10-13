const button = document.querySelector("button");
const paragraphs = document.querySelectorAll("p");

button.addEventListener("click", function () {
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].classList.add("hidden");
    }
});