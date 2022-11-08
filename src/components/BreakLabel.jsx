import React from "react";
import { GoDash,GoPlus } from "react-icons/go";

import '../stylesheet/BreakLabel.css'

function BreakLabel ({ breakLength }){

  return <div className='break-label' id='break-label'>
             <div className='break-label-title'>
            <h2>Break Length</h2>
          </div>
          <div className='break-label-controls'>
            <GoDash />
            <p>{ breakLength }</p>
            <GoPlus />
          </div>
        </div>
}

export default BreakLabel;