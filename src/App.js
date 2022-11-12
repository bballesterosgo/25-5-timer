import React,{ useState } from 'react';
import './App.css';
import BreakLabel from './components/BreakLabel';
import ClockDisplay from './components/ClockDisplay';
import SessionLabel from './components/SessionLabel';

function App() {

const [clock,setClock] = useState({

  session:25,
  break: 5

});

const incremenBreakTime = () => {
  setClock(clock.break++)
  console.log(typeof(clock.break))
};

const decrementBreakTime = () => {
  setClock(clock.break - 1)
};

const incremenSessionTime = () => {
  setClock(clock.session +1)
};

const decrementSessionkTime = () => {
  setClock(clock.session  -1)
};
  return (
    <div className="App">
      <div className='title-logo-container'>
        <h1 className='title'>25 + 5 Clock</h1>
      </div>
      <div className='clock-container'>
        <div className='break-session-controls-container'>
          <BreakLabel 
            breakLength = { clock.break }
            plusBreakTime = { incremenBreakTime } 
            lessBreakTime = { decrementBreakTime } />
          <SessionLabel 
            sessionLength = { clock.session } 
            plusSessionTime = { incremenSessionTime } 
            lessSessionTime = { decrementSessionkTime } />
        </div>
        <div className='display-container'>
          <ClockDisplay 
          breakLength={ clock.break }
          sessionLength={ clock.session } />
        </div>
      </div>
    </div>
  );
}

export default App;
