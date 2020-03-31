import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <div className="jumbotron text-center">
          <h1>
            <span className="underline">{this.props.title}</span>
          </h1>
        </div>
      </>
    );
  }
}

export default Header;
