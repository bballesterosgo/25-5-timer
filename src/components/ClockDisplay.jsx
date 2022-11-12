import React from "react";
import { AiOutlinePlayCircle, AiOutlineSync } from "react-icons/ai";
import { FaRegStopCircle } from "react-icons/fa";

import moment from "moment/moment";
import momentDurationFormatSetup from "moment-duration-format";

//CSS imports
import "../stylesheet/ClockDisplay.css";
//MM:SS 25:00
momentDurationFormatSetup(moment);

function ClockDisplay({
  handleStartStopClick,
  handleResetButtonClick,
  timeLabel,
  startStopButtonLabel,
  timeLeft,
}) {
  //Time format MM:SS 25:00
  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });

  return (
    <div>
      <p id="timer-label">{timeLabel}</p>
      <p id="time-left">{formattedTimeLeft}</p>
        <div className="start-stop-pause-buttons">
          {startStopButtonLabel ? (
            <FaRegStopCircle onClick={handleStartStopClick} id='start_stop'/>
          ) : (
            <AiOutlinePlayCircle onClick={handleStartStopClick} id='start_stop'/>
          )}
          <AiOutlineSync onClick={handleResetButtonClick} id="reset" />
        </div>
      </div>
  );
}

export default ClockDisplay;
