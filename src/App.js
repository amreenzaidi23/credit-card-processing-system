// src/App.js

// Import react and the component class
import React, { Component } from "react";
// Import BrowserRouter
import { BrowserRouter as Router, Route } from "react-router-dom";

// import each component
import ViewCard from "./components/ViewCard";
import AddCard from "./components/AddCard";

// Import css file
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" id="root">
          <h1>Credit Card Processing System</h1>
          <br />
          <Route exact path="/" component={AddCard} />
          <Route exact path="/" component={ViewCard} />
        </div>
      </Router>
    );
  }
}

// Export the App component
export default App;
