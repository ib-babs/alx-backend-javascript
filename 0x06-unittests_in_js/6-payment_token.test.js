const { assert } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", function () {
  it("should return {data: 'Successful response from the API' }", function (done) {
    getPaymentTokenFromAPI(true).then(
      (resolved) => {
        assert.equal(resolved.data, "Successful response from the API");
        done();
      },
      (err) => {}
    );
  });
});
