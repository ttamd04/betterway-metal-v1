import Link from "next/link";

export default function AluminiumPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/#services"
        className="text-sm font-medium text-accent hover:underline"
      >
        &larr; Back to Services
      </Link>
      <h1 className="mt-6 text-4xl font-bold text-primary sm:text-5xl">
        Aluminium
      </h1>
      <p className="mt-4 text-lg text-text-light">We buy all grades of aluminium at competitive prices.</p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-primary">What We Accept</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-text-light">
              <li>Aluminium cans</li>
              <li>Extrusions and window frames</li>
              <li>Cast aluminium</li>
              <li>Sheet aluminium</li>
              <li>Aluminium wheels and rims</li>
        </ul>
      </div>

      <div className="mt-10">
        <p className="leading-relaxed text-text-light">
          Aluminium is one of the most widely recycled metals in Australia. At Betterway Metal, we accept all grades of aluminium and offer competitive pricing based on current market rates. Whether you have a bag of cans or a truckload of extrusions, we make the process fast and fair.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/#contact"
          className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-accent-dark"
        >
          Get a Quote for Aluminium
        </Link>
      </div>
    </section>
  );
}
