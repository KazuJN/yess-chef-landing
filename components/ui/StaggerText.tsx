"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type StaggerTextProps = {
  children: React.ReactNode;
  className?: string;
  /** Seconds between each word animation */
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "div";
};

export function StaggerText({
  children,
  className = "",
  stagger = 0.06,
  as: Tag = "div",
}: StaggerTextProps) {
  const ref = useRef<HTMLHeadingElement | HTMLParagraphElement | HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const words = el.querySelectorAll<HTMLElement>("[data-stagger-word]");

    const ctx = gsap.context(() => {
      gsap.from(words, {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [stagger]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

/** Split a string into stagger-animated word spans. */
export function staggerWords(text: string) {
  return text.split(/\s+/).map((word, i) => (
    <span key={`${word}-${i}`} data-stagger-word className="inline-block">
      {word}
      {i < text.split(/\s+/).length - 1 ? "\u00a0" : null}
    </span>
  ));
}
