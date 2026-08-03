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
      </div>
    </main>
  );
}