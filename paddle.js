class Paddle {
  constructor(height, width, left, bottom, speed = 10) {
    this.height = height;
    this.width = width;
    this.left = left;
    this.bottom = bottom;
    this.speed = speed;
  }

  getLeft() {
    return this.left;
  }

  getBottom() {
    return this.bottom;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  moveLeft() {
    this.left = this.left - this.speed;
  }

  moveRight() {
    this.left = this.left + this.speed;
  }

  changeVelocityX(velocity) {
    return new Velocity(-velocity.x, velocity.y);
  }

  changeVelocityY(velocity) {
    return new Velocity(velocity.x, -velocity.y);
  }

  isInRangeOf(ballLeft, ballRadius) {
    const paddlePosition = this.left + this.width;
    const ballPosition = ballLeft + ballRadius;
    return this.left <= ballPosition && ballPosition <= paddlePosition;
  }

  isCollidedWith(ballLeft, ballBottom, ballRadius) {
    const topSurface = this.bottom + this.height;
    return ballBottom == topSurface && this.isInRangeOf(ballLeft, ballRadius);
  }
}
