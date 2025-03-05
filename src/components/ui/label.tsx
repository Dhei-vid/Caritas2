import { FC } from "react";

interface ILabel {
  label: string;
  style?: string;
}

const Label: FC<ILabel> = ({ label, style }) => {
  return (
    <div className={"py-5"}>
      <p className={`text-primary-500 text-xl font-black uppercase ${style}`}>
        {label}
      </p>
    </div>
  );
};

export default Label;
