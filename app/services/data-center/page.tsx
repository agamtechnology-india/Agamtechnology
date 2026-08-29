import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Network,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Data Center Services & Consulting | Cisco ACI & Nexus",
  description:
    "Agam Technology provides enterprise data center solutions and consulting for Cisco ACI, Cisco Nexus, data center networking, virtualization and infrastructure modernization.",
  keywords: [
    "data center services",
    "data center solutions",
    "data center consulting",
    "data center network design",
    "data center infrastructure services",
    "Cisco ACI services",
    "Cisco ACI consulting",
    "Cisco ACI data center",
    "Cisco Nexus services",
    "Cisco Nexus data center",
    "data center networking",
    "data center modernization",
    "enterprise data center",
    "data center consultant India",
  ],
  alternates: {
    canonical: "https://www.agamtechnology.com/services/data-center",
  },
  openGraph: {
    title: "Data Center Solutions & Consulting | Cisco ACI & Nexus",
    description:
      "Data center networking, Cisco ACI, Nexus, virtualization, infrastructure design and modernization services.",
    url: "https://www.agamtechnology.com/services/data-center",
    siteName: "Agam Technology",
    type: "website",
    images: [
      {
        url: "https://www.agamtechnology.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agam Technology Data Center Solutions",
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
    title: "Cisco ACI Solutions",
    description:
      "Design and implementation of Cisco ACI-based data center fabrics for scalable and policy-driven infrastructure.",
  },
  {
    icon: Server,
    title: "Cisco Nexus Infrastructure",
    description:
      "Enterprise data center switching solutions using Cisco Nexus platforms and modern network architecture.",
  },
  {
    icon: Database,
    title: "Data Center Infrastructure",
    description:
      "Design and deployment of reliable data center infrastructure supporting business-critical applications and workloads.",
  },
  {
    icon: Workflow,
    title: "Virtualization Integration",
    description:
      "Integration of networking and virtualization environments to support efficient and scalable data center operations.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Data Center",
    description:
      "Security-focused data center architecture supporting segmentation, policy enforcement and controlled connectivity.",
  },
];

const benefits = [
  "Build scalable and reliable data center infrastructure",
  "Improve network performance and operational consistency",
  "Simplify data center network management",
  "Support application and workload scalability",
  "Improve infrastructure visibility and control",
  "Enable modern data center architectures",
];

const technologies = [
  "Cisco ACI",
  "Cisco Nexus",
  "VXLAN",
  "VMware",
  "Data Center Networking",
  "Network Virtualization",
];

const dataCenterSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Data Center Solutions",
  description:
    "Data center solutions using Cisco ACI, Cisco Nexus, virtualization and modern enterprise infrastructure technologies.",
  url: "https://www.agamtechnology.com/services/data-center",
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
  serviceType: "Data Center Solutions",
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
      name: "Data Center",
      item: "https://www.agamtechnology.com/services/data-center",
    },
  ],
};

export default function DataCenterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dataCenterSchema),
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

            <div className="mt-8 max-w-4xl">
              <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                Data Center Solutions
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
                Data Center{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Solutions & Consulting
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl">
                Agam Technology provides Cisco data center services for
                enterprise networking, Cisco ACI, Cisco Nexus, data center
                network design, virtualization integration and infrastructure
                modernization. Our services help organizations build scalable,
                secure and reliable data center environments.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
                >
                  Discuss Your Data Center
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/services/network-automation"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-blue-500 hover:text-blue-400"
                >
                  Network Automation
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-slate-800 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Data Center Services
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                Cisco Data Center Services & Consulting
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Agam Technology provides Cisco data center services for
                enterprise networking, Cisco ACI, Cisco Nexus, data center
                network design, virtualization integration and infrastructure
                modernization. Our services help organizations build scalable,
                secure and reliable data center environments.
              </p>
            </div>
          </div>
        </section>
        {/* Capabilities */}
        <section className="border-t border-slate-800 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Our Capabilities
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                Cisco Data Center Solutions
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                Enterprise data center solutions designed for performance,
                scalability, security and operational efficiency, with expertise
                across Cisco ACI, Cisco Nexus and modern data center networking.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <div
                    key={capability.title}
                    className="rounded-2xl border border-slate-800 bg-slate-900/70 p-7"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400">
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

        {/* Benefits */}
        <section className="bg-slate-900/50 px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Business Benefits
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                Build a Better Data Center
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                A modern data center architecture can help organizations improve
                reliability, scalability, visibility and operational efficiency.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-950/70 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                  <span className="text-slate-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Technologies
            </span>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Technology Stack
            </h2>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-5xl rounded-3xl border border-blue-500/20 bg-blue-500/5 px-8 py-14 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Need Help Modernizing Your Data Center?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Talk to Agam Technology about your data center networking, Cisco
              ACI, Nexus and infrastructure requirements.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Contact Agam Technology
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
