import { FadeIn } from "./FadeIn";

export function StatBanner() {
  return (
    <section className="bg-green py-16 text-white md:py-20">
      <FadeIn>
        <div className="container-x text-center">
          <p className="font-display text-6xl sm:text-7xl md:text-8xl">98%</p>
          <p className="mx-auto mt-4 max-w-md text-lg text-white/85 sm:text-xl">
            of travelers say their trip exceeded expectations.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
