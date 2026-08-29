import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
  Network,
  ServerCog,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Infrastructure & Automation Services | Agam Technology",
  description:
    "Agam Technology provides AI infrastructure, AI network automation, AIOps and enterprise generative AI solutions for modern networking, data center, cloud and IT environments.",
  keywords: [
    "AI infrastructure services",
    "AI infrastructure consulting",
    "AI solutions",
    "AI automation services",
    "AI network automation",
    "AI network automation services",
    "AIOps consulting",
    "AIOps services",
    "enterprise AI solutions",
    "generative AI consulting",
    "AI data center solutions",
    "AI data center infrastructure",
    "GPU data center networking",
    "AI infrastructure consulting India",
    "enterprise AI automation",
  ],
  alternates: {
    canonical: "https://www.agamtechnology.com/services/ai-solutions",
  },
  openGraph: {
    title: "AI Infrastructure & Automation Services | Agam Technology",
    description:
      "AI infrastructure, intelligent network automation, AIOps and enterprise generative AI solutions for modern IT environments.",
    url: "https://www.agamtechnology.com/services/ai-solutions",
    siteName: "Agam Technology",
    type: "website",
    images: [
      {
        url: "https://www.agamtechnology.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agam Technology AI Infrastructure and Automation Services",
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
    icon: ServerCog,
    title: "AI Infrastructure",
    description:
      "Design and modernization of infrastructure environments for AI workloads, including compute, networking, data center and cloud integration.",
  },
  {
    icon: Network,
    title: "AI Network Automation",
    description:
      "Use AI with Python, APIs, Ansible and network automation technologies to improve configuration, validation, troubleshooting and operational workflows.",
  },
  {
    icon: BrainCircuit,
    title: "AIOps & Intelligent IT Operations",
    description:
      "Apply AI-assisted monitoring, event correlation, incident analysis and intelligent operational workflows to improve infrastructure visibility and efficiency.",
  },
  {
    icon: Workflow,
    title: "Enterprise Generative AI",
    description:
      "Design practical enterprise AI solutions including knowledge assistants, AI workflows, document intelligence and retrieval-augmented applications.",
  },
  {
    icon: CloudCog,
    title: "AI Cloud Solutions",
    description:
      "Integrate AI workloads with cloud and hybrid infrastructure while supporting scalable networking, connectivity, security and operational requirements.",
  },
  {
    icon: ShieldCheck,
    title: "AI Security & Governance",
    description:
      "Support secure AI infrastructure and enterprise AI adoption through access controls, network segmentation, security architecture and operational governance.",
  },
];

const benefits = [
  "Modernize infrastructure for AI workloads",
  "Automate repetitive network and IT operations",
  "Improve infrastructure visibility and operational efficiency",
  "Connect AI capabilities with existing enterprise infrastructure",
  "Support scalable cloud, data center and networking environments",
  "Build practical AI adoption strategies aligned with business requirements",
];

const technologies = [
  "Python",
  "REST APIs",
  "Ansible",
  "Netmiko",
  "Cisco",
  "Cisco ACI",
  "Cisco SD-WAN",
  "AWS",
  "Cloud Infrastructure",
  "Enterprise AI",
];

const aiSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Infrastructure & Automation Services",
  description:
    "AI infrastructure, AI network automation, AIOps and enterprise generative AI solutions for modern IT environments.",
  url: "https://www.agamtechnology.com/services/ai-solutions",
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
  serviceType: "AI Infrastructure and Automation Services",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.agamtechnology.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "AI Solutions",
      item: "https://www.agamtechnology.com/services/ai-solutions",
    },
  ],
};

export default function AISolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aiSchema),
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
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Services
            </Link>

            <div className="mt-10 max-w-4xl">
              <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                AI Infrastructure & Automation
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
                AI Infrastructure &{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Network Automation
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-300 md:text-xl">
                Agam Technology helps organizations adopt practical AI
                capabilities across networking, data center, cloud and IT
                infrastructure. We combine AI, network automation and modern
                infrastructure technologies to improve operational efficiency,
                scalability and visibility.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Discuss Your AI Requirements
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  href="#capabilities"
                  className="rounded-lg border border-slate-700 px-7 py-3 font-semibold text-white transition hover:border-blue-400 hover:bg-blue-500/10"
                >
                  Explore AI Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="border-t border-slate-800 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                  AI for Enterprise Infrastructure
                </span>

                <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                  Make Your IT Infrastructure More Intelligent
                </h2>

                <p className="mt-6 leading-8 text-slate-300">
                  AI is becoming an important part of modern IT operations.
                  Agam Technology focuses on practical AI adoption that works
                  with existing enterprise networking, data center, cloud and
                  automation environments.
                </p>

                <p className="mt-5 leading-8 text-slate-300">
                  Our approach connects AI capabilities with proven
                  infrastructure technologies such as Cisco networking,
                  Python, REST APIs, Ansible and cloud platforms.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-8">
                <h3 className="text-2xl font-bold">
                  From Infrastructure to Intelligent Operations
                </h3>

                <ul className="mt-6 space-y-4">
                  {benefits.slice(0, 5).map((benefit) => (
                    <li key={benefit} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                      <span className="text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section
          id="capabilities"
          className="border-t border-slate-800 px-6 py-20"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                AI Services
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                AI Solutions for Modern IT Environments
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Practical AI services designed around enterprise networking,
                data center, cloud infrastructure, automation and security.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <div
                    key={capability.title}
                    className="rounded-2xl border border-slate-700 bg-slate-900/50 p-7 transition hover:border-blue-500/40"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <Icon className="h-6 w-6" />
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

        {/* AI + Automation */}
        <section className="border-t border-slate-800 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl border border-slate-700 bg-slate-900/50 p-8 md:p-12">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                AI-Powered Operations
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                AI + Network Automation
              </h2>

              <p className="mt-5 max-w-4xl leading-8 text-slate-300">
                Combine AI-assisted analysis with network automation to help
                infrastructure teams understand events, identify operational
                patterns, validate configurations and make faster decisions.
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-5">
                {[
                  "Network Data",
                  "Python / APIs",
                  "AI Analysis",
                  "Recommendation",
                  "Engineer Approval",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="rounded-xl border border-slate-700 bg-slate-950 p-5 text-center"
                  >
                    <div className="text-sm font-semibold text-blue-400">
                      0{index + 1}
                    </div>
                    <div className="mt-2 font-medium">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="border-t border-slate-800 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Technologies
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                AI Meets Enterprise Infrastructure
              </h2>

              <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-400">
                Our AI approach builds on networking, automation, cloud and
                infrastructure technologies already used by enterprise teams.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-sm text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-slate-800 px-6 py-20">
          <div className="mx-auto max-w-5xl rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8 text-center md:p-12">
            <h2 className="text-3xl font-bold md:text-5xl">
              Ready to Explore AI for Your Infrastructure?
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-400">
              Talk to Agam Technology about AI infrastructure, network
              automation, AIOps or enterprise AI opportunities for your
              organization.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Talk to Agam Technology
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}