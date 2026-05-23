import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KFZ-Werkstatt Gütermann GmbH | Bellheim | Inspektion, HU & mehr",
  description:
    "KFZ-Werkstatt Gütermann in Bellheim – seit 40 Jahren Ihr Partner für Inspektion, Unfallinstandsetzung, HU & AU und mehr. Familienunternehmen mit persönlichem Service.",
  keywords: [
    "KFZ-Werkstatt", "Bellheim", "Autoreparatur", "Inspektion", "HU", "AU",
    "Unfallinstandsetzung", "Abschleppservice", "Reifen", "Klimaanlage", "Achsvermessung",
  ],
  openGraph: {
    title: "KFZ-Werkstatt Gütermann GmbH | Bellheim",
    description:
      "Seit 40 Jahren Ihr Partner für Inspektion, Unfallinstandsetzung, HU & AU und mehr.",
    type: "website",
    locale: "de_DE",
    siteName: "KFZ-Werkstatt Gütermann GmbH",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.guetermann-gmbh.de" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "KFZ-Werkstatt Gütermann GmbH",
  description:
    "KFZ-Werkstatt in Bellheim – Inspektion, Unfallinstandsetzung, HU & AU, Abschleppservice",
  url: "https://www.guetermann-gmbh.de",
  telephone: "+49-7272-4575",
  email: "info@guetermann-gmbh.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "In der Fellach 16",
    addressLocality: "Bellheim",
    postalCode: "76756",
    addressCountry: "DE",
  },
  geo: { "@type": "GeoCoordinates", latitude: 49.1983, longitude: 8.2736 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30", closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "13:00", closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday", opens: "08:00", closes: "12:00",
    },
  ],
  priceRange: "€€",
  foundingDate: "1982-08-16",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${inter.variable} h-full antialiased`}>
      <head>
        <Script
          id="json-ld-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-dark">
        {children}
      </body>
    </html>
  );
}
