import React from "react";

import "./Countdown.css";

const Countdown = ({ name, hour, minute }) => {
  return (
    <div className="countdown">
      <strong>{name}</strong> - {hour}:{minute}
    </div>
  );
};

export default Countdown;
