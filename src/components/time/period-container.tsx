import { ComponentProps } from "react";

interface PeriodContainerProps extends ComponentProps<"input"> {
  period: string;
}

export function PeriodContainer({ period, ...props }: PeriodContainerProps) {
  return (
    <input
      type="button"
      value={period}
      className="p-3 bg-secondary-custom w-full rounded-lg hover:bg-section-custom cursor-pointer"
      {...props}
    />
  );
}
