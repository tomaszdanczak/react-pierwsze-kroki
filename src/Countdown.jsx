import React from "react";
import { hourMinuteToSeconds } from "./utils";

import "./Countdown.css";
import "./../node_modules/semantic-ui-css/semantic.css";

const Countdown = ({
  name,
  hour,
  minute,
  timeNow,
  onRemove,
  onEditInit,
  id,
}) => {
  const nowInSeconds = hourMinuteToSeconds(hour, minute);

  const eventInSeconds =
    hourMinuteToSeconds(timeNow.hour, timeNow.minutes) + timeNow.seconds;

  const diff = nowInSeconds - eventInSeconds;
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
