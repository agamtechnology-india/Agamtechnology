import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
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
    "AI Network Automation Services | Cisco, Python & AIOps",
  description:
    "Agam Technology provides AI network automation services using Cisco networking, Python, Netmiko, Ansible, REST APIs and AIOps to automate configuration, monitoring, troubleshooting and network operations.",
  keywords: [
    "AI network automation",
    "AI network automation services",
    "AI network automation solutions",
    "intelligent network automation",
    "AI network operations",
    "AI network monitoring",
    "Cisco AI automation",
    "Cisco network automation",
    "Python AI network automation",
    "AIOps network automation",
    "network automation services",
    "network automation consulting",
    "AI network automation India",
  ],
  alternates: {
    canonical: "https://www.agamtechnology.com/services/ai-network-automation",
  },
  openGraph: {
    title: "AI Network Automation Services | Agam Technology",
    description:
      "AI-powered network automation using Cisco, Python, Netmiko, Ansible, REST APIs and AIOps.",
    url: "https://www.agamtechnology.com/services/ai-network-automation",
    siteName: "Agam Technology",
    type: "website",
    images: [
      {
        url: "https://www.agamtechnology.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agam Technology AI Network Automation Services",
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
    icon: Bot,
    title: "Intelligent Network Automation",
    description:
      "Combine AI with Python, APIs and automation workflows to reduce repetitive network operations and improve operational consistency.",
  },
  {
    icon: Network,
    title: "Cisco Network Automation",
    description:
      "Automate repeatable configuration and operational workflows across Cisco enterprise networking environments.",
  },
  {
    icon: Activity,
    title: "AI Network Monitoring",
    description:
      "Use intelligent monitoring and operational analytics to identify abnormal network behavior and improve infrastructure visibility.",
  },
  {
    icon: Workflow,
    title: "Automated Troubleshooting",
    description:
      "Connect network telemetry, automation workflows and AI-assisted analysis to accelerate investigation of common network issues.",
  },
  {
    icon: Code2,
    title: "Python & API Automation",
    description:
      "Build practical automation workflows using Python, REST APIs, Netmiko and Ansible for repeatable network operations.",
  },
  {
    icon: ServerCog,
    title: "AIOps Integration",
    description:
      "Integrate AIOps concepts with enterprise infrastructure to support event correlation, anomaly detection and operational intelligence.",
  },
];

const benefits = [
  "Reduce repetitive manual network operations",
  "Improve configuration consistency across network devices",
  "Accelerate network monitoring and troubleshooting",
  "Improve operational visibility and validation",
  "Create repeatable and scalable automation workflows",
  "Support modern AI-driven network operations",
];

const technologies = [
  "Cisco",
  "Python",
  "Netmiko",
  "Ansible",
  "REST APIs",
  "AIOps",
  "Cisco IOS",
  "Cisco NX-OS",
  "Cisco SD-WAN",
];

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
      name: "AI Solutions",
      item: "https://www.agamtechnology.com/services/ai-solutions",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "AI Network Automation",
      item: "https://www.agamtechnology.com/services/ai-network-automation",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Network Automation Services",
  description:
    "AI network automation services using Cisco networking, Python, Netmiko, Ansible, REST APIs and AIOps.",
  url: "https://www.agamtechnology.com/services/ai-network-automation",
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
  serviceType: "AI Network Automation Services",
};

export default function AINetworkAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
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
              href="/services/ai-solutions"
              className="inline-flex items-center gap-2 text-blue-400 transition hover:text-blue-300"
            >
              <ArrowRight size={16} className="rotate-180" />
              AI Solutions
            </Link>

            <span className="mt-8 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
              AI & Network Automation
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
              AI-Powered{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Network Automation
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              Agam Technology combines artificial intelligence, network
              automation and enterprise networking technologies to help
              organizations automate operations, improve visibility and
              accelerate network troubleshooting.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Discuss Your Network
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services/network-automation"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-blue-500 hover:text-blue-400"
              >
                Network Automation Services
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="border-y border-slate-800 bg-slate-900/40 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Intelligent Network Operations
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Connecting AI with{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Enterprise Networks
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                AI network automation brings intelligent analysis together with
                established network automation technologies. Instead of
                replacing existing infrastructure, organizations can connect AI
                capabilities with Cisco networking, Python, APIs, Ansible and
                operational workflows.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                Our approach focuses on practical use cases such as automated
                configuration, network validation, anomaly identification,
                troubleshooting assistance and operational intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                Capabilities
              </span>

              <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                AI Network Automation{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                Practical automation capabilities designed for enterprise
                networking and infrastructure operations.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <div
                    key={capability.title}
                    className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7 transition hover:-translate-y-1 hover:border-blue-500/40"
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-xl font-semibold">
                      {capability.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {capability.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="border-y border-slate-800 bg-slate-900/40 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                How It Works
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                From Network Data to{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Intelligent Action
                </span>
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                AI can become part of an existing network automation workflow,
                helping teams move from manual investigation toward more
                intelligent and repeatable operations.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-5">
              {[
                "Network Devices",
                "Telemetry & APIs",
                "Python / Ansible",
                "AI Analysis",
                "Automated Action",
              ].map((step, index) => (
                <div
                  key={step}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-6"
                >
                  <div className="text-sm font-semibold text-blue-400">
                    0{index + 1}
                  </div>
                  <h3 className="mt-3 font-semibold">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="px-6 py-24">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Business Benefits
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Modernize Network Operations with AI
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                AI-assisted automation can help network teams improve
                consistency, reduce repetitive work and gain better operational
                visibility.
              </p>
            </div>

            <div className="space-y-5">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex gap-4">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-blue-400"
                  />
                  <p className="text-slate-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="border-y border-slate-800 bg-slate-900/40 px-6 py-20">
          <div className="mx-auto max-w-6xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Technology Stack
            </span>

            <h2 className="mt-4 text-3xl font-bold">
              Technologies Behind Our AI Automation Approach
            </h2>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-700 bg-slate-950 px-5 py-2 text-sm text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl rounded-3xl border border-blue-500/20 bg-blue-500/5 p-10 text-center md:p-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to Explore AI Network Automation?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
              Discuss how AI, automation and enterprise networking can work
              together in your environment.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Book a Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
