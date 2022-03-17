import { RiExternalLinkLine } from "react-icons/ri";

export function ExternalLink({ href, children }) {
  return (
    <a href={href} data-external target="_blank" rel="noopener noreferrer">
      {children}
      <RiExternalLinkLine />
      <span className="sr-only">Opens in new tab</span>
    </a>
  );
}

export default ExternalLink;
