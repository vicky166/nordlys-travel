"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { posts } from "@/data/site";
import { easeOut } from "@/lib/motion";

export function JournalIndex() {
  const reduce = useReducedMotion();
  const [featured, ...rest] = posts;

  return (
    <section className="overflow-hidden pb-[clamp(4rem,8vw,7rem)] pt-28 md:pt-32">
      <div className="container-x">
        <motion.div
          initial={reduce ? false : { opacity: 1, y: 28, }}
          animate={{ opacity: 1, y: 0, }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="eyebrow">Journal</p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] text-forest sm:text-5xl md:text-6xl">
              Notes from cold air and long light.
            </h1>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted md:pb-1">
            Season windows, packing systems, and slow itineraries from the field.
          </p>
        </motion.div>

        {/* Featured — full-width image, copy underneath */}
        <motion.div
          initial={reduce ? false : { opacity: 1, y: 36, }}
          animate={{ opacity: 1, y: 0, }}
          transition={{ duration: 0.85, delay: 0.08, ease: easeOut }}
        >
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem] md:aspect-[21/9] md:rounded-[2rem]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                className="object-cover transition duration-[1000ms] ease-out group-hover:scale-[1.03]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent opacity-80" />
              <span className="absolute left-5 top-5 rounded-full bg-lime px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-forest md:left-7 md:top-7">
                Featured
              </span>
            </div>

            <div className="mt-7 grid gap-6 md:grid-cols-[1fr_auto] md:items-end md:gap-12">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  {featured.category} · {featured.date}
                </p>
                <h2 className="mt-3 font-display text-3xl leading-tight text-forest transition group-hover:text-forest-soft sm:text-4xl md:text-5xl">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                  {featured.excerpt}
                </p>
              </div>
              <span className="inline-flex h-fit items-center gap-2 self-start rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white transition group-hover:bg-forest-mid md:self-end">
                Read note <span aria-hidden>→</span>
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Index — numbered rows, not split cards */}
        <div className="mt-16 md:mt-20">
          <motion.p
            initial={reduce ? false : { opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-forest/40"
          >
            More from the ridge
          </motion.p>

          <div className="divide-y divide-forest/10 border-y border-forest/10">
            {rest.map((p, i) => (
              <motion.div
                key={p.id}
                initial={reduce ? false : { opacity: 1, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: easeOut }}
              >
                <Link
                  href={`/blog/${p.slug}`}
                  className="group grid gap-5 py-8 transition sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8 md:py-10"
                >
                  <span className="font-mono text-xs tracking-wider text-forest/30 transition group-hover:text-forest/60">
                    {String(i + 2).padStart(2, "0")}
                  </span>

                  <div className="flex min-w-0 items-start gap-5 sm:items-center">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl sm:h-24 sm:w-28">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition duration-600 group-hover:scale-105"
                        sizes="112px"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted">
                        {p.category} · {p.date}
                      </p>
                      <h3 className="mt-1.5 font-display text-xl leading-snug text-forest transition group-hover:text-forest-soft sm:text-2xl md:text-3xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-muted md:max-w-lg">
                        {p.excerpt}
                      </p>
                    </div>
                  </div>

                  <span className="hidden items-center gap-2 text-sm font-semibold text-forest sm:inline-flex">
                    Read
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-deep text-forest transition group-hover:bg-forest group-hover:text-lime"
                      aria-hidden
                    >
                      →
                    </span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom signal */}
        <motion.div
          initial={reduce ? false : { opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: easeOut }}
          className="mt-16 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] bg-forest px-7 py-9 text-white sm:flex-row sm:items-center md:px-10"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lime">
              Turn notes into nights
            </p>
            <p className="mt-2 font-display text-2xl sm:text-3xl">
              Ready to plan a northern week?
            </p>
          </div>
          <Link href="/plan" className="btn-primary shrink-0">
            Start planning
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
