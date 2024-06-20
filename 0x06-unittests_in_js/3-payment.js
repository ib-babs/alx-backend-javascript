const Utils = require("./utils.js");
/**
 *
 * @param {number} totalAmount
 * @param {number} totalShipping
 */
module.exports = function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const sum = Utils.calculateNumber("SUM", totalAmount, totalShipping);
  console.log("The total is: " + sum);
};
