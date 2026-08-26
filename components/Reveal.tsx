"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Reveals its children on first scroll into view.
 *
 * The page had no motion at all, which is a large part of why it read as flat:
 * every section arrived fully formed the moment it entered the viewport, so
 * scrolling produced no sense of things being composed. This is deliberately
 * small -- a short rise and fade, once, never replayed -- because an advisory
 * firm's site should feel considered, not animated.
 *
 * Content is visible by default and only hidden once the effect has run on the
 * client, so it degrades to a plain static page without JS and never hides
 * content from a crawler. `prefers-reduced-motion` skips the animation
 * entirely rather than shortening it.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  /** Stagger, in ms, for items revealed as a group. */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) return;

    // Anything already on screen at mount stays put: animating the hero area
    // out from under a reader who has not scrolled yet is worse than no motion.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) return;

    setArmed(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const state = !armed || shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-700 ease-editorial ${state} ${className}`}
    >
      {children}
    </div>
  );
}
