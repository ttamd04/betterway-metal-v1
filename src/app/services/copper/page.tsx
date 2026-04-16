import Link from "next/link";

export default function CopperPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/#services"
        className="text-sm font-medium text-accent hover:underline"
      >
        &larr; Back to Services
      </Link>
      <h1 className="mt-6 text-4xl font-bold text-primary sm:text-5xl">
        Copper
      </h1>
      <p className="mt-4 text-lg text-text-light">Premium rates for all copper grades.</p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-primary">What We Accept</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-text-light">
              <li>Bright and shiny copper</li>
              <li>#1 copper pipe and tube</li>
              <li>#2 copper (mixed/soldered)</li>
              <li>Copper wire (stripped)</li>
              <li>Copper offcuts and turnings</li>
        </ul>
      </div>

      <div className="mt-10">
        <p className="leading-relaxed text-text-light">
          Copper is one of the highest-value scrap metals. At Betterway Metal, we offer premium prices for all grades of copper. We grade on the spot and pay immediately — no waiting around.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/#contact"
          className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-accent-dark"
        >
          Get a Quote for Copper
        </Link>
      </div>
    </section>
  );
}
