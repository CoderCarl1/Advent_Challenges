import { Link } from "remix";
import SkipLink from "./SkipLink";
export default function Header() {
  return (
    <header className="header">
      <SkipLink />
      <h1>Challenge Apps</h1>
      <nav className="header__nav" aria-label="Primary navigation">
        <ul className="challenge_list">
          <li>
            <Link to="/pomodoro">Pomodoro Timer</Link>
          </li>
          <li>
            <Link to="/pomodoro">Pomodoro Timer</Link>
          </li>
          <li>
            <Link to="/pomodoro">Pomodoro Timer</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
