import { ReactNode } from "react";
import { Link } from "react-router-dom";
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
          <a className="hover:text-black " href={linkDirection}>
            {icon}
          </a>
        </li>
      ) : (
        <li>
          {/* <a href={`/${linkDirection}`}>{title}</a> */}
          <Link to={linkDirection}>{title}</Link>
        </li>
      )}
    </div>
  );
}
