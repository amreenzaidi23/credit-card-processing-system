/* Load Car entity */
const Card = require("../model/card");

/* Load DAO Common functions */
const daoCommon = require("./commons/daoCommon");

/**
 * Car Data Access Object
 */
class CardDao {
  constructor() {
    this.common = new daoCommon();
  }

  /**
   * Finds all entities.
   * @return all entities
   */
  findAll() {
    let sqlRequest = "SELECT * FROM card_detail";
    return this.common.findAll(sqlRequest).then(rows => {
      let cards = [];
      for (const row of rows) {
        cards.push(new Card(row.card_num, row.name, row.balance, row.lmt));
      }
      return cards;
    });
  }

  /**
   * Creates the given entity in the database
   * @params Car
   * returns database insertion status
   */
  create(Card) {
    console.log("card num:: " + Card.card_num);
    console.log("bal num:: " + Card.balance);

    let sqlRequest =
      "INSERT into card_detail (card_num, name, balance, lmt) " +
      "VALUES ($card_num, $name, $balance, $lmt)";
    let sqlParams = {
      $card_num: Card.card_num,
      $name: Card.name,
      $balance: Card.balance,
      $lmt: Card.lmt
    };
    return this.common.run(sqlRequest, sqlParams);
  }

  /**
   * Creates the given entity with a provided id in the database
   * @params Car
   * returns database insertion status
   */
  createWithId(Car) {
    let sqlRequest =
      "INSERT into car (id, maker, model, year, driver) " +
      "VALUES ($id, $maker, $model, $year, $driver)";
    let sqlParams = {
      $id: Car.id,
      $maker: Car.maker,
      $model: Car.model,
      $year: Car.year,
      $driver: Car.driver
    };
    return this.common.run(sqlRequest, sqlParams);
  }
  /**
   * Returns true if an entity exists with the given Id / Primary Key
   * @params id
   * returns database entry existence status (true/false)
   */
  exists(id) {
    let sqlRequest = "SELECT (count(*) > 0) as found FROM car WHERE id=$id";
    let sqlParams = { $id: id };
    return this.common.run(sqlRequest, sqlParams);
  }
}

module.exports = CardDao;
