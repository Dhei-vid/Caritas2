import MemberCard from "./member-card";
import { useNavigate } from "react-router";
import CustomButton from "../custom/button";
import { membersDataList } from "@/common/constant";
import Label from "@/components/ui/label";

const MembersPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-accent-100 px-5 md:px-20 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <Label label="members" />
          <h2 className="font-black uppercase text-3xl md:text-4xl text-gray-800 leading-tight mt-1">
            The people who make{" "}
            <span className="text-primary-500">Caritas</span> tick.
          </h2>
        </div>
        <p className="text-gray-500 max-w-xs md:text-right text-sm leading-relaxed">
          Dedicated volunteers committed to serving communities, one act of
          kindness at a time.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {membersDataList.slice(0, 3).map((member) => (
          <MemberCard key={member.id} data={member} />
        ))}
      </div>

      <div className="flex justify-center">
        <CustomButton
          title="Meet all members"
          onClick={() => navigate("members")}
          style="p-5 px-8"
        />
      </div>
    </section>
  );
};

export default MembersPreview;
