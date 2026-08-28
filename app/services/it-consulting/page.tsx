import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Code2,
  Network,
  ServerCog,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "IT Infrastructure Consulting Services",
  description:
    "Agam Technology provides IT infrastructure consulting for enterprise networking, automation, cloud, data center, cybersecurity and infrastructure modernization.",
  keywords: [
    "IT consulting services",
    "IT consulting",
    "IT infrastructure consulting",
    "IT consultant India",
    "enterprise IT consulting",
    "enterprise network consulting",
    "network consulting services",
    "network automation consulting",
    "cloud consulting",
    "cloud infrastructure consulting",
    "data center consulting",
    "cyber security consulting",
    "infrastructure modernization",
    "IT infrastructure consulting services",
    "IT infrastructure consultant",
    "enterprise infrastructure consulting",
    "technology infrastructure consulting",
    "IT infrastructure consulting India",
  ],
  alternates: {
    canonical: "https://www.agamtechnology.com/services/it-consulting",
  },
  openGraph: {
    title: "IT Infrastructure Consulting Services | Agam Technology",
    description:
      "IT infrastructure consulting for enterprise networking, automation, cloud, data center, cybersecurity and infrastructure modernization.",
    url: "https://www.agamtechnology.com/services/it-consulting",
    siteName: "Agam Technology",
    type: "website",
    images: [
      {
        url: "https://www.agamtechnology.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agam Technology IT Consulting Services",
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
    title: "Enterprise Network Consulting",
    description:
      "Design and optimize reliable enterprise networking environments using modern routing, switching, SD-WAN and network architecture practices.",
  },
  {
    icon: Workflow,
    title: "Network Automation Consulting",
    description:
      "Identify automation opportunities and design repeatable workflows using Python, Netmiko, Ansible and REST APIs.",
  },
  {
    icon: Cloud,
    title: "Cloud & Hybrid Infrastructure",
    description:
      "Plan cloud connectivity, hybrid infrastructure and network integration to support scalable and flexible IT environments.",
  },
  {
    icon: ServerCog,
    title: "Data Center Consulting",
    description:
      "Provide architecture and modernization guidance for Cisco ACI, Nexus, virtualization and enterprise data center infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Consulting",
    description:
      "Improve infrastructure security through firewall, VPN, segmentation, Zero Trust and enterprise security best practices.",
  },
  {
    icon: Code2,
    title: "Technology Modernization",
    description:
      "Evaluate existing infrastructure and create practical modernization strategies focused on scalability, reliability and operational efficiency.",
  },
];

const benefits = [
  "Align IT infrastructure with business requirements",
  "Improve network reliability and scalability",
  "Identify opportunities for infrastructure automation",
  "Modernize legacy networking and data center environments",
  "Improve cloud and hybrid infrastructure integration",
  "Strengthen infrastructure security and operational consistency",
];

const expertise = [
  "Enterprise Networking",
  "Network Automation",
  "Cisco ACI",
  "SD-WAN",
  "Cloud Infrastructure",
  "Data Center",
  "Cybersecurity",
  "Python & REST APIs",
];

const consultingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "IT Infrastructure Consulting Services",
  description:
    "IT infrastructure consulting covering enterprise networking, network automation, cloud, data center, cybersecurity and infrastructure modernization.",
  url: "https://www.agamtechnology.com/services/it-consulting",
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
  serviceType: "IT Infrastructure Consulting Services",
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
      name: "IT Consulting",
      item: "https://www.agamtechnology.com/services/it-consulting",
    },
  ],
};

