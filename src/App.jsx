import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Timer from './Timer';

function App() {
 const [time, setTime] = useState(0); // Time in seconds
 const [isActive, setIsActive] = useState(false); // Timer status
 const intervalId = useRef(null); // Use useRef for interval ID

 // Start the countdown
 const startCountdown = (minutes) => {
    setTime(minutes * 60);
    setIsActive(true);
 };

 // Pause the countdown
 const pauseCountdown = () => {
    setIsActive(false);
    clearInterval(intervalId.current);
 };

 // Resume the countdown
 const resumeCountdown = () => {
    setIsActive(true);
    intervalId.current = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
 };

 // Reset the countdown
 const resetCountdown = () => {
    setTime(0);
    setIsActive(false);
    clearInterval(intervalId.current);
 };

 // Countdown logic
 useEffect(() => {
    if (isActive && time > 0) {
      intervalId.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!isActive) {
      clearInterval(intervalId.current);
    }
    return () => clearInterval(intervalId.current);
 }, [isActive, time]);

 return (
    <div>
      <div className="countdown-container">
        <div className="buttons-container">
          <button onClick={() => startCountdown(2)}>2 minutes</button>
          <button onClick={() => startCountdown(5)}>5 minutes</button>
          <button onClick={() => startCountdown(10)}>10 minutes</button>
        </div>
      </div>

      <div className='timer'>
        <Timer time={time} />
      </div>

      <div className='buttons'>
        <button onClick={pauseCountdown} disabled={!isActive}>Pause</button>
        <button onClick={resumeCountdown} disabled={isActive}>Resume</button>
        <button onClick={resetCountdown}>Reset</button>
      </div>
    </div>
 );
}

export default App;
