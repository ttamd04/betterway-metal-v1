import Link from "next/link";

export default function MotorsCompressorsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/#services"
        className="text-sm font-medium text-accent hover:underline"
      >
        &larr; Back to Services
      </Link>
      <h1 className="mt-6 text-4xl font-bold text-primary sm:text-5xl">
        Motors / Compressors
      </h1>
      <p className="mt-4 text-lg text-text-light">Fair prices for electric motors and compressors of all sizes.</p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-primary">What We Accept</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-text-light">
              <li>Small appliance motors</li>
              <li>Large industrial motors</li>
              <li>AC and refrigeration compressors</li>
              <li>Pump motors</li>
              <li>Starter motors and alternators</li>
              <li>Sealed and semi-sealed compressor units</li>
        </ul>
      </div>

      <div className="mt-10">
        <p className="leading-relaxed text-text-light">
          Electric motors and compressors contain valuable copper windings and other recoverable metals. At Betterway Metal, we accept motors and compressors of all sizes — from small household appliance motors to large industrial units and AC compressors. We weigh on the spot and pay you a fair price immediately.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/#contact"
          className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-accent-dark"
        >
          Get a Quote for Motors / Compressors
        </Link>
      </div>
    </section>
  );
}
