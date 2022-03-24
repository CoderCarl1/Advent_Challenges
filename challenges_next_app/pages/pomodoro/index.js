import React, { useState, useEffect, useRef } from 'react';
import ProgressCircle from './progressCircle';

function formatTime(num) {
  num = String(num);
  if (num.length === 1) num = `0${num}`;

  return Number(num);
}

export default function Index() {
  // const [seconds, setSeconds] = useState(0);
  // const [work, setWork] = useState(0);

  // const [intervalId, setIntervalId] = useState(0);
  // const [timerOn, setTimerOn] = useState(false);
  // const buttonRef = useRef(null);

  // // useEffect(() => {
  // //   console.log("inside the format time useEffect");
  // //   setMinutes(formatTime(minutes));
  // //   setSeconds(formatTime(seconds));
  // // }, [focused]);

  // // if
  // function handleKeyDown(e) {
  //   if (buttonRef.current === null) return;

  //   if (e.code === "Enter") {
  //     if (e.target.name === "minutes") {
  //       document.querySelector(".pomodoro__input__seconds").focus();
  //     }
  //     if (e.target.name === "seconds") {
  //       buttonRef.current.focus();
  //     }

  //     return;
  //   }
  // }

  // // change time if input is too Big
  // useEffect(() => {
  //   if (focused === null) {
  //     if (seconds >= 60) {
  //       setSeconds(60);
  //     }
  //     if (minutes > 60 || (minutes >= 60 && seconds >= 0)) {
  //       setMinutes(60);
  //       setSeconds(0);
  //     }
  //   }
  // }, [minutes, seconds, focused]);

  // useEffect(() => {
  //   if (focused !== null) setTimerOn(false);
  // }, [focused]);

  // useEffect(() => {
  //   if (timerOn) {
  //     if (minutes == 0 && seconds == 0) {
  //       console.log("SHOULD HAVE STOPPED");
  //       setTimerOn((prev) => !prev);
  //       return;
  //     }

  //     if (minutes >= 1 && seconds == 0) {
  //       console.log("changed the minutes");
  //       setMinutes((prev) => prev - 1);
  //       setSeconds(60);
  //     }
  //   }
  // }, [seconds, timerOn]);

  // useEffect(() => {
  //   if (intervalId) {
  //     clearInterval(intervalId);
  //     setIntervalId(0);
  //     return;
  //   }

  //   if (timerOn) {
  //     const newIntervalId = setInterval(() => {
  //       setSeconds((prev) => prev - 1);
  //     }, 1000);

  //     setIntervalId(newIntervalId);
  //   }

  //   return () => clearInterval(intervalId);
  // }, [timerOn]);

  // function handleClick() {
  //   setTimerOn((prev) => !prev);
  // }

  const [progress, setProgress] = useState(0);
  return (
    <>
      <h1>Pomodoro</h1>

      <input
        onChange={(e) => setProgress(e.target.value)}
        value={progress}
        type="range"
        min="0"
        max="100"
      />
      <ProgressCircle
        progress={progress}
        data-toot
        style={{ border: '1px dashed hotpink' }}
        barColor={'255 0 0'}
      />
      {/* <div className="time">
        <label htmlFor="minutes" aria-label="minutes">
          <span className="sr-only">Minutes</span>
          <input
            name="minutes"
            value={minutes}
            type="number"
            className={
              focused
                ? "pomodoro__input__minutes pomodoro__input__focused"
                : "pomodoro__input__minutes"
            }
            onChange={(e) => setMinutes(e.target.value)}
            onFocus={(e) => setFocused(e.target)}
            onBlur={() => setFocused(null)}
            onKeyDown={(e) => handleKeyDown(e)}
            maxLength="2"
            onClick={(e) =>
              e.target.setSelectionRange(0, e.target.value.length)
            }
          ></input>
        </label>
        :
        <label htmlFor="seconds" aria-label="seconds">
          <span className="sr-only">Seconds</span>
          <input
            name="seconds"
            value={seconds}
            type="number"
            className={
              focused
                ? "pomodoro__input__seconds pomodoro__input__focused"
                : "pomodoro__input__seconds"
            }
            onChange={(e) => setSeconds(e.target.value)}
            onFocus={(e) => setFocused(e.target)}
            onBlur={() => setFocused(null)}
            onKeyDown={(e) => handleKeyDown(e)}
            maxLength="2"
            onClick={(e) =>
              e.target.setSelectionRange(0, e.target.value.length)
            }
          ></input>
        </label>
        <button onClick={handleClick} className="uppercase" ref={buttonRef}>
          {intervalId ? "stop" : "start"}
        </button>
        <div>
          Current tIME is: {minutes} : {seconds}
        </div>
      </div> */}
    </>
  );
}
