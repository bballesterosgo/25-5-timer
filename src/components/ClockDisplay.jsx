import React, { useEffect, useState } from "react";
import { AiOutlinePlayCircle,AiOutlinePauseCircle,AiOutlineSync } from "react-icons/ai";
import moment from "moment/moment";
import momentDurationFormatSetup from "moment-duration-format";

//CSS imports
import '../stylesheet/ClockDisplay.css'
//MM:SS 25:00
momentDurationFormatSetup(moment);



function ClockDisplay ({sessionLength,breakLength}) {

const [timeleft, setTimeLeft] = useState(sessionLength);

//change timeLeft when sessionLength changes
useEffect(() =>{
  setTimeLeft(sessionLength)
},[sessionLength])

//Start Stop click
const handleStartStopClick = () => {
  //Decrement time left bt 1 every second(1000ms)
  setInterval()
};

//Time format MM:SS 25:00
const formattedTimeLeft = moment.duration(timeleft,'s').format('mm:ss')

  return <div>
    <p>Session</p>
    <p>{formattedTimeLeft}</p>
    <AiOutlinePlayCircle onClick={handleStartStopClick}/>
    <AiOutlinePauseCircle />
    <AiOutlineSync />
  </div>
}

export default ClockDisplay;