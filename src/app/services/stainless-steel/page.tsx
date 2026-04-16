import Link from "next/link";

export default function StainlessSteelPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/#services"
        className="text-sm font-medium text-accent hover:underline"
      >
        &larr; Back to Services
      </Link>
      <h1 className="mt-6 text-4xl font-bold text-primary sm:text-5xl">
        Stainless Steel
      </h1>
      <p className="mt-4 text-lg text-text-light">All grades of stainless steel accepted.</p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-primary">What We Accept</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-text-light">
              <li>Kitchen sinks and benchtops</li>
              <li>Cookware and cutlery</li>
              <li>Stainless steel pipe and tube</li>
              <li>Industrial stainless</li>
              <li>Mixed stainless</li>
        </ul>
      </div>

      <div className="mt-10">
        <p className="leading-relaxed text-text-light">
          Stainless steel is a versatile and valuable metal. We accept all grades of stainless steel, from kitchen sinks to industrial offcuts. We test and grade on site to ensure you get the best price.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/#contact"
          className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-accent-dark"
        >
          Get a Quote for Stainless Steel
        </Link>
      </div>
    </section>
  );
}
