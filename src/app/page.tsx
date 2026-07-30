import { HeroSection } from "@/components/sections/HeroSection";
import { QuickInfoBar } from "@/components/sections/QuickInfoBar";
import { RebrandStory } from "@/components/sections/RebrandStory";
import { MenuSection } from "@/components/sections/MenuSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { LoyaltySection } from "@/components/sections/LoyaltySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickInfoBar />
      <RebrandStory />
      <MenuSection />
      <LocationSection />
      <LoyaltySection />
    </>
  );
}

