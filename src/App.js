import React from "react";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import Background from "./components/layout/Background";
import Gallery from "./components/layout/Gallery";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <br />
      <br />
      <Home />
      <br />
      <Background />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
