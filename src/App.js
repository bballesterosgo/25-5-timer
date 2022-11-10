import React,{ useState } from 'react';
import './App.css';
import BreakLabel from './components/BreakLabel';
import ClockDisplay from './components/ClockDisplay';
import SessionLabel from './components/SessionLabel';

function App() {

const [sessionLength,setSessionLength] = useState(25);

const [breakLength,setBreakLength] = useState(5);

const incremenBreakTime = () => {
  setBreakLength(breakLength + 1)
};

const decrementBreakTime = () => {
  setBreakLength(breakLength - 1)
};

const incremenSessionTime = () => {
  setSessionLength(sessionLength +1)
};

const decrementSessionkTime = () => {
  setSessionLength(sessionLength  -1)
};
  return (
    <div className="App">
      <div className='title-logo-container'>
        <h1 className='title'>25 + 5 Clock</h1>
      </div>
      <div className='clock-container'>
        <div className='break-session-controls-container'>
          <BreakLabel 
            breakLength = { breakLength }
            plusBreakTime = { incremenBreakTime } 
            lessBreakTime = { decrementBreakTime } />
          <SessionLabel 
            sessionLength = { sessionLength } 
            plusSessionTime = { incremenSessionTime } 
            lessSessionTime = { decrementSessionkTime } />
        </div>
        <div className='display-container'>
          <ClockDisplay 
          breakLength={breakLength}
          sessionLength={sessionLength} />
        </div>
      </div>
    </div>
  );
}

export default App;
