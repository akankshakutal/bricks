const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";

const shouldMoveRight = (event, paddle) =>
  event.key === ARROW_RIGHT && isWithinRightBoundary(paddle);

const shouldMoveLeft = (event, paddle) =>
  event.key === ARROW_LEFT && isWithinLeftBoundary(paddle);

const move = function(document, paddle) {
  if (shouldMoveRight(event, paddle)) {
    paddle.moveRight();
  }
  if (shouldMoveLeft(event, paddle)) {
    paddle.moveLeft();
  }
  drawPaddle(document, paddle);
};

const initialise = function() {
  const wall = new Wall(570, 800);
  const paddle = new Paddle(20, 100, 350, 1, 15);
  const velocity = new Velocity(1, 1);
  const ball = new Ball(20, 390, 22, velocity);
  const game = new Game(wall, paddle, ball);
  createElements(document, game);
  const screen = document.getElementById("main");
  screen.onkeydown = move.bind(null, document, paddle);
  setInterval(() => {
    ball.moveBall();
    drawBall(document, ball);
  }, 10);
};

window.onload = () => {
  initialise();
};
