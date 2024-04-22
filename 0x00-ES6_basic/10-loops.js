export default function appendToEachArrayValue(array, appendString) {
  let count = 0;
  for (const val of array) {
    array[count] = appendString + val;
    count += 1;
  }

  return array;
}
