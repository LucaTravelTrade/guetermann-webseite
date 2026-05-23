"use client";

import { Phone, ArrowRight, Shield, Wrench } from "lucide-react";

export default function Hero() {
  return (
      <section className="relative bg-gradient-to-br from-primary via-primary to-[#0d2137] text-white overflow-hidden">
      {/* Mobile Background Image */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src="/images/hero.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
              <Shield size={16} className="text-success" />
              <span>4x zur &ldquo;Werkstatt des Vertrauen&rdquo; ausgezeichnet worden</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Ihr Auto.
              <br />
              <span className="text-secondary">Unsere Leidenschaft.</span>
              <br />
              Seit 40 Jahren.
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              Familienunternehmen in Bellheim – persönlicher Service,
              fachgerechte Reparaturen und rundum Rundum-Sorglos-Paket
              seit 1982.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:shadow-lg hover:shadow-blue-500/25"
              >
                Termin vereinbaren
                <ArrowRight size={20} />
              </a>
              <a
                href="tel:+4972724575"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all"
              >
                <Phone size={20} />
                07272 - 4575
              </a>
            </div>
          </div>

          {/* Bild */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/hero.jpg"
                  alt="KFZ-Werkstatt Gütermann – Werkstatt von außen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          style={{ marginBottom: "-1px" }}
        >
          <path
            d="M0 80L60 73.3C120 66.7 240 53.3 360 46.7C480 40 600 40 720 46.7C840 53.3 960 66.7 1080 70C1200 73.3 1320 66.7 1380 63.3L1440 60V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
