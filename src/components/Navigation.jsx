import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "@reach/router";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const MenuItem = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "#e73a33" : "#333"
        }
      };
    }}
  />
);

class Navigation extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Link to="/">
            <Navbar.Brand className="brand">Gemeinsam für Hardheim</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <MenuItem to="/" className="nounderline">
                  Startseite
                </MenuItem>
              </Nav.Link>
              <Nav.Link>
                <MenuItem to="/corona" className="nounderline">
                  Corona Virus
                </MenuItem>
              </Nav.Link>
              <Nav.Link>
                <MenuItem to="/ueber-uns" className="nounderline">
                  Über uns
                </MenuItem>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Nav.Link disabled style={{ color: "#aaa" }}>
              <i>#gemeinsamfürhardheim</i>
            </Nav.Link>
            <Nav.Link>
              <a
                href="https://www.facebook.com/Hardheim112-425450161608511/"
                className="nounderline"
                style={{ color: "#333" }}
              >
                <FaFacebook />
              </a>
            </Nav.Link>
            <Nav.Link>
              <a
                href="https://www.instagram.com/hardheim112/"
                className="nounderline"
                style={{ color: "#333" }}
              >
                <FaInstagram />
              </a>
            </Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default Navigation;
