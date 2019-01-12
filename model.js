class Wall {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Paddle {
  constructor(height, width, left, bottom, speed = 10) {
    this.height = height;
    this.width = width;
    this.left = left;
    this.bottom = bottom;
    this.speed = speed;
  }

  moveLeft() {
    this.left = this.left - this.speed;
  }

  moveRight() {
    this.left = this.left + this.speed;
  }
}

class Velocity {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  negativeX() {
    this.x = -this.x;
  }

  negativeY() {
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

  moveBall() {
    this.left += this.velocity.x;
    this.bottom += this.velocity.y;
  }
}

class Game {
  constructor(wall, paddle, ball) {
    this.wall = wall;
    this.paddle = paddle;
    this.ball = ball;
  }
}

const isWithinRightBoundary = function(paddle) {
  return paddle.left < 695;
};

const isWithinLeftBoundary = function(paddle) {
  return paddle.left > 5;
};
