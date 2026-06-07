import ProjectCard from "./project-card";
import { useNavigate } from "react-router";
import CustomButton from "../custom/button";
import Label from "@/components/ui/label";
import { projects } from "@/common/projects";

const ProjectPreview = () => {
  const navigate = useNavigate();
  const ongoingProjects = projects.filter((project) => project.inProgress === true);

  return (
    <section className="bg-gray-50 px-5 md:px-20 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <Label label="projects" />
          <h2 className="font-black uppercase text-3xl md:text-4xl text-gray-800 leading-tight mt-1">
            We engage in{" "}
            <span className="text-primary-500">impactful</span> projects every
            year.
          </h2>
        </div>
        <p className="text-gray-500 max-w-xs md:text-right text-sm leading-relaxed">
          A wide range of projects that touch lives across communities.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {ongoingProjects
          .slice(0, 3)
          .map(({ id, header, image, description, location, community, category, inProgress, amount }) => (
            <ProjectCard
              key={id}
              cover={image ?? "project_default.jpg"}
              title={header}
              description={description}
              inProgress={inProgress}
              location={location}
              community={community}
              category={category}
              isHome={true}
              amount={amount ?? 0}
            />
          ))}
      </div>

      <div className="flex justify-center">
        <CustomButton
          title="See all projects"
          onClick={() => navigate("projects")}
          style="p-5 px-8"
        />
      </div>
    </section>
  );
};

export default ProjectPreview;
