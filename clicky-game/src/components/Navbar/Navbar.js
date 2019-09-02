import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <navbar className="navbar">
        <ul>
          <li class="brand">
            <a href="/"><div class="logo"></div><div>{this.props.title}</div></a>
          </li>
          <li class="message">{this.props.message}</li>
          <li>Score: {this.props.score} | Top Score: {this.props.topScore}</li>
        </ul>
      </navbar>
    );
  }
}

export default Navbar;