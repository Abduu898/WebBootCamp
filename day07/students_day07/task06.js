const cvs = document.querySelector("canvas");
const ctx = cvs.getContext("2d");
const coordsDiv = document.querySelectorAll("footer div")[1];

let squareX = 10;
let squareY = 10;
let squareSize = 30;
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

function draw() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
    ctx.fillStyle = "black";
    ctx.fillRect(squareX, squareY, squareSize, squareSize);
}

draw();

cvs.addEventListener("mousedown", function (event) {
    const rect = cvs.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    if (
        clickX >= squareX &&
        clickX <= squareX + squareSize &&
        clickY >= squareY &&
        clickY <= squareY + squareSize
    ) {
        isDragging = true;
        offsetX = clickX - squareX;
        offsetY = clickY - squareY;
    }
});

cvs.addEventListener("mousemove", function (event) {
    if (!isDragging) return;

    const rect = cvs.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    squareX = mouseX - offsetX;
    squareY = mouseY - offsetY;

    draw();
    coordsDiv.textContent = "New coordinates => {x:" + squareX + ", y:" + squareY + "}";
});

document.addEventListener("mouseup", function () {
    isDragging = false;
});