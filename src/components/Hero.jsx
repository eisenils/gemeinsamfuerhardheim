import React, { Component } from "react";
import logo from "../img/logo.jpg";

class Hero extends Component {
  render() {
    return (
      <>
        <div className="jumbotron text-center">
          <img src={logo} className="logo" alt="Logo GemeinsamFürHardheim" />
          <h1>Gemeinsam für Hardheim</h1>
          <p>Wir für dich! Du für uns?</p>
        </div>
      </>
    );
  }
}

export default Hero;
