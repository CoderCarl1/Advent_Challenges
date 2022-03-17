import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <nav aria-label="Secondary navigation">
        <ul className="footer_challenge_list">
          <li>
            <Link href="/pomodoro">Pomodoro Timer</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
