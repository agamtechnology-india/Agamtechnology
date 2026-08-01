export async function GET() {
  const services = [
    {
      id: 1,
      title: "Enterprise Networking",
      description:
        "Design, deployment, and support for enterprise network infrastructure.",
    },
    {
      id: 2,
      title: "Network Automation",
      description:
        "Automate repetitive network tasks using Python, Ansible, and REST APIs.",
    },
    {
      id: 3,
      title: "Cloud Solutions",
      description:
        "Cloud connectivity, migration, and hybrid cloud architecture.",
    },
    {
      id: 4,
      title: "Data Center",
      description:
        "Cisco ACI, Nexus, virtualization, and modern data center solutions.",
    },
    {
      id: 5,
      title: "Cyber Security",
      description:
        "Firewall, VPN, Zero Trust, and enterprise security best practices.",
    },
    {
      id: 6,
      title: "IT Consulting",
      description:
        "Technology strategy, architecture, and digital transformation consulting.",
    },
  ];

  return Response.json(services);
}