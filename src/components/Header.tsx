import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-xl md:text-2xl font-bold tracking-tight">
              Gütermann
            </span>
            <span className="text-xs md:text-sm text-gray-300 hidden sm:block">
              KFZ-Werkstatt
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+497****4575"
              className="flex items-center gap-2 bg-secondary hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              <Phone size={16} />
              07272 - 4575
            </a>
          </nav>

          {/* Mobile Menu — pure CSS checkbox hack, zero JS */}
          <div className="md:hidden relative">
            <input
              type="checkbox"
              id="mobile-menu-toggle"
              className="peer hidden"
            />
            <label
              htmlFor="mobile-menu-toggle"
              className="p-2 rounded-md cursor-pointer flex items-center justify-center"
            >
              <Menu size={28} className="peer-checked:hidden" />
              <X size={28} className="hidden peer-checked:block" />
            </label>

            {/* Mobile Nav Panel */}
            <div className="hidden peer-checked:block fixed inset-0 top-16 bg-[#0d2137] z-50 overflow-y-auto">
              <div className="px-4 py-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-white py-4 px-4 rounded-xl active:bg-white/10 transition-colors border-b border-white/5"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="tel:+497****4575"
                  className="flex items-center gap-3 bg-secondary text-white px-5 py-4 rounded-xl text-lg font-semibold mt-4"
                >
                  <Phone size={22} />
                  07272 - 4575
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
