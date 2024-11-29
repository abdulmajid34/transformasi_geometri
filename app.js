const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height / 2;
let angle = 0;
let scale = 1;

function drawObject() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate((angle * Math.PI) / 180);
  ctx.scale(scale, scale);
  ctx.fillStyle = "#007bff";
  ctx.fillRect(-50, -50, 100, 100);
  ctx.restore();
}

function scaleObject(factor) {
  scale = factor;
  drawObject();
}

function rotateObject(degrees) {
  angle = degrees;
  drawObject();
}

function translateObject(dx, dy) {
  x += dx;
  y += dy;
  drawObject();
}

function resetTransform() {
  x = canvas.width / 2;
  y = canvas.height / 2;
  angle = 0;
  scale = 1;
  document.getElementById("rotation-slider").value = 0;
  document.getElementById("scale-slider").value = 1;
  drawObject();
}

// Initial draw
drawObject();
