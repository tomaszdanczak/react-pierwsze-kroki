import React from "react";

import "./Countdown.css";
import "./../node_modules/semantic-ui-css/semantic.css";

const Countdown = ({ name, hour, minute }) => {
  return (
    <div className="countdown">
      <strong>{name}</strong> - {hour}:{minute}
      <div className="countdown__icons">
        <i className="icon times"></i>
      </div>
    </div>
  );
};

export default Countdown;
