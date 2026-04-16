import Link from "next/link";

export default function BatteriesPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/services"
        className="text-sm font-medium text-accent hover:underline"
      >
        &larr; Back to Services
      </Link>
      <h1 className="mt-6 text-4xl font-bold text-primary sm:text-5xl">
        Batteries
      </h1>
      <p className="mt-4 text-lg text-text-light">Safe disposal and recycling of all battery types.</p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-primary">What We Accept</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-text-light">
              <li>Car and truck batteries</li>
              <li>Industrial batteries</li>
              <li>UPS batteries</li>
              <li>Deep cycle batteries</li>
              <li>Forklift batteries</li>
        </ul>
      </div>

      <div className="mt-10">
        <p className="leading-relaxed text-text-light">
          Batteries contain valuable materials like lead and acid that must be recycled responsibly. We provide safe, environmentally compliant battery recycling for all sizes — from standard car batteries to large industrial units.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-accent-dark"
        >
          Get a Quote for Batteries
        </Link>
      </div>
    </section>
  );
}
