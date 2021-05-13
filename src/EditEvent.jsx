import React from "react";

import "./EditEvent.css";

const EditEvent = ({ onInputChange, onSave }) => {
  return (
    <div className="edit-event">
      <div className="edit-event__input-group">
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          name="name"
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
