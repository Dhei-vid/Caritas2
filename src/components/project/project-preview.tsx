import ProjectCard from "./project-card";
import { useNavigate } from "react-router";
import CustomButton from "../custom/button";
import SectionTitle from "../home/section-title.";

import { ongoingProjects } from "@/common/constant";

const ProjectPreview = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("projects");
  };

  return (
    <div className={"flex flex-col gap-5 items-center justify-center"}>
      <SectionTitle
        title={"PROJECTS"}
        subTitle={"We are engaged in a wide range of projects."}
      />

      <div className="flex md:flex-nowrap flex-wrap gap-7 px-5 justify-center md:[&>*:nth-child(2)]:translate-y-5">
        {ongoingProjects
          .slice(0, 3)
          .map(({ id, header, image, description, location, inProgress }) => (
            <ProjectCard
              key={id}
              cover={image}
              title={header}
              description={description}
              inProgress={inProgress}
              location={location}
              isHome={true}
            />
          ))}
      </div>

      <div className={"py-12"}>
        <CustomButton
          title={"See More"}
          onClick={handleNavigation}
          style={"p-5"}
        />
      </div>
    </div>
  );
};

export default ProjectPreview;
