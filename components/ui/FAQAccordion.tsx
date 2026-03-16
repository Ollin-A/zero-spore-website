"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQItem } from "@/data/services";

interface FAQAccordionProps {
  items: FAQItem[];
  serviceName: string;
}

export default function FAQAccordion({ items, serviceName }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h2
        className="font-heading text-center"
        style={{
          fontSize: "var(--font-h2-size)",
          lineHeight: "var(--font-h2-lh)",
        }}
      >
        Frequently asked questions
      </h2>
      <p className="mx-auto mt-4 max-w-(--text-max) text-center text-muted">
        Common questions about our {serviceName.toLowerCase()} services.
      </p>

      <div className="mx-auto mt-12 max-w-(--text-max)">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          const buttonId = `faq-button-${i}`;
          const panelId = `faq-panel-${i}`;

          return (
            <div key={i} className="border-b border-stone">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left font-sans font-medium transition-colors hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 rounded-sm"
                style={{
                  fontSize: "var(--font-h3-size)",
                  lineHeight: "var(--font-h3-lh)",
                }}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                  strokeWidth={1.5}
                />
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={cn(
                  "grid transition-[grid-template-rows] duration-300",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 leading-relaxed text-muted">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
