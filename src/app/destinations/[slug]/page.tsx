import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations, getDestination } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) return { title: "Destination" };
  return { title: d.name, description: d.description };
}

export default async function DestinationDetailPage({ params }: Props) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) notFound();

  return (
    <>
      <section className="bg-cream px-3 pb-5 pt-24 sm:px-4 md:px-5 md:pt-28">
        <div className="relative mx-auto min-h-[52svh] max-w-[92rem] overflow-hidden rounded-[1.75rem] md:rounded-[2.5rem]">
          <Image
            src={d.image}
            alt={d.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/15" />
          <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lime">
              {d.tag} · {d.duration}
            </p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl">
              {d.name}
            </h1>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-display text-3xl text-forest md:text-4xl">
              About this trip
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {d.description}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Our specialists help refine dates, stays, and experiences so the
              journey matches your pace — quiet escapes, cultural depth, or
              elevated city moments.
            </p>
          </div>
          <aside className="rounded-[1.5rem] bg-white p-6 shadow-[var(--shadow-soft)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              From
            </p>
            <p className="mt-2 font-display text-4xl text-forest">
              ${d.priceFrom.toLocaleString()}
            </p>
            <p className="mt-1 text-sm text-muted">per person · {d.duration}</p>
            <Link href="/plan" className="btn-primary mt-6 w-full">
              Get Started
            </Link>
            <Link
              href="/destinations"
              className="mt-3 inline-flex w-full justify-center rounded-full border border-forest/15 px-6 py-3 text-sm font-semibold text-forest transition hover:bg-forest hover:text-white"
            >
              All Destinations
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
