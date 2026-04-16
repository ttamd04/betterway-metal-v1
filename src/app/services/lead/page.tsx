import Link from "next/link";

export default function LeadPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/#services"
        className="text-sm font-medium text-accent hover:underline"
      >
        &larr; Back to Services
      </Link>
      <h1 className="mt-6 text-4xl font-bold text-primary sm:text-5xl">
        Lead
      </h1>
      <p className="mt-4 text-lg text-text-light">Environmentally responsible lead recycling.</p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-primary">What We Accept</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-text-light">
              <li>Lead pipe and sheet</li>
              <li>Wheel weights</li>
              <li>Lead flashing</li>
              <li>Cable sheathing</li>
              <li>Mixed lead</li>
        </ul>
      </div>

      <div className="mt-10">
        <p className="leading-relaxed text-text-light">
          Lead must be handled and recycled with care due to its environmental impact. We provide responsible lead recycling services, ensuring all lead is processed in compliance with environmental regulations.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/#contact"
          className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-accent-dark"
        >
          Get a Quote for Lead
        </Link>
      </div>
    </section>
  );
}
