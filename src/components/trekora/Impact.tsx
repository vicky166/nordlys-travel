"use client";

import { motion, useReducedMotion } from "motion/react";
import { easeOut } from "@/lib/motion";

const stats = [
  { value: "4.2K+", label: "Nordic travelers" },
  { value: "18+", label: "Wild routes" },
  { value: "9+", label: "Years up north" },
  { value: "97%", label: "Would return" },
];

export function Impact() {
  const reduce = useReducedMotion();

  return (
    <section className="section-pad">
      <div className="container-x">
        <motion.div
          initial={reduce ? false : { opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="eyebrow">Proof of north</p>
            <h2 className="mt-3 font-display text-3xl text-forest sm:text-4xl">
              Numbers from cold mornings and clear nights.
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.75rem] bg-forest/10 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduce ? false : { opacity: 1, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: easeOut }}
              className="bg-cream px-6 py-10 text-center md:px-8 md:py-14"
            >
              <p className="font-display text-4xl text-forest sm:text-5xl md:text-6xl">
                {s.value}
              </p>
              <p className="mt-3 text-sm text-muted">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
