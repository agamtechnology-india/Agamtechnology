export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

      <span className="rounded-full border border-blue-500 px-4 py-2 text-sm text-blue-400">
        Welcome to Agam Technology
      </span>

      <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
        Enterprise Network
        <br />
        Automation &
        <br />
        Infrastructure Consulting
      </h1>

      <p className="mt-8 max-w-3xl text-lg text-slate-300 md:text-xl">
        We help businesses automate, secure, and modernize their IT
        infrastructure through enterprise networking, cloud solutions,
        data center technologies, and network automation.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <button className="rounded-lg bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700">
          Explore Services
        </button>

        <button className="rounded-lg border border-white px-8 py-4 font-semibold hover:bg-white hover:text-black">
          Contact Us
        </button>
      </div>

    </section>
  );
}