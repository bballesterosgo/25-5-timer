import React, { useState,useEffect, useRef } from "react";
import BreakLabel from "./components/BreakLabel";
import ClockDisplay from "./components/ClockDisplay";
import SessionLabel from "./components/SessionLabel";
//CSS imports
import "./App.css";

function App() {
  //Session state and functions
  const [sessionLength, setSessionLength] = useState(1500);
  const [breakLength, setBreakLength] = useState(300);
  const [currentSessionType, setCurrentSessionType] = useState("Session"); //Session or Break
  const [intervalId, setIntervalId] = useState(null);
  const [timeLeft, setTimeLeft] = useState(sessionLength);
  const audioElement = useRef(null);

  //change timeLeft when sessionLength changes
  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  //Listen to timeleft changes 
  //change session to break or break to session
  useEffect(() =>{
    //if it is 0
    if(timeLeft === 0 ){
      //play the audio
      audioElement.current.play();
      if(currentSessionType === 'Session'){
        setCurrentSessionType('Break');
        setTimeLeft(breakLength);
      }else if(currentSessionType === 'Break'){
        setCurrentSessionType('Session');
        setTimeLeft(sessionLength);
      }
    }
  },[timeLeft,currentSessionType,sessionLength,breakLength]);

  const decrementSessionLength = () => {
    const newSessionLength = sessionLength - 60;

    if (newSessionLength > 0 )  {
      setSessionLength(newSessionLength);
    }
  };

  const incrementSessionLength = () => {
    const newSessionLength = sessionLength  + 60;
    if(newSessionLength <= 60 * 60){
      setSessionLength(newSessionLength);
    }
    
  };

  //Break State and functions


  const decrementBreakLength = () => {
    const newBreakLength = breakLength - 60;
    if (newBreakLength > 0 ) {
      setBreakLength(newBreakLength);
    }
  };

  const incrementBreakLength = () => {
    const newBreakLength = breakLength + 60

    if(newBreakLength <= 60 * 60){
      setBreakLength(newBreakLength);
    }
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
        
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1 );       
      },1000);//TODO: chango to 1000
    }
  };

  //Reset Button
  const handleResetButtonClick = () => {
    //Reset the audio
    audioElement.current.load();
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
        <audio id='beep' ref={audioElement}>
          <source src= "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/mpeg"/>
        </audio>
      </div>
    </div>
  );
}

export default App;
