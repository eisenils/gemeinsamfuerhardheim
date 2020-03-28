import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../img/GfH_Header.jpg";

class Slider extends Component {
  render() {
    return (
      <>
        <Carousel interval="6000">
          <Carousel.Item>
            <img className="d-block w-100 slider" src={slide1} alt="First slide" />
            <Carousel.Caption>
              <h1>First slide label</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 slider" src={slide1} alt="Second slide" />

            <Carousel.Caption>
              <h1>Second slide label</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default Slider;
