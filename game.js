class Game {
  constructor(wall, paddle, ball) {
    this.wall = wall;
    this.paddle = paddle;
    this.ball = ball;
  }

  validatePaddlePosition() {
    const maxLeftPosition = this.wall.getWidth() - this.paddle.getWidth();
    if (this.paddle.getLeft() <= 0) this.paddle.moveRight();
    if (this.paddle.getLeft() >= maxLeftPosition) this.paddle.moveLeft();
  }

  isBallCollideWithWall() {
    const maxLeftPosition = this.wall.getWidth() - this.ball.getRadius() * 2;
    return this.ball.getLeft() >= maxLeftPosition || this.ball.getLeft() <= 0;
  }

  isBallInRangeOf(element) {
    const collidalRange = element.left + element.width;
    const collidalPositionOfBall = this.ball.getLeft() + this.ball.getRadius();
    return (
      element.left <= collidalPositionOfBall &&
      collidalPositionOfBall <= collidalRange
    );
  }

  isBallCollidedWithPaddle() {
    const maxCollidalLength = this.paddle.getBottom() + this.paddle.getHeight();
    return (
      this.ball.getBottom() <= maxCollidalLength &&
      this.isBallInRangeOf(this.paddle)
    );
  }

  validateBallMovement() {
    const maxBottomPosition = this.wall.getHeight() - 2 * this.ball.getRadius();
    if (this.isBallCollideWithWall())
      this.wall.changeVelocity(this.ball.getVelocity());
    if (this.ball.getBottom() >= maxBottomPosition) this.ball.getVelocity().negativeY();
    if (this.ball.getBottom() <= 0) this.ball.getVelocity() = new Velocity(0, 0);
    if (this.isBallCollidedWithPaddle())
      this.paddle.changeVelocity(this.ball.getVelocity());
  }
}
