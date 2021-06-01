import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartProvider from "./hooks/CartState";
import MainPage from "./components/Pages/MainPage";
import CheckOut from "./components/Pages/CheckOut";
import "./App.css";

function App() {
  return (
    <Router>
      <CartProvider>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/checkout" component={CheckOut} />
        </Switch>
      </CartProvider>
    </Router>
  );
}

export default App;
