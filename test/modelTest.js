describe("moveLeft", () => {
  const paddle = new Paddle(20, 30, 40, 5);
  it("should decrement the paddle left position by 10", () => {
    paddle.moveLeft();
    chai.assert.equal(30, paddle.left);
  });
});

describe("moveRight", () => {
  const paddle = new Paddle(20, 30, 40, 5);
  it("should increament the paddle left position by 10", () => {
    paddle.moveRight();
    chai.assert.equal(50, paddle.left);
  });
});

describe("negativeX", () => {
  const velocity = new Velocity(20, 30);
  it("should give negative value of x ", () => {
    velocity.negativeX();
    chai.assert.equal(-20, velocity.x);
  });
});

describe("negativeY", () => {
  const velocity = new Velocity(20, 30);
  it("should give negative value of y ", () => {
    velocity.negativeY();
    chai.assert.equal(-30, velocity.y);
  });
});

describe("moveBall", () => {
  const ball = new Ball(20, 390, 22, { x: 1, y: 1 });
  it("should give negative value of y ", () => {
    ball.moveBall();
    chai.assert.deepEqual(
      { radius: 20, left: 391, bottom: 23, velocity: { x: 1, y: 1 } },
      ball
    );
  });
});

describe("isWithinRightBoundary ", () => {
  const paddle = new Paddle(20, 30, 40, 5);
  it("should return true when right is less than 695", () => {
    chai.assert.equal(true, isWithinRightBoundary(paddle));
  });

  it("should return false when left is greater than 5", () => {
    chai.assert.equal(true, isWithinRightBoundary(paddle));
  });
});

describe("isCollide", () => {
  it("should not change value of valocity of ball when conditions not true", () => {
    const wall = new Wall(570, 800);
    const paddle = new Paddle(20, 100, 350, 1, 15);
    const ball = new Ball(20, 390, 22, { x: 1, y: 1 });
    const game = new Game(wall, paddle, ball);
    const expectedOutput = {
      wall: wall,
      paddle: paddle,
      ball: new Ball(20, 390, 22, { x: 1, y: 1 })
    };
    game.isCollide();
    chai.assert.deepEqual(expectedOutput, game);
  });

  it("should give negative value of  X in valocity of ball", () => {
    const wall = new Wall(570, 340);
    const paddle = new Paddle(20, 100, 350, 1, 15);
    const ball = new Ball(20, 300, 22, new Velocity(1, 1));
    const game = new Game(wall, paddle, ball);
    const expectedOutput = {
      wall: wall,
      paddle: paddle,
      ball: new Ball(20, 300, 22, new Velocity(-1, 1))
    };
    game.isCollide();
    chai.assert.deepEqual(expectedOutput, game);
  });

  it("should give negative value of  Y in valocity of ball", () => {
    const wall = new Wall(340, 340);
    const paddle = new Paddle(20, 100, 350, 1, 15);
    const ball = new Ball(20, 390, 300, new Velocity(1, 1));
    const game = new Game(wall, paddle, ball);
    const expectedOutput = {
      wall: wall,
      paddle: paddle,
      ball: new Ball(20, 390, 300, new Velocity(1, -1))
    };
    game.isCollide();
    chai.assert.deepEqual(expectedOutput, game);
  });

  it("should give negative value of X and Y in valocity of ball", () => {
    const wall = new Wall(340, 340);
    const paddle = new Paddle(20, 100, 350, 1, 15);
    const ball = new Ball(20, 0, 300, new Velocity(1, 1));
    const game = new Game(wall, paddle, ball);
    const expectedOutput = {
      wall: wall,
      paddle: paddle,
      ball: new Ball(20, 0, 300, new Velocity(-1, -1))
    };
    game.isCollide();
    chai.assert.deepEqual(expectedOutput, game);
  });

  it("should give negative value of X and Y in valocity of ball", () => {
    const wall = new Wall(340, 340);
    const paddle = new Paddle(20, 100, 350, 1, 15);
    const ball = new Ball(20, 300, 0, new Velocity(1, 1));
    const game = new Game(wall, paddle, ball);
    const expectedOutput = {
      wall: wall,
      paddle: paddle,
      ball: new Ball(20, 300, 0, new Velocity(-1, -1))
    };
    game.isCollide();
    chai.assert.deepEqual(expectedOutput, game);
  });
});
