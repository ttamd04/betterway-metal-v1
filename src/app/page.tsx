import Image from "next/image";
import Link from "next/link";
import ReviewCarousel from "@/components/ReviewCarousel";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import {
  CircleDot,
  Cpu,
  BatteryMedium,
  Container,
  Flame,
  Refrigerator,
  Disc,
  Zap,
  Gem,
  Boxes,
} from "lucide-react";
import { services } from "@/lib/services";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  copper: CircleDot,
  brass: Gem,
  aluminium: Boxes,
  "stainless-steel": Disc,
  "white-goods": Refrigerator,
  steel: Container,
  "e-waste": Cpu,
  radiators: Flame,
  batteries: BatteryMedium,
  "motors-compressors": Zap,
};

export default function Home() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section
        id="home"
        className="relative flex min-h-[70vh] items-center justify-center overflow-hidden"
      >
        <Image
          src="/hero-image.jpg"
          alt="Betterway Metal scrap yard"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="inline-block rounded-xl bg-primary/30 px-6 py-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Fair prices, fast service, and a better way forward.
          </h1>
          <p className="mx-auto mt-6 inline-block max-w-2xl rounded-lg bg-primary/25 px-5 py-3 text-lg leading-relaxed text-gray-200 sm:text-xl">
            In and out in minutes. Betterway Metal provides fair prices and a
            quick turnaround for scrap metal. North Parramatta&apos;s go-to
            scrap yard. Call or text us now on{" "}
            <a
              href="tel:0426515998"
              className="font-semibold text-accent underline underline-offset-2 hover:text-white"
            >
              0426 515 998
            </a>
            .
          </p>
          <div className="mt-8">
            <Link
              href="#contact"
              className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-accent-dark"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="scroll-mt-20 bg-bg py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-primary sm:text-5xl">
              Our Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
              We buy all types of scrap metal at fair prices. Click any service
              to learn more.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {services.map((service) => {
              const Icon = iconMap[service.slug];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-xl border border-gray-light bg-surface p-5 shadow-sm transition-all hover:border-accent hover:shadow-md"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-accent/20 group-hover:text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-primary">
                    {service.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-text-light line-clamp-3">
                    {service.description}
                  </p>
                  <span className="mt-3 inline-block text-xs font-medium text-accent group-hover:underline">
                    Learn more &rarr;
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== ABOUT US SECTION ===== */}
      <section id="about" className="scroll-mt-20 bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-primary sm:text-5xl">
              About Us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
              North Parramatta&apos;s trusted scrap metal recycler — built on
              honest pricing and fast service.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-6 text-lg leading-relaxed text-text-light">
            <p>
              Betterway Metal was founded with a simple idea: scrap metal
              recycling should be easy, fair, and fast. Too many yards make you
              wait around, lowball you on price, or make the whole process harder
              than it needs to be. We do things differently.
            </p>
            <p>
              Based in North Parramatta, we buy all types of scrap metal — from
              copper and aluminium to batteries, cables, white goods, and
              everything in between. Whether you&apos;re a tradie clearing out a
              job site, a business with regular scrap, or a homeowner with a
              garage full of old metal, we&apos;ll give you a fair price and
              have you in and out in minutes.
            </p>
            <p>
              We&apos;re committed to environmentally responsible recycling.
              Every piece of metal we process is sorted, recycled, and kept out
              of landfill. It&apos;s better for the planet, better for the
              community, and better for your wallet.
            </p>
          </div>

          {/* Value props */}
          <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary">
                Fair Prices
              </h3>
              <p className="mt-2 text-sm text-text-light">
                We stay up to date with market rates and pass those prices on to
                you. No games, no hidden fees.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary">
                Fast Service
              </h3>
              <p className="mt-2 text-sm text-text-light">
                Drive in, get weighed, get paid. We respect your time and keep
                things moving.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.592L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary">
                Eco-Friendly
              </h3>
              <p className="mt-2 text-sm text-text-light">
                Every piece of metal we handle is responsibly recycled and kept
                out of landfill.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICE LIST SECTION ===== */}
      <section id="prices" className="scroll-mt-20 bg-bg py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-primary sm:text-5xl">
              Price List
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
              Our current scrap metal prices. Rates are updated regularly based
              on market conditions. Call{" "}
              <a
                href="tel:0426515998"
                className="font-semibold text-accent hover:underline"
              >
                0426 515 998
              </a>{" "}
              for a live quote.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-xl border border-gray-light bg-white shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-6 py-4 text-sm font-semibold">Metal</th>
                  <th className="px-6 py-4 text-sm font-semibold">Grade / Type</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">
                    Price (per kg)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-light">
                {/* Copper */}
                <tr className="transition-colors hover:bg-bg/50">
                  <td className="px-6 py-3 text-sm font-semibold text-primary" rowSpan={4}>
                    Copper
                  </td>
                  <td className="px-6 py-3 text-sm text-text-light">Bright / Shiny Copper</td>
                  <td className="px-6 py-3 text-right text-sm font-semibold text-accent">
                    $10.50 – $11.00
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-bg/50">
                  <td className="px-6 py-3 text-sm text-text-light">#1 Copper Pipe</td>
                  <td className="px-6 py-3 text-right text-sm font-semibold text-accent">
                    $9.80 – $10.30
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-bg/50">
                  <td className="px-6 py-3 text-sm text-text-light">#2 Copper (Mixed)</td>
                  <td className="px-6 py-3 text-right text-sm font-semibold text-accent">
                    $8.50 – $9.20
                  </td>
                </tr>
                <tr className="border-b-2 border-gray-light transition-colors hover:bg-bg/50">
                  <td className="px-6 py-3 text-sm text-text-light">Insulated Copper Wire</td>
                  <td className="px-6 py-3 text-right text-sm font-semibold text-accent">
                    $3.00 – $5.50
                  </td>
                </tr>

                {/* Brass */}
                <tr className="transition-colors hover:bg-bg/50">
                  <td className="px-6 py-3 text-sm font-semibold text-primary" rowSpan={2}>
                    Brass
                  </td>
                  <td className="px-6 py-3 text-sm text-text-light">Clean Brass (taps, fittings)</td>
                  <td className="px-6 py-3 text-right text-sm font-semibold text-accent">
                    $5.50 – $6.00
                  </td>
                </tr>
                <tr className="border-b-2 border-gray-light transition-colors hover:bg-bg/50">
                  <td className="px-6 py-3 text-sm text-text-light">Mixed Brass</td>
                  <td className="px-6 py-3 text-right text-sm font-semibold text-accent">
                    $4.00 – $4.80
                  </td>
                </tr>

                {/* Aluminium */}
                <tr className="transition-colors hover:bg-bg/50">
                  <td className="px-6 py-3 text-sm font-semibold text-primary" rowSpan={3}>
                    Aluminium
                  </td>
                  <td className="px-6 py-3 text-sm text-text-light">Clean Aluminium (extrusions)</td>
                  <td className="px-6 py-3 text-right text-sm font-semibold text-accent">
                    $1.80 – $2.20
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-bg/50">
                  <td className="px-6 py-3 text-sm text-text-light">Aluminium Cans</td>
                  <td className="px-6 py-3 text-right text-sm font-semibold text-accent">
                    $0.80 – $1.10
                  </td>
                </tr>
                <tr className="border-b-2 border-gray-light transition-colors hover:bg-bg/50">
                  <td className="px-6 py-3 text-sm text-text-light">Cast Aluminium</td>
                  <td className="px-6 py-3 text-right text-sm font-semibold text-accent">
                    $1.20 – $1.60
                  </td>
                </tr>

                {/* Stainless Steel */}
                <tr className="transition-colors hover:bg-bg/50">
                  <td className="px-6 py-3 text-sm font-semibold text-primary" rowSpan={2}>
                    Stainless Steel
                  </td>
                  <td className="px-6 py-3 text-sm text-text-light">304 Grade</td>
                  <td className="px-6 py-3 text-right text-sm font-semibold text-accent">
                    $1.50 – $2.00
                  </td>
                </tr>
                <tr className="border-b-2 border-gray-light transition-colors hover:bg-bg/50">
                  <td className="px-6 py-3 text-sm text-text-light">Mixed Stainless</td>
                  <td className="px-6 py-3 text-right text-sm font-semibold text-accent">
                    $0.80 – $1.20
                  </td>
                </tr>

                {/* White Goods */}
                <tr className="border-b-2 border-gray-light transition-colors hover:bg-bg/50">
                  <td className="px-6 py-3 text-sm font-semibold text-primary">White Goods</td>
                  <td className="px-6 py-3 text-sm text-text-light">Fridges, Washers, Dryers, Ovens</td>
                  <td className="px-6 py-3 text-right text-sm font-semibold text-accent">
                    Free drop-off
                  </td>
                </tr>

                {/* Steel */}
                <tr className="transition-colors hover:bg-bg/50">
                  <td className="px-6 py-3 text-sm font-semibold text-primary" rowSpan={2}>
                    Steel
                  </td>
                  <td className="px-6 py-3 text-sm text-text-light">Heavy Steel (beams, plate)</td>
                  <td className="px-6 py-3 text-right text-sm font-semibold text-accent">
                    $0.20 – $0.35
                  </td>
                </tr>
                <tr className="border-b-2 border-gray-light transition-colors hover:bg-bg/50">
                  <td className="px-6 py-3 text-sm text-text-light">Light / Mixed Steel</td>
                  <td className="px-6 py-3 text-right text-sm font-semibold text-accent">
                    $0.10 – $0.20
                  </td>
                </tr>

                {/* E-Waste */}
                <tr className="transition-colors hover:bg-bg/50">
                  <td className="px-6 py-3 text-sm font-semibold text-primary" rowSpan={2}>
                    E-Waste
                  </td>
                  <td className="px-6 py-3 text-sm text-text-light">Motherboards / Circuit Boards</td>
                  <td className="px-6 py-3 text-right text-sm font-semibold text-accent">
                    $3.00 – $5.00
                  </td>
                </tr>
                <tr className="border-b-2 border-gray-light transition-colors hover:bg-bg/50">
                  <td className="px-6 py-3 text-sm text-text-light">Mixed E-Waste</td>
                  <td className="px-6 py-3 text-right text-sm font-semibold text-accent">
                    $0.50 – $1.50
                  </td>
                </tr>

                {/* Radiators */}
                <tr className="transition-colors hover:bg-bg/50">
                  <td className="px-6 py-3 text-sm font-semibold text-primary" rowSpan={2}>
                    Radiators
                  </td>
                  <td className="px-6 py-3 text-sm text-text-light">Copper / Brass Radiators</td>
                  <td className="px-6 py-3 text-right text-sm font-semibold text-accent">
                    $3.50 – $4.50
                  </td>
                </tr>
                <tr className="border-b-2 border-gray-light transition-colors hover:bg-bg/50">
                  <td className="px-6 py-3 text-sm text-text-light">Aluminium Radiators</td>
                  <td className="px-6 py-3 text-right text-sm font-semibold text-accent">
                    $1.00 – $1.50
                  </td>
                </tr>

                {/* Batteries */}
                <tr className="border-b-2 border-gray-light transition-colors hover:bg-bg/50">
                  <td className="px-6 py-3 text-sm font-semibold text-primary">Batteries</td>
                  <td className="px-6 py-3 text-sm text-text-light">Car / Truck Batteries</td>
                  <td className="px-6 py-3 text-right text-sm font-semibold text-accent">
                    $0.50 – $0.80
                  </td>
                </tr>

                {/* Motors / Compressors */}
                <tr className="transition-colors hover:bg-bg/50">
                  <td className="px-6 py-3 text-sm font-semibold text-primary" rowSpan={2}>
                    Motors / Compressors
                  </td>
                  <td className="px-6 py-3 text-sm text-text-light">Electric Motors (all sizes)</td>
                  <td className="px-6 py-3 text-right text-sm font-semibold text-accent">
                    $0.80 – $1.50
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-bg/50">
                  <td className="px-6 py-3 text-sm text-text-light">AC / Fridge Compressors</td>
                  <td className="px-6 py-3 text-right text-sm font-semibold text-accent">
                    $0.30 – $0.60
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-center text-sm text-text-light">
            Prices are indicative and subject to change based on market
            conditions, quantity, and metal condition. For an exact quote, bring
            your scrap in or give us a call.
          </p>
        </div>
      </section>

      {/* ===== REVIEWS SECTION ===== */}
      <section id="reviews" className="scroll-mt-20 bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-primary sm:text-5xl">
              What Our Customers Say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
              Don&apos;t just take our word for it — hear from the people who
              trust Betterway Metal with their scrap.
            </p>
          </div>

          <div className="mt-12">
            <ReviewCarousel />
          </div>

          {/* Google rating summary */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-text-light">
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="font-semibold text-text">4.8</span>
            <span>rating on Google</span>
            <span className="text-gray">·</span>
            <span>Based on 47 reviews</span>
          </div>
        </div>
      </section>

      {/* ===== LOCATION SECTION ===== */}
      <section id="location" className="scroll-mt-20 bg-bg py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-primary sm:text-5xl">
              Our Location
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
              Visit us at our North Parramatta yard — easy to find and plenty of
              room to unload.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-5">
            {/* Map */}
            <div className="overflow-hidden rounded-xl border border-gray-light shadow-sm lg:col-span-3">
              <iframe
                title="Betterway Metal location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.8!2d151.0!3d-33.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTIgTm9ydGggUm9ja3MgUm9hZCwgTm9ydGggUGFycmFtYXR0YSBOU1cgMjE1MQ!5e0!3m2!1sen!2sau!4v1700000000000&q=12+North+Rocks+Road,+North+Parramatta+NSW+2151"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Business details */}
            <div className="flex flex-col justify-center lg:col-span-2">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
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
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Address</h3>
                  <p className="mt-1 text-text-light">
                    12 North Rocks Road
                    <br />
                    North Parramatta, NSW 2151
                  </p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=12+North+Rocks+Road,+North+Parramatta+NSW+2151"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-medium text-accent hover:underline"
                  >
                    Get Directions &rarr;
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="mt-6 flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Phone</h3>
                  <a
                    href="tel:0426515998"
                    className="mt-1 block text-text-light transition-colors hover:text-accent"
                  >
                    0426 515 998
                  </a>
                  <p className="mt-1 text-sm text-text-light">
                    Call or text anytime
                  </p>
                </div>
              </div>

              {/* Opening hours */}
              <div className="mt-6 flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Opening Hours</h3>
                  <div className="mt-1 space-y-0.5 text-sm text-text-light">
                    <p>Mon – Fri: 7:00 AM – 5:00 PM</p>
                    <p>Saturday: 8:00 AM – 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section id="faq" className="scroll-mt-20 bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-primary sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
              Got questions? We&apos;ve got answers. If you can&apos;t find what
              you&apos;re looking for, give us a call.
            </p>
          </div>

          <div className="mt-12">
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="scroll-mt-20 bg-bg py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left side — info */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-primary sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-text-light">
                Have scrap metal to sell? Need a quote? Send us a message and
                we&apos;ll get back to you quickly — or just give us a call.
              </p>

              <div className="mt-8 space-y-5">
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text">Call or text</p>
                    <a
                      href="tel:0426515998"
                      className="text-lg font-semibold text-accent hover:underline"
                    >
                      0426 515 998
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
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
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text">Visit us</p>
                    <p className="text-text-light">
                      12 North Rocks Rd, North Parramatta
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text">Hours</p>
                    <p className="text-text-light">
                      Mon–Fri 7am–5pm · Sat 8am–2pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side — form */}
            <div className="rounded-xl border border-gray-light bg-bg p-6 shadow-sm sm:p-8 lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
