import CustomButton from "../custom/button";
import { useNavigate } from "react-router";

const AboutUsPreview = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("aboutus");
  };

  return (
    <div className="flex px-5 md:px-20 py-12 gap-3 justify-center">
      <div className="flex flex-col gap-8 px-5 md:flex-1 md:px-12 justify-center self-center gap-5">
        <h2 className="text-xl md:text-3xl font-bold uppercase text-primary-500">
          Who are we?
        </h2>
        <div>
          <p className="text-base md:text-lg">
            <span className="text-primary-500 font-black">
              Caritas Christian Elders Foundation {""}
            </span>
            is a non-profit and nonpolitical organization established to
            propagate and defend the catholic faith through education of
            Christian youths on the dangers of violence. The benefits of
            peacebuilding and conflict transformation and eschewing things
            incidental to the promotion of the mission and vision of the
            organization.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-3xl font-bold pb-3 uppercase text-primary-500">
            Mission
          </h2>
          <p className={"text-lg"}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-3xl font-bold pb-3 uppercase text-primary-500">
            Vision
          </h2>
          <p className={"text-lg"}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>

        <CustomButton
          title={"Click to learn more"}
          onClick={handleNavigation}
          style={"p-5 md:p-6"}
        />
      </div>

      <div className=" hidden md:flex md:flex-1 justify-center self-center">
        <img
          src={
            "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1885&q=80"
          }
          className="h-3/4 w-9/12 rounded-lg"
        />
      </div>
    </div>
  );
};

export default AboutUsPreview;
