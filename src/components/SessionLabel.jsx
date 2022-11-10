import React from "react";
import { GoDash,GoPlus } from "react-icons/go";

import '../stylesheet/SessionLabel.css'

function SessionLabel ({ sessionLength,plusSessionTime,lessSessionTime }){


  return <div className='session-label' id='session-label'>
          <div className='session-label-title'>
            <h2>Session Length</h2>
          </div>
          <div className='session-label-controls'>
            <GoDash onClick = { lessSessionTime } />
            <p>{ sessionLength }</p>
            <GoPlus onClick= { plusSessionTime }/>
          </div>
        </div>
}

export default SessionLabel;