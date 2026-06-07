import { FC, InputHTMLAttributes } from "react";

interface ITextInput extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  name: string;
  type: string;
  error: string | null;
}

const TextInput: FC<ITextInput> = ({
  title,
  name,
  type,
  placeholder,
  value,
  error,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-semibold text-gray-700" htmlFor={name}>
        {title}
      </label>
      <input
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-colors placeholder:text-gray-400"
        id={name}
        value={value}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default TextInput;
