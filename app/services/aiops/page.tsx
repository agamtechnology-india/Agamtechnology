import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Network,
  Search,
  Server,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AIOps & Intelligent Infrastructure Services",
  description:
    "Agam Technology provides AIOps and intelligent infrastructure services for enterprise networking, cloud and data center environments using monitoring, anomaly detection, event correlation and intelligent operations.",
  keywords: [
    "AIOps services",
    "AIOps solutions",
    "AIOps consulting",
    "AIOps infrastructure",
    "intelligent infrastructure",
    "AIOps network monitoring",
    "AI network monitoring",
    "network anomaly detection",
    "network event correlation",
    "intelligent network operations",
    "AI infrastructure services",
    "AIOps India",
    "enterprise AIOps",
    "infrastructure automation",
    "intelligent IT operations",
  ],
  alternates: {
    canonical: "https://www.agamtechnology.com/services/aiops",
  },
  openGraph: {
    title: "AIOps & Intelligent Infrastructure Services | Agam Technology",
    description:
      "AIOps and intelligent infrastructure services for enterprise networking, cloud, data center and IT operations.",
    url: "https://www.agamtechnology.com/services/aiops",
    siteName: "Agam Technology",
    type: "website",
    images: [
      {
        url: "https://www.agamtechnology.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agam Technology AIOps and Intelligent Infrastructure Services",
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
    icon: Activity,
    title: "Intelligent Monitoring",
    description:
      "Improve infrastructure visibility by bringing operational monitoring and intelligent analysis together across network, cloud and data center environments.",
  },
  {
    icon: AlertTriangle,
    title: "Anomaly Detection",
    description:
      "Identify abnormal infrastructure behavior and operational patterns that may require investigation or corrective action.",
  },
  {
    icon: Workflow,
    title: "Event Correlation",
    description:
      "Correlate related infrastructure events and alerts to help reduce operational noise and provide clearer operational context.",
  },
  {
    icon: Search,
    title: "Root Cause Analysis",
    description:
      "Analyze related network and infrastructure conditions to help engineers investigate potential causes more efficiently.",
  },
  {
    icon: BrainCircuit,
    title: "Predictive Infrastructure Insights",
    description:
      "Use historical and operational information to identify patterns that can support more proactive infrastructure management.",
  },
  {
    icon: Network,
    title: "Intelligent Network Operations",
    description:
      "Connect intelligent operational insights with established network automation and enterprise networking workflows.",
  },
];

const useCases = [
  {
    icon: Network,
    title: "Network Operations",
    description:
      "Monitor network behavior, identify unusual conditions, correlate operational events and support faster troubleshooting.",
  },
  {
    icon: Server,
    title: "Data Center Operations",
    description:
      "Improve visibility across data center infrastructure and help teams investigate infrastructure events and operational anomalies.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Apply intelligent operational analysis to cloud infrastructure monitoring, performance signals and infrastructure events.",
  },
  {
    icon: Workflow,
    title: "Automation Operations",
    description:
      "Connect AIOps insights with Python, REST APIs and automation workflows to support validated operational actions.",
  },
];

const benefits = [
  "Improve infrastructure visibility",
  "Reduce operational alert noise",
  "Identify abnormal infrastructure behavior",
  "Accelerate infrastructure troubleshooting",
  "Improve operational consistency",
  "Support proactive infrastructure management",
];

const technologies = [
  "Cisco Networking",
  "Python",
  "REST APIs",
  "Ansible",
  "Network Automation",
  "Cloud Platforms",
  "Data Center Infrastructure",
  "Monitoring & Observability",
];

const aiopsSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AIOps & Intelligent Infrastructure Services",
  description:
    "AIOps and intelligent infrastructure services for enterprise networking, cloud, data center and IT operations.",
  url: "https://www.agamtechnology.com/services/aiops",
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
  serviceType: "AIOps & Intelligent Infrastructure Services",
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
      name: "AIOps & Intelligent Infrastructure",
      item: "https://www.agamtechnology.com/services/aiops",
    },
  ],
};

