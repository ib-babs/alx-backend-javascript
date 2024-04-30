export default function cleanSet(set, startString) {
  const newArr = [];
  set.forEach((val) => {
    if (
      val.slice(0, startString.length) === startString
      && startString.length > 0
    ) newArr.push(val.substring(startString.length, val.length));
  });
  return newArr.join('-');
}
