import React from "react";
import { AiOutlinePlayCircle,AiOutlinePauseCircle,AiOutlineSync } from "react-icons/ai";


import '../stylesheet/ClockDisplay.css'

function ClockDisplay ({sessionLength,breakLength}) {


  return <div>
    <p>Session</p>
    <p>{sessionLength}</p>
    <AiOutlinePlayCircle />
    <AiOutlinePauseCircle />
    <AiOutlineSync />
  </div>
}

export default ClockDisplay;