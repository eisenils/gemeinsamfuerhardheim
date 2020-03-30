import React, { Component } from "react";
import Einkaufshelfer from "../components/Einkaufshelfer";
import Slider from "../components/Slider";

class Home extends Component {
  render() {
    return (
      <>
        <Slider />
        <Einkaufshelfer />
      </>
    );
  }
}

export default Home;
