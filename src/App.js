import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyAccount from "./components/Pages/My-Account/MyAccount";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import Register from "./components/Pages/Register/Register";
import ViewProduct from "./components/Pages/ViewProduct/ViewProduct";
import Cart from "./components/Pages/Cart/Cart";
import Header from "./components/Header/Header";
import Products from "./components/Pages/Products/Products";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact={true} component = {Home}/>
        <Route path="/my-account" component={MyAccount} />
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/view' component={ViewProduct}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/products' component={Products}/>
      </Switch>
    </Router>
  );
}

export default App;
