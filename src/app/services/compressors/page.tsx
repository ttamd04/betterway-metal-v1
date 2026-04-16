import Link from "next/link";

export default function CompressorsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/services"
        className="text-sm font-medium text-accent hover:underline"
      >
        &larr; Back to Services
      </Link>
      <h1 className="mt-6 text-4xl font-bold text-primary sm:text-5xl">
        Compressors
      </h1>
      <p className="mt-4 text-lg text-text-light">Recycling of AC and refrigeration compressors.</p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-primary">What We Accept</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-text-light">
              <li>Air conditioning compressors</li>
              <li>Refrigeration compressors</li>
              <li>Industrial compressors</li>
              <li>Sealed units</li>
              <li>Semi-hermetic compressors</li>
        </ul>
      </div>

      <div className="mt-10">
        <p className="leading-relaxed text-text-light">
          Compressors from air conditioning and refrigeration units contain valuable copper windings and steel. We accept compressors of all sizes and handle the degassing and dismantling process responsibly.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-accent-dark"
        >
          Get a Quote for Compressors
        </Link>
      </div>
    </section>
  );
}
