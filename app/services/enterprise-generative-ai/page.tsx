import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Database,
  FileSearch,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Generative AI Services | AI Copilots & RAG",
  description:
    "Agam Technology provides enterprise generative AI services including AI copilots, knowledge assistants, RAG, workflow automation and secure AI solutions for IT and infrastructure operations.",
  keywords: [
    "enterprise generative AI",
    "generative AI services",
    "enterprise AI solutions",
    "AI copilot",
    "enterprise AI assistant",
    "RAG solutions",
    "retrieval augmented generation",
    "AI knowledge assistant",
    "AI workflow automation",
    "generative AI consulting",
    "private AI solutions",
    "secure enterprise AI",
    "AI for IT operations",
    "generative AI India",
  ],
  alternates: {
    canonical:
      "https://www.agamtechnology.com/services/enterprise-generative-ai",
  },
  openGraph: {
    title: "Enterprise Generative AI Services | Agam Technology",
    description:
      "Enterprise AI copilots, knowledge assistants, RAG, workflow automation and secure generative AI solutions.",
    url: "https://www.agamtechnology.com/services/enterprise-generative-ai",
    siteName: "Agam Technology",
    type: "website",
    images: [
      {
        url: "https://www.agamtechnology.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agam Technology Enterprise Generative AI Services",
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
    title: "Enterprise AI Copilots",
    description:
      "Build practical AI copilots that help IT and infrastructure teams access information, analyze operational data and accelerate everyday tasks.",
  },
  {
    icon: FileSearch,
    title: "AI Knowledge Assistants",
    description:
      "Connect enterprise documentation and approved knowledge sources with AI assistants designed to help users find relevant information faster.",
  },
  {
    icon: Database,
    title: "RAG & Enterprise Knowledge",
    description:
      "Use retrieval-augmented generation approaches to connect generative AI with enterprise knowledge while grounding responses in relevant source content.",
  },
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    description:
      "Integrate AI into business and IT workflows to support intelligent classification, summarization, recommendations and repeatable operational processes.",
  },
  {
    icon: Network,
    title: "AI for IT & Network Operations",
    description:
      "Combine generative AI with networking, automation and infrastructure workflows to improve operational productivity and troubleshooting.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Enterprise AI",
    description:
      "Design AI solutions with appropriate access controls, data boundaries and enterprise security considerations.",
  },
];

const benefits = [
  "Improve access to enterprise knowledge",
  "Reduce repetitive information and documentation tasks",
  "Accelerate IT and infrastructure operations",
  "Support faster troubleshooting and decision-making",
  "Connect AI with existing enterprise workflows",
  "Build practical and scalable AI adoption strategies",
];

const technologies = [
  "Generative AI",
  "AI Copilots",
  "RAG",
  "Enterprise Knowledge Bases",
  "Python",
  "REST APIs",
  "Cloud AI Platforms",
  "Network Automation",
];

const generativeAISchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Enterprise Generative AI Services",
  description:
    "Enterprise generative AI services including AI copilots, knowledge assistants, RAG, workflow automation and secure AI solutions.",
  url: "https://www.agamtechnology.com/services/enterprise-generative-ai",
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
  serviceType: "Enterprise Generative AI Services",
};

export default function EnterpriseGenerativeAIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generativeAISchema),
        }}
      />

      <main className="min-h-screen bg-slate-950 text-white">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pb-20 pt-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
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
              Enterprise Generative AI
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
              Enterprise{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Generative AI
              </span>{" "}
              Solutions
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              Agam Technology helps organizations adopt practical generative AI
              solutions for enterprise knowledge, IT operations, workflow
              automation and intelligent decision support.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Discuss Your AI Project
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services/ai-solutions"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-blue-500 hover:text-blue-400"
              >
                Explore AI Solutions
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="border-y border-slate-800 bg-slate-900/40 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Practical Enterprise AI
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Turning Generative AI into{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Useful Enterprise Workflows
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Generative AI can help organizations work with large volumes of
                information, automate knowledge-intensive tasks and support
                faster decision-making. The strongest enterprise use cases
                connect AI with trusted data, existing applications and
                operational workflows.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                Our approach focuses on practical adoption rather than AI for
                its own sake. We can connect generative AI capabilities with
                enterprise networking, automation, cloud, data center and IT
                operations environments.
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Capabilities
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Enterprise Generative AI{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Use Cases
                </span>
              </h2>
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

        {/* Benefits */}
        <section className="border-y border-slate-800 bg-slate-900/40 px-6 py-24">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Business Value
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Practical AI for{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Enterprise Teams
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Enterprise AI should improve measurable workflows and help teams
                work more efficiently. Our solutions are designed around real
                operational requirements and existing technology environments.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-5"
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
        </section>

        {/* Technologies */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Technology Areas
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Enterprise AI{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Technology Stack
                </span>
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-sm text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Related AI Services */}
        <section className="border-t border-slate-800 bg-slate-900/40 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Related AI Services
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                Build an{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  AI-Ready Environment
                </span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/services/ai-network-automation"
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-blue-500/40"
              >
                <h3 className="font-semibold">AI Network Automation</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Connect AI with network automation and operational workflows.
                </p>
              </Link>

              <Link
                href="/services/aiops"
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-blue-500/40"
              >
                <h3 className="font-semibold">AIOps</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Apply intelligent analytics to monitoring, events and IT
                  operations.
                </p>
              </Link>

              <Link
                href="/services/ai-infrastructure"
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-blue-500/40"
              >
                <h3 className="font-semibold">AI Infrastructure</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Prepare networking, data center and cloud environments for AI
                  workloads.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl rounded-3xl border border-blue-500/20 bg-blue-500/5 p-10 text-center md:p-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to Explore Enterprise Generative AI?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
              Discuss how generative AI, enterprise knowledge and intelligent
              workflows can support your organization.
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
