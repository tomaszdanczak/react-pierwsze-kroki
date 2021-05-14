import React, { Component } from "react";
import Countdown from "./Countdown";
import EditEvent from "./EditEvent";
import uniqid from "uniqid";

import "./App.css";

class App extends Component {
  state = {
    events: [
      { id: 0, name: "śniadanie", hour: "07", minute: "00" },
      { id: 1, name: "obiad", hour: "15", minute: "00" },
      { id: 2, name: "kolacja", hour: "19", minute: "00" },
    ],
    editedEvent: {
      id: uniqid(),
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
    this.setState((prevState) => {
      const editedEventExist = prevState.events.find(
        (event) => event.id === prevState.editedEvent.id
      );

      let updatedEvents;
      if (editedEventExist) {
        updatedEvents = prevState.events.map((event) => {
          if (event.id === prevState.editedEvent.id) {
            return prevState.editedEvent;
          }
          return event;
        });
      } else {
        updatedEvents = [...prevState.events, prevState.editedEvent];
      }

      return {
        events: updatedEvents,
        editedEvent: {
          id: uniqid(),
          name: "",
          hour: "",
          minute: "",
        },
      };
    });
  };

  handleRemoveEvent = (id) => {
    this.setState((prevState) => ({
      events: prevState.events.filter((event) => event.id !== id),
    }));
  };

  handleEditInit = (id) => {
    this.setState((prevState) => ({
      editedEvent: prevState.events.find((event) => event.id === id),
    }));
  };

  render() {
    const events = this.state.events.map((event) => (
      <Countdown
        name={event.name}
        hour={event.hour}
        minute={event.minute}
        key={event.id}
        id={event.id}
        onRemove={(id) => this.handleRemoveEvent(id)}
        onEditInit={(id) => this.handleEditInit(id)}
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
