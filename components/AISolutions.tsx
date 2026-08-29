import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Network,
  Activity,
  Sparkles,
} from "lucide-react";

const aiSolutions = [
  {
    icon: BrainCircuit,
    title: "AI Infrastructure",
    description:
      "Design AI-ready infrastructure across networking, data center and cloud environments to support modern AI workloads.",
  },
  {
    icon: Network,
    title: "AI Network Automation",
    description:
      "Combine Python, APIs, Ansible and intelligent workflows to automate network configuration, validation and operations.",
  },
  {
    icon: Activity,
    title: "AIOps",
    description:
      "Use AI-driven monitoring, anomaly detection, event correlation and operational intelligence to improve infrastructure visibility.",
  },
  {
    icon: Sparkles,
    title: "Enterprise Generative AI",
    description:
      "Explore practical generative AI solutions for enterprise knowledge, workflow automation and intelligent IT operations.",
  },
];

export default function AISolutions() {
  return (
    <section className="relative overflow-hidden border-y border-slate-800 bg-slate-950 px-6 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            AI & Intelligent Automation
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            AI-Powered Infrastructure{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              & Automation
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Practical AI solutions that connect artificial intelligence with
            enterprise networking, automation, cloud, data center and IT
            operations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {aiSolutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <div
                key={solution.title}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-7 transition hover:-translate-y-1 hover:border-blue-500/40"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {solution.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services/ai-solutions"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Explore AI Solutions
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
