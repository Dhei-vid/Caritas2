import CustomButton from "../custom/button";
import { useNavigate } from "react-router";
import { ChevronDown } from "lucide-react";

const HomeBanner = () => {
  const navigate = useNavigate();

  return (
    <div
      className={`bg-primary-500 bg-[url("@/assets/images/bg_image.png")] bg-cover bg-center bg-no-repeat min-h-[88vh] flex flex-col items-center justify-center text-center px-6 py-20 relative`}
    >
      <div className="flex flex-col text-5xl md:text-8xl font-black uppercase text-white leading-tight mb-6">
      <span className="">
        Caritas Christian{" "}
      </span>
        <span className="text-gold tracking-wider">Elders Foundation</span>
      </div>
      <p className="text-accent-100 max-w-2xl text-lg md:text-xl font-semibold mb-10">
        We are committed to promoting the Catholic Faith through assisting in the development of needy parishes and propagating the same faith where it is non-existent.
      </p>
      <CustomButton
        title="learn more about us"
        onClick={() => navigate("aboutus")}
        style="p-5 px-8"
      />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/50" size={32} />
      </div>
    </div>
  );
};

export default HomeBanner;
