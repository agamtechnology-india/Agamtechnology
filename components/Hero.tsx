import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pb-20 pt-32"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Hero Content */}
        <div className="text-center lg:text-left">

          <span className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            Network Automation & IT Infrastructure Solutions
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            Enterprise Network
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Automation &
            </span>
            <br />
            Infrastructure Consulting
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl lg:mx-0">
            Agam Technology helps businesses design, automate, secure, and
            modernize enterprise IT infrastructure with network automation,
            Cisco ACI, SD-WAN, cloud networking, data center, and network
            security solutions.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 lg:mx-0">
            From enterprise network design and automation to data center and
            cloud infrastructure, we deliver practical technology solutions
            focused on reliability, scalability, and operational efficiency.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">

            <Link
              href="#services"
              className="rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Explore Services →
            </Link>

            <Link
              href="#contact"
              className="rounded-lg border border-slate-600 px-8 py-4 font-semibold text-white transition duration-300 hover:border-blue-400 hover:bg-blue-500/10"
            >
              Contact Us →
            </Link>

          </div>
        </div>

        {/* Technology Visual */}
        <div
          className="relative hidden h-[450px] items-center justify-center lg:flex"
          aria-hidden="true"
        >
          <div className="absolute h-72 w-72 rounded-full border border-blue-500/20" />
          <div className="absolute h-56 w-56 rounded-full border border-cyan-400/20" />
          <div className="absolute h-40 w-40 rounded-full bg-blue-600/10 shadow-2xl shadow-blue-500/30 blur-sm" />

          <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-blue-400/40 bg-slate-900 shadow-2xl shadow-blue-500/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">
                AT
              </div>

              <div className="mt-1 text-xs tracking-widest text-slate-400">
                NETWORK
              </div>
            </div>
          </div>

          <div className="absolute left-20 top-24 h-3 w-3 rounded-full bg-blue-400 shadow-lg shadow-blue-400/60" />
          <div className="absolute right-20 top-32 h-3 w-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/60" />
          <div className="absolute bottom-24 left-32 h-3 w-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/60" />
          <div className="absolute bottom-20 right-28 h-3 w-3 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/60" />
        </div>

      </div>
    </section>
  );
}