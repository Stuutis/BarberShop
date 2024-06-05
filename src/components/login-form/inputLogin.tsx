interface InputLoginProps {
  spanText?: string;
  inputType: string;
  inputPlaceholder?: string;
  required?: boolean;
  value?: string;
  id: string;
  name: string;
}

export function InputLogin({
  inputType,
  spanText,
  inputPlaceholder,
  required,
  value,
  id,
  name,
}: InputLoginProps) {
  return (
    <div className="flex flex-col gap-1 ">
      <span>{spanText}</span>
      <input
        className={
          inputType === "submit"
            ? "p-2 rounded-xl text-white bg-primary-custom"
            : " p-2 rounded-ss-xl text-black"
        }
        type={inputType}
        placeholder={inputPlaceholder}
        required={required}
        value={value}
        id={id}
        name={name}
      />
    </div>
  );
}
