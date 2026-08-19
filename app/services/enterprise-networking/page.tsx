import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Network,
  Router,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Networking Services",
  description:
    "Agam Technology provides enterprise networking services including network design, deployment, routing, switching, security and infrastructure consulting.",
  keywords: [
    "enterprise networking services",
    "enterprise network consulting",
    "network infrastructure services",
    "network design services",
    "Cisco network consulting",
    "enterprise network deployment",
    "network infrastructure consulting",
    "network consultant India",
  ],
  alternates: {
    canonical:
      "https://www.agamtechnology.com/services/enterprise-networking",
  },
  openGraph: {
    title: "Enterprise Networking Services | Agam Technology",
    description:
      "Enterprise network design, deployment, routing, switching, security and infrastructure consulting.",
    url: "https://www.agamtechnology.com/services/enterprise-networking",
    siteName: "Agam Technology",
    type: "website",
    images: [
      {
        url: "https://www.agamtechnology.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agam Technology Enterprise Networking Services",
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
    title: "Enterprise Network Design",
    description:
      "Design scalable and resilient enterprise network architectures aligned with business and infrastructure requirements.",
  },
  {
    icon: Router,
    title: "Routing and Switching",
    description:
      "Configure and optimize enterprise routing and switching environments using industry-standard networking technologies.",
  },
  {
    icon: ShieldCheck,
    title: "Network Security",
    description:
      "Build secure network architectures with segmentation, access controls and security-focused infrastructure practices.",
  },
  {
    icon: Cloud,
    title: "Cloud Connectivity",
    description:
      "Connect enterprise networks with cloud environments and support hybrid infrastructure architectures.",
  },
  {
    icon: Workflow,
    title: "Network Modernization",
    description:
      "Modernize legacy infrastructure through automation, software-defined networking and scalable architecture.",
  },
];

const benefits = [
  "Design reliable and scalable network infrastructure",
  "Improve network performance and availability",
  "Strengthen enterprise network security",
  "Support business and infrastructure growth",
  "Reduce operational complexity",
  "Prepare infrastructure for automation and cloud integration",
];

const technologies = [
  "Cisco",
  "Nexus",
  "BGP",
  "OSPF",
  "EIGRP",
  "VRF",
  "VLAN",
  "STP",
  "HSRP",
  "EtherChannel",
];

const enterpriseNetworkingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Enterprise Networking Services",
  description:
    "Enterprise network design, deployment, routing, switching, security and infrastructure consulting services.",
  url: "https://www.agamtechnology.com/services/enterprise-networking",
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
  serviceType: "Enterprise Networking Services",
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
      name: "Enterprise Networking",
      item: "https://www.agamtechnology.com/services/enterprise-networking",
    },
  ],
};

export default function EnterpriseNetworkingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(enterpriseNetworkingSchema),
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
                Enterprise Networking
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
                Enterprise Networking Services
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-300 md:text-xl">
                Design, deploy and modernize reliable enterprise network
                infrastructure with scalable routing, switching, security,
                cloud connectivity and network architecture solutions.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Discuss Your Network Project
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
                  Enterprise Infrastructure
                </p>

                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Build a Reliable Network Foundation
                </h2>

                <p className="mt-6 leading-8 text-slate-300">
                  Enterprise networks need to provide reliable connectivity,
                  predictable performance and secure access while supporting
                  changing business requirements.
                </p>

                <p className="mt-5 leading-8 text-slate-300">
                  Agam Technology helps organizations design, deploy and
                  modernize network infrastructure across campus, branch,
                  data center and hybrid environments.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-8">
                <h3 className="text-2xl font-bold">
                  Business Benefits
                </h3>

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
                Enterprise Networking Solutions
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Network solutions designed to improve reliability,
                scalability, security and operational efficiency.
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
              Enterprise Networking Technologies
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
              Explore our enterprise networking and automation capabilities
              through a practical network automation project using Python,
              Netmiko and Cisco infrastructure.
            </p>

            <Link
              href="/projects/1"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-400 transition hover:text-blue-300"
            >
              View Network Automation Project
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 px-6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to Modernize Your Network?
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Talk to Agam Technology about enterprise network design,
              deployment, modernization and infrastructure consulting.
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