"use client";

import { useEffect, useState } from "react";
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
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
        <div className="rounded-xl border border-slate-700 bg-slate-800 p-8">
  <h3 className="text-2xl font-bold text-white">
    Enterprise Network Automation
  </h3>

  <p className="mt-4 text-slate-300">
    Automated Cisco network configuration using Python and Netmiko.
  </p>
  
  <div className="mt-6 flex flex-wrap gap-3">
    <span className="rounded-full bg-blue-600 px-4 py-2 text-sm text-white">
      Python
    </span>

    <span className="rounded-full bg-blue-600 px-4 py-2 text-sm text-white">
      Netmiko
    </span>

    <span className="rounded-full bg-blue-600 px-4 py-2 text-sm text-white">
      Cisco IOS
    </span>
  </div>
</div>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  {projects.map((project) => (
    <div
      key={project.id}
      className="rounded-xl border border-slate-700 bg-slate-800 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
    >
      <h3 className="text-2xl font-bold text-white">
        {project.title}
      </h3>

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
    </div>
  ))}
</div>    
    </section>
  );
}