import React from "react";
import "./sass/main.scss";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import UeberUns from "./pages/UeberUns";
import Corona from "./pages/Corona";
import Impressum from "./pages/Impressum";
import { Router } from "@reach/router";
import Einkaufshelfer from "./pages/Einkaufshelfer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Navigation fixed="top" />
      <Router primary={false}>
        <Home path="/" />
        <UeberUns path="/ueber-uns" />
        <Corona path="corona" />
        <Impressum path="/impressum" />
        <Einkaufshelfer path="/einkaufshelfer" />
      </Router>
      <ScrollToTop />
    </div>
  );
}

export default App;
