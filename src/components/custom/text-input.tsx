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
    <div>
      <div className="relative w-full min-w-[200px] h-16">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {title}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={name}
          value={value}
          type={type}
          placeholder={placeholder}
          {...rest}
        />
        <p className="text-sm text-red-400">{error}</p>
      </div>
    </div>
  );
};

export default TextInput;
