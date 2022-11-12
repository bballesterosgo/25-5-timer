import React, { useState } from "react";
import { GoDash,GoPlus } from "react-icons/go";
import moment from "moment/moment";

import '../stylesheet/BreakLabel.css'

const BreakLabel = () => {
  
const [breakLength,setBreakLength] = useState(300);


const decrementBreakLength = () => {
  const newBreakLength = breakLength - 60;

  if(newBreakLength < 0){
    setBreakLength(0);
  }else  {
    setBreakLength(newBreakLength);
  }
  
};

const incrementBreakLength = () => {
  setBreakLength(breakLength + 60)
};
//Convertir segundos en minutos.
const breakLengthMinutes = moment.duration(breakLength,'s').minutes();

  return <div className='break-label' id='break-label'>
             <div className='break-label-title'>
            <h2>Break Length</h2>
          </div>
          <div className='break-label-controls'>
            <GoDash onClick={ decrementBreakLength } id='break-decrement'/>
            <p id='break-length'>{ breakLengthMinutes }</p>
            <GoPlus onClick={ incrementBreakLength} id='break-increment'/>
          </div>
        </div>
}

export default BreakLabel;