import React from "react";

import "./Countdown.css";
import "./../node_modules/semantic-ui-css/semantic.css";

const Countdown = ({ name, hour, minute, onRemove, onEditInit, id }) => {
  return (
    <div className="countdown">
      <strong>{name}</strong> - {hour}:{minute}
      <div className="countdown__icons">
        <i className="icon edit" onClick={() => onEditInit(id)}></i>
        <i className="icon times" onClick={() => onRemove(id)}></i>
      </div>
    </div>
  );
};

export default Countdown;
