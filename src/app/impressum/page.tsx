import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum – KFZ-Werkstatt Gütermann GmbH",
  description: "Impressum der KFZ-Werkstatt Gütermann GmbH in Bellheim.",
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Impressum</h1>

          <div className="space-y-6 text-sm text-gray">
            <section>
              <h2 className="text-xl font-bold text-primary mb-2">Angaben gemäß § 5 TMG</h2>
              <p>
                KFZ-Werkstatt Gütermann GmbH<br />
                In der Fellach 16<br />
                76756 Bellheim
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-2">Vertreten durch</h2>
              <p>Karl Gütermann (Geschäftsführer)<br />Heike Gütermann (Geschäftsführerin)</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-2">Kontakt</h2>
              <p>
                Telefon: 07272 - 4575<br />
                Telefax: 07272 - 75784<br />
                E-Mail: info@guetermann-gmbh.de<br />
                24h Notfall- und Abschleppservice: 0162 / 3973825
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-2">Registereintrag</h2>
              <p>Eintragung im Handelsregister.<br />Registergericht: Landau in der Pfalz<br />Registernummer: HRB 11425</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-2">Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />DE 161077288</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>Heike Gütermann</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-2">Streitbeilegung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-2">
                Wir sind nicht bereit oder verpflichtet, an einem Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-2">Haftungsausschluss</h2>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
