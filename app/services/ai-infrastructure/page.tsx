import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Database,
  Network,
  Server,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Infrastructure Services | AI-Ready Data Center & Cloud",
  description:
    "Agam Technology provides AI infrastructure services for AI-ready networking, data center, cloud and automation environments, helping enterprises build scalable and reliable infrastructure for modern AI workloads.",
  keywords: [
    "AI infrastructure services",
    "AI infrastructure solutions",
    "AI infrastructure consulting",
    "AI-ready infrastructure",
    "AI data center infrastructure",
    "AI data center networking",
    "AI networking solutions",
    "AI cloud infrastructure",
    "enterprise AI infrastructure",
    "AI infrastructure architecture",
    "AI infrastructure automation",
    "AI infrastructure services India",
  ],
  alternates: {
    canonical: "https://www.agamtechnology.com/services/ai-infrastructure",
  },
  openGraph: {
    title: "AI Infrastructure Services | Agam Technology",
    description:
      "AI-ready infrastructure solutions across enterprise networking, data centers, cloud and automation.",
    url: "https://www.agamtechnology.com/services/ai-infrastructure",
    siteName: "Agam Technology",
    type: "website",
    images: [
      {
        url: "https://www.agamtechnology.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agam Technology AI Infrastructure Services",
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
    icon: Network,
    title: "AI-Ready Network Architecture",
    description:
      "Design scalable enterprise network architectures that support the connectivity, performance and reliability requirements of modern AI workloads.",
  },
  {
    icon: Server,
    title: "AI Data Center Infrastructure",
    description:
      "Modernize data center networking and infrastructure to provide reliable connectivity for AI and high-performance workloads.",
  },
  {
    icon: Cloud,
    title: "AI Cloud Infrastructure",
    description:
      "Connect enterprise networking and cloud environments to support scalable AI workloads across hybrid and cloud infrastructure.",
  },
  {
    icon: Database,
    title: "AI Workload Connectivity",
    description:
      "Design infrastructure connectivity between applications, data platforms, compute environments and enterprise networks.",
  },
  {
    icon: Workflow,
    title: "Infrastructure Automation",
    description:
      "Use Python, Ansible, APIs and AI infrastructure automation to improve infrastructure consistency, accelerate deployment workflows and support scalable AI environments.",
  },
  {
    icon: Activity,
    title: "Infrastructure Observability",
    description:
      "Improve infrastructure visibility through monitoring, validation, operational analytics and intelligent automation.",
  },
];

const useCases = [
  "AI-ready data center network modernization",
  "Enterprise AI workload connectivity",
  "Hybrid cloud AI infrastructure",
  "High-performance network architecture",
  "Infrastructure automation for AI environments",
  "Network and data center modernization",
];

const technologies = [
  "Cisco Networking",
  "Cisco ACI",
  "Cisco Nexus",
  "Python",
  "Ansible",
  "REST APIs",
  "Cloud Platforms",
  "Network Automation",
];

const benefits = [
  "Build infrastructure prepared for modern AI workloads",
  "Improve network scalability and reliability",
  "Connect AI workloads across data center and cloud environments",
  "Reduce repetitive infrastructure operations",
  "Improve infrastructure visibility and consistency",
  "Support long-term enterprise infrastructure modernization",
];

const aiInfrastructureSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Infrastructure Services",
  description:
    "AI infrastructure services covering AI-ready networking, data center, cloud connectivity and infrastructure automation.",
  url: "https://www.agamtechnology.com/services/ai-infrastructure",
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
  serviceType: "AI Infrastructure Services",
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
      name: "AI Infrastructure",
      item: "https://www.agamtechnology.com/services/ai-infrastructure",
    },
  ],
};

export default function AIInfrastructurePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aiInfrastructureSchema),
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
              href="/services/ai-solutions"
              className="inline-flex items-center gap-2 text-blue-400 transition hover:text-blue-300"
            >
              <ArrowRight size={16} className="rotate-180" />
              AI Solutions
            </Link>

            <span className="mt-8 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
              AI & Infrastructure
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
              AI Infrastructure{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions for Enterprise AI Workloads
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              Agam Technology provides AI infrastructure solutions for
              enterprise AI workloads across networking, data centers, cloud and
              automation. Our AI infrastructure services help organizations
              build scalable, reliable and automation-ready environments for
              modern AI adoption.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Discuss Your AI Infrastructure
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services/data-center"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-blue-500 hover:text-blue-400"
              >
                Data Center Services
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="border-y border-slate-800 bg-slate-900/40 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                AI Infrastructure Strategy
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Building Infrastructure for{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Modern AI Workloads
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                AI workloads introduce new infrastructure requirements across
                networking, data center, cloud connectivity and automation.
                Organizations need reliable infrastructure foundations before
                scaling AI applications and services.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                Our approach connects existing enterprise infrastructure
                expertise with AI-readiness requirements, helping organizations
                modernize their environments without unnecessarily replacing
                proven technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Our Capabilities
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                AI Infrastructure{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                Infrastructure services designed to connect AI workloads with
                reliable enterprise networking, data center and cloud
                environments.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <div
                    key={capability.title}
                    className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-7 transition hover:-translate-y-1 hover:border-blue-500/40"
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

        {/* Use Cases */}
        <section className="border-y border-slate-800 bg-slate-900/40 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                AI Infrastructure Use Cases
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Where AI-Ready Infrastructure{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Creates Value
                </span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                AI infrastructure planning can help organizations create a
                scalable foundation for emerging AI applications and workloads.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {useCases.map((useCase) => (
                <div
                  key={useCase}
                  className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-blue-400"
                  />
                  <span className="text-slate-300">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Technology Foundation
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Technologies Supporting{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  AI Infrastructure
                </span>
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {technologies.map((technology) => (
                <div
                  key={technology}
                  className="rounded-xl border border-slate-800 bg-slate-900/50 px-5 py-4 text-center font-medium text-slate-300"
                >
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-y border-slate-800 bg-slate-900/40 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                  Business Benefits
                </span>

                <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                  Build a Stronger Foundation for{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    AI Adoption
                  </span>
                </h2>

                <p className="mt-5 leading-8 text-slate-400">
                  AI adoption depends on infrastructure that can scale with
                  application, data and connectivity requirements. A strong
                  infrastructure foundation helps organizations adopt AI while
                  maintaining operational reliability.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-5"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-blue-400"
                    />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Related Services
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Explore Our{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  AI & Infrastructure Services
                </span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/services/ai-network-automation"
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-blue-500/40"
              >
                <BrainCircuit className="text-blue-400" size={24} />
                <h3 className="mt-4 text-lg font-semibold">
                  AI Network Automation
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Intelligent network automation using AI, Python, APIs and
                  enterprise networking technologies.
                </p>
              </Link>

              <Link
                href="/services/aiops"
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-blue-500/40"
              >
                <Activity className="text-blue-400" size={24} />
                <h3 className="mt-4 text-lg font-semibold">AIOps</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Intelligent monitoring, anomaly detection and operational
                  insights for modern infrastructure.
                </p>
              </Link>

              <Link
                href="/services/cloud-solutions"
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-blue-500/40"
              >
                <Cloud className="text-blue-400" size={24} />
                <h3 className="mt-4 text-lg font-semibold">Cloud Solutions</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Cloud connectivity, migration and hybrid infrastructure
                  architecture.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl rounded-3xl border border-blue-500/20 bg-blue-500/5 p-10 text-center md:p-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to Build AI-Ready Infrastructure?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
              Discuss how your networking, data center, cloud and automation
              environment can be prepared for modern AI workloads.
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
