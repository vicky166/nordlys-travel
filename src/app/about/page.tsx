import type { Metadata } from "next";
import { AboutStory } from "@/components/nordlys/AboutStory";
import { SeasonBoard } from "@/components/nordlys/SeasonBoard";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn how ${brand.name} designs Nordic wilderness journeys.`,
};

export default function AboutPage() {
  return (
    <>
      <AboutStory />
      <SeasonBoard />
    </>
  );
}
