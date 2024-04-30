/* eslint-disable array-callback-return */
export default function getStudentIdsSum(arrayObj) {
  let count = 0;
  arrayObj.reduce((prev, next) => {
    if (prev) count += prev.id;
    count += next.id;
  });
  return count;
}
