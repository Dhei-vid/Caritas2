import { FC } from "react";
import { CircleDotDashed, CircleCheckBig, MapPin } from "lucide-react";
import CustomButton from "../custom/button";
import { ProjectCategory } from "@/common/types";

interface IProjectCard {
  title: string;
  description: string;
  cover: string;
  inProgress: boolean;
  location: string;
  community: string;
  category: ProjectCategory;
  isHome: boolean;
  amount?: number;
}

const categoryConfig: Record<ProjectCategory, { label: string; bg: string; text: string }> = {
  building: { label: "Building", bg: "bg-amber-100", text: "text-amber-700" },
  water: { label: "Water", bg: "bg-blue-100", text: "text-blue-700" },
  health: { label: "Health", bg: "bg-green-100", text: "text-green-700" },
  education: { label: "Education", bg: "bg-purple-100", text: "text-purple-700" },
};

const ProjectCard: FC<IProjectCard> = ({
  title,
  description,
  cover,
  inProgress,
  location,
  community,
  category,
  isHome,
  amount,
}) => {
  const cat = categoryConfig[category];

  return (
    <div className={"bg-white border-[0.5px] rounded-xl h-full"}>
      <div className="relative">
        {!isHome && (
          <div
            className={
              "absolute z-10 bg-white top-[-10px] right-[-10px] rounded-full p-3"
            }
          >
            {inProgress ? (
              <CircleDotDashed className={"text-primary-500"} size={35} />
            ) : (
              <CircleCheckBig className={"text-primary-500"} size={35} />
            )}
          </div>
        )}
        <div>
          <img
            src={cover}
            alt={title}
            className={"h-[15rem] w-full bg-contain rounded-t-xl"}
          />
        </div>
        <div className="flex flex-col gap-5 py-7 px-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full ${cat.bg} ${cat.text}`}>
                {cat.label}
              </span>
              <span className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                <MapPin size={10} />
                {community}
              </span>
            </div>
            <h3 className={"text-lg md:text-xl text-primary-500 font-bold"}>
              {title}
            </h3>
            <p className={"text-base"}>{description}</p>
          </div>
          <div>
            {inProgress ? (
              <div>
                <p className={"text-sm"}>
                  Amount spent so far:{" "}
                  <span className={"text-lg font-bold text-primary-500"}>
                    ₦{amount?.toLocaleString()}
                  </span>
                </p>
              </div>
            ) : (
              <p className={"text-sm"}>
                Amount:{" "}
                <span className={"text-lg font-bold text-primary-500"}>
                  ₦{amount?.toLocaleString()}
                </span>
              </p>
            )}
          </div>
          <div>
            {isHome ? (
              <CustomButton title={"Donate"} onClick={() => {}} />
            ) : (
              <div className="flex gap-1 items-center">
                <MapPin size={15} color={"#1E514E"} />
                <p className="text-sm text-primary-500 font-thin italic">
                  {location}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
