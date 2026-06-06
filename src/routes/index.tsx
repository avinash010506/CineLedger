import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { DashboardPreview } from "@/components/site/DashboardPreview";
import { FeaturesGrid } from "@/components/site/FeaturesGrid";
import { MovieProjectShowcase } from "@/components/site/MovieProjectShowcase";
import { ProduceWorkspaceSection } from "@/components/site/ProduceWorkspaceSection";
import { FinanceWorkspaceSection } from "@/components/site/FinanceWorkspaceSection";
import { DistributeHubSection } from "@/components/site/DistributeHubSection";
import { AccountantRoleSection } from "@/components/site/AccountantRoleSection";
import { ManagerRoleSection } from "@/components/site/ManagerRoleSection";
import { CrewRoleSection } from "@/components/site/CrewRoleSection";
import { AiAnalyticsSection } from "@/components/site/AiAnalyticsSection";
import { EnterpriseFeatures } from "@/components/site/EnterpriseFeatures";
import { Testimonials } from "@/components/site/Testimonials";
import { Pricing } from "@/components/site/Pricing";
import { CtaSection } from "@/components/site/CtaSection";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        fontFamily:
          "'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        /* Global Responsive Overrides for Marketing Site Inline Styles */
        @media (max-width: 1024px) {
          /* Force all 1fr 1fr, 4x1fr, and 2fr 1fr grids into a single column */
          div[style*="grid-template-columns: 1fr 1fr"],
          div[style*="grid-template-columns: repeat(4, 1fr)"],
          div[style*="grid-template-columns: repeat(4,1fr)"],
          div[style*="grid-template-columns: 2fr 1fr"],
          div[style*="grid-template-columns: 1fr 1fr 1fr 1fr"],
          div[style*="grid-template-columns: 1fr 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          
          /* Fix Hero floating cards */
          div[style*="animation: cardFloat"] {
            display: none !important;
          }

          /* Fix AI Analytics Sticky Scroll on Mobile */
          #ai-analytics > div:nth-of-type(2) {
            height: auto !important;
          }
          #ai-analytics > div:nth-of-type(2) > div {
            position: relative !important;
            height: auto !important;
            overflow: visible !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 4rem !important;
            padding-bottom: 4rem !important;
          }
          #ai-analytics > div:nth-of-type(2) > div > div:first-child {
            height: 60vh !important;
            padding: 0 !important;
          }
        }
      `}</style>

      {/* ── Navigation ─────────────────────── */}
      <Nav />

      {/* ── Hero + Dashboard Mockup ────────── */}
      <Hero />

      {/* ── Trust Bar ─────────────────────── */}
      <TrustBar />

      {/* ── Live Dashboard Preview ─────────── */}
      <div id="features">
        <DashboardPreview />
      </div>

      {/* ── 17 Modules Grid ────────────────── */}
      <FeaturesGrid />

      {/* ── Feature Sections ───────────────── */}
      <div id="projects">
        <MovieProjectShowcase />
      </div>

      {/* ── New Workspaces ─────────────────── */}
      <div id="produce">
        <ProduceWorkspaceSection />
      </div>
      <div id="finance">
        <FinanceWorkspaceSection />
      </div>
      <div id="distribute">
        <DistributeHubSection />
      </div>

      {/* ── Role-Specific Tools ─────────────── */}
      <AccountantRoleSection />
      <ManagerRoleSection />
      <CrewRoleSection />

      <AiAnalyticsSection />
      <EnterpriseFeatures />

      {/* ── Social Proof ───────────────────── */}
      <Testimonials />

      {/* ── Pricing ────────────────────────── */}
      <Pricing />

      {/* ── Conversion CTA ─────────────────── */}
      <CtaSection />

      {/* ── Footer ─────────────────────────── */}
      <Footer />
    </main>
  );
}
