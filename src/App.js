import React from "react";
import Navbar from "./components/Header/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer"
import Login from "./components/Pages/Login/Login";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Switch>
        <Route path="/" exact={true} component={Home} />
      </Switch> */}
     <Route path='/login' component={Login}/>
    </Router>
  );
}

export default App;
