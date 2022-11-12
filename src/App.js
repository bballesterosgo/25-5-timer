import React, { useState } from "react";
import moment from "moment/moment";
import BreakLabel from "./components/BreakLabel";
import ClockDisplay from "./components/ClockDisplay";
import SessionLabel from "./components/SessionLabel";

import "./App.css";

function App() {

 //Session state and functions 
  const [sessionLength, setSessionLength] = useState(1500);

  const decrementSessionLength = () => {
    const newSessionLength = sessionLength - 60;

    if (sessionLength < 0) {
      setSessionLength(0);
    } else {
      setSessionLength(newSessionLength);
    }
  };

  const incrementSessionLength = () => {
    setSessionLength(sessionLength + 60);
  };

  //Break State and functions
  const [breakLength, setBreakLength] = useState(300);

  const decrementBreakLength = () => {
    const newBreakLength = breakLength - 60;

    if (newBreakLength < 0) {
      setBreakLength(0);
    } else {
      setBreakLength(newBreakLength);
    }
  };

  const incrementBreakLength = () => {
    setBreakLength(breakLength + 60);
  };

  return (
    <div className="App">
      <div className="title-logo-container">
        <h1 className="title">25 + 5 Clock</h1>
      </div>
      <div className="clock-container">
        <div className="break-session-controls-container">
          <BreakLabel
            breakLength={breakLength}
            incrementBreakLength={incrementBreakLength}
            decrementBreakLength={decrementBreakLength}
          />
          <SessionLabel
            sessionLength={sessionLength}
            incrementSessionLength={incrementSessionLength}
            decrementSessionLength={decrementSessionLength}
          />
        </div>
        <div className="display-container">
          <ClockDisplay
            breakLength=''
            sessionLength=''
          />
        </div>
      </div>
    </div>
  );
}

export default App;
