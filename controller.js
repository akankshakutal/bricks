const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";

const moveBall = function(document, game) {
  setInterval(() => {
    game.validateBallMovement();
    game.ball.moveBall();
    drawBall(document, game.ball);
  }, 5);
};

const movePaddle = function(document, game) {
  if (event.key == ARROW_RIGHT) game.paddle.moveRight();
  if (event.key == ARROW_LEFT) game.paddle.moveLeft();
  game.validatePaddlePosition();
  drawPaddle(document, game.paddle);
};

const startGame = function(document, game) {
  const screen = document.getElementById("main");
  screen.onkeydown = movePaddle.bind(null, document, game);
  moveBall(document, game);
};

const initialise = function() {
  const wall = new Wall(570, 800);
  const paddle = new Paddle(20, 100, 350, 1, 15);
  const velocity = new Velocity(1, 1);
  const ball = new Ball(20, 390, 22, velocity);
  const game = new Game(wall, paddle, ball);
  createGame(document, game);
  startGame(document, game);
};

window.onload = () => {
  initialise();
};
