import React from "react";
import Navbar from "./components/Header/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyAccount from "./components/Pages/My-Account/MyAccount";
import MyAccountEdit from "./components/Pages/My-Account/MyAccountEdit";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/my-account" exact={true} component={MyAccount} />
        <Route path="/my-account-edit" exact={true} component={MyAccountEdit} />
      </Switch>
    </Router>
  );
}

export default App;
