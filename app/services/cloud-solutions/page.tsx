import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Cloud,
  CloudCog,
  Network,
  ServerCog,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud Solutions & Consulting | AWS & Hybrid Cloud",
  description:
    "Agam Technology provides enterprise cloud solutions and consulting for AWS networking, cloud infrastructure, hybrid cloud, cloud connectivity, migration and cloud security.",
  keywords: [
    "cloud services",
    "cloud solutions",
    "cloud consulting",
    "cloud infrastructure services",
    "cloud networking",
    "hybrid cloud solutions",
    "hybrid cloud consulting",
    "cloud connectivity",
    "enterprise cloud solutions",
    "AWS networking",
    "AWS cloud consulting",
    "cloud migration services",
    "cloud security services",
    "cloud infrastructure consulting",
    "cloud consultant India",
    "AWS cloud solutions",
    "enterprise cloud consulting",
    "hybrid cloud services India",
  ],
  alternates: {
    canonical: "https://www.agamtechnology.com/services/cloud-solutions",
  },
  openGraph: {
    title:
      "Cloud Solutions & Consulting | AWS & Hybrid Cloud | Agam Technology",
    description:
      "Enterprise cloud solutions using AWS networking, hybrid cloud, cloud connectivity, migration and cloud security.",
    url: "https://www.agamtechnology.com/services/cloud-solutions",
    siteName: "Agam Technology",
    type: "website",
    images: [
      {
        url: "https://www.agamtechnology.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agam Technology Cloud Services and Consulting",
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
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Design and support scalable cloud infrastructure aligned with business and application requirements.",
  },
  {
    icon: Network,
    title: "Cloud Networking",
    description:
      "Design secure and reliable connectivity between enterprise networks, cloud platforms and applications.",
  },
  {
    icon: CloudCog,
    title: "Hybrid Cloud",
    description:
      "Connect on-premises infrastructure with cloud environments to support flexible hybrid architectures.",
  },
  {
    icon: ServerCog,
    title: "Cloud Migration",
    description:
      "Support infrastructure and network migration initiatives while maintaining connectivity and operational continuity.",
  },
  {
    icon: ShieldCheck,
    title: "Cloud Security",
    description:
      "Apply network security and access-control best practices to help protect cloud-connected infrastructure.",
  },
  {
    icon: Workflow,
    title: "Cloud Automation",
    description:
      "Use automation and repeatable workflows to improve cloud infrastructure deployment and operations.",
  },
];

const benefits = [
  "Improve cloud infrastructure scalability",
  "Connect enterprise networks with cloud environments",
  "Support hybrid cloud architectures",
  "Improve infrastructure flexibility and agility",
  "Reduce operational complexity",
  "Support secure cloud transformation",
];

const technologies = [
  "AWS",
  "Cloud Networking",
  "Hybrid Cloud",
  "VPN",
  "Routing",
  "Network Security",
];

const cloudSolutionsSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cloud Solutions & Consulting",
  description:
    "Enterprise cloud solutions and consulting for AWS networking, hybrid cloud, cloud connectivity, migration and cloud security.",
  url: "https://www.agamtechnology.com/services/cloud-solutions",
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
  serviceType: "Cloud Solutions & Consulting",
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
      name: "Cloud Solutions",
      item: "https://www.agamtechnology.com/services/cloud-solutions",
    },
  ],
};

export default function CloudSolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cloudSolutionsSchema),
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
                Enterprise Cloud Solutions
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
                Cloud{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Solutions & Consulting
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl">
                Agam Technology provides enterprise cloud solutions and
                consulting for AWS networking, hybrid cloud, cloud connectivity
                and secure cloud infrastructure modernization.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
                >
                  Discuss Your Cloud Project
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/services/network-automation"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-blue-500/50 hover:text-blue-400"
                >
                  Network Automation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="border-t border-slate-800 bg-slate-950 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                Our Capabilities
              </span>

              <h2 className="mt-5 text-3xl font-bold md:text-5xl">
                Cloud Solutions{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  & Consulting
                </span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                Enterprise cloud and networking solutions designed for secure,
                scalable and reliable infrastructure.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <div
                    key={capability.title}
                    className="rounded-2xl border border-slate-800 bg-slate-900/80 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10"
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-xl font-bold">{capability.title}</h3>

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
        <section className="bg-slate-900/50 px-6 py-24">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                Business Benefits
              </span>

              <h2 className="mt-5 text-3xl font-bold md:text-5xl">
                Modernize Your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Cloud Infrastructure
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Our approach combines cloud infrastructure with enterprise
                networking and security principles to create dependable
                technology environments.
              </p>
            </div>

            <div className="grid gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                  <span className="text-slate-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl text-center">
            <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
              Technologies
            </span>

            <h2 className="mt-5 text-3xl font-bold md:text-5xl">
              Cloud & Networking{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Stack
              </span>
            </h2>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 font-medium text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-5xl rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 p-10 text-center md:p-16">
            <h2 className="text-3xl font-bold md:text-5xl">
              Ready to Modernize Your Cloud?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Talk to Agam Technology about your cloud networking, connectivity
              or hybrid infrastructure requirements.
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
