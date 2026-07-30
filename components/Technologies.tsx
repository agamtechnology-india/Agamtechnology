import { technologies } from "@/data/technologies";

export default function Technologies() {
  return (
    <section id="technologies" className="bg-slate-950 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Technologies We Work With
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="rounded-full border border-blue-500 px-6 py-3 text-lg font-semibold text-blue-400 transition hover:bg-blue-600 hover:text-white"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}