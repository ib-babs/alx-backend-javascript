const sinon = require("sinon");
const sendPaymentRequestApi = require("./5-payment");
describe("sendPaymentRequestApi", function () {
  beforeEach(function () {
    sinon.spy(console, "log");
  });
  afterEach(function () {
    sinon.restore();
  });
  it("should log 'The total is: 120' once", function () {
    sendPaymentRequestApi(100, 20);
    sinon.assert.calledWith(console.log, "The total is: 120");
    sinon.assert.calledOnce(console.log);
  });
  it("should logs 'The total is: 20' once", function () {
    sendPaymentRequestApi(10, 10);
    sinon.assert.calledWith(console.log, "The total is: 20");
    sinon.assert.calledOnce(console.log);
  });
});
