"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { easeOut } from "@/lib/motion";

const seasons = [
  {
    id: "winter",
    name: "Polar Winter",
    months: "Nov – Mar",
    tone: "Aurora watches, snow forests, glass-roof nights. The sky becomes the reason you came.",
    fit: "Lapland · Northern Norway",
    accent: "bg-lime text-forest",
  },
  {
    id: "spring",
    name: "Thaw Light",
    months: "Apr – May",
    tone: "Longer days, quieter trails, melting highland roads. Soft weather and empty viewpoints.",
    fit: "Iceland · Faroes",
    accent: "bg-white text-forest",
  },
  {
    id: "summer",
    name: "Midnight Sun",
    months: "Jun – Aug",
    tone: "Endless evenings, ridge walks, harbor sleeps. Daylight that refuses to leave.",
    fit: "Lofoten · Faroes",
    accent: "bg-cream text-forest",
  },
  {
    id: "autumn",
    name: "Gold Storm",
    months: "Sep – Oct",
    tone: "Dramatic skies, fewer crowds, first aurora hints. Weather with character.",
    fit: "Iceland · Lapland",
    accent: "bg-forest-mid text-white",
  },
];

export function SeasonBoard() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = seasons[active] ?? seasons[0];

  return (
    <section className="relative overflow-hidden bg-forest text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(212,233,92,0.12),transparent_50%)]" />

      <div className="container-x relative section-pad">
        <motion.div
          className="max-w-2xl"
          initial={reduce ? false : { opacity: 1, y: 28, }}
          whileInView={{ opacity: 1, y: 0, }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime">
            Travel by season
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            The North rewrites itself four times a year.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* Vertical season rail */}
          <div className="relative">
            <div className="absolute bottom-3 left-[15px] top-3 hidden w-px bg-white/15 md:block" />
            <ul className="space-y-2 md:space-y-0">
              {seasons.map((s, i) => {
                const isActive = i === active;
                return (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className="group flex w-full items-center gap-5 rounded-2xl px-3 py-4 text-left transition hover:bg-white/5 md:rounded-none md:px-0 md:py-6"
                    >
                      <span
                        className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition ${
                          isActive
                            ? "bg-lime text-forest scale-110"
                            : "bg-white/10 text-white/50 group-hover:bg-white/20"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className={`block font-display text-2xl transition md:text-3xl ${
                            isActive ? "text-white" : "text-white/40"
                          }`}
                        >
                          {s.name}
                        </span>
                        <span
                          className={`mt-1 block text-xs uppercase tracking-[0.14em] ${
                            isActive ? "text-lime" : "text-white/30"
                          }`}
                        >
                          {s.months}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Detail stage */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={reduce ? false : { opacity: 1, y: 20, }}
              animate={{ opacity: 1, y: 0, }}
              exit={reduce ? undefined : { opacity: 0, y: -12, }}
              transition={{ duration: 0.45, ease: easeOut }}
              className={`flex min-h-[280px] flex-col justify-between rounded-[2rem] p-8 md:min-h-[360px] md:p-10 ${current.accent}`}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] opacity-55">
                  Best window
                </p>
                <p className="mt-2 font-display text-5xl leading-none md:text-6xl">
                  {current.months}
                </p>
                <p className="mt-6 max-w-md text-base leading-relaxed opacity-85 md:text-lg">
                  {current.tone}
                </p>
              </div>
              <div className="mt-10 border-t border-current/15 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] opacity-55">
                  Best fit
                </p>
                <p className="mt-2 font-display text-2xl md:text-3xl">
                  {current.fit}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
