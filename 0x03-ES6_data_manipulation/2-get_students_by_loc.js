export default function getStudentsByLocation(arrayObj, location) {
  const newArr = [];
  arrayObj.filter((obj) => obj.location === location && newArr.push(obj));
  return newArr;
}
