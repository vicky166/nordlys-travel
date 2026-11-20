import { Hero } from "@/components/trekora/Hero";
import { Impact } from "@/components/trekora/Impact";
import { InquiryForm } from "@/components/trekora/InquiryForm";
import { Newsletter } from "@/components/trekora/Newsletter";
import { Faq } from "@/components/trekora/Faq";
import { NorthManifest } from "@/components/nordlys/NorthManifest";
import { SignalMarquee } from "@/components/nordlys/SignalMarquee";
import { LightRoutes } from "@/components/nordlys/LightRoutes";
import { SeasonBoard } from "@/components/nordlys/SeasonBoard";
import { GrowSignals } from "@/components/nordlys/GrowSignals";
import { SignalSteps } from "@/components/nordlys/SignalSteps";
import { VoiceReel } from "@/components/nordlys/VoiceReel";
import { NorthCTA } from "@/components/nordlys/NorthCTA";
import { FieldNotes } from "@/components/nordlys/FieldNotes";

export default function HomePage() {
  return (
    <>
      <Hero />
      <NorthManifest />
      <SignalMarquee />
      <LightRoutes />
      <SeasonBoard />
      <GrowSignals />
      <SignalSteps />
      <InquiryForm />
      <VoiceReel />
      <Impact />
      <NorthCTA />
      <Faq />
      <Newsletter />
      <FieldNotes />
    </>
  );
}
