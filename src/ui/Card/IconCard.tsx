import type { LucideIcon } from "lucide-react";

type IconCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function IconCard({
  icon: Icon,
  title,
  description,
}: IconCardProps) {
  return (
    <div className="border border-gray-300 bg-white rounded-2xl p-6 w-full shadow-sm cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-50">
      
      <Icon className="w-7 h-7 mb-3 text-slate-700" strokeWidth={2.5} />

      <h3 className="text-lg font-semibold text-gray-900 mb-1.5 leading-snug">
        {title}
      </h3>

      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}