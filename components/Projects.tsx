"use client";
import Image from "next/image"; 
import { useEffect, useState } from "react";
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  status: string;
  image: string;

}
export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
  async function fetchProjects() {
    const response = await fetch("/api/projects");

    const data = await response.json();

    setProjects(data);
  }

  fetchProjects();
}, []);
  return (
    <section className="bg-slate-900 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Our Projects
        </h2>

      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  {projects.map((project) => (
    <div
      key={project.id}
      className="rounded-xl border border-slate-700 bg-slate-800 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
    >
      <Image
  src={project.image}
  alt={project.title}
  width={500}
  height={300}
  className="mb-4 h-48 w-full rounded-lg object-cover"
/>
      <h3 className="text-2xl font-bold text-white">
        {project.title}
      </h3>
      <span className="mt-3 inline-block rounded-full bg-green-600 px-3 py-1 text-sm font-medium text-white">
  {project.status}
</span>

      <p className="mt-4 text-slate-300">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-blue-600 px-4 py-2 text-sm text-white"
          >
            {tech}
          </span>
          
        ))}
      </div>
      <div className="mt-6">
  <a
  href="#"
  className="inline-block rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700"
>
  View Project
</a>
</div>
    </div>
  ))}
</div>    
    </section>
  );
}
