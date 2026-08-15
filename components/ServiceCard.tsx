type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10">
      {/* Top accent */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-70 transition duration-300 group-hover:opacity-100" />

      {/* Icon */}
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-xl text-blue-400 transition duration-300 group-hover:scale-110 group-hover:bg-blue-500/20">
        ✦
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white transition duration-300 group-hover:text-blue-400">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-slate-400">
        {description}
      </p>

      {/* Learn more indicator */}
      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition duration-300 group-hover:gap-3">
        Learn More
        <span>→</span>
      </div>
    </div>
  );
}