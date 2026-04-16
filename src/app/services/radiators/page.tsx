import Link from "next/link";

export default function RadiatorsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/services"
        className="text-sm font-medium text-accent hover:underline"
      >
        &larr; Back to Services
      </Link>
      <h1 className="mt-6 text-4xl font-bold text-primary sm:text-5xl">
        Radiators
      </h1>
      <p className="mt-4 text-lg text-text-light">Copper and aluminium radiators at competitive rates.</p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-primary">What We Accept</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-text-light">
              <li>Copper/brass radiators</li>
              <li>Aluminium radiators</li>
              <li>Car and truck radiators</li>
              <li>Industrial radiators</li>
              <li>Heater cores</li>
        </ul>
      </div>

      <div className="mt-10">
        <p className="leading-relaxed text-text-light">
          Radiators are a great source of copper, brass, and aluminium. We accept radiators from cars, trucks, and industrial equipment. Pricing depends on the metal composition — copper/brass radiators fetch higher rates than aluminium.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-accent-dark"
        >
          Get a Quote for Radiators
        </Link>
      </div>
    </section>
  );
}
