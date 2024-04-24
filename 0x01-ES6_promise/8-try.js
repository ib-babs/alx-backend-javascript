export default function divideFunction(
  numerator = Number,
  denominator = Number,
) {
  if (denominator > 0) return numerator / denominator;

  throw Error('cannot divide by 0');
}
