import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutz – KFZ-Werkstatt Gütermann GmbH",
  description: "Datenschutzerklärung der KFZ-Werkstatt Gütermann GmbH in Bellheim.",
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Datenschutzerklärung</h1>

          <div className="space-y-6 text-sm text-gray">
            <section>
              <h2 className="text-xl font-bold text-primary mb-2">Verantwortlicher</h2>
              <p>
                Heike Gütermann<br />
                KFZ-Werkstatt Gütermann GmbH<br />
                In der Fellach 16, 76756 Bellheim<br />
                E-Mail: info@guetermann-gmbh.de
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-2">Allgemeines zur Datenverarbeitung</h2>
              <p>
                Wir erheben und verwenden personenbezogene Daten unserer Nutzer grundsätzlich nur,
                soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte
                und Leistungen erforderlich ist.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-2">Daten beim Besuch der Website</h2>
              <p>Bei jedem Aufruf erfasst unser System automatisch:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Domainname des Internet-Service-Providers</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mt-2">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-2">SSL-Verschlüsselung</h2>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung. Eine verschlüsselte
                Verbindung erkennen Sie am Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-2">Kontaktformular</h2>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben inklusive
                der Kontaktdaten zwecks Bearbeitung gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-2">Ihre Rechte</h2>
              <p>Sie haben das Recht auf:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong>Auskunft</strong> (Art. 15 DSGVO)</li>
                <li><strong>Berichtigung</strong> (Art. 16 DSGVO)</li>
                <li><strong>Löschung</strong> (Art. 17 DSGVO)</li>
                <li><strong>Einschränkung</strong> (Art. 18 DSGVO)</li>
                <li><strong>Widerspruch</strong> (Art. 21 DSGVO)</li>
                <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-2">Aktualität</h2>
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2026.
                Die jeweils aktuelle Version kann jederzeit auf dieser Seite abgerufen werden.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
