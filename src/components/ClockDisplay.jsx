import React, { useEffect, useState } from "react";
import { AiOutlinePlayCircle,AiOutlinePauseCircle,AiOutlineSync } from "react-icons/ai";
import { FaRegStopCircle } from "react-icons/fa";

import moment from "moment/moment";
import momentDurationFormatSetup from "moment-duration-format";

//CSS imports
import '../stylesheet/ClockDisplay.css'
//MM:SS 25:00
momentDurationFormatSetup(moment);

function ClockDisplay ({sessionLength,breakLength}) {

const [currentSessionType, setCurrentSessionType] = useState('Session');//Session or Break

const [intervalId,setIntervalId] = useState(null);  

const [timeleft, setTimeLeft] = useState(sessionLength);

//change timeLeft when sessionLength changes
useEffect(() =>{
  setTimeLeft(sessionLength)
},[sessionLength])

//Start Stop click
const isStarted =  intervalId !== null;

const handleStartStopClick = () => {
  if(isStarted){
     //If we are in started mod we want to top the timer clearInterval
    clearInterval(intervalId);
    setIntervalId(null);


  }else{
      //Decrement time left bt 1 every second(1000ms)
    const newIntervalId = setInterval(() =>{
      setTimeLeft(prevTimeLeft => {
       const newTimeLeft = prevTimeLeft -1;
       if(newTimeLeft >= 0){
         return prevTimeLeft -1;
       }
       if(currentSessionType === 'Session'){
        //switch to break setTimeLeft to breakSessionLength
        setCurrentSessionType('Break');
        setTimeLeft(breakLength);
       }else if(currentSessionType === 'Break'){
        //Switch to session and set time left to sessionLength
        setCurrentSessionType('Session');
        setTimeLeft(sessionLength)
       }
      


      })
     },100);//TODO: change to 1000
     setIntervalId(newIntervalId)
  }

};

//Time format MM:SS 25:00
const formattedTimeLeft = moment.duration(timeleft,'s').format('mm:ss',{trim: false})

  return <div>
            <p id='timer-label'>{currentSessionType}</p>
            <p id='time-left'>{formattedTimeLeft}</p>
          <div className="start-stop-pause-buttons">
            <div onClick={handleStartStopClick}>
              {isStarted ? <FaRegStopCircle /> : <AiOutlinePlayCircle/>}
            </div>
              <AiOutlinePauseCircle />
              <AiOutlineSync />
             </div>
          </div>
}

export default ClockDisplay;