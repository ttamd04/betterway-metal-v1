import Link from "next/link";

export default function WhiteGoodsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/#services"
        className="text-sm font-medium text-accent hover:underline"
      >
        &larr; Back to Services
      </Link>
      <h1 className="mt-6 text-4xl font-bold text-primary sm:text-5xl">
        White Goods
      </h1>
      <p className="mt-4 text-lg text-text-light">Free drop-off for household appliances.</p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-primary">What We Accept</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-text-light">
              <li>Fridges and freezers</li>
              <li>Washing machines</li>
              <li>Dryers</li>
              <li>Ovens and cooktops</li>
              <li>Dishwashers</li>
        </ul>
      </div>

      <div className="mt-10">
        <p className="leading-relaxed text-text-light">
          Got old appliances taking up space? Bring them to Betterway Metal. We accept all white goods for recycling and handle the degassing of fridges and air conditioners in accordance with environmental regulations.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/#contact"
          className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-accent-dark"
        >
          Get a Quote for White Goods
        </Link>
      </div>
    </section>
  );
}
