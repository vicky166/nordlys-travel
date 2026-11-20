export type Destination = {
  id: string;
  slug: string;
  name: string;
  country: string;
  tag: string;
  duration: string;
  description: string;
  priceFrom: number;
  image: string;
  imageAlt: string;
};

export type Package = {
  id: string;
  slug: string;
  name: string;
  place: string;
  label: string;
  description: string;
  days: string;
  price: number;
  image: string;
  /** Unique booking URL per package. Null until a real KLNK is provided. */
  klnkUrl: string | null;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  place: string;
};
