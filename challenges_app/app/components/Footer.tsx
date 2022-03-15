import { Link } from "remix";

export default function Footer() {
  return (
    <footer>
      <nav aria-label="Secondary navigation">
        <ul className="footer_challenge_list">
          <li>
            <Link to="/pomodoro">Pomodoro Timer</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
