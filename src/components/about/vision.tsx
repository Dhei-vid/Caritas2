import { FC } from "react";

interface IVision {
  visionStatement: string;
}

const Vision: FC<IVision> = ({ visionStatement }) => {
  return (
    <div
      className={
        "flex flex-col p-10 border-[1px] border-primary-500 h-full md:h-[18rem] lg:h-[12rem]"
      }
    >
      <p className="uppercase text-xl text-primary-500 font-bold mb-8">
        Our Vision
      </p>
      <p className="text-base">{visionStatement}</p>
    </div>
  );
};

export default Vision;
