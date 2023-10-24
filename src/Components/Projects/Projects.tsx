import { useState } from "react";
import { projects } from "../../constants";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900" id="projects">
            Projects
          </h2>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {displayedProjects.map((project) => (
              <div key={project.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={project.href} target="blank">
                    <span className="absolute inset-0" />
                    {project.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900 mb-7  ">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="mt-4 px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-slate-800 hover:bg-slate-900 animate-bounce"
            >
              Show more projects...
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
