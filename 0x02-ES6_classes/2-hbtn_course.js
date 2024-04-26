/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, len, students) {
    if (typeof name === 'string') this._name = name;
    else throw TypeError('Name must be a string');

    if (typeof len === 'number') this._length = len;
    else throw TypeError('Length must be a number');

    if (
      Array.isArray(students)
      && students.every((val) => typeof val === 'string')
    ) this._students = students;
    else throw TypeError('Students must be an array of strings');
  }

  /* Name */
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') this._name = name;
    else throw TypeError('Name must be a string');
  }

  /* length */
  get length() {
    return this._length;
  }

  set length(len) {
    if (typeof len === 'number') this._length = len;
    else throw TypeError('Length must be a number');
  }

  /* Students */
  get students() {
    return this._students;
  }

  set students(students) {
    if (
      Array.isArray(students)
      && students.every((val) => typeof val === 'string')
    ) this._students = students;
    else throw TypeError('Students must be an array of strings');
  }
}
