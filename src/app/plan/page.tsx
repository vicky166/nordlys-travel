import type { Metadata } from "next";
import { PlanCanvas } from "@/components/nordlys/PlanCanvas";
import { SignalSteps } from "@/components/nordlys/SignalSteps";

export const metadata: Metadata = {
  title: "Plan Your Trip",
  description:
    "Share season, pace, and group size — NORDLYS will outline your Nordic route.",
};

export default function PlanPage() {
  return (
    <>
      <PlanCanvas />
      <div className="border-t border-forest/10">
        <SignalSteps />
      </div>
    </>
  );
}
