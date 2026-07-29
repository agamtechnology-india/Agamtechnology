type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 transition hover:border-blue-500 hover:shadow-lg">
      <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>

      <p className="text-slate-300">{description}</p>
    </div>
  );
}