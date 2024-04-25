export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string' || typeof name !== 'string')
      throw TypeError('Must be a string');
    this._code = code;
    this._name = name;
  }
  /* Name */
  get name() {
    return this._name;
  }
  set name(x) {
    if (typeof x !== 'string') throw TypeError('Name must be a string');
    this._name = x;
  }
  /* Code */
  get code() {
    return this._code;
  }
  set code(x) {
    if (typeof x !== 'string') throw TypeError('Code must be a string');
    this._code = x;
  }

  displayFullCurrency = () => `${this._name} (${this._code})`;
}
