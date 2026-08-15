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
      try {
        const response = await fetch("/api/services", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(
            `Failed to fetch services: ${response.status}`
          );
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Services API did not return an array");
        }

        setServices(data);
      } catch (error) {
        console.error("Error loading services:", error);
        setServices([]);
      }
    }

    fetchServices();
  }, []);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-950 px-6 py-24"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-blue-600/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            What We Do
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Enterprise technology solutions designed to automate,
            secure, and modernize your IT infrastructure.
          </p>
        </div>

        {/* Services */}
        {services.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-10 text-center">
            <p className="text-slate-400">
              No services available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}