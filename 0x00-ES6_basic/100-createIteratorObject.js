export default function createIteratorObject(report) {
  const array = [];
  Object.values(report.allEmployees).map((arrVal) => arrVal.map((val) => array.push(val)));
  return array;
}
