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

  validateBallMovement() {
    const bottomSurface = this.wall.getHeight() - 2 * this.ball.getRadius();
    if (this.wall.isCollideWith(this.ball.getRadius(),this.ball.getLeft())) {
			let newVelocity = this.wall.changeVelocity(this.ball.getVelocity())
			this.ball.setVelocity(newVelocity) }
    if (this.ball.getBottom() >= bottomSurface) this.ball.getVelocity().negateY();
    if (this.ball.getBottom() <= 0) this.ball.getVelocity() = new Velocity(0, 0);
    if (this.paddle.isCollidedWith(this.ball.getLeft(),this.ball.getBottom(),this.ball.getRadius()))
      this.paddle.changeVelocity(this.ball.getVelocity());
  }
}
