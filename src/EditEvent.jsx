import React from "react";
import { isValidNumberInput } from "./utils";

import "./EditEvent.css";

const EditEvent = ({ onInputChange, onSave, name, hour, minute }) => {
  return (
    <div className="edit-event">
      <div className="edit-event__input-group">
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => {
            onInputChange({ [e.target.name]: e.target.value });
          }}
        />
      </div>
      <div className="edit-event__input-group">
        <label htmlFor="hour">hour</label>
        <input
          type="tel"
          id="hour"
          name="hour"
          value={hour}
          onKeyPress={(e) => isValidNumberInput(e)}
          onChange={(e) => {
            onInputChange({ [e.target.name]: e.target.value });
          }}
        />
      </div>
      <div className="edit-event__input-group">
        <label htmlFor="minute">minute</label>
        <input
          type="tel"
          id="minute"
          name="minute"
          value={minute}
          onKeyPress={(e) => isValidNumberInput(e)}
          onChange={(e) => {
            onInputChange({ [e.target.name]: e.target.value });
          }}
        />
      </div>
      <button onClick={onSave}>OK</button>
      <button>Cancel</button>
    </div>
  );
};

export default EditEvent;
