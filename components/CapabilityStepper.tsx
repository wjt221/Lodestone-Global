"use client";

import { useState } from "react";

export interface CapabilityStepItem {
  name: string;
  detail: string;
  challenge: string[];
  value: string[];
}

/**
 * Stepped capability panel: a left-hand list of capabilities acts as tabs,
 * and the selected one expands into paired "the challenge" / "how we help"
 * columns. Replaces a flat description list with a structure that reads each
 * capability as a client problem and Lodestone's response to it.
 */
export function CapabilityStepper({ items }: { items: CapabilityStepItem[] }) {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-4">
        <ul className="flex flex-col border-t border-charcoal/15">
          {items.map((item, i) => {
            const isActive = i === active;
            return (
              <li key={item.name}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex w-full items-start gap-4 border-b border-charcoal/15 py-5 text-left transition-colors duration-200 ${
                    isActive ? "" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`mt-1.5 h-2 w-2 shrink-0 rounded-full transition-colors duration-200 ${
                      isActive ? "bg-brass" : "bg-charcoal/25"
                    }`}
                  />
                  <span className="flex flex-col gap-1.5">
                    <span className="font-serif text-lg font-normal text-navy">{item.name}</span>
                    <span className="font-sans text-[0.88rem] leading-relaxed text-charcoal/60">
                      {item.detail}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-8 border-t border-charcoal/15 pt-8 sm:grid-cols-2 lg:col-span-8 lg:border-t-0 lg:pt-0">
        <div className="flex flex-col gap-4">
          <span className="font-sans text-[0.72rem] uppercase tracking-widest2 text-charcoal/45">
            The challenge
          </span>
          <ul className="flex flex-col gap-3.5">
            {current.challenge.map((c) => (
              <li
                key={c}
                className="font-sans text-[0.92rem] leading-relaxed text-charcoal/70"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-sans text-[0.72rem] uppercase tracking-widest2 text-brass">
            How Lodestone helps
          </span>
          <ul className="flex flex-col gap-3.5">
            {current.value.map((v) => (
              <li
                key={v}
                className="font-sans text-[0.92rem] leading-relaxed text-charcoal/70"
              >
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
