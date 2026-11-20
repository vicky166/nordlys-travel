import Link from "next/link";
import { FadeIn } from "./FadeIn";

const steps = [
  {
    n: "01",
    title: "Choose Your Destination",
    body: "Explore our destinations and find the place that inspires your next journey.",
  },
  {
    n: "02",
    title: "Customize Your Experience",
    body: "Tell us your travel preferences, dates, and budget. We’ll create a journey that feels uniquely yours.",
  },
  {
    n: "03",
    title: "Get Ready to Explore",
    body: "Confirm your travel plans, pack your bags, and get ready for an unforgettable experience.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">How It Works</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.08] text-forest sm:text-5xl">
              Three Steps to Your Next Adventure.
            </h2>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
          {steps.map((s, i) => {
            const highlight = i === 1;
            return (
              <FadeIn key={s.n} delay={i * 0.08}>
                <article
                  className={`group relative h-full overflow-hidden rounded-[1.75rem] p-7 transition duration-500 hover:-translate-y-1 md:p-8 ${
                    highlight
                      ? "bg-forest text-white shadow-[var(--shadow-lift)]"
                      : "bg-white text-forest shadow-[var(--shadow-soft)]"
                  }`}
                >
                  <p
                    className={`font-display text-6xl leading-none transition group-hover:translate-x-1 ${
                      highlight ? "text-lime" : "text-forest/12"
                    }`}
                  >
                    {s.n}
                  </p>
                  <h3 className="mt-7 font-display text-2xl leading-tight">
                    {s.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      highlight ? "text-white/72" : "text-muted"
                    }`}
                  >
                    {s.body}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.15}>
          <div className="mt-11 text-center">
            <Link href="/plan" className="btn-primary">
              Start Planning
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
