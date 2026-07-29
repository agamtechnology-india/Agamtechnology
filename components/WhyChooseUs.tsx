import { CheckCircle } from "lucide-react";

const benefits = [
  "Enterprise Network Specialists",
  "Cisco & Fortinet Expertise",
  "Network Automation using Python",
  "Cloud & Data Center Solutions",
  "24×7 Technical Support",
  "Customer-Focused Consulting",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-900 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Why Choose Agam Technology?
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-4 rounded-lg border border-slate-700 bg-slate-800 p-5"
            >
              <CheckCircle className="text-blue-400" size={28} />

              <span className="text-lg text-white">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}