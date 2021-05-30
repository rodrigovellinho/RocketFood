import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/Pages/MainPage";
import CheckOut from "./components/Pages/CheckOut";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/checkout" component={CheckOut} />
      </Switch>
    </Router>
  );
}

export default App;
