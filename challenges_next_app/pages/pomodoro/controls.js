import { useState } from "react";

export default function Pomodoro_Controls({ work, setWork, break, setBreak }) {
  const [focused, setFocused] = useState(null);
  return (
    <div>
      <label htmlFor="work" aria-label="work">
        Work Time
        <input
          name="work"
          value={work}
          type="number"
          className={
            focused
              ? "pomodoro__input__work pomodoro__input__focused"
              : "pomodoro__input__work"
          }
          onChange={(e) => setWork(e.target.value)}
          onFocus={(e) => setFocused(e.target)}
          onBlur={() => setFocused(null)}
          onKeyDown={(e) => handleKeyDown(e)}
          maxLength="2"
          // onClick={(e) => e.target.setSelectionRange(0, e.target.value.length)}
        />
      </label>
    </div>
  );
}
