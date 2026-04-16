import Link from "next/link";

export default function CablesPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/services"
        className="text-sm font-medium text-accent hover:underline"
      >
        &larr; Back to Services
      </Link>
      <h1 className="mt-6 text-4xl font-bold text-primary sm:text-5xl">
        Cables
      </h1>
      <p className="mt-4 text-lg text-text-light">All types of electrical cable and wiring accepted.</p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-primary">What We Accept</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-text-light">
              <li>Domestic electrical cable</li>
              <li>Industrial wiring</li>
              <li>Communications cable</li>
              <li>Insulated copper wire</li>
              <li>Data and network cables</li>
        </ul>
      </div>

      <div className="mt-10">
        <p className="leading-relaxed text-text-light">
          Electrical cables contain valuable copper and aluminium cores. We accept all types of cable — from household wiring to heavy industrial cable. We price based on copper content and offer stripping for better rates.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-accent-dark"
        >
          Get a Quote for Cables
        </Link>
      </div>
    </section>
  );
}
