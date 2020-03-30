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
              <p>Wir für dich! Du für uns?</p>
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
                zIndex: "-1"
              }}
            />
            <Carousel.Caption>
              <h1>Ehrenamt</h1>
              <p>Zusammen eine starke Gemeinschaft</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default Slider;
