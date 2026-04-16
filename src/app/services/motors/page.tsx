import Link from "next/link";

export default function MotorsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/#services"
        className="text-sm font-medium text-accent hover:underline"
      >
        &larr; Back to Services
      </Link>
      <h1 className="mt-6 text-4xl font-bold text-primary sm:text-5xl">
        Motors
      </h1>
      <p className="mt-4 text-lg text-text-light">Electric motors of all sizes.</p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-primary">What We Accept</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-text-light">
              <li>Small appliance motors</li>
              <li>Industrial electric motors</li>
              <li>Starter motors</li>
              <li>Alternators</li>
              <li>Mixed motors</li>
        </ul>
      </div>

      <div className="mt-10">
        <p className="leading-relaxed text-text-light">
          Electric motors contain copper windings and steel casings, making them valuable for recycling. We accept motors of all sizes — from small appliance motors to large industrial units. Pricing is based on size and copper content.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/#contact"
          className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-accent-dark"
        >
          Get a Quote for Motors
        </Link>
      </div>
    </section>
  );
}
