export type Service = {
  slug: string;
  name: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "copper",
    name: "Copper",
    description:
      "Premium rates for all copper grades — bright copper, #1 copper, #2 copper, and copper pipe.",
  },
  {
    slug: "brass",
    name: "Brass",
    description:
      "Top prices for all types of brass including plumbing fittings, taps, valves, and mixed brass.",
  },
  {
    slug: "aluminium",
    name: "Aluminium",
    description:
      "We buy all grades of aluminium including cans, extrusions, cast, and sheet aluminium at competitive prices.",
  },
  {
    slug: "stainless-steel",
    name: "Stainless Steel",
    description:
      "All grades of stainless steel accepted — sinks, benchtops, cookware, and industrial stainless.",
  },
  {
    slug: "white-goods",
    name: "White Goods",
    description:
      "Free drop-off for fridges, washing machines, dryers, ovens, and other household appliances.",
  },
  {
    slug: "steel",
    name: "Steel",
    description:
      "General steel and heavy steel — structural beams, roofing, fencing, and mixed ferrous metals.",
  },
  {
    slug: "e-waste",
    name: "E-Waste",
    description:
      "Recycling of computer motherboards, circuit boards, and electronic components. Precious metal recovery at fair rates.",
  },
  {
    slug: "radiators",
    name: "Radiators",
    description:
      "Copper and aluminium radiators from cars, trucks, and industrial equipment at competitive rates.",
  },
  {
    slug: "batteries",
    name: "Batteries",
    description:
      "Safe disposal and recycling of car batteries, truck batteries, and industrial batteries.",
  },
  {
    slug: "motors-compressors",
    name: "Motors / Compressors",
    description:
      "Electric motors and AC/refrigeration compressors of all sizes — from small appliance motors to large industrial units.",
  },
];
