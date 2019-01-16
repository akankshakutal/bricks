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
    return new Velocity(-velocity.x, velocity.y);
  }

  isCollideWith(ballRadius, ballLeft) {
    const verticalRange = this.width - ballRadius * 2;
    return ballLeft >= verticalRange || ballLeft <= 0;
  }
}
