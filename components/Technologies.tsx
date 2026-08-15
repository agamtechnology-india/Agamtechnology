import { technologies } from "@/data/technologies";

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="relative overflow-hidden bg-slate-900 px-6 py-24"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-blue-600/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            Our Technology Stack
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Technologies We{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Enterprise-grade technologies and platforms that power
            reliable, secure, and scalable infrastructure solutions.
          </p>
        </div>

        {/* Technology badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="group cursor-default rounded-xl border border-slate-700 bg-slate-950/70 px-6 py-4 text-base font-semibold text-slate-300 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <span className="mr-2 inline-block text-blue-500 transition duration-300 group-hover:scale-110">
                ◆
              </span>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}