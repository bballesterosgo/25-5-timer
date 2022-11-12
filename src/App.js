import React, { useState,useEffect } from "react";
import BreakLabel from "./components/BreakLabel";
import ClockDisplay from "./components/ClockDisplay";
import SessionLabel from "./components/SessionLabel";
//CSS imports
import "./App.css";

function App() {
  //Session state and functions
  const [sessionLength, setSessionLength] = useState(1500);
  const [currentSessionType, setCurrentSessionType] = useState("Session"); //Session or Break

  const [intervalId, setIntervalId] = useState(null);
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  //change timeLeft when sessionLength changes
  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

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

  //Start Stop click
  const isStarted = intervalId !== null;

  const handleStartStopClick = () => {
    if (isStarted) {
      //If we are in started mod we want to top the timer clearInterval
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      //Decrement time left bt 1 every second(1000ms)
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          const newTimeLeft = prevTimeLeft - 1;
          if (newTimeLeft >= 0) {
            return prevTimeLeft - 1;
          }
          if (currentSessionType === "Session") {
            //switch to break setTimeLeft to breakSessionLength
            setCurrentSessionType("Break");
            setTimeLeft(breakLength);
          } else if (currentSessionType === "Break") {
            //Switch to session and set time left to sessionLength
            setCurrentSessionType("Session");
            setTimeLeft(sessionLength);
          }
        });
      }, 100); //TODO: change to 1000
      setIntervalId(newIntervalId);
    }
  };

  //Reset Button
  const handleResetButtonClick = () => {
    //Clear time out interval
    clearInterval(intervalId);
    //Set the interval to null
    setIntervalId(null);
    //Set sessionType to 'Session'
    setCurrentSessionType('Session');
    //Set sessionLength to 25 min
    setSessionLength(60 * 25);
    //Reset break length to 5 min
    setBreakLength(60 * 5);
    //Reset timer to 25 min
    setTimeLeft(60 * 25);
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
            breakLength={breakLength}
            sessionLength={sessionLength}
            handleStartStopClick={handleStartStopClick}
            handleResetButtonClick={handleResetButtonClick}
            startStopButtonLabel={isStarted}
            timeLeft={timeLeft}
            timeLabel={currentSessionType} />
        </div>
      </div>
    </div>
  );
}

export default App;
