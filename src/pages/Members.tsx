import Label from "@/components/ui/label";
import Members1 from "@/assets/images/members-1.jpg";
import Members2 from "@/assets/images/members-2.jpg";
import Members3 from "@/assets/images/members-3.jpg";
import { ToggleMembers } from "@/components/custom/toggle";

const Members = () => {
  return (
    <div className="md:px-20 px-5 py-12">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
        <div>
          <Label label="members" />
          <h1 className="font-black uppercase text-4xl md:text-5xl pb-4 leading-tight text-gray-800">
            <span className="text-primary-500">Teamwork</span> makes the
            Caritas <span className="text-primary-500">dream</span> work.
          </h1>
          <p className="text-gray-500">
            Meet the dedicated people behind the foundation, committed to
            making a difference one community at a time.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 h-72">
          <img
            className="w-full h-4/5 mt-auto object-cover rounded-xl shadow"
            src={Members1}
            alt="Members"
          />
          <img
            className="w-full h-full object-cover rounded-xl shadow"
            src={Members2}
            alt="Members"
          />
          <img
            className="w-full h-4/5 object-cover rounded-xl shadow"
            src={Members3}
            alt="Members"
          />
        </div>
      </section>

      <ToggleMembers />
    </div>
  );
};

export default Members;
