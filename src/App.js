import React,{ useState } from 'react';
import './App.css';
import BreakLabel from './components/BreakLabel';
import ClockDisplay from './components/ClockDisplay';
import SessionLabel from './components/SessionLabel';

function App() {

const [sessionLength,setSessionLength] = useState(25);

const [breakLength,setBreakLength] = useState(5);

  return (
    <div className="App">
      <div className='title-logo-container'>
        <h1 className='title'>25 + 5 Clock</h1>
      </div>
      <div className='clock-container'>
        <div className='break-session-controls-container'>
          <BreakLabel 
            breakLength={breakLength}/>
          <SessionLabel 
            sessionLength={sessionLength}/>
        </div>
      <div className='display-container'>
        <ClockDisplay />
      </div>
      </div>
    </div>
  );
}

export default App;
