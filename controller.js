const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";

const moveBall = function(document, game) {
  setInterval(() => {
    game.validateBallMovement();
    game.moveBall();
    drawBall(document, game.getBall());
  }, 5);
};

const movePaddle = function(document, game) {
  if (event.key == ARROW_RIGHT) game.movePaddleRight();
  if (event.key == ARROW_LEFT) game.movePaddleLeft();
  drawPaddle(document, game.getPaddle());
};

const startGame = function(document, game) {
  const screen = document.getElementById("main");
  screen.onkeydown = movePaddle.bind(null, document, game);
  moveBall(document, game);
};

const initialise = function() {
  const wall = new Wall(570, 800);
  const paddle = new Paddle(20, 100, 350, 1, 10);
  const velocity = new Velocity(1, -1);
  const ball = new Ball(20, 390, 22, velocity);
  const game = new Game(wall, paddle, ball);
  createGame(document, game);
  startGame(document, game);
};

window.onload = () => {
  initialise();
};
