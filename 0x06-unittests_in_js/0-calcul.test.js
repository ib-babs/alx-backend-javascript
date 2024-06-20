const assert = require("assert");
const calculateNumber = require("./0-calcul.js");
describe("CalculateNumber", function () {
  it("should return 40", function () {
    assert.equal(calculateNumber(10, 30), 40);
  });
  it("should return 5", function () {
    assert.equal(calculateNumber(2.5, 2.5), 5);
  });
  it("should return 4", function () {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it("should return 5", function () {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it("should return NaN", function () {
    assert.equal(calculateNumber("Man", 3.7), NaN);
  });
  it("should return 5", function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it("should return NaN", function () {
    assert.equal(calculateNumber("A", "B"), NaN);
  });
  it("should return NaN", function () {
    assert.equal(calculateNumber(), NaN);
  });
  it("should return NaN", function () {
    assert.equal(calculateNumber(1), NaN);
  });

  it("should return -1", function () {
    assert.equal(calculateNumber(10, -11), -1);
  });

  it("should return 10", function () {
    assert.equal(calculateNumber(30, -20), 10);
  });

  it("should return 6", function () {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });

  it("should return 21", function () {
    assert.equal(calculateNumber("2", 1), 21);
  });
  it("should return 3", function () {
    assert.equal(calculateNumber("2.0", 3), 3);
  });
  it("should return 3", function () {
    assert.equal(calculateNumber(null, 3), 3);
  });
  it("should return 0", function () {
    assert.equal(calculateNumber(null, null), 0);
  });
  it("should return NaN", function () {
    assert.equal(calculateNumber(null, undefined), NaN);
  });
});
