import { ReactNode } from "react";

interface ContactLinkProps {
  icon: ReactNode;
  linkDirection: string;
  text: string;
}

export function ContactLink({ icon, linkDirection, text }: ContactLinkProps) {
  return (
    <li>
      <a href={linkDirection} className="flex gap-2 items-center">
        {icon}
        {text}
      </a>
    </li>
  );
}
