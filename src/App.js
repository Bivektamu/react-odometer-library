import React from 'react'
import './App.css';
import { Odometer } from './Odometer';
function App() {
  return (
    <div className="App">
      <Odometer num = '3426' classN="odo1" animationSpeed={3} animationTimingStyles = 'cubic-bezier(0.45, 0, 0.55, 1)' />
    </div>
  );
}

export default App;
