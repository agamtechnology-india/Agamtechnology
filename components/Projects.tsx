"use client";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";
import { Project } from "@/types/project";
export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [technology, setTechnology] = useState("All");
  const technologies = [
    "All",
    "Python",
    "Netmiko",
    "Cisco IOS",
    "Cisco ACI",
    "Nexus",
    "VMware",
    "Cisco SD-WAN",
    "REST API",
  ];
  useEffect(() => {
  async function fetchProjects() {
    try {
      const response = await fetch("/api/projects", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(
          `Failed to fetch projects: ${response.status}`
        );
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Projects API did not return an array");
      }

      setProjects(data);
    } catch (error) {
      console.error("Error loading projects:", error);
      setProjects([]);
    }
  }

  fetchProjects();
}, []);

  const filteredProjects = projects.filter((project) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      project.title.toLowerCase().includes(searchText) ||
      project.description.toLowerCase().includes(searchText) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchText)
      );

    const matchesTechnology =
      technology === "All" ||
      project.technologies.some(
        (tech) => tech.toLowerCase() === technology.toLowerCase()
      );

    return matchesSearch && matchesTechnology;
  });

  const resetFilters = () => {
    setSearch("");
    setTechnology("All");
  };

  return (
    <section className="bg-slate-900 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Our Projects
        </h2>
        <ProjectFilters
          search={search}
          setSearch={setSearch}
          technology={technology}
          setTechnology={setTechnology}
          technologies={technologies}
          projectCount={filteredProjects.length}
          resetFilters={resetFilters}
        />

      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  {filteredProjects.map((project) => (
    <ProjectCard
      key={project.id}
      project={project}
    />
  ))}
  {filteredProjects.length === 0 && (
    <div className="col-span-full py-16 text-center">
      <div className="mx-auto max-w-md rounded-xl border border-slate-700 bg-slate-800 p-8">
      <div className="text-5xl">😕</div>

      <h3 className="mt-4 text-2xl font-semibold text-white">
        No projects found
      </h3>

      <p className="mt-3 text-slate-400">
        Try changing your search or technology filter.
      </p>

      <button
        onClick={resetFilters}
        className="mt-6 rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700"
      >
        Reset Filters
      </button>
      </div>
    </div>
  )}
</div>    
    </section>
  );
}
