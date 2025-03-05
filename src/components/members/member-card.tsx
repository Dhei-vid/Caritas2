import { FC } from "react";
import { IMembers } from "@/common/types";
import MembersDetails from "./members-details";

interface IMemberCard {
  data: IMembers;
}

const MemberCard: FC<IMemberCard> = ({ data }) => {
  return (
    <div className="static drop-shadow-lg rounded-md md:mb-[3rem] mb-[1rem]">
      <div className={"static"}>
        <img
          src={data.img}
          alt={data.imgDescription}
          className={"rounded-t-md object-cover object-top w-full h-[25rem]"}
        />
        <MembersDetails data={data} />
      </div>
      <div className="flex flex-col gap-2 text-center p-2 bg-white drop-shadow-lg rounded-b-md">
        <h2 className="text-2xl text-primary font-bold">{data.name}</h2>
        <p className="uppercase font-light">{data.profession}</p>
      </div>
    </div>
  );
};

export default MemberCard;
