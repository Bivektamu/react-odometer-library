import React from 'react'
import './App.css';
import { Odometer } from './Odometer';
function App() {
  return (
    <div className="App">
      <Odometer num = '9384756' classN="odo1" animationSpeed={3} animationTimingStyles = 'cubic-bezier(0.45, 0, 0.55, 1)' gap={80} />
      <Odometer num = '98278793' reverse={true} classN="odo1" animationSpeed={10} animationTimingStyles = 'cubic-bezier(0.45, 0, 0.55, 1)' gap={30} />
    </div>
  );
}

export default App;
