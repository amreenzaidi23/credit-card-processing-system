// src/components/Home.js

// Import react
import React, { Component } from "react";
import { Link } from "react-router-dom";
// Axios for making GET requests
import axios from "axios";

class ViewCard extends Component {
  constructor() {
    super();
    // Define state
    this.state = {
      cards: [],
      dataLoaded: false
    };
  }

  // Is called when the component succesfully loads
  componentDidMount() {
    // GET request to our server
    axios({
      method: "GET",
      url: "/api/card"
    })
      // Saves the data to state. Only way to change the state is with setState
      .then(data => {
        this.setState({
          cards: data.data,
          dataLoaded: true
        });
      })
      // logs an error
      .catch(err => {
        console.log(err);
      });
  }
  renderTableHeader() {
    if (this.state.dataLoaded) {
      const s = { Name: "", "Card Number": "", Balance: "", Limit: "" };
      let header = Object.keys(s);
      return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>;
      });
    } else {
      <p>Loading...</p>;
    }
  }

  renderCards() {
    if (this.state.dataLoaded) {
      return this.state.cards.map((card, index) => {
        return (
          <tr key={card.card_num}>
            <td>{card.name}</td>
            <td>{card.card_num}</td>
            <td>&pound;{card.balance}</td>
            <td>&pound;{card.lmt}</td>
          </tr>
        );
      });
    } else {
      <p>Loading...</p>;
    }
  }

  render() {
    return (
      <div>
        <br />
        <h3>Existing Cards</h3>
        <br />

        <table id="cards">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderCards()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ViewCard;
