import React from "react";
import PropTypes from "prop-types";
import Overlay from "./Overlay";
import { hourMinuteToSeconds, secondsToHourMinuteSecond } from "./utils";

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
  const eventInSeconds = hourMinuteToSeconds(hour, minute);

  const nowInSeconds =
    hourMinuteToSeconds(timeNow.hour, timeNow.minute) + timeNow.seconds;

  const diff = eventInSeconds - nowInSeconds;

  const diffText = diff > 0 ? secondsToHourMinuteSecond(diff) : "tomorrow";

  return (
    <div className="countdown">
      <strong>{name}</strong> - {diffText}
      <div className="countdown__icons">
        <i className="icon edit" onClick={() => onEditInit(id)}></i>
        <i className="icon times" onClick={() => onRemove(id)}></i>
      </div>
      <Overlay>
        <h1>{name}</h1>
        <p>
          {hour.toString().padStart(2, 0)}:{minute.toString().padStart(2, 0)}
        </p>
      </Overlay>
    </div>
  );
};

Countdown.propTypes = {
  name: PropTypes.string,
  hour: PropTypes.number,
  minute: PropTypes.number,
  onEditInit: PropTypes.func,
  onRemove: PropTypes.func,
  timeNow: PropTypes.shape({
    hour: PropTypes.number,
    minute: PropTypes.number,
    seconds: PropTypes.number,
  }),
};

export default Countdown;
