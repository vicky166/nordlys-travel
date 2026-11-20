import Image from "next/image";
import { FadeIn } from "./FadeIn";

const moments = [
  {
    n: "01",
    title: "Rainforest Roads",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "02",
    title: "Island Escapes",
    image:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "03",
    title: "Alpine Villages",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "04",
    title: "Sunrise Flights",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
  },
];

export function MomentStrip() {
  return (
    <section className="pb-8 md:pb-12">
      <div className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {moments.map((m, i) => (
          <FadeIn key={m.n} delay={i * 0.06}>
            <article className="group relative aspect-[3/4] overflow-hidden rounded-[1.25rem]">
              <Image
                src={m.image}
                alt={m.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-xs tracking-[0.18em] text-white/70">
                  ({m.n})
                </p>
                <h3 className="mt-1 font-display text-xl">{m.title}</h3>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
