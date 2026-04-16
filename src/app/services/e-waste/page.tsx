import Link from "next/link";

export default function EWastePage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/#services"
        className="text-sm font-medium text-accent hover:underline"
      >
        &larr; Back to Services
      </Link>
      <h1 className="mt-6 text-4xl font-bold text-primary sm:text-5xl">
        E-Waste
      </h1>
      <p className="mt-4 text-lg text-text-light">Responsible recycling of electronic waste with precious metal recovery.</p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-primary">What We Accept</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-text-light">
              <li>Computer motherboards</li>
              <li>Circuit boards and PCBs</li>
              <li>RAM sticks and processors</li>
              <li>Hard drives and power supplies</li>
              <li>Server and networking equipment</li>
              <li>Mixed electronic components</li>
        </ul>
      </div>

      <div className="mt-10">
        <p className="leading-relaxed text-text-light">
          Electronic waste contains valuable precious metals like gold, silver, and palladium. At Betterway Metal, we process e-waste responsibly, recovering valuable materials while ensuring hazardous components are disposed of safely. We offer fair rates based on the type and grade of your electronic scrap.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/#contact"
          className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-accent-dark"
        >
          Get a Quote for E-Waste
        </Link>
      </div>
    </section>
  );
}
