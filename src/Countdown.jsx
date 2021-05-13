import React from "react";

import "./Countdown.css";

const Countdown = (props) => {
  return (
    <div className="countdown">
      <strong>{props.name}</strong> - {props.hour}:{props.minute}
    </div>
  );
};

export default Countdown;
