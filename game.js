class Game {
  constructor(wall, paddle, ball) {
    this.wall = wall;
    this.paddle = paddle;
    this.ball = ball;
  }

	movePaddleLeft(){
		if (this.paddle.getLeft() === 0) return;
		this.paddle.moveLeft();
	}

	movePaddleRight() {
		const verticalRange = this.wall.getWidth() - this.paddle.getWidth();
		if (this.paddle.getLeft() >= verticalRange) return;
		this.paddle.moveRight();
	}

  isBallCollideWithWall() {
    const verticalRange = this.wall.getWidth() - this.ball.getRadius() * 2;
    return this.ball.getLeft() >= verticalRange || this.ball.getLeft() <= 0;
  }

	isBallInRangeOf(paddle) {
		const paddlePosition = paddle.getLeft() + paddle.getWidth();
		const ballPosition = this.ball.getLeft() + this.ball.getRadius();
		return (
			paddle.getLeft() <= ballPosition &&
			ballPosition <= paddlePosition
		);
	}

	isBallCollidedWithPaddle() {
		const topSurface = this.paddle.getBottom() + this.paddle.getHeight();
		return (
			this.ball.getBottom() == topSurface &&
			this.isBallInRangeOf(this.paddle)
		);
	}

  validateBallMovement() {
    const bottomSurface = this.wall.getHeight() - 2 * this.ball.getRadius();
    if (this.isBallCollideWithWall())
      this.wall.changeVelocity(this.ball.getVelocity());
    if (this.ball.getBottom() >= bottomSurface) this.ball.getVelocity().negateY();
    if (this.ball.getBottom() <= 0) this.ball.getVelocity() = new Velocity(0, 0);
    if (this.isBallCollidedWithPaddle())
      this.paddle.changeVelocity(this.ball.getVelocity());
  }
}
