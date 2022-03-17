import Link from "next/link";

export function PrimaryNavLink({
  handleKeyLI,
  resetTabIndex,
  id,
  link,
  text,
  currentPage,
}) {
  return (
    <li key={id}>
      <Link href={link}>
        <a
          aria-current={currentPage ? "page" : false}
          id={id}
          tabIndex={-1}
          onKeyDown={(event) => handleKeyLI(event)}
          onClick={resetTabIndex}
        >
          {text}
        </a>
      </Link>
    </li>
  );
}

export default PrimaryNavLink;
