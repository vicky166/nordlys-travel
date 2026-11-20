"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { moments } from "@/data/site";
import { easeOut } from "@/lib/motion";

const extras = [
  {
    n: "05",
    title: "Harbor Evenings",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=900&q=85",
  },
  {
    n: "06",
    title: "Quiet Cabins",
    image:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=900&q=85",
  },
];

const cards = [...moments, ...extras];

function Track({ reverse = false }: { reverse?: boolean }) {
  const loop = [...cards, ...cards];

  return (
    <div
      className={`flex w-max gap-4 pr-4 ${
        reverse ? "nordlys-marquee-reverse" : "nordlys-marquee"
      }`}
    >
      {loop.map((item, i) => (
        <article
          key={`${item.n}-${i}-${reverse ? "r" : "f"}`}
          className="group relative h-[220px] w-[280px] shrink-0 overflow-hidden rounded-[1.5rem] sm:h-[260px] sm:w-[320px]"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="320px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-white">
            <p className="font-mono text-[0.65rem] tracking-wider text-lime/80">
              {item.n}
            </p>
            <h3 className="mt-1 font-display text-2xl leading-tight">
              {item.title}
            </h3>
            <p className="mt-1 text-xs text-white/60">Nordic field signal</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function SignalMarquee() {
  const reduce = useReducedMotion();

  return (
    <section className="overflow-hidden py-10 md:py-14">
      <div className="container-x mb-8">
        <motion.div
          initial={reduce ? false : { opacity: 1, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: easeOut }}
          className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="eyebrow">In the field</p>
            <h2 className="mt-2 font-display text-3xl text-forest sm:text-4xl">
              Moments that set the pace.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted">
            Fjord light, volcanic plains, cliff paths — tap or hover to pause.
          </p>
        </motion.div>
      </div>

      {reduce ? (
        <div className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((item) => (
            <article
              key={item.n}
              className="relative h-[220px] overflow-hidden rounded-[1.5rem]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-5 text-white">
                <h3 className="font-display text-2xl">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div
          className="group/marquee space-y-4"
          onTouchStart={(e) => {
            e.currentTarget.classList.add("is-paused");
          }}
          onTouchEnd={(e) => {
            e.currentTarget.classList.remove("is-paused");
          }}
        >
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <Track />
          </div>
          <div className="hidden overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] md:block">
            <Track reverse />
          </div>
        </div>
      )}
    </section>
  );
}
