import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
    const statusClass =
  project.status === "Completed"
    ? "bg-green-600"
    : project.status === "In Progress"
      ? "bg-yellow-600"
      : "bg-slate-600";
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-800 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
      <div className="overflow-hidden">
  <Image
    src={project.image}
    alt={project.title}
    width={500}
    height={300}
    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
  />
</div>

      <div className="flex flex-1 flex-col p-6">
      <h3 className="text-2xl font-bold text-white">
        {project.title}
      </h3>

      <span className={`mt-3 inline-block rounded-full px-3 py-1 text-sm font-medium text-white ${statusClass}`}>
        {project.status}
      </span>

      <p className="mt-4 text-slate-300">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-sm text-blue-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <Link
  href={`/projects/${project.id}`}
  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg"
>
  View Project
</Link>
      </div>
      </div>
    </div>
  );
}
