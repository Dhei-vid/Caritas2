import Label from "@/components/ui/label";
import ProjectCard from "@/components/project/project-card";
import { ongoingProjects, completedProjects } from "@/common/constant";

const Projects = () => {
  return (
    <div className={"p-12 md:px-20 px-5"}>
      <section className="grid md:grid-cols-2">
        <div>
          <Label label={`projects`} />
          <h1
            className={
              "font-bold uppercase md:text-5xl text-4xl pb-3 leading-normal tracking-wide"
            }
          >
            Every <span className="text-primary-500">year</span> we engage in
            various<span className="text-primary-500"> projects</span>
          </h1>
          <p className={"text-gray-500 font-thin"}>
            We have been giving assistance to parishes, priest's and religious
            since 2004. And we continue to do so today.
          </p>
        </div>
        <div></div>
      </section>

      <section className="pt-12">
        <Label label={`ongoing projects`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5">
          {ongoingProjects.map((project) => {
            return (
              <div key={project.id}>
                <ProjectCard
                  title={project.header}
                  description={project.description}
                  cover={project.image}
                  inProgress={project.inProgress}
                  location={project.location}
                  isHome={false}
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className="pt-12">
        <Label label={`completed projects`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5">
          {completedProjects.map((project) => {
            return (
              <div key={project.id}>
                <ProjectCard
                  title={project?.header ?? ""}
                  description={project?.description ?? ""}
                  cover={project?.image ?? undefined}
                  inProgress={project.inProgress}
                  location={project.location}
                  isHome={false}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Projects;
