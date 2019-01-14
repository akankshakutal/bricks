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

  changeVelocity(velocity) {
    velocity.negativeY();
  }
}
