import React from "react";
import Navbar from "./components/Header/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Switch>
        <Route path="/" exact={true} component={Home} />
      </Switch> */}
     <Footer/>
    </Router>
  );
}

export default App;
