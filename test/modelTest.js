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
