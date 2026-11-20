import type { Destination, Package, Post, Testimonial } from "./types";

export const destinations: Destination[] = [
  {
    id: "lofoten",
    slug: "lofoten",
    name: "Lofoten",
    country: "Norway",
    tag: "Arctic Coast",
    duration: "06 Days / 05 Nights",
    description:
      "Fishermen’s cabins, sharp peaks rising from the sea, and long blue hours along Norway’s Arctic archipelago.",
    priceFrom: 1890,
    image:
      "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Lofoten islands peaks above a coastal village",
  },
  {
    id: "iceland-highlands",
    slug: "iceland-highlands",
    name: "Iceland Highlands",
    country: "Iceland",
    tag: "Volcanic Wild",
    duration: "07 Days / 06 Nights",
    description:
      "Black deserts, steaming valleys, and highland tracks that feel like another planet — paced for real discovery.",
    priceFrom: 2190,
    image:
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Icelandic highland landscape with mountains",
  },
  {
    id: "faroe",
    slug: "faroe-islands",
    name: "Faroe Islands",
    country: "Faroe Islands",
    tag: "Island Silence",
    duration: "05 Days / 04 Nights",
    description:
      "Grass-roof villages, cliffside walks, and Atlantic weather that turns every day into a new mood.",
    priceFrom: 1750,
    image:
      "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Faroe Islands green cliffs and sea",
  },
  {
    id: "lapland",
    slug: "finnish-lapland",
    name: "Finnish Lapland",
    country: "Finland",
    tag: "Polar Night",
    duration: "05 Days / 04 Nights",
    description:
      "Snow-quiet forests, glass-roof nights, and the chance to watch the sky move over the Arctic Circle.",
    priceFrom: 1680,
    image:
      "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Northern lights over snowy Lapland forest",
  },
];

export const packages: Package[] = [
  {
    id: "pkg-lofoten",
    slug: "lofoten-sea-peaks",
    name: "Sea & Peaks Circuit",
    place: "Lofoten, Norway",
    label: "Coastal Adventure",
    description:
      "Village stays, ridge walks, and quiet harbors — a coastal week shaped around light and weather.",
    days: "06 Days",
    price: 1890,
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1400&q=85",
    klnkUrl: null,
  },
  {
    id: "pkg-iceland",
    slug: "highlands-ember-route",
    name: "Ember Route",
    place: "Iceland Highlands",
    label: "Wilderness Drive",
    description:
      "Guided highland days through geothermal valleys, glacier edges, and wide volcanic plains.",
    days: "07 Days",
    price: 2190,
    image:
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1400&q=85",
    klnkUrl: null,
  },
  {
    id: "pkg-faroe",
    slug: "faroe-cliffside-week",
    name: "Cliffside Week",
    place: "Faroe Islands",
    label: "Island Walking",
    description:
      "Short hikes, ferry hops, and evenings in wind-shaped villages with room to breathe.",
    days: "05 Days",
    price: 1750,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=85",
    klnkUrl: null,
  },
  {
    id: "pkg-lapland",
    slug: "lapland-aurora-nights",
    name: "Aurora Nights",
    place: "Finnish Lapland",
    label: "Polar Escape",
    description:
      "Forest cabins, night sky watches, and slow winter days designed around silence and snow.",
    days: "05 Days",
    price: 1680,
    image:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1400&q=85",
    klnkUrl: null,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Lofoten felt cinematic without feeling crowded. Every day was planned around the light — not a checklist.",
    name: "Maja Lindqvist",
    place: "Lofoten, Norway",
  },
  {
    id: "t2",
    quote:
      "The highland route in Iceland was the wildest trip we’ve taken. Guides were calm, local, and completely in tune with the weather.",
    name: "Jonah Reed",
    place: "Iceland Highlands",
  },
  {
    id: "t3",
    quote:
      "The Faroes were pure quiet. NORDLYS kept the pace slow enough that we actually felt the islands.",
    name: "Elena Vos",
    place: "Faroe Islands",
  },
  {
    id: "t4",
    quote:
      "We saw the lights twice in Lapland. The cabin nights and forest mornings were unforgettable.",
    name: "Kenji Okada",
    place: "Finnish Lapland",
  },
];

export const posts: Post[] = [
  {
    id: "p1",
    slug: "best-time-northern-lights",
    title: "When to Chase the Northern Lights Without the Crowds",
    category: "Polar Tips",
    date: "November 2, 2026",
    excerpt:
      "Month-by-month notes on Lapland and northern Norway — weather windows, darkness hours, and quieter bases.",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "p2",
    slug: "packing-nordic-highlands",
    title: "What to Pack for Nordic Highlands (Without Overpacking)",
    category: "Gear",
    date: "October 21, 2026",
    excerpt:
      "A practical layering system for wind, wet ground, and sudden clear skies across Iceland and the Faroes.",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "p3",
    slug: "slow-days-in-lofoten",
    title: "How to Spend Slow Days in Lofoten",
    category: "Itinerary",
    date: "October 9, 2026",
    excerpt:
      "Harbor walks, ridge viewpoints, and cabin evenings — a softer way to read Norway’s Arctic coast.",
    image:
      "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?auto=format&fit=crop&w=1200&q=85",
  },
];

export const faqs = [
  {
    q: "How do I book a trip with NORDLYS?",
    a: "Choose a destination or send a trip inquiry. We’ll confirm dates, group size, and a clear plan before anything is locked in.",
  },
  {
    q: "Are these trips suitable in winter?",
    a: "Yes — Lapland and parts of Norway shine in polar season. Iceland and the Faroes run year-round with weather-smart pacing.",
  },
  {
    q: "How far in advance should I book?",
    a: "For aurora season and summer fjord weeks, 3–6 months is ideal. Shoulder months often open with shorter lead times.",
  },
  {
    q: "Do you only travel in the Nordics?",
    a: "Yes. NORDLYS focuses only on Nordic wilderness journeys — Norway, Iceland, the Faroe Islands, and Finnish Lapland.",
  },
  {
    q: "Can you arrange stays and transfers?",
    a: "Yes. Cabins, boutique lodges, airport pickups, and local transfers can be built into your plan.",
  },
  {
    q: "Are trips private or small-group?",
    a: "Both. Most journeys are small-group by design; private departures are available on request.",
  },
];

export const moments = [
  {
    n: "01",
    title: "Fjord Mornings",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=85",
  },
  {
    n: "02",
    title: "Volcanic Plains",
    image:
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=900&q=85",
  },
  {
    n: "03",
    title: "Cliff Paths",
    image:
      "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?auto=format&fit=crop&w=900&q=85",
  },
  {
    n: "04",
    title: "Aurora Nights",
    image:
      "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=900&q=85",
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}

export function getPackage(slug: string) {
  return packages.find((p) => p.slug === slug);
}

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
