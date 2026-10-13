const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(6, 6);
ctx.lineTo(14, 10);
ctx.lineTo(6, 14);
ctx.closePath();
ctx.strokeStyle = "white";
ctx.lineWidth = 1;
ctx.stroke();

const audio = document.querySelector("audio");
audio.src = "../Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3";

const buttons = document.querySelectorAll("footer button");
const pauseBtn = buttons[0];
const stopBtn = buttons[1];

canvas.addEventListener("click", function () {
    audio.play();
});

pauseBtn.addEventListener("click", function () {
    audio.pause();
});

stopBtn.addEventListener("click", function () {
    audio.pause();
    audio.currentTime = 0;
});