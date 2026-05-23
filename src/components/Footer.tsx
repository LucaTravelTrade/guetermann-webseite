import { Phone, Mail, MapPin, Clock, Wrench } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Spalte 1: Über */}
          <div>
            <h3 className="text-lg font-bold mb-4">KFZ-Werkstatt Gütermann</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Familienunternehmen seit 1982. Ihr Partner für alle KFZ-Arbeiten
              in Bellheim und Umgebung.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm">
              <Wrench size={16} className="text-secondary" />
              <span>4x &ldquo;Werkstatt des Vertrauen&rdquo;</span>
            </div>
          </div>

          {/* Spalte 2: Kontakt */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-secondary mt-0.5 shrink-0" />
                <span>In der Fellach 16<br />76756 Bellheim</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-secondary shrink-0" />
                <a href="tel:+4972724575" className="hover:text-secondary transition-colors">
                  07272 - 4575
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-secondary shrink-0" />
                <a href="mailto:info@guetermann-gmbh.de" className="hover:text-secondary transition-colors">
                  info@guetermann-gmbh.de
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-secondary shrink-0" />
                <span>Mo–Fr 7:30–12:00, 13:00–18:00<br />Sa 8:00–12:00</span>
              </li>
            </ul>
          </div>

          {/* Spalte 3: Notfall */}
          <div>
            <h3 className="text-lg font-bold mb-4">Notfallservice</h3>
            <div className="bg-accent/20 border border-accent/40 rounded-lg p-4">
              <p className="text-sm font-semibold mb-2">
                24h Abschlepp- & Notfallservice
              </p>
              <a
                href="tel:+491623973825"
                className="inline-flex items-center gap-2 bg-accent hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors"
              >
                <Phone size={16} />
                0162 / 3973825
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Untere Leiste */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <span>© 2026 KFZ-Werkstatt Gütermann GmbH</span>
          <div className="flex items-center gap-4">
            <Link href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
