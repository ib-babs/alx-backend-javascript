export default function getListStudentIds(arrayObj) {
  if (!Array.isArray(arrayObj)) return [];
  const ids = [];
  arrayObj.map((obj) => ids.push(obj.id));
  return ids;
}
