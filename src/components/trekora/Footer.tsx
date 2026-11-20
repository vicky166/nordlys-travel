import Link from "next/link";
import { brand } from "@/lib/brand";

const company = [
  { href: "/about", label: "About Us" },
  { href: "/destinations", label: "Destinations" },
  { href: "/blog", label: "Blog" },
  { href: "/plan", label: "Plan a Trip" },
];

const support = [
  { href: "/contact", label: "Contact" },
  { href: "/contact", label: "Help Center" },
  { href: "/contact", label: "Privacy Policy" },
  { href: "/contact", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="container-x pt-14 md:pt-20">
        <p className="font-display text-[16vw] leading-[0.85] tracking-tight text-lime sm:text-[12vw] md:text-[9.5rem] lg:text-[12rem]">
          {brand.name}
        </p>

        <div className="mt-10 grid gap-10 border-t border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="max-w-md text-sm leading-relaxed text-white/65">
              {brand.tagline} Small-group Nordic wilderness journeys across
              fjords, highlands, islands, and polar nights.
            </p>
            <div className="mt-6 flex gap-3">
              {["Ig", "X", "Yt", "In"].map((s) => (
                <span
                  key={s}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white/80 transition hover:bg-lime hover:text-forest"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-lime">Company</p>
            <ul className="mt-4 space-y-2.5">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-lime">Support</p>
            <ul className="mt-4 space-y-2.5">
              {support.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-1 text-sm text-white/70">
              <a href={brand.phoneHref} className="block hover:text-white">
                {brand.phone}
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="block hover:text-white"
              >
                {brand.email}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-5 text-sm text-white/45 sm:flex-row sm:justify-between">
          <p>© 2026 {brand.name}. All rights reserved.</p>
          <p>{brand.address}</p>
        </div>
      </div>
    </footer>
  );
}