export default function AIOpsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aiopsSchema),
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
              AIOps & Intelligent Infrastructure
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
              AIOps &{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Intelligent Infrastructure
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              Agam Technology helps organizations apply AI-driven intelligence
              to network, cloud and data center operations to improve
              visibility, identify anomalies and accelerate infrastructure
              troubleshooting.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Discuss Your Infrastructure
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services/ai-network-automation"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-blue-500 hover:text-blue-400"
              >
                AI Network Automation
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="border-y border-slate-800 bg-slate-900/40 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Intelligent IT Operations
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Connecting{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  AI with Infrastructure Operations
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                AIOps brings intelligent analysis together with infrastructure
                monitoring and operational workflows. It can help engineering
                teams understand large volumes of operational information and
                identify patterns that may otherwise be difficult to detect.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                Our approach focuses on practical enterprise use cases across
                networking, cloud and data center environments. AIOps can work
                alongside existing technologies such as Cisco networking,
                Python, REST APIs, Ansible and network automation.
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="relative overflow-hidden px-6 py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-blue-600/5 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                AIOps Capabilities
              </span>

              <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                Intelligent{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Infrastructure Operations
                </span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                Practical capabilities designed to help enterprise teams
                understand, analyze and respond to infrastructure conditions.
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

        {/* Operational Flow */}
        <section className="border-y border-slate-800 bg-slate-900/40 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Intelligent Operations Workflow
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                From Infrastructure Signals to{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Operational Insight
                </span>
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                A practical AIOps workflow can connect infrastructure signals
                with analysis and operational response.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Collect",
                  description:
                    "Gather infrastructure metrics, events and operational signals.",
                },
                {
                  number: "02",
                  title: "Analyze",
                  description:
                    "Analyze patterns and identify potentially abnormal conditions.",
                },
                {
                  number: "03",
                  title: "Correlate",
                  description:
                    "Connect related events to provide better operational context.",
                },
                {
                  number: "04",
                  title: "Respond",
                  description:
                    "Support engineers with actionable insights and validated workflows.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
                >
                  <span className="text-sm font-bold text-blue-400">
                    {step.number}
                  </span>

                  <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                Enterprise Use Cases
              </span>

              <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                AIOps Across Your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Infrastructure
                </span>
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {useCases.map((useCase) => {
                const Icon = useCase.icon;

                return (
                  <div
                    key={useCase.title}
                    className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <Icon size={24} />
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold">
                      {useCase.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-400">
                      {useCase.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Existing Services */}
        <section className="border-y border-slate-800 bg-slate-900/40 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Connected Infrastructure
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                AIOps Works With Your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Existing Environment
                </span>
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/services/enterprise-networking"
                className="rounded-xl border border-slate-800 bg-slate-950 p-6 transition hover:border-blue-500/40"
              >
                <h3 className="font-semibold">Enterprise Networking</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Intelligent visibility and operational analysis for enterprise
                  network environments.
                </p>
              </Link>

              <Link
                href="/services/network-automation"
                className="rounded-xl border border-slate-800 bg-slate-950 p-6 transition hover:border-blue-500/40"
              >
                <h3 className="font-semibold">Network Automation</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Connect operational insights with Python, APIs and automation
                  workflows.
                </p>
              </Link>

              <Link
                href="/services/cloud-solutions"
                className="rounded-xl border border-slate-800 bg-slate-950 p-6 transition hover:border-blue-500/40"
              >
                <h3 className="font-semibold">Cloud Solutions</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Apply intelligent operational analysis across cloud
                  infrastructure environments.
                </p>
              </Link>

              <Link
                href="/services/data-center"
                className="rounded-xl border border-slate-800 bg-slate-950 p-6 transition hover:border-blue-500/40"
              >
                <h3 className="font-semibold">Data Center</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Improve operational visibility across modern data center
                  infrastructure.
                </p>
              </Link>

              <Link
                href="/services/ai-network-automation"
                className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-6 transition hover:border-blue-500/50"
              >
                <h3 className="font-semibold text-blue-400">
                  AI Network Automation
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Connect AI-driven insights with network automation and
                  validated operational workflows.
                </p>
              </Link>

              <Link
                href="/services/cyber-security"
                className="rounded-xl border border-slate-800 bg-slate-950 p-6 transition hover:border-blue-500/40"
              >
                <h3 className="font-semibold">Cyber Security</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Support security operations with improved infrastructure
                  visibility and event analysis.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                  Business Benefits
                </span>

                <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                  Make Infrastructure Operations{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    More Intelligent
                  </span>
                </h2>

                <p className="mt-6 leading-8 text-slate-400">
                  AIOps can help infrastructure teams move from reactive
                  monitoring toward more contextual and proactive operational
                  management.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-5"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-blue-400"
                    />
                    <span className="text-sm leading-6 text-slate-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="border-y border-slate-800 bg-slate-900/40 px-6 py-20">
          <div className="mx-auto max-w-6xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Technology Ecosystem
            </span>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Built Around Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h2>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-700 bg-slate-950 px-5 py-2.5 text-sm text-slate-300"
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
              Ready to Explore AIOps?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
              Discuss how intelligent monitoring, anomaly detection, event
              correlation and automation can support your infrastructure
              operations.
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
