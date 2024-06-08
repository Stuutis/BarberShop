import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  spanText: string;
  errorMessage: string | null;
  submit?: boolean;
  showErrorMessage?: boolean;
}
export function Input({
  spanText,
  errorMessage,
  submit,
  showErrorMessage,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col mb-5">
      <span>{spanText}</span>
      <div className="">
        <input
          {...props}
          className={
            submit
              ? "px-10 py-2 rounded-xl text-white bg-primary-custom"
              : "p-2 rounded-ss-xl text-black w-full"
          }
        />
      </div>
      <div className={showErrorMessage ? "text-red-400 font-bold" : "hidden"}>
        {errorMessage}
      </div>
    </div>
  );
}
