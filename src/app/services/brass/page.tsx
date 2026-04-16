import Link from "next/link";

export default function BrassPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/services"
        className="text-sm font-medium text-accent hover:underline"
      >
        &larr; Back to Services
      </Link>
      <h1 className="mt-6 text-4xl font-bold text-primary sm:text-5xl">
        Brass
      </h1>
      <p className="mt-4 text-lg text-text-light">Top prices for all types of brass.</p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-primary">What We Accept</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-text-light">
              <li>Plumbing fittings and taps</li>
              <li>Valves and couplings</li>
              <li>Brass shells and casings</li>
              <li>Mixed brass</li>
              <li>Brass radiator cores</li>
        </ul>
      </div>

      <div className="mt-10">
        <p className="leading-relaxed text-text-light">
          Brass is a high-value alloy of copper and zinc. We pay top dollar for all brass types and grades. Bring in your plumbing offcuts, old taps, valves, or any mixed brass — we will sort and weigh it on the spot.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-accent-dark"
        >
          Get a Quote for Brass
        </Link>
      </div>
    </section>
  );
}
