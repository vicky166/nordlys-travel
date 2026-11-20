import type { Metadata } from "next";
import { ContactStudio } from "@/components/nordlys/ContactStudio";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${brand.name} to plan a Nordic journey.`,
};

export default function ContactPage() {
  return <ContactStudio />;
}
