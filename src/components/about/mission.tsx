import { FC } from "react";

interface IMission {
  missionStatement: string;
}

const Mission: FC<IMission> = ({ missionStatement }) => {
  return (
    <div
      className={
        "flex flex-col text-white bg-primary-500 p-10 h-full md:h-[18rem] lg:h-[12rem]"
      }
    >
      <p className="uppercase text-xl font-bold mb-8">Our Mission</p>
      <p className="text-base">{missionStatement}</p>
    </div>
  );
};

export default Mission;
