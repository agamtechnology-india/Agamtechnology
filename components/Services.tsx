import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="bg-slate-950 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Our Services
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Enterprise Networking"
            description="Design, deployment, and support for enterprise network infrastructure."
          />

          <ServiceCard
            title="Network Automation"
            description="Automate repetitive network tasks using Python, Ansible, and REST APIs."
          />

          <ServiceCard
            title="Cloud Solutions"
            description="Cloud connectivity, migration, and hybrid cloud architecture."
          />

          <ServiceCard
            title="Data Center"
            description="Cisco ACI, Nexus, virtualization, and modern data center solutions."
          />

          <ServiceCard
            title="Cyber Security"
            description="Firewall, VPN, Zero Trust, and enterprise security best practices."
          />

          <ServiceCard
            title="IT Consulting"
            description="Technology strategy, architecture, and digital transformation consulting."
          />
        </div>
      </div>
    </section>
  );
}