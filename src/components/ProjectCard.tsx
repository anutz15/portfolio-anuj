import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  link: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white dark:bg-[#041226] rounded-lg p-5 shadow-soft hover:shadow-lg transition cursor-pointer">
      {project.image && (
        <div className="rounded-md overflow-hidden h-40 mb-4">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
      )}

      <h3 className="font-semibold text-lg">{project.title}</h3>

      <p className="text-gray-500 text-sm mt-2">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs bg-slate-100 dark:bg-[#0B1720] rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 text-right">
        <a href={project.link} className="text-primary text-sm">
          View →
        </a>
      </div>
    </div>
  );
}
