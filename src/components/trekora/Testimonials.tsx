import { testimonials } from "@/data/site";
import { FadeIn } from "./FadeIn";

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
];

export function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Testimonials</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.08] text-forest sm:text-5xl">
              Loved by Explorers Around the World.
            </h2>
            <p className="mt-3 text-muted">4.9/5 from 2,300+ reviews</p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <FadeIn key={t.id} delay={i * 0.06}>
              <blockquote className="flex h-full flex-col justify-between rounded-[1.5rem] bg-white p-6 shadow-[var(--shadow-soft)] transition duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <div>
                  <p className="tracking-wide text-forest" aria-label="5 stars">
                    ★★★★★
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    “{t.quote}”
                  </p>
                </div>
                <footer className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={avatars[i]}
                    alt=""
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-cream-deep"
                  />
                  <div>
                    <p className="text-sm font-bold text-forest">{t.name}</p>
                    <p className="text-xs text-muted">{t.place}</p>
                  </div>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
