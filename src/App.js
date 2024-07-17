import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import { FaArrowAltCircleUp } from "react-icons/fa";

function App() {
  return (
    <div className="App container-fluid">
      <Navigation />
      <Header />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <a href="#Navigation">
        <button className="btn btn-dark floating-button rounded-pill pb-2">
          <FaArrowAltCircleUp className="fs-5" />
        </button>
      </a>
    </div>
  );
}

export default App;
