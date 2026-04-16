import Link from "next/link";

export default function MotherboardsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/services"
        className="text-sm font-medium text-accent hover:underline"
      >
        &larr; Back to Services
      </Link>
      <h1 className="mt-6 text-4xl font-bold text-primary sm:text-5xl">
        Motherboards
      </h1>
      <p className="mt-4 text-lg text-text-light">E-waste recycling for circuit boards.</p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-primary">What We Accept</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-text-light">
              <li>Computer motherboards</li>
              <li>Server boards</li>
              <li>Laptop boards</li>
              <li>RAM and memory sticks</li>
              <li>Mixed circuit boards</li>
        </ul>
      </div>

      <div className="mt-10">
        <p className="leading-relaxed text-text-light">
          Electronic circuit boards contain precious metals including gold, silver, and palladium. We offer fair prices for motherboards and other circuit boards, with transparent grading based on board type and quality.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-accent-dark"
        >
          Get a Quote for Motherboards
        </Link>
      </div>
    </section>
  );
}
