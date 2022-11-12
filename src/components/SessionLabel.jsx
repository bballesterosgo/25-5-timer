import React from "react";
import moment from "moment/moment";
import { GoDash,GoPlus } from "react-icons/go";
//CSS imports
import '../stylesheet/SessionLabel.css'

const SessionLabel = ({ sessionLength, incrementSessionLength, decrementSessionLength }) => {

  //Convert seconds in minutes
  const breakSessionMinutes = moment.duration(sessionLength,'s').asMinutes();

  return <div className='session-label' id='session-label'>
          <div className='session-label-title'>
            <h2>Session Length</h2>
          </div>
          <div className='session-label-controls'>
            <GoDash onClick = { decrementSessionLength } id='session-decrement'/>
            <p id="session-length">{ breakSessionMinutes }</p>
            <GoPlus onClick= { incrementSessionLength } id='session-increment'/>
          </div>
        </div>
}

export default SessionLabel;