import { ReactNode } from "react";

interface NavigationLinkProps {
  linkDirection: string;
  title?: string;
  hasIcon?: boolean;
  icon?: ReactNode;
}

export function NavigationLink({
  linkDirection,
  title,
  icon,
  hasIcon,
}: NavigationLinkProps) {
  return (
    <div>
      {hasIcon ? (
        <li>
          <a className="hover:text-black" href={linkDirection}>
            {icon}
          </a>
        </li>
      ) : (
        <li>
          <a className="hover:text-black" href={linkDirection}>
            {title}
          </a>
        </li>
      )}
    </div>
  );
}
