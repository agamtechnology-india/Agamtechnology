import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  LockKeyhole,
  Network,
  Shield,
  ShieldCheck,
  UserRoundCheck,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cyber Security Services | Shield, VPN & Zero Trust",
  description:
    "Agam Technology provides enterprise cyber security solutions including Shield, VPN, network security, segmentation and Zero Trust security practices.",
  keywords: [
    "cyber security services",
    "cyber security solutions",
    "network security services",
    "firewall services",
    "VPN solutions",
    "Zero Trust security",
    "enterprise network security",
    "network segmentation",
    "Cisco security",
    "FortiGate firewall",
  ],
  alternates: {
    canonical:
      "https://www.agamtechnology.com/services/cyber-security",
  },
  openGraph: {
    title: "Cyber Security Services | Agam Technology",
    description:
      "Enterprise cyber security solutions including Shield, VPN, network security, segmentation and Zero Trust security practices.",
    url: "https://www.agamtechnology.com/services/cyber-security",
    siteName: "Agam Technology",
    type: "website",
    images: [
      {
        url: "https://www.agamtechnology.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agam Technology Cyber Security Services",
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
    icon: Shield,
    title: "Firewall Security",
    description:
      "Design and implement enterprise firewall solutions to control traffic, protect network resources and enforce security policies.",
  },
  {
    icon: LockKeyhole,
    title: "VPN Solutions",
    description:
      "Secure remote access and site-to-site connectivity using enterprise VPN technologies and secure network architectures.",
  },
  {
    icon: Network,
    title: "Network Segmentation",
    description:
      "Design secure network segmentation strategies to isolate workloads, users and critical infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Trust Security",
    description:
      "Apply Zero Trust security principles to improve access control, segmentation and protection of enterprise resources.",
  },
  {
    icon: UserRoundCheck,
    title: "Secure Access",
    description:
      "Implement controlled and policy-based access to network resources based on users, devices and security requirements.",
  },
  {
    icon: Workflow,
    title: "Security Integration",
    description:
      "Integrate security controls with enterprise networking and infrastructure to provide consistent protection across environments.",
  },
];

const benefits = [
  "Improve protection of enterprise network infrastructure",
  "Reduce unauthorized network access",
  "Strengthen firewall and VPN security controls",
  "Improve network segmentation and isolation",
  "Support Zero Trust security initiatives",
  "Improve visibility and control of network traffic",
];

const technologies = [
  "FortiGate",
  "Cisco Security",
  "Firewall",
  "VPN",
  "Zero Trust",
  "Network Segmentation",
];

const cyberSecuritySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cyber Security Services",
  description:
    "Enterprise cyber security solutions including Shield, VPN, network security, segmentation and Zero Trust security practices.",
  url: "https://www.agamtechnology.com/services/cyber-security",
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
  serviceType: "Cyber Security Services",
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
      name: "Cyber Security",
      item: "https://www.agamtechnology.com/services/cyber-security",
    },
  ],
};

export default function CyberSecurityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cyberSecuritySchema),
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
                Cyber Security Solutions
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
                Secure Your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Enterprise Infrastructure
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl">
                Protect enterprise networks and infrastructure with Shield,
                VPN, segmentation, secure access and Zero Trust security
                solutions designed for modern business environments.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
                >
                  Discuss Your Security
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/services/data-center"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-blue-500 hover:text-blue-400"
                >
                  Data Center Solutions
                </Link>
              </div>
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
                Enterprise Security Expertise
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                Security solutions designed to protect enterprise networks,
                users, applications and critical infrastructure.
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

        {/* Security approach */}
        <section className="bg-slate-900/50 px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Security Approach
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                Defense in Depth for Modern Networks
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Modern enterprise security requires multiple layers of
                protection. We combine network security controls, secure
                connectivity, segmentation and access policies to help
                organizations protect their infrastructure.
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
              Security Technology Stack
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
              Need Help Securing Your Network?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Talk to Agam Technology about firewall security, VPN,
              segmentation, Zero Trust and enterprise network security
              requirements.
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
