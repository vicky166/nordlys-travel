import { FadeIn } from "./FadeIn";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-[linear-gradient(160deg,#e7e3d4_0%,#f3f1e7_55%,#eef5d8_100%)] pt-28 pb-14 md:pt-36 md:pb-20">
      <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-lime/20 blur-3xl" />
      <div className="container-x relative max-w-3xl">
        <FadeIn>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="mt-4 font-display text-4xl leading-[1.08] text-forest sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
          ) : null}
        </FadeIn>
      </div>
    </section>
  );
}
