import Link from "next/link";
import {
  CircleDot,
  Cpu,
  BatteryMedium,
  Cable,
  Cog,
  Container,
  Droplets,
  Flame,
  Refrigerator,
  Disc,
  Zap,
  Gem,
  Boxes,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    slug: "aluminium",
    name: "Aluminium",
    description:
      "We buy all grades of aluminium including cans, extrusions, cast, and sheet aluminium at competitive prices.",
    icon: Boxes,
  },
  {
    slug: "batteries",
    name: "Batteries",
    description:
      "Safe disposal and recycling of car batteries, truck batteries, and industrial batteries.",
    icon: BatteryMedium,
  },
  {
    slug: "brass",
    name: "Brass",
    description:
      "Top prices for all types of brass including plumbing fittings, taps, valves, and mixed brass.",
    icon: Gem,
  },
  {
    slug: "cables",
    name: "Cables",
    description:
      "We accept all types of electrical cable and wiring — domestic, industrial, and communications cable.",
    icon: Cable,
  },
  {
    slug: "compressors",
    name: "Compressors",
    description:
      "Recycling of air conditioning and refrigeration compressors. We handle all sizes.",
    icon: Cog,
  },
  {
    slug: "copper",
    name: "Copper",
    description:
      "Premium rates for all copper grades — bright copper, #1 copper, #2 copper, and copper pipe.",
    icon: CircleDot,
  },
  {
    slug: "lead",
    name: "Lead",
    description:
      "Environmentally responsible recycling of lead including wheel weights, sheet lead, and lead pipe.",
    icon: Droplets,
  },
  {
    slug: "motherboards",
    name: "Motherboards",
    description:
      "E-waste recycling for computer motherboards and circuit boards. Precious metal recovery at fair rates.",
    icon: Cpu,
  },
  {
    slug: "motors",
    name: "Motors",
    description:
      "Electric motors of all sizes — from small appliance motors to large industrial motors.",
    icon: Zap,
  },
  {
    slug: "radiators",
    name: "Radiators",
    description:
      "Copper and aluminium radiators from cars, trucks, and industrial equipment at competitive rates.",
    icon: Flame,
  },
  {
    slug: "stainless-steel",
    name: "Stainless Steel",
    description:
      "All grades of stainless steel accepted — sinks, benchtops, cookware, and industrial stainless.",
    icon: Disc,
  },
  {
    slug: "steel",
    name: "Steel",
    description:
      "General steel and heavy steel — structural beams, roofing, fencing, and mixed ferrous metals.",
    icon: Container,
  },
  {
    slug: "white-goods",
    name: "White Goods",
    description:
      "Free drop-off for fridges, washing machines, dryers, ovens, and other household appliances.",
    icon: Refrigerator,
  },
];

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
          const Icon = service.icon;
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
