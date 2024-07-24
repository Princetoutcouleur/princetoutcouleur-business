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
    <div className="App bg-black text-white p-0 container-fluid">
      <div className="banner vh-100">
        <Navigation />
        <Header />
      </div>
      <About />
      <Services />
      {/* <Portfolio /> */}
      <Contact />
      <div className="bg-black d-flex justify-content-between align-items-center">
        <div>
          <p className="ms-3">
            <span className="gradient-text fw-bold">The_princetoutcouleur Agency</span> <br />Transformez votre vision en réalité
            digitale.
          </p>
        </div>
        <div>
          <a href="#Navigation">
            <button className="btn btn-link border border-warning border-1 text-warning m-3 rounded-pill">
              Remonter
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
