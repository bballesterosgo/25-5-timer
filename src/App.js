import React,{ useState } from 'react';
import './App.css';
import BreakLabel from './components/BreakLabel';
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
      <BreakLabel 
        breakLength={breakLength}/>
      <SessionLabel 
        sessionLength={sessionLength}/>
      </div>
    </div>
  );
}

export default App;
