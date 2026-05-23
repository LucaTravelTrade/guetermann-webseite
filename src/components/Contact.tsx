"use client";

import { Phone, Mail, MapPin, Clock, Send, AlertTriangle, Star, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="bg-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Überschrift zentriert */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Kontakt & Termin
          </h2>
          <p className="text-gray max-w-2xl mx-auto">
            Vereinbaren Sie einen Termin oder rufen Sie uns direkt an.
            Wir freuen uns auf Ihr Auto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Linke Spalte: Kontaktinfos + Maps */}
          <div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-6">So erreichen Sie uns</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark">Adresse</p>
                    <p className="text-sm text-gray">
                      KFZ-Werkstatt Gütermann GmbH<br />
                      In der Fellach 16<br />
                      76756 Bellheim
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark">Telefon</p>
                    <a href="tel:+4972724575" className="text-sm text-secondary hover:underline font-medium">
                      07272 - 4575
                    </a>
                    <br />
                    <span className="text-xs text-gray">Fax: 07272 - 75784</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark">E-Mail</p>
                    <a href="mailto:info@guetermann-gmbh.de" className="text-sm text-secondary hover:underline">
                      info@guetermann-gmbh.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark">Öffnungszeiten</p>
                    <p className="text-sm text-gray">
                      Mo–Fr: 7:30–12:00, 13:00–18:00 Uhr<br />
                      Sa: 8:00–12:00 Uhr
                    </p>
                  </div>
                </div>
              </div>

              {/* Notfall-Box */}
              <div className="mt-8 bg-accent/10 border border-accent/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle size={18} className="text-accent" />
                  <span className="font-bold text-accent">24h Notfallservice</span>
                </div>
                <p className="text-sm text-gray mb-3">
                  Abschlepp- und Notfall-Service rund um die Uhr.
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

            {/* Google Maps Embed */}
            <div className="mt-6 bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-primary">Standort</h4>
                <a
                  href="https://maps.app.goo.gl/zp6HsfSQXPiwSf7v8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-secondary hover:underline flex items-center gap-1"
                >
                  In Google Maps öffnen <ExternalLink size={12} />
                </a>
              </div>
              <div className="flex justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.5!2d8.2736!3d49.1983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797a0c0c0c0c0c0%3A0x0!2sIn+d.+Fellach+16%2C+76756+Bellheim!5e0!3m2!1sde!2sde"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: "12px", maxWidth: "100%" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps – KFZ-Werkstatt Gütermann GmbH, In der Fellach 16, 76756 Bellheim"
                />
              </div>
            </div>
          </div>

          {/* Rechte Spalte: Formular */}
          <div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-6">Termin anfragen</h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-success" />
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2">Vielen Dank!</h4>
                  <p className="text-sm text-gray">Ihre Anfrage wurde gesendet. Wir melden uns bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-dark mb-1">Name *</label>
                    <input type="text" required value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition text-sm"
                      placeholder="Ihr Name" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1">Telefon *</label>
                      <input type="tel" required value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition text-sm"
                        placeholder="Ihre Telefonnummer" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1">E-Mail</label>
                      <input type="email" value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition text-sm"
                        placeholder="Ihre E-Mail" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark mb-1">Gewünschte Leistung</label>
                    <select value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition text-sm bg-white">
                      <option value="">Bitte wählen...</option>
                      <option value="inspektion">Inspektion & Wartung</option>
                      <option value="elektrik">Fahrzeug-Elektrik</option>
                      <option value="unfall">Unfall-Instandsetzung</option>
                      <option value="reifen">Reifen & Autoglas</option>
                      <option value="achsvermessung">Achsvermessung</option>
                      <option value="automatik">Automatikgetriebe</option>
                      <option value="klima">Klimaanlagen-Service</option>
                      <option value="hu">HU & AU Vorab-Check</option>
                      <option value="abschlepp">Abschlepp-Service</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark mb-1">Nachricht</label>
                    <textarea rows={4} value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition text-sm resize-none"
                      placeholder="Ihre Nachricht oder Wunschtermin..." />
                  </div>
                  <button type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors">
                    <Send size={18} />
                    Anfrage senden
                  </button>
                  <p className="text-xs text-gray text-center">
                    [PLATZHALTER: Datenschutz-Hinweis]<br />
                    Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zu.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
