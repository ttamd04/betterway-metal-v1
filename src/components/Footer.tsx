import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";

const siteLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#prices", label: "Price List" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#location", label: "Location" },
  { href: "/#contact", label: "Contact Us" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-primary-dark text-white">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <Image
              src="/betterway-logo.png"
              alt="Betterway Metal"
              width={180}
              height={44}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              North Parramatta&apos;s trusted scrap metal recycler. Fair prices,
              fast service, and environmentally responsible recycling — that&apos;s
              the Betterway difference.
            </p>
            <a
              href="tel:0426515998"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              0426 515 998
            </a>
          </div>

          {/* Quick Links column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Quick Links
            </h3>
            <nav className="mt-4 flex flex-col gap-2.5">
              {siteLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Our Services
            </h3>
            <nav className="mt-4 flex flex-col gap-2.5">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="text-sm text-white/70 transition-colors hover:text-accent"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Hours column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Visit Us
            </h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <div className="text-sm text-white/70">
                  <p>12 North Rocks Road</p>
                  <p>North Parramatta, NSW 2151</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="text-sm text-white/70">
                  <p className="font-medium text-white/90">Opening Hours</p>
                  <p className="mt-1">Mon – Fri: 7:00 AM – 5:00 PM</p>
                  <p>Saturday: 8:00 AM – 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=12+North+Rocks+Road,+North+Parramatta+NSW+2151"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                Get Directions
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-primary-dark">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-white/50">
              &copy; {year} Betterway Metal. All rights reserved.
            </p>
            <p className="text-xs text-white/50">
              ABN: XX XXX XXX XXX
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
