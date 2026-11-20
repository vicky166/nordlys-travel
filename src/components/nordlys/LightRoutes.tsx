"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { destinations } from "@/data/site";
import { easeOut } from "@/lib/motion";

export function LightRoutes() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = destinations[active] ?? destinations[0];

  return (
    <section className="section-pad overflow-hidden">
      <div className="container-x">
        <motion.div
          initial={reduce ? false : { opacity: 1, y: 24, }}
          whileInView={{ opacity: 1, y: 0, }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-lg">
            <p className="eyebrow">Routes north</p>
            <h2 className="mt-3 font-display text-4xl text-forest sm:text-5xl">
              Choose a latitude.
            </h2>
          </div>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest"
          >
            Full atlas <span aria-hidden>→</span>
          </Link>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-10">
          {/* Route index — interactive list, not cards */}
          <motion.nav
            aria-label="Destinations"
            initial={reduce ? false : { opacity: 1, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2 [scrollbar-width:none] snap-x snap-mandatory lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
          >
            {destinations.map((d, i) => {
              const isActive = i === active;
              return (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => {
                    if (window.matchMedia("(hover: hover)").matches) {
                      setActive(i);
                    }
                  }}
                  className={`group flex shrink-0 snap-start items-center gap-4 rounded-2xl px-4 py-3.5 text-left transition lg:rounded-none lg:border-l-2 lg:px-0 lg:py-5 lg:pl-5 ${
                    isActive
                      ? "bg-forest text-white lg:border-lime lg:bg-transparent lg:text-forest"
                      : "bg-white/60 text-forest/70 hover:bg-white lg:border-forest/10 lg:bg-transparent lg:hover:border-forest/30 lg:hover:text-forest"
                  }`}
                >
                  <span
                    className={`font-mono text-xs tracking-wider ${
                      isActive
                        ? "text-lime lg:text-forest/40"
                        : "text-forest/30"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-xl leading-none lg:text-2xl">
                      {d.name}
                    </span>
                    <span
                      className={`mt-1 block text-xs ${
                        isActive
                          ? "text-white/65 lg:text-muted"
                          : "text-forest/45"
                      }`}
                    >
                      {d.tag} · {d.country}
                    </span>
                  </span>
                </button>
              );
            })}
          </motion.nav>

          {/* Live preview stage */}
          <motion.div
            initial={reduce ? false : { opacity: 1, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="relative min-h-[340px] overflow-hidden rounded-[1.75rem] sm:min-h-[420px] sm:rounded-[2rem] md:min-h-[560px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                className="absolute inset-0"
                initial={reduce ? false : { opacity: 1, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.65, ease: easeOut }}
              >
                <Image
                  src={current.image}
                  alt={current.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  priority={active === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/30 to-forest/10" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-8 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id + "-copy"}
                  initial={reduce ? false : { opacity: 1, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.45, ease: easeOut }}
                  className="max-w-xl text-white"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lime">
                    From ${current.priceFrom.toLocaleString()} · {current.duration}
                  </p>
                  <h3 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                    {current.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                    {current.description}
                  </p>
                  <Link
                    href={`/destinations/${current.slug}`}
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-bold text-forest transition hover:bg-lime-deep"
                  >
                    Explore route <span aria-hidden>→</span>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
