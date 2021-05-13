import React, { Component } from "react";
import Countdown from "./Countdown";
import EditEvent from "./EditEvent";

import "./App.css";

class App extends Component {
  state = {
    events: [
      { id: 0, name: "śniadanie", hour: "07", minute: "00" },
      { id: 1, name: "obiad", hour: "15", minute: "00" },
      { id: 2, name: "kolacja", hour: "19", minute: "00" },
    ],
    editedEvent: {
      id: 4,
      name: "",
      hour: "",
      minute: "",
    },
  };

  handleEditEvent = (val) => {
    this.setState((prevState) => ({
      editedEvent: { ...prevState.editedEvent, ...val },
    }));
  };

  handleSaveEvent = () => {
    this.setState((prevState) => ({
      events: [...prevState.events, prevState.editedEvent],
      editedEvent: {
        id: 4,
        name: "",
        hour: "",
        minute: "",
      },
    }));
  };

  render() {
    const events = this.state.events.map((event) => (
      <Countdown
        name={event.name}
        hour={event.hour}
        minute={event.minute}
        key={event.id}
      />
    ));

    const { name, hour, minute } = this.state.editedEvent;

    return (
      <div className="app">
        {events}
        <EditEvent
          name={name}
          hour={hour}
          minute={minute}
          onInputChange={(val) => this.handleEditEvent(val)}
          onSave={this.handleSaveEvent}
        />
      </div>
    );
  }
}

export default App;
