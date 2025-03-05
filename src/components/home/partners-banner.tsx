import SectionTitle from "./section-title.";

const partners = [
  {
    id: 1,
    logo: "https://img.icons8.com/color/96/google-logo.png",
    name: "Google",
  },
  {
    id: 2,
    logo: "https://img.icons8.com/ios-filled/96/adb5bd/mac-os.png",
    name: "Apple",
  },
  {
    id: 3,
    logo: "https://img.icons8.com/color/96/microsoft.png",
    name: "Microsoft",
  },
  {
    id: 4,
    logo: "https://img.icons8.com/color/96/bmw--v1.png",
    name: "BMW",
  },
];

const PartnersBanner = () => {
  return (
    <div className={"md:px-[10rem] px-4 h-[50vh]"}>
      <SectionTitle title={"OUR PARTNERS"} />
      <div className="flex flex-row justify-between content-center md:px-[5rem]">
        {partners.map((item) => {
          return (
            <div key={item.id}>
              <img
                src={item.logo}
                alt={`${item.name} logo`}
                className="cursor-pointer hover:scale-150 duration-150 w-12 h-12 transition duration-300 ease-in-out"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PartnersBanner;
