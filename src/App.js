import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>login</h1>
          </Route>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
