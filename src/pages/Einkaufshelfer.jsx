import React, { Component } from "react";
import Einkaufshelfer from "../components/Einkaufshelfer";
import Header from "../components/Header";

class Home extends Component {
  render() {
    return (
      <>
        <Header title="Einkaufshelfer" />
        <Einkaufshelfer />
      </>
    );
  }
}

export default Home;
