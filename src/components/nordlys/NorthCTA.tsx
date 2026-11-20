"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { easeOut } from "@/lib/motion";

export function NorthCTA() {
  const reduce = useReducedMotion();

  return (
    <section className="px-3 pb-[clamp(3rem,6vw,5rem)] sm:px-4 md:px-5">
      <motion.div
        initial={reduce ? false : { opacity: 1, y: 32, }}
        whileInView={{ opacity: 1, y: 0, }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.9, ease: easeOut }}
        className="relative mx-auto max-w-[92rem] overflow-hidden rounded-[1.75rem] bg-forest md:rounded-[2.5rem]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(212,233,92,0.16),transparent_50%)]" />

        <div className="relative grid items-center lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 text-white sm:p-10 md:p-14 lg:p-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime">
              Ready when you are
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
              Your northern route,
              <span className="mt-1 block text-lime">shaped around light.</span>
            </h2>
            <p className="mt-5 max-w-md text-base text-white/65">
              Pick a latitude, share dates, and we’ll build a clear plan —
              stays, transfers, and weather-smart pacing included.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/plan" className="btn-primary">
                Start planning
              </Link>
              <Link
                href="/destinations"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden />
                Browse routes
              </Link>
            </div>
          </div>

          <div className="relative min-h-[280px] lg:min-h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1400&q=85"
              alt="Northern lights over a snowy landscape"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/40 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-forest/30" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
