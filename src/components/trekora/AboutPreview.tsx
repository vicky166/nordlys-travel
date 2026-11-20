import Image from "next/image";
import Link from "next/link";
import { moments } from "@/data/site";
import { brand } from "@/lib/brand";
import { FadeIn } from "./FadeIn";

const points = [
  "Small-group Nordic itineraries",
  "Local guides who read the weather",
  "Cabins, lodges, and quiet bases",
];

export function AboutPreview() {
  return (
    <section className="section-pad">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <FadeIn>
          <p className="eyebrow">About Us</p>
          <h2 className="mt-4 font-display text-4xl leading-[1.08] text-forest sm:text-5xl">
            Built for the North — not the checklist.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {brand.name} focuses on Nordic wilderness only: fjords, highlands,
            islands, and polar nights. We keep groups small, days flexible, and
            the landscape front and center.
          </p>
          <ul className="mt-8 space-y-3.5">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3.5 text-forest">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime text-[0.7rem] font-bold text-forest shadow-[0_6px_16px_rgba(212,233,92,0.35)]">
                  ✓
                </span>
                <span className="font-semibold">{point}</span>
              </li>
            ))}
          </ul>
          <Link href="/about" className="btn-forest mt-9">
            Discover Our Story
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {moments.map((m, i) => (
              <div
                key={m.n}
                className={`group relative overflow-hidden rounded-[1.4rem] shadow-[var(--shadow-soft)] ${
                  i % 2 === 1 ? "translate-y-6 md:translate-y-10" : ""
                } aspect-[3/4]`}
              >
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  sizes="(max-width: 1024px) 45vw, 22vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/55 via-transparent to-transparent opacity-80" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <p className="text-[0.65rem] tracking-[0.16em] text-white/70">
                    ({m.n})
                  </p>
                  <p className="mt-1 font-display text-lg leading-none">
                    {m.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
