import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero-image.jpg"
        alt="Betterway Metal scrap yard"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="inline-block rounded-xl bg-primary/30 px-6 py-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Fair prices, fast service, and a better way forward.
        </h1>
        <p className="mx-auto mt-6 inline-block max-w-2xl rounded-lg bg-primary/25 px-5 py-3 text-lg leading-relaxed text-gray-200 sm:text-xl">
          In and out in minutes. Betterway Metal provides fair prices and a
          quick turnaround for scrap metal. North Parramatta&apos;s go-to scrap
          yard. Call or text us now on{" "}
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
            href="/contact"
            className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-accent-dark"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
