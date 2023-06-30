const canvas = document.getElementById("drawing-board");
const strokeColorEl = document.getElementById("stroke");
const lineWidthEl = document.getElementById("lineWidth");
const clearEl = document.getElementById("clear");
const toolbarEl = document.getElementById("toolbar");

const ctx = canvas.getContext("2d");
const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 5;

let startX;
let startY;

// ctx settings
ctx.lineCap = "round";
ctx.lineWidth = lineWidthEl.value;
// functions
const draw = (e) => {
  if (!isPainting) return;
  ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
  ctx.stroke();
};
const reset = () => {
  isPainting = false;
  ctx.stroke();
  ctx.beginPath();
};
// event listeners
clearEl.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
strokeColorEl.addEventListener("change", (e) => {
  ctx.strokeStyle = e.target.value;
});
lineWidthEl.addEventListener("change", (e) => {
  ctx.lineWidth = e.target.value;
});
canvas.addEventListener("mousedown", (e) => {
  isPainting = true;
  startX = e.clientX;
  startY = e.clientY;
});
canvas.addEventListener("mouseup", reset);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseleave", reset);
toolbarEl.addEventListener("mousemove", () => {
  toolbarEl.style.userSelect = "none";
});
// see if ben awad is still using vim with vscode
// see the guy that hates oop and its videos about bupg
