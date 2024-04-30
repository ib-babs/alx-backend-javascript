export default function hasValuesFromArray(aSet, anArray) {
  const allVal = [...anArray].map((x) => aSet.has(x));
  return allVal.every((val) => val === true);
}
