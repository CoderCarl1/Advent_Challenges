import { RiExternalLinkLine } from "react-icons/ri";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function ExternalLink({ href, children }: Props) {
  return (
    <a href={href} data-external target="_blank" rel="noopener noreferrer">
      {children}
      <RiExternalLinkLine />
      <span className="sr-only">Opens in new tab</span>
    </a>
  );
}
