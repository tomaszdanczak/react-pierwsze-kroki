import React, { Component } from "react";

import "./Overlay.css";

class Overlay extends Component {
  state = {
    visible: false,
  };

  toogleVisible = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const overlayClass = this.state.visible
      ? "overlay__modal overlay__modal--visible"
      : "overlay__modal";

    return (
      <div className="overlay">
        <span onClick={this.toogleVisible}>info</span>
        <div className={overlayClass}>
          <span onClick={this.toogleVisible}>close</span>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Overlay;
