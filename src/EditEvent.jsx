import React from "react";
import PropTypes from "prop-types";
import {
  isValidNumberInput,
  parseInputAsNumber,
  isValidName,
  isValidHour,
  isValidMinute,
} from "./utils";

import "./EditEvent.css";

const EditEvent = ({ onInputChange, onSave, onCancel, name, hour, minute }) => {
  const isFormValid =
    isValidName(name) && isValidHour(hour) && isValidMinute(minute);

  const isFormEmpty = name === "" && hour === -1 && minute === -1;

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
          value={hour === -1 ? "" : hour}
          onKeyPress={(e) => isValidNumberInput(e)}
          onChange={(e) => {
            onInputChange({
              [e.target.name]: parseInputAsNumber(e.target.value),
            });
          }}
        />
      </div>
      <div className="edit-event__input-group">
        <label htmlFor="minute">minute</label>
        <input
          type="tel"
          id="minute"
          name="minute"
          value={minute === -1 ? "" : minute}
          onKeyPress={(e) => isValidNumberInput(e)}
          onChange={(e) => {
            onInputChange({
              [e.target.name]: parseInputAsNumber(e.target.value),
            });
          }}
        />
      </div>
      <button disabled={!isFormValid} onClick={onSave}>
        OK
      </button>
      <button disabled={isFormEmpty} onClick={onCancel}>
        Cancel
      </button>
    </div>
  );
};

EditEvent.PropType = {
  name: PropTypes.string,
  hour: PropTypes.number,
  minute: PropTypes.number,
  onInputChange: PropTypes.func,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
};

export default EditEvent;
