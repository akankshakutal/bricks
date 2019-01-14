const addPixel = count => count + "px";

const drawBall = function(document, ball) {
  const ballDiv = document.getElementById("ball");
  ballDiv.style.height = addPixel(ball.radius * 2);
  ballDiv.style.width = addPixel(ball.radius * 2);
  ballDiv.style.left = addPixel(ball.left);
  ballDiv.style.bottom = addPixel(ball.bottom);
};

const drawPaddle = function(document, paddle) {
  const paddleDiv = document.getElementById("paddle_1");
  paddleDiv.style.height = addPixel(paddle.height);
  paddleDiv.style.width = addPixel(paddle.width);
  paddleDiv.style.left = addPixel(paddle.left);
  paddleDiv.style.bottom = addPixel(paddle.bottom);
};

const drawWallDiv = function(document, wall) {
  const screen = document.getElementById("screen");
  screen.style.height = addPixel(wall.height);
  screen.style.width = addPixel(wall.width);
};

const createBallDiv = function(document) {
  const screen = document.getElementById("screen");
  let ballDiv = document.createElement("div");
  ballDiv.className = "ball";
  ballDiv.id = "ball";
  screen.appendChild(ballDiv);
};

const createPaddleDiv = function(document) {
  const screen = document.getElementById("screen");
  let paddleDiv = document.createElement("div");
  paddleDiv.id = "paddle_1";
  paddleDiv.className = "paddle";
  screen.appendChild(paddleDiv);
};

const createWallDiv = function(document) {
  const main = document.getElementById("main");
  const wallDiv = document.createElement("div");
  wallDiv.id = "screen";
  wallDiv.tabIndex = "0";
  wallDiv.className = "board";
  main.appendChild(wallDiv);
};

const createGame = function(document, { wall, paddle, ball }) {
  createWallDiv(document);
  createPaddleDiv(document);
  createBallDiv(document);
  drawWallDiv(document, wall);
  drawPaddle(document, paddle);
  drawBall(document, ball);
};
