"use client";

import { FormEvent, useState } from "react";
import { destinations } from "@/data/site";
import { FadeIn } from "./FadeIn";

export function InquiryForm({
  variant = "section",
}: {
  variant?: "section" | "page";
}) {
  const [sent, setSent] = useState(false);
  const [picked, setPicked] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const form = (
    <form onSubmit={onSubmit} className="space-y-5">
      {sent ? (
        <div className="py-8 text-center sm:py-12">
          <p className="font-display text-3xl text-forest">Inquiry sent.</p>
          <p className="mt-2 text-muted">We’ll get back to you shortly.</p>
        </div>
      ) : (
        <>
          <div>
            <p className="mb-3 text-sm font-medium text-muted">Destination</p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {destinations.map((d) => {
                const on = picked === d.name;
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setPicked(d.name)}
                    className={`rounded-2xl border px-3 py-3 text-left transition ${
                      on
                        ? "border-forest bg-forest text-white"
                        : "border-forest/10 bg-cream text-forest hover:border-forest/25"
                    }`}
                  >
                    <span className="block text-sm font-semibold">{d.name}</span>
                    <span
                      className={`mt-0.5 block text-[0.65rem] ${
                        on ? "text-white/60" : "text-muted"
                      }`}
                    >
                      {d.tag}
                    </span>
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => setPicked("Not sure yet")}
                className={`rounded-2xl border px-3 py-3 text-left transition sm:col-span-1 ${
                  picked === "Not sure yet"
                    ? "border-forest bg-forest text-white"
                    : "border-forest/10 bg-cream text-forest hover:border-forest/25"
                }`}
              >
                <span className="block text-sm font-semibold">Not sure</span>
                <span
                  className={`mt-0.5 block text-[0.65rem] ${
                    picked === "Not sure yet" ? "text-white/60" : "text-muted"
                  }`}
                >
                  Help me decide
                </span>
              </button>
            </div>
            <input type="hidden" name="destination" value={picked} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-muted">
                Check-in
              </span>
              <input type="date" name="checkin" className="input-field" />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-muted">
                Check-out
              </span>
              <input type="date" name="checkout" className="input-field" />
            </label>
          </div>

          <label className="block text-sm">
            <span className="mb-1.5 block font-medium text-muted">Guests</span>
            <input
              type="number"
              name="guests"
              min={1}
              defaultValue={2}
              className="input-field"
            />
          </label>

          {variant === "page" ? (
            <>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-muted">
                  Full Name
                </span>
                <input name="name" required className="input-field" />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-muted">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="input-field"
                />
              </label>
            </>
          ) : null}

          <button
            type="submit"
            disabled={!picked}
            className="btn-forest mt-2 w-full disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send Inquiry
          </button>
        </>
      )}
    </form>
  );

  if (variant === "page") {
    return (
      <div className="rounded-[1.75rem] bg-white p-6 shadow-[var(--shadow-lift)] md:p-8">
        {form}
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden bg-cream-deep/60 py-[clamp(4rem,8vw,7rem)]">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-lime/30 blur-3xl" />
      <div className="container-x relative grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <FadeIn>
          <p className="eyebrow">Trip inquiry</p>
          <h2 className="mt-4 font-display text-4xl leading-[1.08] text-forest sm:text-5xl">
            Tell us which North you’re chasing.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            Tap a destination, share dates, and we’ll shape a weather-smart plan
            around the light.
          </p>
          <ul className="mt-10 space-y-4 text-sm text-forest/80">
            {[
              "Small-group or private departures",
              "Local guides who read the sky",
              "Stays & transfers built in",
            ].map((line) => (
              <li key={line} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-deep" />
                {line}
              </li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="rounded-[2rem] border border-forest/8 bg-white p-6 md:p-8">
            {form}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
