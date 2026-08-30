export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Agam Technology",
    url: "https://www.agamtechnology.com",
    logo: "https://www.agamtechnology.com/icon.png",
    email: "info@agamtechnology.com",
    description:
      "Agam Technology provides enterprise networking, network automation, SD-WAN, Cisco ACI, cloud and IT infrastructure solutions for modern businesses.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressCountry: "IN",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Agam Technology",
    url: "https://www.agamtechnology.com/",
    description:
      "Agam Technology provides AI solutions, AI infrastructure, AIOps, network automation, enterprise networking, cloud, data center and cybersecurity services for modern businesses.",
    publisher: {
      "@type": "Organization",
      name: "Agam Technology",
      url: "https://www.agamtechnology.com/",
    },
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AI & Network Automation | Enterprise IT Infrastructure | Agam Technology",
    description:
      "Agam Technology provides AI solutions, AI infrastructure, AIOps, network automation, enterprise networking, cloud, data center and cybersecurity services for modern businesses.",
    url: "https://www.agamtechnology.com/",
    isPartOf: {
      "@type": "WebSite",
      name: "Agam Technology",
      url: "https://www.agamtechnology.com/",
    },
    about: {
      "@type": "Organization",
      name: "Agam Technology",
      url: "https://www.agamtechnology.com/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webpageSchema),
        }}
      />
    </>
  );
}
