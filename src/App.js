import React from "react";
import "./App.css";

import { HashRouter as Router, Route } from "react-router-dom";

import Landing from "./components/home/Landing";
import Navbar from "./components/layout/Navbar";
import Search from "./components/home/Search";
import About from "./components/home/About";
import Contact from "./components/home/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      <br />
      <br />
      <Route exact path="/" component={Landing} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
};

export default App;
