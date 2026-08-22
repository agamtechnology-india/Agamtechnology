import type { Project } from "@/types/project";

interface ProjectStructuredDataProps {
  project: Project;
}

export default function ProjectStructuredData({
  project,
}: ProjectStructuredDataProps) {
  const projectUrl =
    `https://www.agamtechnology.com/projects/${project.id}`;

  const projectImage =
    `https://www.agamtechnology.com${project.image}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: project.title,

    description: project.description,

    image: [projectImage],

    url: projectUrl,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": projectUrl,
    },

    author: {
      "@type": "Organization",
      name: "Agam Technology",
      url: "https://www.agamtechnology.com",
    },

    publisher: {
      "@type": "Organization",
      name: "Agam Technology",
      url: "https://www.agamtechnology.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.agamtechnology.com/icon.png",
      },
    },

    articleSection: "Projects",

    keywords: [
      ...project.technologies,
      "Agam Technology",
      "enterprise networking",
      "network automation",
      "IT infrastructure",
    ],

    about: project.technologies.map((technology) => ({
      "@type": "Thing",
      name: technology,
    })),
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
        name: "Projects",
        item: "https://www.agamtechnology.com/#projects",
      },

      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: projectUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
