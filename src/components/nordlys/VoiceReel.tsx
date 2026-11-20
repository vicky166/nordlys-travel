"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { destinations, testimonials } from "@/data/site";
import { easeOut } from "@/lib/motion";

export function VoiceReel() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const t = testimonials[index];
  const photo = destinations[index % destinations.length];

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [reduce, index]);

  return (
    <section className="px-3 sm:px-4 md:px-5">
      <div className="relative mx-auto min-h-[440px] max-w-[92rem] overflow-hidden rounded-[1.75rem] sm:min-h-[520px] md:min-h-[640px] md:rounded-[2.5rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={photo.id}
            className="absolute inset-0"
            initial={reduce ? false : { opacity: 1, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.9, ease: easeOut }}
          >
            <Image
              src={photo.image}
              alt={photo.imageAlt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-forest/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent" />

        <div className="relative z-10 flex h-full min-h-[440px] flex-col justify-between p-6 text-white sm:min-h-[520px] sm:p-10 md:min-h-[640px] md:p-14">
          <motion.p
            initial={reduce ? false : { opacity: 1, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-lime"
          >
            Field voices
          </motion.p>

          <div className="mx-auto max-w-3xl text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={
                  reduce ? false : { opacity: 1, y: 24, }
                }
                animate={{ opacity: 1, y: 0, }}
                exit={
                  reduce
                    ? undefined
                    : { opacity: 0, y: -16, }
                }
                transition={{ duration: 0.55, ease: easeOut }}
              >
                <blockquote className="font-display text-3xl leading-snug sm:text-4xl md:text-5xl">
                  “{t.quote}”
                </blockquote>
                <footer className="mt-8">
                  <p className="font-semibold text-lime">{t.name}</p>
                  <p className="mt-1 text-sm text-white/60">{t.place}</p>
                </footer>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1">
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show quote from ${item.name}`}
                className="inline-flex h-11 min-w-11 items-center justify-center"
              >
                <span
                  className={`block h-2 rounded-full transition-all ${
                    i === index
                      ? "w-10 bg-lime"
                      : "w-2 bg-white/35"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
