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

describe("negateX", () => {
  const velocity = new Velocity(20, 30);
  it("should give negative value of x ", () => {
    velocity.negateX();
    chai.assert.equal(-20, velocity.x);
  });
});

describe("negateY", () => {
  const velocity = new Velocity(20, 30);
  it("should give negative value of y ", () => {
    velocity.negateY();
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
