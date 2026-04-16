import Link from "next/link";

export default function SteelPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/#services"
        className="text-sm font-medium text-accent hover:underline"
      >
        &larr; Back to Services
      </Link>
      <h1 className="mt-6 text-4xl font-bold text-primary sm:text-5xl">
        Steel
      </h1>
      <p className="mt-4 text-lg text-text-light">General and heavy steel at fair prices.</p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-primary">What We Accept</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-text-light">
              <li>Structural steel beams</li>
              <li>Roofing iron and tin</li>
              <li>Steel fencing and posts</li>
              <li>Car bodies and panels</li>
              <li>Mixed ferrous metals</li>
        </ul>
      </div>

      <div className="mt-10">
        <p className="leading-relaxed text-text-light">
          Steel is the most commonly recycled metal in the world. We accept all types of steel — from light tin and roofing iron to heavy structural beams. Drop off or ask about our pickup service for larger quantities.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/#contact"
          className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-accent-dark"
        >
          Get a Quote for Steel
        </Link>
      </div>
    </section>
  );
}
