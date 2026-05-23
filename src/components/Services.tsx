"use client";

import {
  Wrench,
  Zap,
  Car,
  CircleDot,
  Gauge,
  Cog,
  Snowflake,
  FileCheck,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Inspektion & Wartung",
    description:
      "Regelmäßige Inspektion und Wartung für Werterhalt und Zuverlässigkeit Ihres Fahrzeugs. Unabhängiger Reparatur- und Wartungsbetrieb.",
  },
  {
    icon: Zap,
    title: "Fahrzeug-Elektrik",
    description:
      "Probleme mit der Fahrzeugelektrik oder -elektronik? Unser Kfz-Meister ist durch ständige Schulungen bestens ausgebildet.",
  },
  {
    icon: Car,
    title: "Unfall-Instandsetzung",
    description:
      "Fachgerecht nach Herstellervorgaben mit Originalteile. Wir kümmern uns auch um die Versicherungsformalitäten.",
  },
  {
    icon: CircleDot,
    title: "Reifen & Autoglas",
    description:
      "Reifen aller namhaften Hersteller in allen Größen. Fachgerechter Einbau und Entsorgung. Autoglas-Service inklusive.",
  },
  {
    icon: Gauge,
    title: "Achsvermessung",
    description:
      "Perfekter Geradeauslauf und sicheres Kurvenverhalten mit erstklassiger Messtechnik für nahezu jede Fahrwerkskonstruktion.",
  },
  {
    icon: Cog,
    title: "Automatikgetriebe",
    description:
      "Automatikgetriebeölspülung zur Vorbeugung und Beseitigung von Getriebeproblemen. Herstellerunterschiede werden beachtet.",
  },
  {
    icon: Snowflake,
    title: "Klimaanlagen-Service",
    description:
      "Dichtheit, Systemdrücke und Kühlleistung prüfen. Kältemittel ersetzen und recyceln. Damit die Klima optimal funktioniert.",
  },
  {
    icon: FileCheck,
    title: "HU & AU",
    description:
      "Hauptuntersuchung und Abgasuntersuchung von zertifizierten Prüforganisationen in unserer Werkstatt. Vorab-Check inklusive.",
  },
  {
    icon: Truck,
    title: "24h Abschlepp-Service",
    description:
      "Notfall? Wir bergen Ihren PKW fachgerecht von der Unfallstelle. 24h-Service mit modernem Fuhrpark.",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="bg-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-gray max-w-2xl mx-auto">
            Von der Inspektion bis zur Unfallinstandsetzung – wir bieten
            Rundum-Sorglos-Service für Ihr Auto aus einer Hand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 text-secondary mb-4">
                <service.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
