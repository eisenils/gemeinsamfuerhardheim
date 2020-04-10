import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Gemeinsam für Hardheim |{" "}
            <a href="/impressum" className="text-decoration-none">
              Impressum
            </a>
          </p>
        </div>
      </>
    );
  }
}

export default Footer;
