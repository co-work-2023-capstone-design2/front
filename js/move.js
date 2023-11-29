// make image
let canvas;
let ctx;

canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");

canvas.height = window.innerHeight - 50;
canvas.width = window.innerWidth - 50;

window.addEventListener("resize", () => {
  canvas.height = window.innerHeight - 50;
  canvas.width = window.innerWidth - 50;
});

// insert canvas into html
document.body.appendChild(canvas);

// bring image
let backgroundImage, character;
// character setting
const characterSize = 70;
let characterX = canvas.width / 2 - 32;
let characterY = canvas.height / 2;

function loadImage() {
  backgroundImage = new Image();
  backgroundImage.src = "img/buildings/inner4x.png";

  character = new Image();
  character.src = "img/character/bear.png";
}

// keyboard event
let keysDown = {};
function setupKeyboardLister() {
  document.addEventListener("keydown", (event) => {
    keysDown[event.key] = true;
    updateCharacter();
  });
  document.addEventListener("keyup", (event) => {
    delete keysDown[event.key];
  });
}

const speed = 2;
setInterval(function updateCharacter() {
  if ("ArrowRight" in keysDown) {
    characterX += speed;
  }
  if ("ArrowLeft" in keysDown) {
    characterX -= speed;
  }
  if ("ArrowUp" in keysDown) {
    characterY -= speed;
  }
  if ("ArrowDown" in keysDown) {
    characterY += speed;
  }
  //   limitPosition();
}, 10);

// limit character position
const maxX = 348,
  minX = -18;
const maxY = 645,
  minY = -15;
function limitPosition() {
  if (characterX > maxX) {
    characterX = maxX;
  }
  if (characterX < minX) {
    characterX = minX;
  }
  if (characterY > maxY) {
    characterY = maxY;
  }
  if (characterY < minY) {
    characterY = minY;
  }
}

// render image into canvas
function render() {
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    character,
    characterX,
    characterY,
    characterSize,
    characterSize
  );
}

function main() {
  render();
  requestAnimationFrame(main);
}

loadImage();
setupKeyboardLister();
main();
