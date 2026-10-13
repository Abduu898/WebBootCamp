const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    const p = paragraphs[i];

    p.addEventListener("mouseover", function () {
        p.classList.add("blue");
    });

    p.addEventListener("mouseout", function () {
        p.classList.remove("blue");
    });

    p.addEventListener("click", function () {
        p.classList.toggle("highlighted");
    });
}