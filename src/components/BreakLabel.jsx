import React from "react";
import { GoDash,GoPlus } from "react-icons/go";
import moment from "moment/moment";
//CSS imports
import '../stylesheet/BreakLabel.css'

const BreakLabel = ({ breakLength, incrementBreakLength,decrementBreakLength }) => {
  
//Convert Seconds in minutes
const breakLengthMinutes = moment.duration(breakLength,'s').asMinutes();

  return <div className='break-label' id='break-label'>
             <div className='break-label-title'>
            <h2>Break Length</h2>
          </div>
          <div className='break-label-controls'>
            <GoDash onClick={ decrementBreakLength } id='break-decrement' />
            <p id='break-length'>{ breakLengthMinutes }</p>
            <GoPlus onClick={ incrementBreakLength} id='break-increment' />
          </div>
        </div>
}

export default BreakLabel;