import React from "react";

import "./Countdown.css";
import "./../node_modules/semantic-ui-css/semantic.css";

const Countdown = ({ name, hour, minute, onRemove, id }) => {
  return (
    <div className="countdown">
      <strong>{name}</strong> - {hour}:{minute}
      <div className="countdown__icons">
        <i className="icon times" onClick={() => onRemove(id)}></i>
      </div>
    </div>
  );
};

export default Countdown;
