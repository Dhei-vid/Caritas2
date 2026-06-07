import { Globe, Droplets, House, BatteryPlus } from "lucide-react";
import { projects, corporateCharity } from "@/common/projects";

const ServicesBanner = () => {
  const allProjects = [...projects, ...corporateCharity];
  const communitiesReached = new Set(allProjects.map((p) => p.community)).size;
  const waterCount = allProjects.filter((p) => p.category === "water").length;
  const buildingCount = allProjects.filter((p) => p.category === "building").length;
  const healthCount = allProjects.filter((p) => p.category === "health").length;

  const services = [
    { id: 1, title: "Communities Reached", Icon: Globe, number: communitiesReached },
    { id: 2, title: "Water Projects", Icon: Droplets, number: waterCount },
    { id: 3, title: "Building Projects", Icon: House, number: buildingCount },
    { id: 4, title: "Health Initiatives", Icon: BatteryPlus, number: healthCount },
  ].filter((s) => s.number > 0);

  const gridCols: Record<number, string> = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  };
  const colClass = gridCols[services.length] ?? "grid-cols-2 md:grid-cols-4";

  return (
    <div
      className={`bg-cover bg-center bg-no-repeat bg-[url("@/assets/images/bg_image.png")] bg-primary-500 grid ${colClass} gap-1 px-5 py-16 md:px-12`}
    >
      {services.map(({ Icon, title, id, number }) => (
        <div key={id} className="flex items-center flex-col gap-3 py-4">
          <Icon className="text-gold" size={44} />
          <p className="text-white font-black text-4xl md:text-5xl">{number}+</p>
          <p className="text-accent-100 text-center text-sm md:text-base tracking-wide uppercase">
            {title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServicesBanner;
