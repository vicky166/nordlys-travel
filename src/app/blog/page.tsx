import type { Metadata } from "next";
import { JournalIndex } from "@/components/nordlys/JournalIndex";

export const metadata: Metadata = {
  title: "Journal",
  description: "Field notes on Nordic light, packing, and slow itineraries.",
};

export default function BlogPage() {
  return <JournalIndex />;
}
