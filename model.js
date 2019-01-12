class Paddle {
  constructor(height, width, left, bottom) {
    this.height = height;
    this.width = width;
    this.left = left;
    this.bottom = bottom;
  }

  moveLeft() {
    this.left = this.left - 10;
  }

  moveRight() {
    this.left = this.left + 10;
  }
}
