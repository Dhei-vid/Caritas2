import { FC } from "react";

interface ILabel {
  label: string;
  style?: string;
}

const Label: FC<ILabel> = ({ label, style }) => {
  return (
    <div className="py-3 flex items-center gap-2">
      <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
      <p
        className={`text-primary-500 text-xs font-bold uppercase tracking-widest ${style}`}
      >
        {label}
      </p>
    </div>
  );
};

export default Label;
