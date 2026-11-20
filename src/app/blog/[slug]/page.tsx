import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return { title: "Article" };
  return { title: p.title, description: p.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  const related = posts.filter((post) => post.id !== p.id).slice(0, 2);

  return (
    <article>
      {/* Hero — full-bleed editorial */}
      <section className="px-3 pb-6 pt-24 sm:px-4 md:px-5 md:pt-28">
        <div className="relative mx-auto min-h-[52svh] max-w-[92rem] overflow-hidden rounded-[1.75rem] md:min-h-[62svh] md:rounded-[2.5rem]">
          <Image
            src={p.image}
            alt={p.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/45 to-forest/15" />
          <div className="absolute inset-x-0 bottom-0 p-7 md:p-12 lg:p-14">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-lime/90 transition hover:text-lime"
            >
              ← Journal
            </Link>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
              {p.category} · {p.date}
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-3xl leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {p.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section-pad pt-10 md:pt-14">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
            <div className="max-w-2xl">
              <p className="font-display text-2xl leading-snug text-forest md:text-3xl">
                {p.excerpt}
              </p>
              <div className="mt-10 space-y-5 text-base leading-relaxed text-muted md:text-lg">
                <p>
                  Great trips start with curiosity. Whether you’re mapping a
                  first visit or returning to a favorite place, thoughtful pacing
                  and local detail make the difference between a checklist and a
                  journey worth remembering.
                </p>
                <p>
                  In the North, light is the real schedule. Aurora windows,
                  midnight sun, and shoulder weather all ask for flexible days —
                  and bases quiet enough to feel the shift when the sky opens.
                </p>
                <p>
                  Ready to turn inspiration into plans? Share your dates and
                  preferences with our team — we’ll help shape an itinerary that
                  feels personal from day one.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-3 border-t border-forest/10 pt-10">
                <Link href="/plan" className="btn-primary">
                  Plan your journey
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center rounded-full border border-forest/15 px-5 py-3.5 text-sm font-semibold text-forest transition hover:bg-cream-deep"
                >
                  More notes
                </Link>
              </div>
            </div>

            <aside className="lg:pt-2">
              <div className="rounded-[1.5rem] border border-forest/10 bg-cream-deep/50 p-6 lg:sticky lg:top-28">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  In this note
                </p>
                <ul className="mt-4 space-y-3 text-sm text-forest">
                  <li className="flex gap-2">
                    <span className="text-forest/30">01</span>
                    Season windows
                  </li>
                  <li className="flex gap-2">
                    <span className="text-forest/30">02</span>
                    Quieter bases
                  </li>
                  <li className="flex gap-2">
                    <span className="text-forest/30">03</span>
                    How to plan next
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex text-sm font-semibold text-forest underline-offset-4 hover:underline"
                >
                  Ask the field team →
                </Link>
              </div>
            </aside>
          </div>

          {/* Related */}
          {related.length > 0 ? (
            <div className="mt-20 border-t border-forest/10 pt-14 md:mt-24">
              <p className="eyebrow">Keep reading</p>
              <h2 className="mt-3 font-display text-3xl text-forest sm:text-4xl">
                Nearby notes
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {related.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group flex gap-5 overflow-hidden rounded-[1.5rem] border border-forest/8 bg-white p-3 pr-5 transition hover:border-forest/15 hover:shadow-[var(--shadow-soft)]"
                  >
                    <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-[1.1rem] sm:h-32 sm:w-36">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition duration-600 group-hover:scale-105"
                        sizes="144px"
                      />
                    </div>
                    <div className="flex min-w-0 flex-col justify-center py-1">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted">
                        {post.category}
                      </p>
                      <h3 className="mt-1.5 font-display text-lg leading-snug text-forest sm:text-xl">
                        {post.title}
                      </h3>
                      <span className="mt-3 text-sm font-semibold text-forest/70 transition group-hover:text-forest">
                        Read →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </article>
  );
}
