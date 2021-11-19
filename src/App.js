import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import Register from "./components/Pages/Register/Register";
import ViewProduct from "./components/Pages/ViewProduct/ViewProduct";
import Cart from "./components/Pages/Cart/Cart";
import Header from "./components/Header/Header";
import Products from "./components/Pages/Products/Products";
import { CtxApp } from "./context/CtxApp";
import Checkout from "./components/Pages/Checkout/Checkout";

function App() {
  return (
    <CtxApp>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact={true} component = {Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/view/:id' component={ViewProduct}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/products' component={Products}/>
          <Route path='/checkout' component={Checkout}/>
        </Switch>
      </Router>
    </CtxApp>
  );
}

export default App;
