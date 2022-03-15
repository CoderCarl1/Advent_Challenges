import ExternalLink from "~/components/ExternalLink";
import styles from "~/styles/index.css";
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export default function Index() {
  return (
    <>
      <h2>Purpose</h2>
      <p className="fs-400">
        The pages found on this site are individual challenges from the{" "}
        <ExternalLink href="https://www.adventofjs.com/">
          Advent of JS
        </ExternalLink>{" "}
        and{" "}
        <ExternalLink href="https://www.adventofcss.com/">
          Advent of CSS
        </ExternalLink>
      </p>
    </>
  );
}
