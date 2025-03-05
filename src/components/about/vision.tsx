import { FC } from "react";

interface IVision {
  visionStatement: string;
}

const Vision: FC<IVision> = ({ visionStatement }) => {
  return (
    <div
      className={
        "flex flex-col p-10 border-[1px] border-primary h-full md:h-[18rem] lg:h-[12rem]"
      }
    >
      <p className="uppercase text-xl text-primary font-bold mb-8">
        Our Vision
      </p>
      <p className="text-base">{visionStatement}</p>
    </div>
  );
};

export default Vision;