export default function ITConsultingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(consultingSchema),
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
                IT Infrastructure Consulting
              </span>

              <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
                IT Infrastructure Consulting for{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Modern Enterprise IT
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl">
                Agam Technology provides IT infrastructure consulting to help
                businesses design, modernize, automate and secure enterprise IT
                environments.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
                >
                  Discuss Your Requirements
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/services/enterprise-networking"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-blue-500 hover:text-blue-400"
                >
                  Enterprise Networking
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="border-y border-slate-800 bg-slate-900/40 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                  Technology Strategy
                </span>

                <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                  IT Infrastructure Consulting Services
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-400">
                  We help organizations evaluate their existing IT
                  infrastructure, identify improvement opportunities and
                  implement practical technology strategies.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-400">
                  Our consulting approach combines enterprise networking,
                  automation, cloud, data center and security expertise to
                  create reliable and scalable infrastructure.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {expertise.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-400" />
                      <span className="font-medium text-slate-200">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="relative overflow-hidden px-6 py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                Consulting Capabilities
              </span>

              <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                How We Can{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Help
                </span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                From infrastructure assessment to modernization, we provide
                technology guidance focused on practical business outcomes.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <div
                    key={capability.title}
                    className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10"
                  >
                    <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-70 transition duration-300 group-hover:opacity-100" />

                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400 transition duration-300 group-hover:scale-110 group-hover:bg-blue-500/20">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-xl font-bold text-white transition duration-300 group-hover:text-blue-400">
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
        <section className="border-y border-slate-800 bg-slate-900/40 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                  Business Benefits
                </span>

                <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                  Turn technology challenges into practical solutions
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-400">
                  Our consulting approach focuses on improving infrastructure
                  reliability, operational efficiency, scalability and security
                  while keeping implementation practical.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                    <span className="leading-7 text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Process */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                Our Approach
              </span>

              <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                A structured consulting process
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                We use a practical approach to understand the current
                environment and define the right path forward.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Assess",
                  description:
                    "Understand the current infrastructure, requirements and operational challenges.",
                },
                {
                  number: "02",
                  title: "Design",
                  description:
                    "Develop an architecture and technology strategy aligned with business requirements.",
                },
                {
                  number: "03",
                  title: "Implement",
                  description:
                    "Support deployment, automation and modernization of the selected solutions.",
                },
                {
                  number: "04",
                  title: "Optimize",
                  description:
                    "Validate the environment and identify opportunities for continuous improvement.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
                >
                  <span className="text-3xl font-bold text-blue-400">
                    {step.number}
                  </span>

                  <h3 className="mt-4 text-xl font-bold">{step.title}</h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="border-y border-slate-800 bg-slate-900/40 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Related Services
              </span>

              <h2 className="mt-3 text-3xl font-bold">
                Explore our technology services
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/services/network-automation"
                className="rounded-xl border border-slate-800 bg-slate-950 p-5 transition hover:border-blue-500/50"
              >
                <h3 className="font-semibold text-white">Network Automation</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Python, Netmiko, Ansible and REST API automation.
                </p>
              </Link>

              <Link
                href="/services/enterprise-networking"
                className="rounded-xl border border-slate-800 bg-slate-950 p-5 transition hover:border-blue-500/50"
              >
                <h3 className="font-semibold text-white">
                  Enterprise Networking
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Enterprise network design, deployment and support.
                </p>
              </Link>

              <Link
                href="/services/cloud-solutions"
                className="rounded-xl border border-slate-800 bg-slate-950 p-5 transition hover:border-blue-500/50"
              >
                <h3 className="font-semibold text-white">Cloud Solutions</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Cloud connectivity and hybrid infrastructure solutions.
                </p>
              </Link>

              <Link
                href="/services/cyber-security"
                className="rounded-xl border border-slate-800 bg-slate-950 p-5 transition hover:border-blue-500/50"
              >
                <h3 className="font-semibold text-white">Cyber Security</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Security architecture, firewall, VPN and Zero Trust.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24 pt-20">
          <div className="mx-auto max-w-5xl rounded-3xl border border-blue-500/20 bg-blue-500/5 px-8 py-14 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Need Help Planning Your IT Infrastructure?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Talk to Agam Technology about your networking, automation, cloud,
              data center or cybersecurity requirements.
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
