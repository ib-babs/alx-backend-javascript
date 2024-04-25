export default class HolbertonCourse {
  constructor(name, len, students) {
    if (typeof name === 'string') this._name = name;
    else throw TypeError('Name must be a string');
    if (typeof len === 'number') this._length = len;
    else throw TypeError('Length must be a number');
    if (typeof students === 'object') {
      students.every((val) => {
        if (typeof val !== 'string') {
          throw TypeError('Must be a string');
        }
      });
      this._students = students;
    } else throw TypeError('Students must be an array of strings');
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
  get len() {
    return this._length;
  }
  set len(len) {
    if (typeof len === 'number') this._length = len;
    else throw TypeError('Length must be a number');
  }
  /* Students */
  get students() {
    return this.students;
  }
  set students(students = Array) {
    if (typeof students === 'object') {
      students.every((val) => {
        if (typeof val !== 'string') throw TypeError('Must be a string');
      });
      this._students = students;
    } else throw TypeError('Students must be an array of strings');
  }
}
