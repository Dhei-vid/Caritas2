import MemberCard from "./member-card";
import { useNavigate } from "react-router";
import CustomButton from "../custom/button";
import { membersDataList } from "@/common/constant";
import SectionTitle from "../home/section-title.";

const MembersPreview = () => {
  const navigate = useNavigate();

  return (
    <div className={"flex flex-col gap-5 items-center justify-center"}>
      <SectionTitle
        title={"MEMBERS"}
        subTitle={"The people who make Caritas tick."}
      />

      <div
        className={`grid md:grid-cols-3 gap-3 justify-center px-12 md:mb-12 mb-4 md:[&>*:nth-child(2)]:translate-y-5 md:[&>*:nth-child(3)]:translate-y-10`}
      >
        {membersDataList.slice(0, 3).map((members) => {
          return (
            <div key={members.id}>
              <MemberCard data={members} />
            </div>
          );
        })}
      </div>

      <CustomButton title={"see more"} onClick={() => navigate("members")} />
    </div>
  );
};

export default MembersPreview;
