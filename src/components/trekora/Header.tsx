"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { brand } from "@/lib/brand";
import { easeOut } from "@/lib/motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/destinations", label: "Destinations" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "bg-cream/90 shadow-[0_10px_40px_rgba(26,42,24,0.08)] backdrop-blur-xl"
            : "bg-cream"
        }`}
      >
        <div className="mx-auto grid h-[4.5rem] max-w-[92rem] grid-cols-[1fr_auto] items-center gap-3 px-4 sm:px-6 md:h-[5rem] md:px-8 lg:grid-cols-3 lg:px-10">
          {/* Logo */}
          <Link href="/" className="flex w-fit items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a2414] text-[#d4e95c]">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                aria-hidden
              >
                <circle cx="12" cy="12" r="8.2" />
                <path d="M12 7.5v4.5l3 1.8" strokeLinecap="round" />
                <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <span className="text-[1.1rem] font-extrabold tracking-[-0.02em] text-[#1a2414]">
              {brand.name}
            </span>
          </Link>

          {/* Center pill nav — truly centered */}
          <nav className="hidden justify-self-center rounded-full bg-white p-1.5 shadow-[0_8px_32px_rgba(26,42,24,0.08)] lg:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-[1.05rem] py-2.5 text-[0.8125rem] font-medium transition ${
                    active
                      ? "bg-[#f3f1ea] text-[#1a2414]"
                      : "text-[#1a2414]/70 hover:text-[#1a2414]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center justify-end gap-2">
            <Link
              href="/plan"
              className="hidden items-center gap-2.5 rounded-full bg-[#1a2414] px-5 py-3 text-[0.8125rem] font-semibold text-white transition hover:bg-[#2a3424] sm:inline-flex"
            >
              <span className="h-[7px] w-[7px] rounded-full bg-[#d4e95c]" />
              Plan Your Trip
            </Link>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1a2414] shadow-[0_6px_20px_rgba(26,42,24,0.08)] lg:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3.5 w-[18px]">
                <span
                  className={`absolute left-0 h-[1.5px] w-full bg-current transition duration-300 ${
                    open ? "top-[6px] rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-[1.5px] w-full bg-current transition duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-[1.5px] w-full bg-current transition duration-300 ${
                    open ? "top-[6px] -rotate-45" : "top-[12px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              key="mobile-nav"
              initial={reduce ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduce ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: easeOut }}
              className="overflow-hidden border-t border-black/5 bg-cream lg:hidden"
            >
              <nav className="flex flex-col gap-1 px-4 py-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-3 py-3 text-base font-semibold text-[#1a2414] hover:bg-white"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/plan"
                  className="mt-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#1a2414] px-5 py-3.5 text-sm font-semibold text-white"
                >
                  <span className="h-[7px] w-[7px] rounded-full bg-[#d4e95c]" />
                  Plan Your Trip
                </Link>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
      {/* Spacer for fixed header */}
      <div className="h-[4.5rem] md:h-[5rem]" aria-hidden />
    </>
  );
}
