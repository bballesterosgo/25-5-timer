import React, { useEffect, useState } from "react";
import { AiOutlinePlayCircle,AiOutlinePauseCircle,AiOutlineSync } from "react-icons/ai";
import { FaRegStopCircle } from "react-icons/fa";

import moment from "moment/moment";
import momentDurationFormatSetup from "moment-duration-format";

//CSS imports
import '../stylesheet/ClockDisplay.css'
//MM:SS 25:00
momentDurationFormatSetup(moment);

function ClockDisplay ({handleStartStopClick,handleResetButtonClick,timeLabel,startStopButtonLabel,timeLeft}) {

//Time format MM:SS 25:00
const formattedTimeLeft = moment.duration(timeLeft,'s').format('mm:ss',{trim: false})

  return <div>
            <p id='timer-label'>{timeLabel}</p>
            <p id='time-left'>{formattedTimeLeft}</p>
          <div className="start-stop-pause-buttons">
            <div onClick={handleStartStopClick}>
              { startStopButtonLabel ? <FaRegStopCircle /> : <AiOutlinePlayCircle/>}
            </div>
              <AiOutlinePauseCircle />
              <AiOutlineSync onClick={handleResetButtonClick}/>
             </div>
          </div>
}

export default ClockDisplay;