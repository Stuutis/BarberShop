import { ComponentProps } from "react";

interface TimeContainerProps extends ComponentProps<"input"> {
  time: string;
}

export function TimeContainer({ time, ...props }: TimeContainerProps) {
  return (
    <input
      type="button"
      value={time}
      className="p-3 bg-secondary-custom w-full rounded-lg hover:bg-section-custom cursor-pointer"
      {...props}
    />
  );
}
