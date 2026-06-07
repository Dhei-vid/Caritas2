import { FC, TextareaHTMLAttributes } from "react";

interface IMessageTextInput
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  title: string;
  name: string;
  error: string | null;
}

const MessagesTextInput: FC<IMessageTextInput> = ({
  title,
  name,
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
      <textarea
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-colors placeholder:text-gray-400 resize-none"
        id={name}
        name={name}
        value={value}
        rows={7}
        placeholder={placeholder}
        {...rest}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default MessagesTextInput;
