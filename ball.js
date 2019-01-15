class Velocity {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  negateX() {
    this.x = -this.x;
  }

  negateY() {
    this.y = -this.y;
  }
}

class Ball {
  constructor(radius, left, bottom, velocity) {
    this.radius = radius;
    this.left = left;
    this.bottom = bottom;
    this.velocity = velocity;
  }

  getLeft() {
    return this.left;
  }

  getBottom() {
    return this.bottom;
  }

  getRadius() {
    return this.radius;
  }

  getVelocity() {
    return this.velocity;
  }

  moveBall() {
    this.left += this.velocity.x;
    this.bottom += this.velocity.y;
  }
}
