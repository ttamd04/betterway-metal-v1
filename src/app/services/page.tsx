import Link from "next/link";
import {
  CircleDot,
  Cpu,
  BatteryMedium,
  Container,
  Flame,
  Refrigerator,
  Disc,
  Zap,
  Gem,
  Boxes,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services } from "@/lib/services";

const iconMap: Record<string, LucideIcon> = {
  copper: CircleDot,
  brass: Gem,
  aluminium: Boxes,
  "stainless-steel": Disc,
  "white-goods": Refrigerator,
  steel: Container,
  "e-waste": Cpu,
  radiators: Flame,
  batteries: BatteryMedium,
  "motors-compressors": Zap,
};

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary sm:text-5xl">
          Our Services
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
          We buy all types of scrap metal at fair prices. Click any service below
          to learn more.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = iconMap[service.slug];
          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-xl border border-gray-light bg-surface p-6 shadow-sm transition-all hover:shadow-md hover:border-accent"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-accent/20 group-hover:text-accent">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-semibold text-primary">
                {service.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                {service.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-accent group-hover:underline">
                Learn more &rarr;
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
