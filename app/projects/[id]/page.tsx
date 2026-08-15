import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectDetails({
  params,
}: ProjectPageProps) {
  const { id } = await params;

  const project = projects.find(
    (p) => p.id === Number(id)
  );
  const relatedProjects = projects.filter(
  (p) => p.id !== project?.id
);

  if (!project) {
    return (
      <main className="min-h-screen bg-slate-950 p-10 text-white">
        <h1>Project not found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <Image
          src={project.image}
          alt={project.title}
          width={900}
          height={500}
          className="mb-8 w-full rounded-xl object-cover"
        />

        <h1 className="text-4xl font-bold">
          {project.title}
        </h1>

        <span
  className={`mt-4 inline-block rounded-full px-4 py-2 text-sm font-medium text-white ${
    project.status === "Completed"
      ? "bg-green-600"
      : project.status === "In Progress"
        ? "bg-yellow-600"
        : "bg-slate-600"
  }`}
>
  {project.status}
</span>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
  <div className="rounded-xl border border-slate-700 bg-slate-800 p-5">
    <p className="text-sm text-slate-400">
      Role
    </p>
    <p className="mt-2 font-semibold text-white">
      {project.role}
    </p>
  </div>

  <div className="rounded-xl border border-slate-700 bg-slate-800 p-5">
    <p className="text-sm text-slate-400">
      Duration
    </p>
    <p className="mt-2 font-semibold text-white">
      {project.duration}
    </p>
  </div>

  <div className="rounded-xl border border-slate-700 bg-slate-800 p-5">
    <p className="text-sm text-slate-400">
      Client
    </p>
    <p className="mt-2 font-semibold text-white">
      {project.client}
    </p>
  </div>
</div>

        <p className="mt-8 text-lg text-slate-300">
          {project.description}
        </p>

        <div className="mt-12 space-y-8">
  <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
    <h2 className="text-2xl font-bold text-white">
      Challenge
    </h2>
    <p className="mt-3 leading-7 text-slate-300">
      {project.challenge}
    </p>
  </div>

  <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
    <h2 className="text-2xl font-bold text-white">
      Solution
    </h2>
    <p className="mt-3 leading-7 text-slate-300">
      {project.solution}
    </p>
  </div>

  <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
    <h2 className="text-2xl font-bold text-white">
      Result
    </h2>
    <p className="mt-3 leading-7 text-slate-300">
      {project.result}
    </p>
  </div>
</div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-600 px-4 py-2 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-lg bg-slate-700 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-slate-600 hover:shadow-lg"
  >
    🔗 View Source →
  </a>

  <a
    href={project.demo}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg"
  >
    🌐 Live Demo →
  </a>
</div>
        <div className="mt-16">
  <h2 className="mb-8 text-3xl font-bold text-white">
    Related Projects
  </h2>

  <div className="grid gap-8 md:grid-cols-2">
    {relatedProjects.map((related) => (
      <ProjectCard
        key={related.id}
        project={related}
      />
    ))}
  </div>
</div>
      </div>
    </main>
  );
}
           
