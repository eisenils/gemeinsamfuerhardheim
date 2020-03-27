import React from "react";
import "./sass/main.scss";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import UberUns from "./pages/UberUns";
import Impressum from "./pages/Impressum";
import { Router } from "@reach/router";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation fixed="top" />
      <Router>
        <Home path="/" />
        <UberUns path="/ueber-uns" />
        <Impressum path="/impressum" />
      </Router>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
