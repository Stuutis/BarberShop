import { Link } from "react-router-dom";

interface AgendarButtonProps {
  text: string;
  linkDirection: string;
  haveDirection?: boolean;
}

export function AgendarButton({
  linkDirection,
  text,
  haveDirection,
}: AgendarButtonProps) {
  return (
    <button className="bg-primary-custom px-4 py-2 rounded-3xl hover:bg-secondary-custom">
      {haveDirection ? (
        <Link to={linkDirection}>{text}</Link>
      ) : (
        <a href={linkDirection}>{text}</a>
      )}
    </button>
  );
}
