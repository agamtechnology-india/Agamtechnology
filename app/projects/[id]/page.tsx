import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectStructuredData from "@/components/ProjectStructuredData";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

const projectSeo: Record<
  number,
  {
    title: string;
    description: string;
    keywords: string[];
  }
> = {
  1: {
    title: "Enterprise Network Automation Using Python & Netmiko",
    description:
      "Enterprise network automation project using Python, Netmiko and Cisco IOS to automate configuration, operational tasks and repeatable network workflows.",
    keywords: [
      "enterprise network automation",
      "network automation services",
      "Python network automation",
      "Netmiko automation",
      "Cisco network automation",
      "Cisco IOS automation",
      "network automation using Python",
      "Cisco automation",
      "network automation project",
    ],
  },

  2: {
    title: "Cisco ACI Data Center Deployment & Networking",
    description:
      "Cisco ACI data center project covering multi-tenant networking, Nexus leaf-spine infrastructure, application-centric policies and VMware integration.",
    keywords: [
      "Cisco ACI",
      "Cisco ACI data center",
      "Cisco ACI deployment",
      "ACI data center networking",
      "ACI multi tenant",
      "Cisco Nexus",
      "ACI VMware integration",
      "data center networking",
      "Cisco ACI consulting",
      "Cisco ACI project",
    ],
  },

  3: {
  title: "Cisco SD-WAN Automation & Deployment for Enterprise Networks",
  description:
    "Cisco SD-WAN automation and deployment project for enterprise networks using centralized orchestration, application-aware routing, Python and REST APIs.",
    keywords: [
      "Cisco SD-WAN",
      "SD-WAN deployment",
      "Cisco SD-WAN project",
      "enterprise SD-WAN",
      "SD-WAN automation",
      "REST API network automation",
      "Python SD-WAN automation",
    ],
  },
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;

  const project = projects.find(
    (p) => p.id === Number(id)
  );

  if (!project) {
    return {
      title: "Project Not Found | Agam Technology",
      description:
        "The requested Agam Technology project could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const seo = projectSeo[project.id];

  const title =
    seo?.title ?? `${project.title} | Agam Technology`;

  const description =
    seo?.description ?? project.description;

  const keywords = [
    "Agam Technology",
    "IT infrastructure",
    "enterprise networking",
    ...(seo?.keywords ?? []),
    ...project.technologies,
  ];

  const projectUrl =
    `https://www.agamtechnology.com/projects/${project.id}`;

  return {
    title,
    description,
    keywords: [...new Set(keywords)],

    alternates: {
      canonical: projectUrl,
    },

    openGraph: {
      title: `${title} | Agam Technology`,
      description,
      url: projectUrl,
      siteName: "Agam Technology",
      type: "article",
      images: [
        {
          url: `https://www.agamtechnology.com${project.image}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | Agam Technology`,
      description,
      images: [
        `https://www.agamtechnology.com${project.image}`,
      ],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProjectDetails({
  params,
}: ProjectPageProps) {
  const { id } = await params;

  const project = projects.find(
    (p) => p.id === Number(id)
  );

  const relatedProjects = projects.filter(
    (p) => p.id !== project?.id
  );

  if (!project) {
    return (
      <main className="min-h-screen bg-slate-950 p-10 text-white">
        <h1>Project not found</h1>
      </main>
    );
  }

  return (
    <>
      <ProjectStructuredData project={project} />

      <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <Image
            src={project.image}
            alt={project.title}
            width={900}
            height={500}
            className="mb-8 w-full rounded-xl object-cover"
          />

          <h1 className="text-4xl font-bold">
            {project.title}
          </h1>

          <span
            className={`mt-4 inline-block rounded-full px-4 py-2 text-sm font-medium text-white ${
              project.status === "Completed"
                ? "bg-green-600"
                : project.status === "In Progress"
                  ? "bg-yellow-600"
                  : "bg-slate-600"
            }`}
          >
            {project.status}
          </span>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-700 bg-slate-800 p-5">
              <p className="text-sm text-slate-400">
                Role
              </p>
              <p className="mt-2 font-semibold text-white">
                {project.role}
              </p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-800 p-5">
              <p className="text-sm text-slate-400">
                Duration
              </p>
              <p className="mt-2 font-semibold text-white">
                {project.duration}
              </p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-800 p-5">
              <p className="text-sm text-slate-400">
                Client
              </p>
              <p className="mt-2 font-semibold text-white">
                {project.client}
              </p>
            </div>
          </div>

          <p className="mt-8 text-lg text-slate-300">
            {project.description}
          </p>

          <div className="mt-12 space-y-8">
            <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
              <h2 className="text-2xl font-bold text-white">
                Challenge
              </h2>
              <p className="mt-3 leading-7 text-slate-300">
                {project.challenge}
              </p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
              <h2 className="text-2xl font-bold text-white">
                Solution
              </h2>
              <p className="mt-3 leading-7 text-slate-300">
                {project.solution}
              </p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
              <h2 className="text-2xl font-bold text-white">
                Result
              </h2>
              <p className="mt-3 leading-7 text-slate-300">
                {project.result}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-blue-600 px-4 py-2 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <section className="mt-16 border-t border-slate-800 pt-12">
              <h2 className="text-3xl font-bold text-white">
                Related Projects
              </h2>

              <p className="mt-3 text-slate-400">
                Explore more enterprise networking and
                infrastructure projects from Agam Technology.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    href={`/projects/${relatedProject.id}`}
                    className="group rounded-xl border border-slate-700 bg-slate-800 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
                  >
                    <h3 className="text-xl font-bold text-white transition group-hover:text-blue-400">
                      {relatedProject.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-400">
                      {relatedProject.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {relatedProject.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </div>

                    <div className="mt-5 text-sm font-semibold text-blue-400">
                      View Project
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-slate-700 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-slate-600 hover:shadow-lg"
            >
              View Source
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg"
            >
              Live Demo
            </a>
          </div>
          </div>
      </main>
    </>
  );
}