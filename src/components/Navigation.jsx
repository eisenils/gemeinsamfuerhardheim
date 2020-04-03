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
          color: isCurrent ? "#e73a33" : "#333",
          padding: "0.5rem"
        }
      };
    }}
  />
);

class Navigation extends Component {
  render() {
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          style={{ fontSize: "1.2rem" }}
        >
          <Link to="/">
            <Navbar.Brand className="brand">Gemeinsam für Hardheim</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <MenuItem to="/" className="nounderline">
                Startseite
              </MenuItem>
              <MenuItem to="/einkaufshelfer" className="nounderline">
                Einkaufshelfer
              </MenuItem>
              <MenuItem to="/corona" className="nounderline">
                Corona Virus
              </MenuItem>
              <MenuItem to="/ueber-uns" className="nounderline">
                Über uns
              </MenuItem>
            </Nav>
          </Navbar.Collapse>
          <Nav className="d-none d-lg-flex">
            <Nav.Link disabled style={{ color: "#aaa" }}>
              <i>#gemeinsamfürhardheim</i>
            </Nav.Link>
            <a
              href="https://www.facebook.com/Hardheim112-425450161608511/"
              className="nounderline"
              style={{ color: "#333", padding: "0.5rem" }}
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/hardheim112/"
              className="nounderline"
              style={{ color: "#333", padding: "0.5rem" }}
            >
              <FaInstagram />
            </a>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default Navigation;
