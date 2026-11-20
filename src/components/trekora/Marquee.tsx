const items = [
  "Adventure Awaits",
  "Discover More",
  "Travel Beyond Limits",
  "Adventure Awaits",
  "Discover More",
  "Travel Beyond Limits",
];

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-line bg-bg-soft py-4">
      <div className="flex w-max animate-[trekora-marquee_28s_linear_infinite] gap-10 whitespace-nowrap px-4">
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-xl text-ink/80 sm:text-2xl"
          >
            {item}
            <span className="ml-10 text-green">•</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes trekora-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
