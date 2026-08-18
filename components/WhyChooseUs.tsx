import { benefits } from "@/data/benefits";
import { CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-slate-900 px-6 py-24"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-blue-600/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            Why Agam Technology
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Agam Technology?
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
  We combine enterprise networking, network automation, data center,
  cloud, SD-WAN, and security expertise to help businesses build
  reliable, scalable, and efficient IT infrastructure.
</p>
        </div>

        {/* Benefits */}
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="group flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-950/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500/5 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10">
                <CheckCircle
                  size={26}
                  className="text-blue-400 transition duration-300 group-hover:scale-110 group-hover:text-cyan-400"
                />
              </div>

              <span className="text-base font-medium leading-7 text-slate-200 md:text-lg">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}