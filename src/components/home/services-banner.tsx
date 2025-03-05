import { Globe, Droplets, House, BatteryPlus } from "lucide-react";

const ServicesBanner = () => {
  const services = [
    { id: 1, title: "Communities Reached", Icon: Globe, number: 10 },
    { id: 2, title: "Water Projects", Icon: Droplets, number: 3 },
    { id: 3, title: "Building Projects", Icon: House, number: 5 },
    { id: 4, title: "Health", Icon: BatteryPlus, number: 40 },
  ];
  return (
    <div
      className={`bg-cover bg-center bg-no-repeat bg-[url("@/assets/images/bg_image.png")] bg-primary-500 flex flex-wrap gap-5 justify-evenly px-5 py-12 md:px-12`}
    >
      {services.map(({ Icon, title, id, number }) => (
        <div key={id} className="flex items-center flex-col gap-3">
          <Icon className="text-white" size={40} />
          <p className="text-white font-bold text-lg md:text-xl">{number}</p>
          <p className="text-white text-center text-base md:text-lg">{title}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesBanner;
