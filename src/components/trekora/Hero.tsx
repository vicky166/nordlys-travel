"use client";

import Image from "next/image";
import Link from "next/link";
import { MouseEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { brand } from "@/lib/brand";
import { easeOut } from "@/lib/motion";

const chips = [
  {
    label: "Fjord Light",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M3 18h18l-5.5-8.5-3 4.5-2.5-3.5L3 18z" />
        <path d="M14.5 8.2l1.3-2.2 4.7 7.5h-2.8l-3.2-5.3z" opacity="0.85" />
      </svg>
    ),
  },
  {
    label: "Polar Nights",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l2.8 1.6" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1.15" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Wild Highlands",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M21 3L3.5 11.2c-.7.3-.6 1.3.1 1.5l5.2 1.5 1.5 5.3c.2.7 1.2.8 1.5.1L21 3z" />
      </svg>
    ),
  },
];

export function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });
  const imgX = useTransform(sx, [-0.5, 0.5], ["-1.5%", "1.5%"]);
  const imgY = useTransform(sy, [-0.5, 0.5], ["-1%", "1%"]);
  const contentY = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const chipsX = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const glowX = useTransform(sx, [-0.5, 0.5], ["20%", "80%"]);
  const glowY = useTransform(sy, [-0.5, 0.5], ["30%", "70%"]);
  const glow = useMotionTemplate`radial-gradient(520px circle at ${glowX} ${glowY}, rgba(212,233,92,0.14), transparent 55%)`;

  function onMove(e: MouseEvent<HTMLElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section className="bg-cream px-3 pb-5 sm:px-5 md:px-7 lg:px-9">
      <motion.div
        className="relative mx-auto flex min-h-[min(78dvh,740px)] max-w-[92rem] flex-col justify-end overflow-hidden rounded-[2rem] md:min-h-[min(82dvh,800px)] md:rounded-[2.5rem]"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        initial={reduce ? false : { opacity: 1, y: 24, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: easeOut }}
      >
        {/* Background with Ken Burns + subtle parallax */}
        <motion.div
          className="absolute inset-[-4%]"
          style={reduce ? undefined : { x: imgX, y: imgY }}
          initial={reduce ? false : { scale: 1.16 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 2.8, ease: easeOut }}
        >
          <motion.div
            className="absolute inset-0"
            animate={
              reduce
                ? undefined
                : {
                    scale: [1, 1.04, 1],
                  }
            }
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=85"
              alt="Alpine mountain valley with village and snow peaks"
              fill
              priority
              className="object-cover object-[center_35%]"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-[linear-gradient(105deg,rgba(12,16,10,0.52)_0%,rgba(12,16,10,0.22)_45%,rgba(12,16,10,0.18)_100%)]"
          initial={reduce ? false : { opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: easeOut }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,16,10,0.12)_0%,transparent_35%,rgba(12,16,10,0.28)_100%)]" />

        {/* Soft mouse glow */}
        {!reduce ? (
          <motion.div
            className="pointer-events-none absolute inset-0 mix-blend-soft-light"
            style={{ background: glow }}
          />
        ) : null}

        {/* Left copy — in-flow so short/landscape viewports don't clip CTAs */}
        <motion.div
          className="relative z-10 mt-auto max-w-full p-6 sm:p-8 md:p-10 lg:max-w-[58%] lg:p-12 xl:p-14"
          style={reduce ? undefined : { y: contentY }}
        >
          <motion.div
            initial={reduce ? false : { opacity: 1, y: 18, }}
            animate={{ opacity: 1, y: 0, }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3.5 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-[7px] w-[7px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4e95c] opacity-70" />
              <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#d4e95c]" />
            </span>
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white">
              {brand.eyebrow}
            </span>
          </motion.div>

          <h1 className="mt-5 max-w-[12ch] font-sans text-[clamp(2.35rem,5.2vw,4.35rem)] font-extrabold leading-[1.04] tracking-[-0.035em] text-white sm:max-w-none">
            {["The North Is Waiting.", "Let’s Go Beyond."].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.04em]">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "40%", opacity: 1 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.18 + i * 0.14,
                    ease: easeOut,
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-5 max-w-[34rem] text-[0.95rem] leading-[1.65] text-white/88 sm:text-[1.02rem]"
            initial={reduce ? false : { opacity: 1, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48, ease: easeOut }}
          >
            {brand.heroDescription}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 1, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.62, ease: easeOut }}
          >
            <motion.div whileHover={reduce ? undefined : { y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/destinations"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#d4e95c] px-5 py-3.5 text-sm font-bold text-[#1a2414] shadow-[0_10px_30px_rgba(212,233,92,0.25)] transition hover:bg-[#c6db4f]"
              >
                <span className="h-[7px] w-[7px] rounded-full bg-[#1a2414]" />
                Explore Destinations
              </Link>
            </motion.div>
            <motion.div whileHover={reduce ? undefined : { y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/plan"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-[#1a2414]/55 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-[#1a2414]/75"
              >
                <span className="h-[7px] w-[7px] rounded-full bg-[#d4e95c]" />
                Plan Your Journey
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right chips */}
        <motion.div
          className="absolute bottom-6 right-6 z-10 hidden flex-col items-end gap-3 sm:bottom-8 sm:right-8 md:flex md:bottom-10 md:right-10 lg:bottom-12 lg:right-12"
          style={reduce ? undefined : { x: chipsX }}
        >
          {chips.map((chip, i) => (
            <motion.div
              key={chip.label}
              initial={reduce ? false : { opacity: 1, x: 36, }}
              animate={{ opacity: 1, x: 0, }}
              transition={{
                duration: 0.75,
                delay: 0.55 + i * 0.12,
                ease: easeOut,
              }}
              whileHover={reduce ? undefined : { x: -6, scale: 1.03 }}
            >
              <motion.div
                className="inline-flex cursor-default items-center gap-3 rounded-full border border-white/25 bg-white/12 py-2.5 pl-2.5 pr-5 text-white shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl"
                animate={
                  reduce
                    ? undefined
                    : { y: [0, i % 2 === 0 ? -6 : 5, 0] }
                }
                transition={{
                  duration: 4.5 + i * 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              >
                <motion.span
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d4e95c] text-[#1a2414]"
                  whileHover={reduce ? undefined : { rotate: -8, scale: 1.08 }}
                >
                  {chip.icon}
                </motion.span>
                <span className="pr-1 text-[0.9rem] font-medium tracking-[-0.01em]">
                  {chip.label}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
