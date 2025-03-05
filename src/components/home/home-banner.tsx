import CustomButton from "../custom/button";
import { useNavigate } from "react-router";

const HomeBanner = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("aboutus");
  };

  return (
    <div
      className={`bg-primary-500 bg-[url("@/assets/images/bg_image.png")] bg-cover bg-center bg-no-repeat`}
    >
      <div className="px-5 py-12 md:px-12 flex flex-col text-center place-items-center">
        <p
          className={
            "text-accent-100 my-2 mb-5 mx-5 md:mx-[10rem] lg:mx-[20rem] xl:mx-[22rem] text-base md:text-xl font-bold"
          }
        >
          We are committed to helping communities in need become stable and
          self-sustaining.
        </p>
        <CustomButton
          title={"learn more about us"}
          onClick={handleNavigation}
          style={"p-5"}
        />
      </div>
    </div>
  );
};

export default HomeBanner;
