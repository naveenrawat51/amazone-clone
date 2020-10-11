import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import HomePage from "./Homepage/Homepage";
import Checkout from './Checkout/Checkout';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Route path="/login">
            <h1>login</h1>
          </Route>
          <Route path="/">
            <Header />
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
