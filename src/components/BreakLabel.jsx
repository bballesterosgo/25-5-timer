import React from "react";

import '../stylesheet/BreakLabel.css'

function BreakLabel ({ breakLength }){

  return <div className='break-label' id='break-label'>
    <p>{breakLength}</p>
  </div>
}

export default BreakLabel;