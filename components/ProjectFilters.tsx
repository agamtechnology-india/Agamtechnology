interface ProjectFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  technology: string;
  setTechnology: (value: string) => void;
  technologies: string[];
  projectCount: number;
  resetFilters: () => void;
}

export default function ProjectFilters({
  search,
  setSearch,
  technology,
  setTechnology,
  technologies,
  projectCount,
  resetFilters,
}: ProjectFiltersProps) {
  return (
    <>
      <div className="mb-10 flex justify-center">
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-10 flex gap-3 overflow-x-auto pb-2 md:flex-wrap md:justify-center">
        {technologies.map((tech) => (
          <button
            key={tech}
            onClick={() => setTechnology(tech)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
              technology === tech
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      <p className="mb-8 text-center text-sm text-slate-400">
        Showing {projectCount}{" "}
        {projectCount === 1 ? "project" : "projects"}
      </p>

      {(search || technology !== "All") && (
        <div className="mb-8 flex justify-center">
          <button
            onClick={resetFilters}
            className="rounded-lg border border-slate-600 px-5 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-500 hover:text-white"
          >
            Reset Filters
          </button>
        </div>
      )}
    </>
  );
}