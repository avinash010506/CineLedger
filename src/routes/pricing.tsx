import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Pricing } from "@/components/site/Pricing";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing — CineLedger" },
      {
        name: "description",
        content:
          "Transparent plans for indie producers, studios and enterprise distributors. Start free, no credit card required.",
      },
      { property: "og:title", content: "Pricing — CineLedger" },
      {
        property: "og:description",
        content:
          "Plans that scale with your slate. Indie ₹24k/mo · Studio ₹89k/mo · Enterprise custom.",
      },
    ],
  }),
});

const F = "'Inter', ui-sans-serif, -apple-system, sans-serif";

const comparisonRows = [
  { feature: "Active productions", indie: "1", studio: "Up to 10", enterprise: "Unlimited" },
  { feature: "Team members", indie: "5", studio: "25", enterprise: "Unlimited" },
  { feature: "Document vault", indie: "5 GB", studio: "100 GB", enterprise: "Custom" },
  { feature: "Budget & expense tracking", indie: "✓", studio: "✓", enterprise: "✓" },
  { feature: "Box office sync", indie: "✓", studio: "✓", enterprise: "✓" },
  { feature: "BookMyShow / PVR / INOX", indie: "✗", studio: "✓", enterprise: "✓" },
  { feature: "OTT deal tracking", indie: "Basic", studio: "Full", enterprise: "Full + Custom" },
  { feature: "AI revenue forecasting", indie: "✗", studio: "✓", enterprise: "✓ + Custom Models" },
  { feature: "Role-based access", indie: "✗", studio: "✓", enterprise: "✓ + Custom Roles" },
  { feature: "Investor dashboard", indie: "✗", studio: "✓", enterprise: "✓" },
  { feature: "Audit logs", indie: "30 days", studio: "1 year", enterprise: "7 years" },
  { feature: "SOC 2 & compliance", indie: "✗", studio: "✗", enterprise: "✓" },
  { feature: "Dedicated infrastructure", indie: "✗", studio: "✗", enterprise: "✓" },
  { feature: "Custom API integrations", indie: "✗", studio: "✗", enterprise: "✓" },
  { feature: "SLA guarantee", indie: "99.9%", studio: "99.9%", enterprise: "99.99% custom" },
  { feature: "Support", indie: "Email", studio: "Priority", enterprise: "24/7 Dedicated CSM" },
];

function PricingPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#000", color: "#fff", fontFamily: F }}>
      <Nav />

      {/* Spacer for fixed nav */}
      <div style={{ paddingTop: "6rem" }}>
        <Pricing />
      </div>

      {/* Feature Comparison Table */}
      <section
        style={{ padding: "4rem 1.5rem 8rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: "center", marginBottom: "3.5rem" }}
          >
            <span
              style={{
                fontSize: "0.6875rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "#52525b",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Full Comparison
            </span>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.05em",
                lineHeight: 0.95,
              }}
            >
              What's in each plan?
            </h2>
          </motion.div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "600px" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "1rem 1.25rem",
                      fontSize: "0.75rem",
                      color: "#52525b",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                    }}
                  >
                    Feature
                  </th>
                  {["Indie", "Studio", "Enterprise"].map((tier, i) => (
                    <th
                      key={tier}
                      style={{
                        textAlign: "center",
                        padding: "1rem 1.25rem",
                        fontSize: "0.875rem",
                        fontWeight: 700,
                        color: i === 1 ? "#fff" : "#a1a1aa",
                        background: i === 1 ? "rgba(255,255,255,0.04)" : "transparent",
                      }}
                    >
                      {tier}
                      {i === 1 && (
                        <span
                          style={{
                            display: "block",
                            fontSize: "0.625rem",
                            color: "#fbbf24",
                            textTransform: "uppercase",
                            letterSpacing: "0.15em",
                            marginTop: "0.25rem",
                            fontWeight: 700,
                          }}
                        >
                          Most Chosen
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    style={{
                      borderBottom:
                        i < comparisonRows.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.875rem 1.25rem",
                        fontSize: "0.875rem",
                        color: "#71717a",
                        fontWeight: 300,
                      }}
                    >
                      {row.feature}
                    </td>
                    {[row.indie, row.studio, row.enterprise].map((val, ci) => (
                      <td
                        key={ci}
                        style={{
                          textAlign: "center",
                          padding: "0.875rem 1.25rem",
                          fontSize: "0.875rem",
                          color: val === "✓" ? "#34d399" : val === "✗" ? "#3f3f46" : "#a1a1aa",
                          fontWeight: val === "✓" || val === "✗" ? 700 : 400,
                          background: ci === 1 ? "rgba(255,255,255,0.02)" : "transparent",
                        }}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              textAlign: "center",
              marginTop: "3rem",
              fontSize: "0.875rem",
              color: "#3f3f46",
            }}
          >
            All plans include a 14-day free trial. No credit card required.{" "}
            <a
              href="/contact"
              style={{
                color: "#71717a",
                textDecoration: "underline",
                textDecorationColor: "rgba(255,255,255,0.15)",
              }}
            >
              Have questions? Talk to us.
            </a>
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
