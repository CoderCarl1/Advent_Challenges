import React, { useState, useEffect } from "react";
import styles from "~/styles/pomodoro.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

function formatTime(num: number | string): string {
  num = String(num);
  if (num.length === 1) num = `0${num}`;

  return num;
}

export default function Index() {
  const [minutes, setMinutes] = useState<string>("00");
  const [seconds, setSeconds] = useState<string>("00");
  const [editingMin, setEditingMin] = useState(false);
  const [editingSec, setEditingSec] = useState(false);

  const handleTimeSet = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    let num = formatTime(e.currentTarget.value);

    if (e.currentTarget.name === "minutes") {
      setMinutes(num);
    }
    if (e.currentTarget.name === "seconds") {
      setSeconds(num);
    }
  };

  return (
    <>
      <h1>Pomodoro</h1>

      <div className="time">
        <label htmlFor="minutes" aria-label="minutes">
          <span className="sr-only">Minutes</span>
          <input value={minutes} name="minutes"></input>
        </label>
        :
        <label htmlFor="seconds" aria-label="seconds">
          <span className="sr-only">Seconds</span>
          <input
            name="seconds"
            value={seconds}
            onChange={(e) => handleTimeSet(e)}
          ></input>
        </label>
      </div>
    </>
  );
}
