class Game {
  constructor(wall, paddle, ball) {
    this.wall = wall;
    this.paddle = paddle;
    this.ball = ball;
  }

  getBall() {
    return this.ball;
  }

  getPaddle() {
    return this.paddle;
  }

  movePaddleLeft() {
    if (this.paddle.getLeft() === 0) return;
    this.paddle.moveLeft();
  }

  movePaddleRight() {
    const verticalRange = this.wall.getWidth() - this.paddle.getWidth();
    if (this.paddle.getLeft() >= verticalRange) return;
    this.paddle.moveRight();
  }

  moveBall() {
    this.ball.moveBall();
  }

  isBallCollideWithWall() {
    const ballRadius = this.ball.getRadius();
    const ballLeft = this.ball.getLeft();
    const ballVelocity = this.ball.getVelocity();
    if (this.wall.isCollideWith(ballRadius, ballLeft)) {
      let newVelocity = this.wall.changeVelocityX(ballVelocity);
      this.ball.setVelocity(newVelocity);
    }
  }

  isBallCollideWithTopWall() {
    const ballRadius = this.ball.getRadius();
    const ballBottom = this.ball.getBottom();
    const ballVelocity = this.ball.getVelocity();
    const bottomSurface = this.wall.getHeight() - 2 * ballRadius;
    if (ballBottom >= bottomSurface) {
      let newVelocity = this.wall.changeVelocityY(ballVelocity);
      this.ball.setVelocity(newVelocity);
    }
  }

  isBallCollideWithBottomWall() {
    const ballBottom = this.ball.getBottom();
    if (ballBottom <= 0) this.ball.setVelocity(new Velocity(0, 0));
  }

  isBallCollideWithPaddle() {
    const ballLeft = this.ball.getLeft();
    const ballBottom = this.ball.getBottom();
    const ballVelocity = this.ball.getVelocity();
    const ballRadius = this.ball.getRadius();
    if (this.paddle.isCollidedWith(ballLeft, ballBottom, ballRadius)) {
      let newVelocity = this.paddle.changeVelocityY(ballVelocity);
      this.ball.setVelocity(newVelocity);
    }
  }

  validateBallMovement() {
    this.isBallCollideWithWall();
    this.isBallCollideWithTopWall();
    this.isBallCollideWithBottomWall();
    this.isBallCollideWithPaddle();
  }
}
