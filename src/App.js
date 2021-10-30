import React from "react";
import Navbar from "./components/Header/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyAccount from "./components/Pages/My-Account/MyAccount";
import MyAccountEdit from "./components/Pages/My-Account/MyAccountEdit";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact={true} component = {Home}/>
        <Route path="/my-account" component={MyAccount} />
        <Route path="/my-account-edit" component={MyAccountEdit} />
        <Route path='/login' component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
