import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";

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
console.log(relatedProjects);

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

        <span className="mt-4 inline-block rounded-full bg-green-600 px-4 py-2 text-sm">
          {project.status}
        </span>

        <p className="mt-8 text-lg text-slate-300">
          {project.description}
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
  <div className="rounded-lg bg-slate-800 p-4">
    <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-400">
      Role
    </h3>
    <p className="mt-2 text-white">
      {project.role}
    </p>
  </div>

  <div className="rounded-lg bg-slate-800 p-4">
    <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-400">
      Duration
    </h3>
    <p className="mt-2 text-white">
      {project.duration}
    </p>
  </div>

  <div className="rounded-lg bg-slate-800 p-4">
    <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-400">
      Client
    </h3>
    <p className="mt-2 text-white">
      {project.client}
    </p>
  </div>
</div>
        <div className="mt-8 space-y-6">
  <div>
    <h2 className="text-2xl font-semibold text-white">
      Challenge
    </h2>

    <p className="mt-2 text-slate-300">
      {project.challenge}
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-semibold text-white">
      Solution
    </h2>

    <p className="mt-2 text-slate-300">
      {project.solution}
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-semibold text-white">
      Result
    </h2>

    <p className="mt-2 text-slate-300">
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
            className="rounded-lg bg-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-600"
          >
            🔗 View Source
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            🌐 Live Demo
          </a>
        </div>
        <div className="mt-16">
  <h2 className="mb-8 text-3xl font-bold text-white">
    Related Projects
  </h2>

  <div className="grid gap-6 md:grid-cols-2">
    {relatedProjects.map((related) => (
      <Link
        key={related.id}
        href={`/projects/${related.id}`}
        className="rounded-xl border border-slate-700 bg-slate-800 p-6 transition hover:border-blue-500 hover:-translate-y-1"
      >
        <Image
          src={related.image}
          alt={related.title}
          width={400}
          height={220}
          className="mb-4 h-48 w-full rounded-lg object-cover"
        />

        <h3 className="text-xl font-semibold text-white">
          {related.title}
        </h3>

        <span className="mt-3 inline-block rounded-full bg-green-600 px-3 py-1 text-xs text-white">
          {related.status}
        </span>

        <p className="mt-4 text-slate-300">
          {related.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {related.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-600 px-3 py-1 text-xs text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        <span className="mt-6 inline-block font-semibold text-blue-400">
          View Project →
        </span>
      </Link>
    ))}
  </div>
</div>
      </div>
    </main>
  );
}
           