"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { brand } from "@/lib/brand";
import { easeOut } from "@/lib/motion";

const latitudes = [
  { label: "Lofoten", coord: "68°N" },
  { label: "Iceland", coord: "64°N" },
  { label: "Faroes", coord: "62°N" },
  { label: "Lapland", coord: "67°N" },
];

export function NorthManifest() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-forest/8 bg-cream-deep/40">
      <div className="container-x section-pad">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <motion.p
              initial={reduce ? false : { opacity: 1, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-forest/45"
            >
              The {brand.name} idea · 60–70°N
            </motion.p>

            <h2 className="mt-6 max-w-xl font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] text-forest">
              {["Not Europe.", "Just the North."].map((line, i) => (
                <motion.span
                  key={line}
                  initial={
                    reduce ? false : { opacity: 1, y: 36, }
                  }
                  whileInView={{ opacity: 1, y: 0, }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.08 + i * 0.12,
                    ease: easeOut,
                  }}
                  className={`block ${i === 1 ? "text-forest-soft" : ""}`}
                >
                  {line}
                </motion.span>
              ))}
            </h2>

            <motion.p
              initial={reduce ? false : { opacity: 1, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
              className="mt-6 max-w-md text-base leading-relaxed text-muted"
            >
              Fjords, highlands, cliff islands, polar forests. One region. Deeper
              routes. Light as the itinerary.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 1, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.18, ease: easeOut }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-forest/10 pt-8"
            >
              {latitudes.map((item) => (
                <div key={item.label} className="min-w-[4.5rem]">
                  <p className="font-mono text-[0.65rem] tracking-wider text-forest/40">
                    {item.coord}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-forest">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-forest transition hover:gap-3"
            >
              Read the manifesto
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-lime"
                aria-hidden
              >
                →
              </span>
            </Link>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 1, scale: 0.97, }}
            whileInView={{ opacity: 1, scale: 1, }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.9, ease: easeOut }}
            className="relative"
          >
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] md:aspect-[5/6]">
              <Image
                src="https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?auto=format&fit=crop&w=1400&q=85"
                alt="Nordic coastal peaks at dusk"
                fill
                className="object-cover transition duration-[900ms] ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/55 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 font-display text-2xl leading-snug text-white md:text-3xl">
                “Light is the itinerary. Everything else follows.”
              </p>
            </div>
            <div className="absolute -left-3 top-8 hidden rounded-full bg-lime px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-forest shadow-[var(--shadow-soft)] lg:block">
              Field note
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
