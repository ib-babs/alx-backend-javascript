import Currency from './3-currency';

/* eslint-disable no-underscore-dangle */
export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') this._amount = amount;
    else throw TypeError('Amount must be a number');
    if (currency instanceof Currency) this._currency = currency;
    else throw TypeError('Currency must be an instance of Currency');
  }

  /* amount */
  get amount() {
    return this._amount;
  }

  set amount(x) {
    if (typeof x === 'number') this._amount = x;
    else throw TypeError('Amount must be a number');
    this._amount = x;
  }

  /* currency */
  get currency() {
    return this._currency;
  }

  set currency(x) {
    if (x instanceof Currency) this._currency = x;
    else throw TypeError('Currency must be n typeof Currency object');
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
