import React from "react";
import Navbar from "./components/Header/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Switch>
        <Route path="/" exact={true} component={Home} />
      </Switch> */}
    </Router>
  );
}

export default App;
