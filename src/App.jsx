import React, { Component } from "react";
import Countdown from "./Countdown";

import "./App.css";

class App extends Component {
  state = {
    events: [
      { id: 0, name: "śniadanie", time: "07:00" },
      { id: 1, name: "obiad", time: "15:00" },
      { id: 2, name: "kolacja", time: "19:00" },
    ],
  };

  render() {
    const events = this.state.events.map((event) => (
      <Countdown name={event.name} time={event.time} key={event.id} />
    ));

    return <div className="app">{events}</div>;
  }
}

export default App;
