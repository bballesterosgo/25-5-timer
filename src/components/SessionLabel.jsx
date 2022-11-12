import React, { useState } from "react";
import { GoDash,GoPlus } from "react-icons/go";
import moment from "moment/moment";

import '../stylesheet/SessionLabel.css'

const SessionLabel = () => {

  const [sessionLength, setSessionLength] = useState(1500);

  const decrementSessionLength = () => {
    const newSessionLength = sessionLength - 60;
    
    if(sessionLength < 0){
      setSessionLength(0);
    }else{
      setSessionLength(newSessionLength);
    }
  };

  const incrementSessionLength = () => {
    setSessionLength(sessionLength + 60)
  };
  //Convertir segundos a minutos
  const breakSessionMinutes = moment.duration(sessionLength,'s').minutes();

  return <div className='session-label' id='session-label'>
          <div className='session-label-title'>
            <h2>Session Length</h2>
          </div>
          <div className='session-label-controls'>
            <GoDash onClick = { decrementSessionLength } id='session-decrement'/>
            <p id='session-length'>{ breakSessionMinutes }</p>
            <GoPlus onClick= { incrementSessionLength } id='session-increment'/>
          </div>
        </div>
}

export default SessionLabel;