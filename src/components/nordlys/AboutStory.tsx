"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { brand } from "@/lib/brand";
import { easeOut } from "@/lib/motion";

const timeline = [
  {
    year: "2017",
    title: "First Lapland winter",
    body: "A single aurora week taught us the North needs its own kind of planning.",
  },
  {
    year: "2020",
    title: "Faroes added",
    body: "Cliff walks and ferry hops — island silence became part of the map.",
  },
  {
    year: "2023",
    title: "Highlands opened",
    body: "Iceland’s interior routes, only when roads and weather say yes.",
  },
  {
    year: "2026",
    title: "NORDLYS today",
    body: "Four countries. One focus. Small groups and light-led itineraries.",
  },
];

export function AboutStory() {
  const reduce = useReducedMotion();

  return (
    <>
      <section className="relative min-h-[55svh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=2200&q=85"
          alt="Icelandic highland under dramatic sky"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest/65" />
        <div className="relative z-10 flex min-h-[55svh] items-end">
          <div className="container-x pb-12 pt-28 text-white md:pb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime">
              About {brand.name}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
              A studio for Nordic wilderness — nothing else.
            </h1>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-3xl text-forest sm:text-4xl">
              Why we stay in one region.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Broad travel brands skim continents. {brand.name} stays north so
              every itinerary can respect weather, light, and local knowledge —
              not a template.
            </p>
          </div>
          <div className="relative border-l border-forest/15 pl-6 md:pl-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={reduce ? false : { opacity: 1, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: easeOut }}
                className="relative pb-10 last:pb-0"
              >
                <span className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full bg-lime ring-4 ring-cream md:-left-[2.65rem]" />
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
                  {item.year}
                </p>
                <h3 className="mt-2 font-display text-2xl text-forest">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
