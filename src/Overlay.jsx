import React, { Component } from "react";

import "./Overlay.css";

class Overlay extends Component {
  state = {
    visible: false,
  };

  render() {
    return (
      <div className="overlay">
        <span>info</span>
        <div className="overlay__modal">
          <h1>title</h1>
          <p>text</p>
        </div>
      </div>
    );
  }
}

export default Overlay;
