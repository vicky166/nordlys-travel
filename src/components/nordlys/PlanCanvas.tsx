"use client";

import { InquiryForm } from "@/components/trekora/InquiryForm";
import { FadeIn } from "@/components/trekora/FadeIn";

const prompts = [
  { label: "Season", hint: "Aurora, midnight sun, or shoulder quiet?" },
  { label: "Pace", hint: "Ridge days, cabin slow, or a mix?" },
  { label: "Group", hint: "Two people, friends, or private guide?" },
];

export function PlanCanvas() {
  return (
    <section className="section-pad pt-28 md:pt-32">
      <div className="container-x">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Plan your trip</p>
            <h1 className="mt-3 font-display text-4xl text-forest sm:text-5xl md:text-6xl">
              Sketch the North. We’ll sharpen the route.
            </h1>
            <p className="mt-5 text-muted">
              Share a few preferences — we’ll come back with dates, bases, and a
              clear outline.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {prompts.map((p, i) => (
            <FadeIn key={p.label} delay={i * 0.06}>
              <div className="rounded-[1.35rem] border border-dashed border-forest/20 bg-white/60 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                  {p.label}
                </p>
                <p className="mt-2 font-display text-xl text-forest">{p.hint}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1}>
          <div className="mx-auto mt-10 max-w-xl">
            <InquiryForm variant="page" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
