import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Network,
  ServerCog,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Network Automation Services | SD-WAN, Cisco, Python & Ansible | Agam Technology",
  description:
    "Agam Technology provides enterprise network automation services for Cisco and SD-WAN environments using Python, Netmiko, Ansible and REST APIs to automate configuration, deployment, validation and network operations.",
  keywords: [
    "network automation services",
    "network automation consulting",
    "network automation consultant",
    "enterprise network automation",
    "SD-WAN automation",
    "SD WAN automation",
    "Cisco SD-WAN automation",
    "Python network automation",
    "Netmiko automation",
    "Ansible network automation",
    "Cisco network automation",
    "REST API network automation",
    "network automation services India",
    "network automation consultant India",
  ],
  alternates: {
    canonical: "https://www.agamtechnology.com/services/network-automation",
  },
  openGraph: {
    title: "Network Automation Services | SD-WAN & Cisco Automation",
    description:
      "Enterprise network automation for Cisco and SD-WAN environments using Python, Netmiko, Ansible and REST APIs.",
    url: "https://www.agamtechnology.com/services/network-automation",
    siteName: "Agam Technology",
    type: "website",
    images: [
      {
        url: "https://www.agamtechnology.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agam Technology Network Automation Services and SD-WAN Automation",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const capabilities = [
  {
    icon: Code2,
    title: "Python Network Automation",
    description:
      "Automate repetitive network configuration, validation, monitoring and operational tasks using Python.",
  },
  {
    icon: Network,
    title: "Cisco Network Automation",
    description:
      "Automate configuration and operational workflows across enterprise Cisco networking environments.",
  },
  {
    icon: ServerCog,
    title: "Netmiko Automation",
    description:
      "Use Netmiko to securely connect to network devices and execute repeatable operational workflows.",
  },
  {
    icon: Workflow,
    title: "REST API Automation",
    description:
      "Integrate network platforms and controllers through REST APIs for scalable infrastructure automation.",
  },
  {
    icon: Bot,
    title: "Ansible Automation",
    description:
      "Build repeatable infrastructure workflows using Ansible for configuration and operational consistency.",
  },
  {
    icon: Network,
    title: "SD-WAN Automation",
    description:
      "Automate repeatable Cisco SD-WAN workflows using centralized orchestration, Python and REST APIs to improve deployment consistency and operational efficiency.",
  },
];

const benefits = [
  "Reduce repetitive manual network configuration",
  "Improve configuration consistency across devices",
  "Reduce deployment and operational time",
  "Create repeatable and scalable workflows",
  "Improve network visibility and validation",
  "Support enterprise network modernization",
];

const technologies = [
  "Python",
  "Netmiko",
  "Ansible",
  "REST API",
  "Cisco IOS",
  "Cisco NX-OS",
];

const networkAutomationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Network Automation Services & Consulting",
  description:
    "Network automation services using Python, Netmiko, Ansible and REST APIs for enterprise network operations.",
  url: "https://www.agamtechnology.com/services/network-automation",
  provider: {
    "@type": "Organization",
    name: "Agam Technology",
    url: "https://www.agamtechnology.com",
    logo: "https://www.agamtechnology.com/icon.png",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  serviceType: "Network Automation Services & Consulting",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.agamtechnology.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.agamtechnology.com/#services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Network Automation",
      item: "https://www.agamtechnology.com/services/network-automation",
    },
  ],
};

export default function NetworkAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(networkAutomationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main className="min-h-screen bg-slate-950 text-white">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pb-20 pt-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/3 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
            <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-blue-400 transition hover:text-blue-300"
            >
              ← Back to Services
            </Link>

            <div className="mt-10 max-w-4xl">
              <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                Enterprise Network Automation
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
                Network Automation Services & SD-WAN Automation
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-300 md:text-xl">
                Agam Technology provides enterprise network automation services
                and consulting for Cisco and SD-WAN environments. We help
                organizations automate configuration, deployment, validation and
                network operations using Python, Netmiko, Ansible, REST APIs and
                Cisco automation technologies.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Discuss Your Automation Project
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/#projects"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-blue-400 hover:bg-blue-500/10"
                >
                  View Projects
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-slate-900 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                  Enterprise Automation
                </p>

                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Modernize Network Operations
                </h2>

                <p className="mt-6 leading-8 text-slate-300">
                  Manual network configuration can become time-consuming,
                  inconsistent and difficult to scale. Agam Technology helps
                  organizations automate repeatable network operations and build
                  reliable infrastructure workflows.
                </p>

                <p className="mt-5 leading-8 text-slate-300">
                  Our approach combines Python automation, Netmiko, Ansible and
                  REST APIs to support enterprise networking environments and
                  improve operational efficiency.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-8">
                <h3 className="text-2xl font-bold">Why Network Automation?</h3>

                <ul className="mt-6 space-y-4">
                  {benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-slate-300"
                    >
                      <CheckCircle2
                        size={22}
                        className="mt-0.5 shrink-0 text-blue-400"
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Our Capabilities
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Network Automation Solutions
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Practical automation solutions designed for enterprise network
                operations and infrastructure teams.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <div
                    key={capability.title}
                    className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-blue-500/50"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10">
                      <Icon size={24} className="text-blue-400" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold">
                      {capability.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-400">
                      {capability.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="bg-slate-900 px-6 py-20">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Technology Stack
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Technologies We Use
            </h2>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2.5 text-sm font-medium text-blue-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Related Project */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl rounded-2xl border border-slate-800 bg-slate-900 p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Related Project
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Enterprise Network Automation
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-slate-400">
              Explore our enterprise network automation projects covering Cisco
              network automation, Python and Netmiko, Cisco ACI data center
              infrastructure, and Cisco SD-WAN automation
            </p>

            <Link
              href="/projects/1"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-400 transition hover:text-blue-300"
            >
              View Network Automation Project
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/projects/2"
              className="mt-4 inline-flex items-center gap-2 font-semibold text-blue-400 transition hover:text-blue-300"
            >
              View Cisco ACI Project
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/projects/3"
              className="mt-4 inline-flex items-center gap-2 font-semibold text-blue-400 transition hover:text-blue-300"
            >
              View SD-WAN Project
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 px-6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to Automate Your Network?
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Talk to Agam Technology about your network automation,
              configuration management and infrastructure modernization
              requirements.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Contact Agam Technology
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
