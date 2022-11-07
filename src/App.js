import React from 'react';
import './App.css';
import BreakLabel from './components/BreakLabel';
import SessionLabel from './components/SessionLabel';

function App() {



  return (
    <div className="App">
      <div className='title-logo-container'>
        <h1 className='title'>25 + 5 Clock</h1>
      </div>
      <div className='clock-container'>
      <BreakLabel />
      <SessionLabel />
      </div>
    </div>
  );
}

export default App;
