const createPaddleDiv = function(document) {
  let div = document.createElement("div");
  div.id = "paddle_1";
  div.className = "paddle";
  return div;
};

const addPostFix = count => count + "px";

const drawPaddle = function(document, paddle) {
  const paddleDiv = document.getElementById("paddle_1");
  paddleDiv.style.height = addPostFix(paddle.height);
  paddleDiv.style.width = addPostFix(paddle.width);
  paddleDiv.style.left = addPostFix(paddle.left);
  paddleDiv.style.bottom = addPostFix(paddle.bottom);
};
