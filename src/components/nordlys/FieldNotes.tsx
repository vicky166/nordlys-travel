"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { posts } from "@/data/site";
import { easeOut } from "@/lib/motion";

export function FieldNotes() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cream-deep/40 to-cream-deep/70" />

      <div className="container-x relative section-pad">
        <motion.div
          initial={reduce ? false : { opacity: 1, y: 22, }}
          whileInView={{ opacity: 1, y: 0, }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.75, ease: easeOut }}
          className="mx-auto mb-14 max-w-xl text-center"
        >
          <p className="eyebrow">Journal</p>
          <h2 className="mt-3 font-display text-4xl text-forest sm:text-5xl">
            Writing from the ridge.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Soft field notes on light, packing, and slower northern days.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={reduce ? false : { opacity: 1, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: easeOut }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white/70 p-3 shadow-[0_8px_30px_rgba(26,42,24,0.04)] ring-1 ring-forest/[0.04] backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_40px_rgba(26,42,24,0.08)]"
              >
                <div className="relative aspect-[5/4] overflow-hidden rounded-[1.35rem]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-[900ms] ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-forest/0 transition duration-500 group-hover:bg-forest/5" />
                </div>

                <div className="flex flex-1 flex-col px-3 pb-4 pt-5 sm:px-4">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-forest/40">
                    {post.category}
                    <span className="mx-2 text-forest/20">·</span>
                    {post.date}
                  </p>
                  <h3 className="mt-2.5 font-display text-xl leading-snug text-forest sm:text-2xl">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-forest/70 transition group-hover:gap-2.5 group-hover:text-forest">
                    Read gently
                    <span
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-cream-deep text-[0.7rem] transition group-hover:bg-lime"
                      aria-hidden
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-forest/10 bg-white/60 px-5 py-2.5 text-sm font-semibold text-forest backdrop-blur-sm transition hover:border-forest/20 hover:bg-white"
          >
            Browse all notes <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
