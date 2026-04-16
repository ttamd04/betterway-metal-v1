"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What types of scrap metal do you accept?",
    answer:
      "We accept a wide range of metals including copper, brass, aluminium, stainless steel, steel, radiators, batteries, motors, compressors, e-waste (motherboards, circuit boards), and white goods (fridges, washing machines, etc.). If you're unsure whether we'll take something, give us a call on 0426 515 998 and we'll let you know.",
  },
  {
    question: "How do I know what my scrap is worth?",
    answer:
      "Prices depend on the type and grade of metal, as well as current market rates. Bring your scrap in and we'll weigh it on-site and give you a fair quote on the spot. You can also call or text us for a rough estimate before you come in.",
  },
  {
    question: "Do I need to sort my scrap metal before bringing it in?",
    answer:
      "Sorting isn't required — we're happy to sort it for you. However, if your metals are already separated (e.g. copper separate from steel), you'll generally get a better price since pre-sorted metal is easier for us to process.",
  },
  {
    question: "Do you offer pickup or collection services?",
    answer:
      "For larger quantities of scrap metal, we may be able to arrange a pickup. Get in touch with us via the contact form or call 0426 515 998 to discuss your needs and we'll see what we can do.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "We're open Monday to Friday from 7:00 AM to 5:00 PM, and Saturday from 8:00 AM to 2:00 PM. We're closed on Sundays and public holidays.",
  },
  {
    question: "Where are you located?",
    answer:
      "We're at 12 North Rocks Road, North Parramatta, NSW 2151. There's plenty of room to pull in and unload. You can find us on Google Maps — just search 'Betterway Metal' or use the map on our Location section above.",
  },
  {
    question: "How do I get paid?",
    answer:
      "We pay on the spot — cash or bank transfer, your choice. Bring your scrap in, we'll weigh it, quote you a price, and pay you right away. No waiting around.",
  },
  {
    question: "Is there a minimum amount of scrap I need to bring?",
    answer:
      "No minimum. Whether you've got a boot full of cans or a trailer loaded with steel, we're happy to take it. Every bit counts.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="mx-auto max-w-3xl divide-y divide-gray-light rounded-xl border border-gray-light bg-white">
      {faqs.map((faq, index) => (
        <div key={index}>
          <button
            type="button"
            onClick={() => toggle(index)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-bg/50"
          >
            <span className="text-base font-medium text-text">
              {faq.question}
            </span>
            <svg
              className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>

          <div
            className={`grid transition-all duration-200 ${
              openIndex === index
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-5 text-sm leading-relaxed text-text-light">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
