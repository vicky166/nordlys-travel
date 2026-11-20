"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { easeOut } from "@/lib/motion";

const signals = [
  {
    title: "Read the light",
    cta: "Plan dates",
    href: "/plan",
    body: "Aurora windows, midnight sun, and shoulder weather — we match your trip to the sky, not a fixed calendar.",
  },
  {
    title: "Stay close to quiet",
    cta: "See bases",
    href: "/destinations",
    body: "Cabins, harbor lodges, and forest stays chosen for atmosphere. Less lobby noise. More northern air.",
  },
  {
    title: "Travel with locals",
    cta: "Ask us",
    href: "/contact",
    body: "Guides who know when the ridge clears and when to wait. Flexible pacing when the weather rewrites the day.",
  },
];

export function GrowSignals() {
  const reduce = useReducedMotion();

  return (
    <section className="section-pad">
      <div className="container-x">
        <motion.div
          initial={reduce ? false : { opacity: 1, y: 24, }}
          whileInView={{ opacity: 1, y: 0, }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow">Why NORDLYS</p>
          <h2 className="mt-3 font-display text-4xl text-forest sm:text-5xl">
            Built to move with the North.
          </h2>
          <p className="mt-4 text-muted">
            Three ways we keep journeys clear, calm, and worth the latitude.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {signals.map((item, i) => (
            <motion.article
              key={item.title}
              initial={reduce ? false : { opacity: 1, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: easeOut }}
              whileHover={reduce ? undefined : { y: -8 }}
              className="group relative flex flex-col rounded-[1.75rem] border border-forest/8 bg-white p-7 shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)] md:p-8"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime font-display text-lg text-forest transition group-hover:scale-105">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-2xl text-forest md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
              <Link
                href={item.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest transition group-hover:gap-3"
              >
                {item.cta}
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-forest text-xs text-lime"
                  aria-hidden
                >
                  →
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
