"use client";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
interface Service {
  id: number;
  title: string;
  description: string;
}
export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  useEffect(() => {
  async function fetchServices() {
    const response = await fetch("/api/services");

    const data = await response.json();

    setServices(data);
  }

  fetchServices();
}, []);
  return (
    <section id="services" className="bg-slate-950 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Our Services
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}