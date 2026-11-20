"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { faqs } from "@/data/site";
import { easeOut } from "@/lib/motion";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section className="section-pad bg-cream-deep/35">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <motion.div
            initial={reduce ? false : { opacity: 1, y: 28, }}
            whileInView={{ opacity: 1, y: 0, }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 font-display text-4xl text-forest sm:text-5xl">
              Before you go north.
            </h2>
            <p className="mt-4 max-w-sm text-muted">
              Straight answers on booking, seasons, and how NORDLYS trips work.
            </p>
            <div className="mt-8 hidden lg:block">
              <p className="text-sm text-muted">Still unsure?</p>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white transition hover:bg-forest-mid"
              >
                Ask our team <span aria-hidden>→</span>
              </Link>
            </div>
          </motion.div>

          <div>
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={item.q}
                  initial={
                    reduce ? false : { opacity: 1, y: 18, }
                  }
                  whileInView={{ opacity: 1, y: 0, }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.04,
                    ease: easeOut,
                  }}
                  className="border-b border-forest/10"
                >
                  <button
                    type="button"
                    className="flex w-full items-start gap-4 py-6 text-left sm:gap-5 sm:py-7"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`mt-1 font-mono text-[0.7rem] tracking-wider ${
                        isOpen ? "text-forest" : "text-forest/30"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block font-display text-xl leading-snug transition sm:text-2xl ${
                          isOpen ? "text-forest" : "text-forest/75"
                        }`}
                      >
                        {item.q}
                      </span>
                      <AnimatePresence initial={false}>
                        {isOpen ? (
                          <motion.span
                            key="answer"
                            initial={
                              reduce ? false : { height: 0, opacity: 0 }
                            }
                            animate={{ height: "auto", opacity: 1 }}
                            exit={
                              reduce ? undefined : { height: 0, opacity: 0 }
                            }
                            transition={{ duration: 0.35, ease: easeOut }}
                            className="block overflow-hidden"
                          >
                            <span className="mt-3 block max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                              {item.a}
                            </span>
                          </motion.span>
                        ) : null}
                      </AnimatePresence>
                    </span>
                    <span
                      className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm transition ${
                        isOpen
                          ? "bg-lime text-forest"
                          : "bg-white text-forest/50"
                      }`}
                      aria-hidden
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </motion.div>
              );
            })}

            <div className="mt-10 lg:hidden">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white"
              >
                Ask our team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
