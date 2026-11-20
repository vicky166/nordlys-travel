"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { easeOut } from "@/lib/motion";

const steps = [
  {
    n: "01",
    title: "Pick your latitude",
    body: "Coast, highland, island, or polar forest — choose the North that fits your pace.",
  },
  {
    n: "02",
    title: "Shape the light",
    body: "We match dates to aurora windows, midnight sun, or quieter shoulder weather.",
  },
  {
    n: "03",
    title: "Go when it’s right",
    body: "Confirm stays and transfers, then travel with a plan that can flex with the sky.",
  },
];

export function SignalSteps() {
  const reduce = useReducedMotion();

  return (
    <section className="section-pad overflow-hidden">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <motion.div
            className="lg:sticky lg:top-28 lg:self-start"
            initial={reduce ? false : { opacity: 1, y: 28, }}
            whileInView={{ opacity: 1, y: 0, }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <p className="eyebrow">How it works</p>
            <h2 className="mt-3 font-display text-4xl text-forest sm:text-5xl">
              Three signals.
              <span className="mt-1 block text-forest-soft">Then northbound.</span>
            </h2>
            <p className="mt-5 max-w-sm text-muted">
              No rigid packages. A clear path from curiosity to departure.
            </p>
            <Link href="/plan" className="btn-primary mt-8">
              Start planning
            </Link>
          </motion.div>

          <div className="space-y-0">
            {steps.map((s, i) => (
              <motion.article
                key={s.n}
                initial={
                  reduce ? false : { opacity: 1, y: 36, }
                }
                whileInView={{ opacity: 1, y: 0, }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: easeOut }}
                className={`group relative border-t border-forest/12 py-10 ${
                  i === steps.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-10">
                  <span className="font-display text-6xl leading-none text-lime transition group-hover:text-lime-deep md:text-7xl">
                    {s.n}
                  </span>
                  <div className="pt-2">
                    <h3 className="font-display text-2xl text-forest md:text-3xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted md:text-base">
                      {s.body}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
