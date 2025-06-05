import { FC } from "react";
import { CircleDotDashed, CircleCheckBig, MapPin } from "lucide-react";
import CustomButton from "../custom/button";

interface IProjectCard {
  title?: string;
  description?: string;
  cover?: string | null;
  inProgress?: boolean;
  location?: string;
  isHome: boolean;
}

const ProjectCard: FC<IProjectCard> = ({
  title,
  description,
  cover,
  inProgress,
  location,
  isHome,
}) => {
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
            src={cover ?? "/blocks.jpg"}
            alt={title}
            className={"h-[15rem] w-full bg-contain rounded-t-xl"}
          />
        </div>
        <div className="flex flex-col gap-5 py-7 px-4">
          <div className="flex flex-col gap-3">
            <h3 className={"text-lg md:text-xl text-primary-500 font-bold"}>
              {title}
            </h3>
            <p className={"text-base"}>{description}</p>
          </div>
          <div className={"self-baseline mb-0"}>
            {isHome ? (
              <CustomButton title={"Donate"} onClick={() => {}} />
            ) : (
              <div className="flex gap-3">
                <MapPin size={25} color={"#1E514E"} />
                <p className="text-primary font-thin italic">{location}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
