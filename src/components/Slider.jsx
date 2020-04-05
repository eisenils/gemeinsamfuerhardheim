import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Header from "../img/GfH_Header2.jpg";

class Slider extends Component {
  render() {
    return (
      <>
        <Carousel interval="6000" indicators="false">
          <Carousel.Item>
            <div className="d-block w-100 slider" />
            <Carousel.Caption>
              <h1>Gemeinsam für Hardheim</h1>
              <p className="subheader">
                Wir für <span style={{ color: "#e73a33" }}>dich</span>! Du mit{" "}
                <span style={{ color: "#e73a33" }}>uns</span>?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="d-block w-100 slider "
              id="slider"
              style={{
                backgroundImage: `url(
                  "${Header}"
                )`,
                backgroundPosition: "50% 30%"
              }}
            />
            <Carousel.Caption>
              <h1>Ehrenamt</h1>
              <p className="subheader">
                <span style={{ color: "#e73a33" }}>Zusammen</span> eine starke{" "}
                <span style={{ color: "#e73a33" }}>Gemeinschaft</span>!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default Slider;
