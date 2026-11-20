import Image from "next/image";
import { FadeIn } from "./FadeIn";

const reasons = [
  {
    title: "Nordic specialists",
    body: "We only plan Norway, Iceland, the Faroes, and Lapland — deeper routes, fewer distractions.",
    dark: true,
  },
  {
    title: "Weather-smart pacing",
    body: "Itineraries flex with wind, light, and road conditions so the trip still feels effortless.",
    dark: false,
  },
  {
    title: "Quiet bases",
    body: "Cabins, lodges, and harborside stays chosen for atmosphere — not tourist density.",
    dark: false,
  },
  {
    title: "Local-led days",
    body: "Guides who know the ridges, ferries, and night-sky windows — and when to stay in.",
    dark: true,
  },
];

export function WhyTrekora() {
  return (
    <section className="section-pad bg-[linear-gradient(180deg,transparent,rgba(231,227,212,0.55)_40%,transparent)]">
      <div className="container-x">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Why NORDLYS</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.08] text-forest sm:text-5xl">
              The North, planned with care.
            </h2>
          </div>
        </FadeIn>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
          <FadeIn>
            <div className="group relative min-h-[440px] overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)] lg:h-full">
              <Image
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1600&q=85"
                alt="Hiker walking through a lush forest trail"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lime">
                  On the trail
                </p>
                <p className="mt-2 font-display text-2xl md:text-3xl">
                  Guided by people who love the journey.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <FadeIn key={r.title} delay={i * 0.05}>
                <article
                  className={`group flex h-full flex-col justify-between rounded-[1.5rem] p-6 transition duration-500 hover:-translate-y-1 md:p-7 ${
                    r.dark
                      ? "bg-forest text-white shadow-[var(--shadow-lift)]"
                      : "bg-white text-forest shadow-[var(--shadow-soft)]"
                  }`}
                >
                  <div>
                    <div
                      className={`mb-5 flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold transition group-hover:scale-105 ${
                        r.dark
                          ? "bg-lime text-forest"
                          : "bg-cream-deep text-forest"
                      }`}
                    >
                      0{i + 1}
                    </div>
                    <h3 className="font-display text-2xl leading-tight">
                      {r.title}
                    </h3>
                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        r.dark ? "text-white/72" : "text-muted"
                      }`}
                    >
                      {r.body}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
