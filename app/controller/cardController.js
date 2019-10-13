/* Load Car Data Access Object */
const CardDao = require("../dao/cardDao");

/* Load Controller Common function */
const ControllerCommon = require("./common/controllerCommon");

/* Load Car entity */
const Card = require("../model/card");

/**
 * Car Controller
 */
class CardController {
  constructor() {
    this.cardDao = new CardDao();
    this.common = new ControllerCommon();
  }

  /**
   * Finds all entities.
   * @return all entities
   */
  findAll(res) {
    this.cardDao
      .findAll()
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  }

  /**
   * Creates the given entity in the database
   * @params req, res
   * returns database insertion status
   */
  create(req, res) {
    let card = new Card();
    if (req.body.card_num) {
      card.card_num = req.body.card_num;
    }
    card.name = req.body.name;
    card.balance = 0.0;
    card.lmt = req.body.lmt;

    if (req.body.id) {
      return this.cardDao
        .createWithId(card)
        .then(this.common.editSuccess(res))
        .catch(this.common.serverError(res));
    } else {
      return this.cardDao
        .create(card)
        .then(this.common.editSuccess(res))
        .catch(this.common.serverError(res));
    }
  }

  /**
   * Returns true if an entity exists with the given Id / Primary Key
   * @params req, res
   * @return
   */
  exists(req, res) {
    let card_num = req.params.card_num;

    this.cardDao
      .exists(card_num)
      .then(this.common.existsSuccess(res))
      .catch(this.common.findError(res));
  }
}

module.exports = CardController;
