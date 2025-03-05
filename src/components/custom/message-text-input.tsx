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
    <div>
      <div className="relative w-full min-w-[200px]">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {title}
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={name}
          name={name}
          value={value}
          rows={7}
          cols={40}
          defaultValue={placeholder}
          {...rest}
        />
        <p className="text-sm text-red-400">{error}</p>
      </div>
    </div>
  );
};

export default MessagesTextInput;
