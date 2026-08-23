import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/teamio/Navbar";
import { Hero } from "@/components/teamio/Hero";
import { StatsSection } from "@/components/teamio/StatsSection";
import { ProductStory } from "@/components/teamio/ProductStory";
import { TimelinePreview } from "@/components/teamio/TimelinePreview";
import { MessagingPreview } from "@/components/teamio/MessagingPreview";
import { CalendarPreview } from "@/components/teamio/CalendarPreview";
import { TaskPreview } from "@/components/teamio/TaskPreview";
import { EcosystemSection } from "@/components/teamio/EcosystemSection";
import { CommunitySection } from "@/components/teamio/CommunitySection";
import { SettingsAndSecurity } from "@/components/teamio/SettingsAndSecurity";
import { FeatureGrid } from "@/components/teamio/FeatureGrid";
import { PricingSection } from "@/components/teamio/PricingSection";
import { CTASection } from "@/components/teamio/CTASection";
import { Footer } from "@/components/teamio/Footer";

export const Route = createFileRoute("/_layout/")({
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 selection:bg-indigo-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Landing Sections */}
      <main>
        <Hero />
        <StatsSection />
        <ProductStory />
        <TimelinePreview />
        <MessagingPreview />
        <CalendarPreview />
        <TaskPreview />
        <EcosystemSection />
        <CommunitySection />
        <SettingsAndSecurity />
        <FeatureGrid />
        <PricingSection />
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
