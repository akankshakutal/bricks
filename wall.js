class Wall {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  changeVelocity(velocity) {
    velocity.negativeX();
  }
}
