import Label from "@/components/ui/label";
import ProjectCard from "@/components/project/project-card";
import { projects } from "@/common/projects";

const Projects = () => {
  const ongoingProjects = projects.filter((p) => p.inProgress === true);
  const completedProjects = projects.filter((p) => p.inProgress === false);

  return (
    <div className="md:px-20 px-5 py-12">
      {/* Hero */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-16">
        <div>
          <Label label="projects" />
          <h1 className="font-black uppercase text-4xl md:text-5xl pb-4 leading-tight text-gray-800">
            Every <span className="text-primary-500">year</span> we engage in
            various <span className="text-primary-500">projects</span>
          </h1>
          <p className="text-gray-500">
            Be part of our journey by keeping tabs on what projects we are
            working on.
          </p>
        </div>
        <div className="hidden md:flex gap-5 justify-end">
          <div className="bg-accent-100 rounded-2xl p-8 text-center flex-1 max-w-[180px]">
            <p className="text-5xl font-black text-primary-500">
              {ongoingProjects.length}
            </p>
            <p className="text-sm text-gray-500 mt-2 uppercase tracking-wide font-semibold">
              Ongoing
            </p>
          </div>
          <div className="bg-primary-500 rounded-2xl p-8 text-center flex-1 max-w-[180px]">
            <p className="text-5xl font-black text-white">
              {completedProjects.length}
            </p>
            <p className="text-sm text-accent-100 mt-2 uppercase tracking-wide font-semibold">
              Completed
            </p>
          </div>
        </div>
      </section>

      {/* Ongoing */}
      <section className="mb-14">
        <div className="flex items-center gap-4 mb-6">
          <Label label="ongoing projects" />
          <div className="flex-1 h-px bg-gray-100" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ongoingProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.header}
              description={project.description}
              cover={project?.image ?? "project_default.jpg"}
              inProgress={project.inProgress}
              location={project.location}
              community={project.community}
              category={project.category}
              isHome={false}
              amount={project?.amount ?? 0}
            />
          ))}
        </div>
      </section>

      {/* Completed */}
      <section className="mb-14">
        <div className="flex items-center gap-4 mb-6">
          <Label label="completed projects" />
          <div className="flex-1 h-px bg-gray-100" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.header}
              description={project.description}
              cover={project?.image ?? "project_default.jpg"}
              inProgress={project.inProgress}
              location={project.location}
              community={project.community}
              category={project.category}
              amount={project?.amount ?? 0}
              isHome={false}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
