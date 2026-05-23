"use client";

import { CheckCircle } from "lucide-react";

const usps = [
  "Unabhängiger Reparatur- und Wartungsbetrieb (kein Hersteller-Zwang)",
  "Originalteile & Herstellervorgaben bei jeder Reparatur",
  "Persönlicher Kundenkontakt – Familienunternehmen seit 1982",
  "Versicherungsformalitäten abwickeln wir für Sie",
  "Vorab-Check vor der HU – damit die Prüfung klappt",
  "4x ausgezeichnet als \"Werkstatt des Vertrauen\"",
];

export default function About() {
  return (
    <section id="ueber-uns" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Warum Gütermann?
            </h2>
            <p className="text-gray mb-6 leading-relaxed">
              Seit 1982 sind wir als Familienunternehmen in der
              KFZ-Branche tätig. Was als kleine Werkstatt in Ottersheim
              begann, ist heute eine moderne KFZ-Werkstatt in Bellheim –
              gewachsen durch konsequent guten Service und immer
              persönlichen Kontakt.
            </p>
            <p className="text-gray mb-8 leading-relaxed">
              Sohn Marco (KFZ-Mechaniker & Karosseriebau) und Tochter
              Heike (Betriebswirtin des Handwerks) führen das Werk mit
              der gleichen Leidenschaft wie Karl Gütermann damals
              begonnen hat.
            </p>

            <ul className="space-y-3">
              {usps.map((usp, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-success shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-dark">{usp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bilder */}
          <div className="space-y-4">
            {/* 2 Werkstatt-Bilder nebeneinander */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden aspect-square">
                <img
                  src="/images/about-werkstatt.jpg"
                  alt="KFZ-Werkstatt Gütermann – Werkstatt mit Kunden"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden aspect-square">
                <img
                  src="/images/about-werkstatt-2.jpg"
                  alt="KFZ-Werkstatt Gütermann"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Team-Foto – volle Breite */}
            <div className="rounded-xl overflow-hidden aspect-[2/1]">
              <img
                src="/images/team.jpg"
                alt="Team KFZ-Werkstatt Gütermann"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
