/**
 * Card Entity (ES6 Class)
 */

class Card {
  constructor(card_num, name, balance, lmt) {
    this.card_num = card_num;
    this.name = name;
    this.balance = balance;
    this.lmt = lmt;
  }
}

module.exports = Card;
