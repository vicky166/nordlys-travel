import type { Metadata } from "next";
import { DestinationAtlas } from "@/components/nordlys/DestinationAtlas";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Nordic wilderness destinations across Norway, Iceland, the Faroe Islands, and Finnish Lapland.",
};

export default function DestinationsPage() {
  return (
    <div className="pt-24 md:pt-28">
      <div className="container-x mb-6 max-w-2xl">
        <p className="eyebrow">Atlas</p>
        <h1 className="mt-3 font-display text-4xl text-forest sm:text-5xl md:text-6xl">
          Four latitudes. One north.
        </h1>
        <p className="mt-4 text-muted sm:text-lg">
          Editorial routes — not a grid of the same cards you just saw on the
          homepage.
        </p>
      </div>
      <DestinationAtlas />
    </div>
  );
}
