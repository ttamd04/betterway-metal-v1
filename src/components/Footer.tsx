import Link from "next/link";

const footerLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About Us" },
  { href: "/#prices", label: "Price List" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#location", label: "Location" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Brand + tagline */}
          <div>
            <p className="text-lg font-semibold">Betterway Metal</p>
            <p className="mt-2 text-sm text-gray-light">
              Fair prices, fast service, and a better way forward. North
              Parramatta&apos;s trusted scrap metal recycler.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-light">
              Quick Links
            </p>
            <nav className="mt-3 flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-light transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-light">
              Contact
            </p>
            <div className="mt-3 space-y-2 text-sm text-gray-light">
              <p>12 North Rocks Road</p>
              <p>North Parramatta, NSW 2151</p>
              <a
                href="tel:0426515998"
                className="block transition-colors hover:text-accent"
              >
                0426 515 998
              </a>
              <p className="pt-1">Mon–Fri 7am–5pm · Sat 8am–2pm</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-white/20 pt-6 text-center text-sm text-gray-light">
          &copy; {year} Betterway Metal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
