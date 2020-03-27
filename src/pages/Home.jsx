import React, { Component } from "react";
import Einkaufshelfer from "../components/Einkaufshelfer";
import Hero from "../components/Hero";

class Home extends Component {
  render() {
    return (
      <>
        <Hero />
        <Einkaufshelfer />
      </>
    );
  }
}

export default Home;
