import { FC } from "react";
import { Button } from "../ui/button";

interface IButton {
  title: string;
  onClick: () => void;
  style?: string;
}

const CustomButton: FC<IButton> = ({ title, onClick, style }) => {
  return (
    <Button
      onClick={onClick}
      className={`${style} transition-all duration-150 ease-in-out hover:bg-transparent bg-primary-500 text-accent-100 hover:text-primary-500 cursor-pointer`}
      variant={"outline"}
    >
      <p className={"uppercase font-semibold"}>{title}</p>
    </Button>
  );
};

export default CustomButton;
