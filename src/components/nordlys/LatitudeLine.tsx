"use client";

import { motion, useReducedMotion } from "motion/react";
import { easeOut } from "@/lib/motion";

const places = [
  { lat: "68°N", name: "Lofoten" },
  { lat: "64°N", name: "Iceland" },
  { lat: "62°N", name: "Faroes" },
  { lat: "66°N", name: "Lapland" },
];

/** Clean typographic band — not cards. */
export function LatitudeLine() {
  const reduce = useReducedMotion();

  return (
    <section className="border-y border-forest/10 bg-cream-deep/40 py-10 md:py-12">
      <div className="container-x">
        <motion.div
          initial={reduce ? false : { opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4"
        >
          {places.map((p, i) => (
            <motion.div
              key={p.name}
              initial={reduce ? false : { opacity: 1, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: easeOut }}
              className="text-center md:text-left"
            >
              <p className="font-mono text-xs tracking-[0.18em] text-muted">
                {p.lat}
              </p>
              <p className="mt-2 font-display text-2xl text-forest md:text-3xl">
                {p.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
