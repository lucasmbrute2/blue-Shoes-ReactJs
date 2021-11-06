import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyAccount from "./components/Pages/My-Account/MyAccount";
import MyAccountEdit from "./components/Pages/My-Account/MyAccountEdit";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import Register from "./components/Pages/Register/Register";
import ViewProduct from "./components/Pages/ViewProduct/ViewProduct";
import ProductCard from "./components/ProductCard/ProductCard";
import Cart from "./components/Pages/Cart/Cart";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact={true} component = {Home}/>
        <Route path="/my-account" component={MyAccount} />
        <Route path="/my-account-edit" component={MyAccountEdit} />
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/view' component={ViewProduct}/>
        <Route path='/cart' component={Cart}/>
      </Switch>
    </Router>
  );
}

export default App;
