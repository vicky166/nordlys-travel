"use client";

import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { easeOut } from "@/lib/motion";

export function Newsletter() {
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <section className="section-pad pt-0">
      <div className="container-x">
        <motion.div
          initial={reduce ? false : { opacity: 1, y: 28, }}
          whileInView={{ opacity: 1, y: 0, }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.85, ease: easeOut }}
          className="relative overflow-hidden rounded-[2rem] bg-forest px-6 py-12 text-white md:px-12 md:py-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(212,233,92,0.18),transparent_45%)]" />
          <div className="pointer-events-none absolute -bottom-24 left-1/4 h-48 w-48 rounded-full bg-lime/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime">
                North signal
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[1.08] sm:text-5xl">
                Quiet notes from the wild.
              </h2>
              <p className="mt-4 max-w-md text-base text-white/65">
                Season windows, packing notes, and route sketches — sent when
                there’s something worth reading.
              </p>
            </div>

            <div>
              {done ? (
                <p className="font-display text-2xl text-lime">You’re on the list.</p>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    className="w-full flex-1 rounded-full border-0 bg-white/10 px-5 py-3.5 text-white outline-none ring-1 ring-white/15 placeholder:text-white/40 transition focus:bg-white/15 focus:ring-lime/50"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-full bg-lime px-6 py-3.5 text-sm font-bold text-forest transition hover:bg-lime-deep"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
