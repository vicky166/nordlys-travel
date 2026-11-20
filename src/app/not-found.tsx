import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center py-28">
      <div className="container-x max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
          404
        </p>
        <h1 className="mt-3 font-display text-4xl text-forest sm:text-5xl">
          This path isn’t on the map.
        </h1>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-lime px-6 py-3 text-sm font-bold text-forest hover:bg-lime-deep"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
