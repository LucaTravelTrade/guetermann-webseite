import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Thomas M.",
    text: "Seit Jahren mein vertrauenswürdiger Betrieb. Schnelle Terminvergabe, faire Preise und immer eine ehrliche Einschätzung. Kann ich nur empfehlen!",
    rating: 5,
    date: "vor 2 Wochen",
  },
  {
    name: "Sabine K.",
    text: "Nach einem Unfall haben sie alles mit meiner Versicherung geregelt. Stressfrei und professionell. Die Reparatur war top!",
    rating: 5,
    date: "vor 1 Monat",
  },
  {
    name: "Michael B.",
    text: "HU-Vorab-Check hat geholfen, die Prüfung beim ersten Mal zu bestehen. Freundlicher Service und kompetente Beratung. Gerne wieder!",
    rating: 5,
    date: "vor 3 Wochen",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Kunden über uns
          </h2>
          <p className="text-gray max-w-2xl mx-auto mb-4">
            Was unsere Kunden über uns sagen.
          </p>
          <a
            href="https://maps.app.goo.gl/zp6HsfSQXPiwSf7v8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-secondary hover:underline text-sm font-medium"
          >
            Alle Bewertungen auf Google ansehen
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, index) => (
            <div key={index} className="bg-light rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray mb-4 italic">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-primary">– {r.name}</p>
                <p className="text-xs text-gray">{r.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
