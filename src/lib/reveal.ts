/**
 * Safe scroll-reveal initial state.
 * Always keeps opacity at 1 so content stays visible if JS/hydration fails
 * (common over Cloudflare quick tunnels + Next.js).
 */
export function revealIn(
  reduce: boolean | null,
  extra: Record<string, unknown> = {},
) {
  if (reduce) return false;
  const { filter: _filter, opacity: _opacity, ...rest } = extra;
  return { opacity: 1, y: 24, ...rest };
}

export const revealView = { opacity: 1, y: 0, filter: "blur(0px)" } as const;

export const revealViewport = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -8% 0px",
} as const;
