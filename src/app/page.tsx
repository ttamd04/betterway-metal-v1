import Image from "next/image";
import Link from "next/link";
import ReviewCarousel from "@/components/ReviewCarousel";
import {
  CircleDot,
  Cpu,
  BatteryMedium,
  Cable,
  Cog,
  Container,
  Droplets,
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
  aluminium: Boxes,
  batteries: BatteryMedium,
  brass: Gem,
  cables: Cable,
  compressors: Cog,
  copper: CircleDot,
  lead: Droplets,
  motherboards: Cpu,
  motors: Zap,
  radiators: Flame,
  "stainless-steel": Disc,
  steel: Container,
  "white-goods": Refrigerator,
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

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.slug];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-xl border border-gray-light bg-surface p-6 shadow-sm transition-all hover:border-accent hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-accent/20 group-hover:text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-light">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium text-accent group-hover:underline">
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
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary sm:text-5xl">
            About Us
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-light">
            Betterway Metal is North Parramatta&apos;s trusted scrap metal
            recycler. We&apos;re committed to fair pricing, fast turnarounds, and
            environmentally responsible recycling. Content coming soon.
          </p>
        </div>
      </section>

      {/* ===== REVIEWS SECTION ===== */}
      <section id="reviews" className="scroll-mt-20 bg-bg py-20">
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
      <section id="location" className="scroll-mt-20 bg-surface py-20">
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
      <section id="faq" className="scroll-mt-20 bg-bg py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary sm:text-5xl">FAQ</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-light">
            Frequently asked questions coming soon.
          </p>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="scroll-mt-20 bg-surface py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary sm:text-5xl">
            Contact Us
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-light">
            Contact form coming soon. In the meantime, call or text us on{" "}
            <a
              href="tel:0426515998"
              className="font-semibold text-accent underline underline-offset-2 hover:text-primary"
            >
              0426 515 998
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
