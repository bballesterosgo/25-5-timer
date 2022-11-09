import React from "react";
import { AiOutlinePlayCircle,AiOutlinePauseCircle,AiOutlineSync } from "react-icons/ai";


import '../stylesheet/ClockDisplay.css'

function ClockDisplay () {

  
  return <div>
    <p>Session</p>
    <p>35</p>
    <AiOutlinePlayCircle />
    <AiOutlinePauseCircle />
    <AiOutlineSync />
  </div>
}

export default ClockDisplay;