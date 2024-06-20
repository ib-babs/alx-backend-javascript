/**
 * calculateNumber - Function that perform operation on two numbers
 * @param {string} type: Type of the operation to perform on the a and b ['SUM', 'SUBTRACT', 'DIVIDE']
 * @param {number} a: Number 1
 * @param {number} b: Number 2
 * @returns Sum of two numbers
 */

module.exports = function calculateNumber(type, a, b) {
  const roundedA = Math.round(a),
    roundedB = Math.round(b);
  switch (type) {
    case "SUM":
      return roundedA + roundedB;
    case "SUBTRACT":
      return roundedA - roundedB;
    case "DIVIDE":
      if (roundedB === 0) return "Error";
      return roundedA / roundedB;
    default:
      break;
  }
};
