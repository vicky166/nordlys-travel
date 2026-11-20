import Image from "next/image";
import Link from "next/link";
import { packages } from "@/data/site";
import { FadeIn } from "./FadeIn";

export function Packages() {
  return (
    <section className="section-pad bg-cream-deep/70">
      <div className="container-x grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16">
        <FadeIn className="lg:sticky lg:top-28">
          <p className="eyebrow">Handpicked Experiences</p>
          <h2 className="mt-4 font-display text-4xl leading-[1.08] text-forest sm:text-5xl">
            Journeys Designed Around You.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Thoughtfully curated packages for every kind of explorer — paced
            with intention, packed with local depth.
          </p>
          <Link href="/plan" className="btn-forest mt-8">
            Book Now
          </Link>
        </FadeIn>

        <div className="space-y-4">
          {packages.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.05}>
              <article className="group overflow-hidden rounded-[1.5rem] bg-white shadow-[var(--shadow-soft)] transition duration-500 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] sm:grid sm:grid-cols-[0.95fr_1.05fr]">
                <div className="relative aspect-[16/11] overflow-hidden sm:aspect-auto sm:min-h-[180px]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-5 md:p-6">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted">
                    {p.place}
                  </p>
                  <h3 className="mt-1.5 font-display text-2xl text-forest">
                    {p.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                    {p.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <p className="text-sm font-bold text-forest">
                      ${p.price.toLocaleString()}
                      <span className="ml-1.5 font-medium text-muted">
                        · {p.days}
                      </span>
                    </p>
                    {p.klnkUrl ? (
                      <a
                        href={p.klnkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-lime px-4 py-2 text-sm font-bold text-forest transition hover:bg-lime-deep"
                      >
                        Book
                      </a>
                    ) : (
                      <Link
                        href="/plan"
                        className="rounded-full bg-lime px-4 py-2 text-sm font-bold text-forest transition hover:bg-lime-deep"
                      >
                        Book
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
