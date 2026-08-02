export async function GET() {
  const projects = [
    {
      id: 1,
      title: "Enterprise Network Automation",
      description:
        "Automated Cisco network configuration using Python and Netmiko.",
      technologies: ["Python", "Netmiko", "Cisco IOS"],
      status: "Completed",
      image: "/projects/network-automation.jpg",
    },
    {
      id: 2,
      title: "Cisco ACI Data Center",
      description:
        "Designed and deployed Cisco ACI multi-tenant data center fabric.",
      technologies: ["Cisco ACI", "Nexus", "VMware"],
      status: "Completed",
      image: "/projects/aci-datacenter.jpg",
    },
    {
      id: 3,
      title: "SD-WAN Deployment",
      description:
        "Implemented Cisco SD-WAN across multiple branch offices.",
      technologies: ["Cisco SD-WAN", "Python", "REST API"],
      status: "Completed",
      image: "/projects/sd-wan.jpg",
    },
  ];

  return Response.json(projects);
}