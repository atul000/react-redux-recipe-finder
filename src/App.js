import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Landing from "./components/home/Landing";
import Navbar from "./components/layout/Navbar";
import Search from "./components/home/Search";
import About from "./components/home/About";
import Contact from "./components/home/Contact";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/about/:id" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Router>
    </Provider>
  );
};

export default App;
