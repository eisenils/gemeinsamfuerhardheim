import React, { Component } from "react";
import Slider from "../components/Slider";
import logo from "../img/logo.jpg";

class Home extends Component {
  render() {
    return (
      <>
        <Slider />
        <div className="container mt-3">
          <div className="row">
            <div className="col text-center">
              <h2>
                <span className="underline">Herzlich Willkommen</span>
              </h2>
              <p>
                Gemeinsam für Hardheim ist ein Zusammenschluss der drei Rettungsorganisationen der
                Gemeinde Hardheim. <br />
                Dies sind die DLRG OG Hardheim e.V., DRK Ortverein Hardheim und die freiwillige
                Feuerwehr Hardheim.
              </p>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-md-4">
              <img
                src={logo}
                style={{ width: "100%", height: "auto" }}
                alt="Logo GemeinsamFürHardheim"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
