import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/site";
import { FadeIn } from "./FadeIn";

export function BlogPreview() {
  return (
    <section className="pb-[clamp(4rem,8vw,7rem)]">
      <div className="container-x">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <FadeIn>
            <p className="eyebrow">Blog & News</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.08] text-forest sm:text-5xl">
              Inspiration for Your Next Great Escape.
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <Link
              href="/blog"
              className="inline-flex rounded-full border border-forest/15 bg-white px-5 py-2.5 text-sm font-semibold text-forest shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:bg-forest hover:text-white"
            >
              Explore All
            </Link>
          </FadeIn>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.06}>
              <Link href={`/blog/${p.slug}`} className="group block">
                <article className="overflow-hidden rounded-[1.5rem] bg-white shadow-[var(--shadow-soft)] transition duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/25 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-lime">
                        {p.category}
                      </p>
                      <h3 className="mt-2 font-display text-xl leading-snug transition group-hover:translate-y-[-2px] md:text-2xl">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
