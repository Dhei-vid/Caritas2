import CustomButton from "../custom/button";
import { useNavigate } from "react-router";
import Label from "@/components/ui/label";

const AboutUsPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="flex px-5 md:px-20 py-20 gap-12 items-center">
      <div className="flex flex-col gap-6 md:flex-1 justify-center">
        <Label label="who we are" />
        <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-800 leading-tight">
          A foundation built on{" "}
          <span className="text-primary-500">faith</span> and{" "}
          <span className="text-primary-500">service</span>.
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          <span className="text-primary-500 font-bold">
            Caritas Christian Elders Foundation{" "}
          </span>
          is a non-profit and non-political charity organization etablished to propagate and defend the Catholic Faith. Members are a group of lay faithful, inspired by Tradition, Scripture, and Catholic social teachings, to assist needy parishes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border-l-4 border-primary-500 pl-4 py-1">
            <h3 className="text-xs font-bold uppercase text-primary-500 mb-2 tracking-widest">
              Mission
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To provide core values of Catholic Education and mission to where the Catholic Faith is non-existent, and to reach out to the poor, the marginalized, and the vulnerable.
            </p>
          </div>

          <div className="border-l-4 border-primary-100 pl-4 py-1">
            <h3 className="text-xs font-bold uppercase text-primary-500 mb-2 tracking-widest">
              Vision
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To be the global leading lay Catholic charity organization, supporting emergency relief, health, safety, and human capacity development.
            </p>
          </div>
        </div>

        <div>
          <CustomButton
            title="Learn more about us"
            onClick={() => navigate("aboutus")}
            style="p-5"
          />
        </div>
      </div>

      <div className="hidden md:flex md:flex-1 justify-center">
        <img
          src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1885&q=80"
          className="w-10/12 rounded-2xl shadow-lg object-cover aspect-[4/5]"
          alt="Community members"
        />
      </div>
    </section>
  );
};

export default AboutUsPreview;
