import ServiceCard from "./ServiceCard";
import { services } from "@/data/services";

const serviceLinks: Record<string, string> = {
  "Enterprise Networking": "/services/enterprise-networking",
  "Network Automation": "/services/network-automation",
  "Cloud Solutions": "/services/cloud-solutions",
  "Data Center": "/services/data-center",
  "Cyber Security": "/services/cyber-security",
  "IT Consulting": "/services/it-consulting",
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-950 px-6 py-24"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-blue-600/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            What We Do
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Enterprise IT Infrastructure{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            Enterprise networking, network automation, cloud, data center,
            cybersecurity and IT consulting services designed to automate,
            secure and modernize your infrastructure.
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              href={serviceLinks[service.title]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
