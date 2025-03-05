import Label from "@/components/ui/label";
import MemberCard from "@/components/members/member-card";
import { membersDataList } from "@/common/constant";
import Members1 from "@/assets/images/members-1.jpg";
import Members2 from "@/assets/images/members-2.jpg";
import Members3 from "@/assets/images/members-3.jpg";

const Members = () => {
  return (
    <div className={"p-12 md:px-20 px-5"}>
      <section className="grid grid-cols-1 md:grid-cols-2 md:mb-10">
        <div>
          <Label label={`members`} />
          <h1 className="font-bold uppercase text-4xl md:text-5xl pb-3 leading-normal tracking-wide">
            <span className="text-primary">Teamwork </span> makes the caritas{" "}
            <span className="text-primary">dream</span> work.
            <span className="text-primary"></span>
          </h1>
          <p className="font-thin">
            Be part of our journey by keeping tabs on what projects we are
            working on.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 pt-12 md:pt-0">
          <div className="h-3/4 self-center">
            <img
              className="md:w-full w-[100%] md:h-full h-[60%] object-cover rounded-md"
              src={Members1}
              alt="Image 1"
            />
          </div>
          <div>
            <img
              className="md:w-full w-[100%] md:h-full h-[70%] object-cover rounded-md"
              src={Members2}
              alt="Image 2"
            />
          </div>
          <div className="h-3/4 rounded-md self-center">
            <img
              className="md:w-full w-[100%] md:h-full h-[60%] object-cover rounded-md"
              src={Members3}
              alt="Image 3"
            />
          </div>
        </div>
      </section>

      <div>
        <Label label={"the team"} />
      </div>
      <div className={"gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}>
        {membersDataList.map((member) => {
          return (
            <div key={member.id}>
              <MemberCard data={member} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Members;
