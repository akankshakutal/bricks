const ARROWRIGHT = "ArrowRight";
const ARROWLEFT = "ArrowLeft";

const move = function(document, paddle) {
  if (event.key == ARROWRIGHT) paddle.moveRight();
  if (event.key == ARROWLEFT) paddle.moveLeft();
  drawPaddle(document, paddle);
};

const initialise = function() {
  const paddle = new Paddle(20, 100, 350, 5, 15);
  const paddleDiv = createPaddleDiv(document);
  let screen = document.getElementById("screen");
  screen.focus();
  screen.appendChild(paddleDiv);
  drawPaddle(document, paddle);
  screen.onkeydown = move.bind(null, document, paddle);
};

window.onload = initialise;
