import { ComponentProps } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps extends ComponentProps<"input"> {
  spanText: string;
  isPasswordShow: boolean;
  hasError: boolean;
  errorMessage: string | null;
  showErrorMessage?: boolean;
  showPasswordFunction?: () => void;
  hidePasswordFunction?: () => void;
}

export function PasswordInput({
  spanText,
  isPasswordShow,
  hasError,
  errorMessage,
  showErrorMessage,
  showPasswordFunction,
  hidePasswordFunction,
  ...props
}: PasswordInputProps) {
  return (
    <div className="mb-5 relative">
      <span>{spanText}</span>
      <input
        className="p-2 rounded-ss-xl text-black w-full"
        type={isPasswordShow ? "text" : "password"}
        {...props}
      />
      <div className={hasError ? "hidden" : "text-red-400 block font-bold"}>
        {errorMessage}
      </div>

      <Eye
        cursor="pointer"
        onClick={showPasswordFunction}
        className={
          isPasswordShow ? "hidden" : "absolute right-2 top-8 text-black"
        }
      />
      <EyeOff
        cursor="pointer"
        onClick={hidePasswordFunction}
        className={
          isPasswordShow ? "absolute right-2 top-8 text-black" : "hidden"
        }
      />
    </div>
  );
}
