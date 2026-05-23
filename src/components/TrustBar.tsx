import { Calendar, Award, Users, Phone } from "lucide-react";

const stats = [
  { icon: Calendar, value: "40+", label: "Jahre Erfahrung" },
  { icon: Award, value: "4x", label: "Werkstatt des Vertrauen" },
  { icon: Users, value: "Familien-", label: "unternehmen" },
  { icon: Phone, value: "24h", label: "Notfallservice" },
];

export default function TrustBar() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 text-secondary mb-3">
                <stat.icon size={26} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-gray mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
