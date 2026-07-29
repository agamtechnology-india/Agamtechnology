export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <h3 className="text-2xl font-bold text-white">
            Agam Technology
          </h3>

          <p className="mt-2 max-w-md text-slate-400">
            Enterprise Networking, Network Automation, Cloud Solutions,
            Data Center, and IT Consulting Services.
          </p>
        </div>

        <div className="text-slate-400">
          <p>Email: info@agamtechnology.com</p>
          <p>New Delhi, India</p>
        </div>
      </div>

      <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
        © 2026 Agam Technology. All rights reserved.
      </div>
    </footer>
  );
}