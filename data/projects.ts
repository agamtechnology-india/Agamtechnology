export const projects = [
  {
    id: 1,
    title: "Enterprise Network Automation",
    description:
      "Automated Cisco network configuration and operational tasks using Python and Netmiko.",
    technologies: ["Python", "Netmiko", "Cisco IOS"],
    status: "Completed",
    image: "/projects/network-automation.jpg",
    github: "https://github.com/agamtechnology-india/Agamtechnology",
    demo: "https://agamtechnology.vercel.app",
    challenge:
      "Manual configuration and repetitive operational tasks across multiple Cisco network devices increased deployment time and the risk of configuration inconsistencies.",
    solution:
      "Developed a Python and Netmiko based automation solution to connect to Cisco devices, execute configuration and operational commands, and standardize repeatable network workflows.",
    result:
      "Reduced repetitive manual work, improved configuration consistency, and created a scalable foundation for enterprise network automation.",
    duration: "3 Months",
    role: "Senior Network Engineer",
    client: "Confidential",
  },

  {
    id: 2,
    title: "Cisco ACI Data Center",
    description:
      "Designed and deployed a Cisco ACI multi-tenant data center fabric using Nexus infrastructure and VMware integration.",
    technologies: ["Cisco ACI", "Nexus", "VMware"],
    status: "Completed",
    image: "/projects/aci-datacenter.jpg",
    github: "https://github.com/agamtechnology-india/Agamtechnology",
    demo: "https://agamtechnology.vercel.app",
    challenge:
      "The data center required a scalable and segmented network architecture capable of supporting multiple tenants, applications, and virtualization workloads.",
    solution:
      "Designed and implemented a Cisco ACI fabric using Nexus leaf and spine infrastructure, with tenant segmentation, application-centric policies, and VMware integration.",
    result:
      "Delivered a scalable and policy-driven data center network with improved segmentation, centralized management, and simplified operational workflows.",
    duration: "Project Based",
    role: "Senior Network Engineer",
    client: "Confidential",
  },

  {
    id: 3,
    title: "Cisco SD-WAN Deployment",
    description:
      "Implemented Cisco SD-WAN across multiple branch offices to improve WAN connectivity, centralized management, and application-aware routing.",
    technologies: ["Cisco SD-WAN", "Python", "REST API"],
    status: "Completed",
    image: "/projects/sdwan.jpg",
    github: "https://github.com/agamtechnology-india/Agamtechnology",
    demo: "https://agamtechnology.vercel.app",
    challenge:
      "Multiple branch locations required reliable WAN connectivity and centralized control while reducing the operational complexity of managing individual branch network devices.",
    solution:
      "Implemented Cisco SD-WAN with centralized orchestration, policy-based routing, application-aware traffic management, and REST API based automation capabilities.",
    result:
      "Improved centralized WAN management, simplified branch deployment and operations, and provided greater visibility and control over enterprise network traffic.",
    duration: "Project Based",
    role: "Senior Network Engineer",
    client: "Confidential",
  },
];
