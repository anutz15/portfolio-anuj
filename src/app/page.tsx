import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="pb-20">
      {/* HERO SECTION */}
      <Hero />

      {/* FEATURED PROJECTS */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold mb-4">Featured Projects</h2>
        <p className="text-gray-500 mb-10">
          A quick look at some of my best technical work across AI, software engineering, and research.
        </p>

        {/* Show only 3 projects on the homepage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
