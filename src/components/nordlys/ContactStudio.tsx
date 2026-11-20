"use client";

import { brand } from "@/lib/brand";
import { InquiryForm } from "@/components/trekora/InquiryForm";
import { FadeIn } from "@/components/trekora/FadeIn";

export function ContactStudio() {
  return (
    <section className="section-pad pt-28 md:pt-32">
      <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <FadeIn>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 font-display text-4xl text-forest sm:text-5xl">
            Write us from anywhere. We’ll answer from the North.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Questions about seasons, group size, or a private departure —
            send a note and we’ll reply with a clear next step.
          </p>

          <div className="mt-10 space-y-5 rounded-[1.5rem] bg-forest p-6 text-white md:p-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-lime">
                Email
              </p>
              <a
                href={`mailto:${brand.email}`}
                className="mt-1 block text-lg font-medium hover:text-lime"
              >
                {brand.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-lime">
                Phone
              </p>
              <a
                href={brand.phoneHref}
                className="mt-1 block text-lg font-medium hover:text-lime"
              >
                {brand.phone}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-lime">
                Studio
              </p>
              <p className="mt-1 text-sm leading-relaxed text-white/75">
                {brand.address}
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <InquiryForm variant="page" />
        </FadeIn>
      </div>
    </section>
  );
}
