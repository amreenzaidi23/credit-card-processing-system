// src/components/Quote.js

import React, { Component } from "react";
import axios from "axios";

const card = { name: "" };
class AddCard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      card_num: "",
      lmt: ""
    };
  }

  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
    // this.setState({ value: event.target.value, lmt: event.target.lmt });
  }

  resetFormState() {
    this.setState({
      name: "",
      card_num: "",
      lmt: "",
      balance: "0"
    });
  }

  luhn_checksum(code) {
    var len = code.length;
    var parity = len % 2;
    var sum = 0;
    for (var i = len - 1; i >= 0; i--) {
      var d = parseInt(code.charAt(i));
      if (i % 2 == parity) {
        d *= 2;
      }
      if (d > 9) {
        d -= 9;
      }
      sum += d;
    }
    return sum % 10;
  }

  submitHandler(e) {
    if (this.luhn_checksum(this.state.card_num) == 0) {
      axios
        .post("/api/card/create", this.state)
        .then(response => {
          alert("Success");
        })
        .catch(error => {
          alert("Failed   " + error);
        });

      console.log(this.state);
      this.resetFormState();
    } else {
      alert("Please enter valid card number");
    }
  }

  renderCard() {
    const { name, card_num, lmt } = this.state;
    return (
      <form onSubmit={a => this.submitHandler(a)}>
        <table>
          <tbody>
            <label>First Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={s => this.changeHandler(s)}
              pattern="[A-Za-z]+"
              required
              placeholder="Your name.."
            ></input>

            <label>Card Number</label>
            <input
              type="text"
              id="card_num"
              name="card_num"
              value={card_num}
              onChange={s => this.changeHandler(s)}
              maxLength="19"
              pattern="[0-9]+"
              required
              placeholder="Enter Card Number.."
            ></input>

            <label>Limit</label>
            <input
              type="text"
              id="lmt"
              name="lmt"
              pattern="[0-9]+"
              value={lmt}
              onChange={s => this.changeHandler(s)}
              required
              placeholder="Enter Limit.."
            ></input>
          </tbody>
        </table>
        <button type="submit">Submit</button>
        <br />
      </form>
    );
  }

  render() {
    return (
      <div>
        <h3>Add</h3>
        <br />
        {this.renderCard()}
      </div>
    );
  }
}
export default AddCard;
