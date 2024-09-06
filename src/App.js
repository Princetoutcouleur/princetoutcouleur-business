import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Question from "./Components/Question";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App bg-black text-white p-0 container-fluid">
      <div className="banner vh-100">
        <Navigation />
        <Header />
      </div>
      <Portfolio />
      <Services />
      <Question />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
