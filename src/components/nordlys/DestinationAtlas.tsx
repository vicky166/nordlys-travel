"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { destinations } from "@/data/site";
import { easeOut } from "@/lib/motion";

export function DestinationAtlas() {
  const reduce = useReducedMotion();

  return (
    <section className="pb-[clamp(4rem,8vw,7rem)] pt-6">
      <div className="container-x space-y-16 md:space-y-24">
        {destinations.map((d, i) => {
          const flip = i % 2 === 1;
          return (
            <motion.article
              key={d.id}
              initial={reduce ? false : { opacity: 1, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: easeOut }}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                flip ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] md:aspect-[16/11] lg:aspect-[5/4]">
                <Image
                  src={d.image}
                  alt={d.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-forest">
                  {String(i + 1).padStart(2, "0")} · {d.tag}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  {d.country} · {d.duration}
                </p>
                <h2 className="mt-3 font-display text-4xl text-forest sm:text-5xl">
                  {d.name}
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
                  {d.description}
                </p>
                <p className="mt-6 font-display text-3xl text-forest">
                  From ${d.priceFrom.toLocaleString()}
                </p>
                <Link
                  href={`/destinations/${d.slug}`}
                  className="btn-forest mt-8"
                >
                  View this route
                </Link>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
