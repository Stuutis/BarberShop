import { ComponentProps } from "react";

interface ServiceProps extends ComponentProps<"div"> {
  imageSrc: string;
  altText: string;
  serviceText: string;
  onClick: () => void;
}

export function Service({
  imageSrc,
  altText,
  serviceText,
  onClick,
  ...props
}: ServiceProps) {
  return (
    <div onClick={onClick}>
      <div className="max-w-[30vw] flex flex-col " {...props}>
        <img className="" src={imageSrc} alt={altText} />
      </div>
      <p className="text-center mb-2 mt-2">{serviceText}</p>
    </div>
  );
}
