import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FeaturesGrid } from "@/components/site/FeaturesGrid";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Wallet,
  TrendingUp,
  Film,
  Globe,
  Brain,
  ShieldCheck,
  BarChart3,
  Users,
  Calendar,
  FolderOpen,
  Bell,
  Camera,
  Scale,
  UserCheck,
  FileText,
  Search,
  Settings,
  Clapperboard,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/features")({
  component: FeaturesPage,
  head: () => ({
    meta: [
      { title: "Features — CineLedger" },
      {
        name: "description",
        content:
          "Every module CineLedger ships — budgets, box office, OTT, analytics, AI insights and more. 20 powerful modules for film studios.",
      },
      { property: "og:title", content: "Features — CineLedger" },
      {
        property: "og:description",
        content:
          "20 modules covering every aspect of film production management — budgets, box office, investors, AI analytics.",
      },
    ],
  }),
});

const F = "'Inter', ui-sans-serif, -apple-system, sans-serif";

const highlights = [
  {
    icon: Wallet,
    title: "Budget Intelligence",
    desc: "Department-wise budget allocation with live burn-rate alerts, multi-level approval workflows, and forecasting. Replace your Excel files permanently.",
    accent: "#34d399",
    features: [
      "Department-wise allocation",
      "Multi-level approvals",
      "Burn-rate alerts",
      "Budget vs actuals",
    ],
  },
  {
    icon: BarChart3,
    title: "Box Office & Revenue",
    desc: "Daily collections from BookMyShow, PVR, INOX, and Paytm — unified. Domestic, overseas, OTT, satellite, and streaming revenue tracked in real-time.",
    accent: "#f472b6",
    features: ["Live box office sync", "OTT deal tracking", "Satellite rights", "Overseas revenue"],
  },
  {
    icon: Brain,
    title: "CineAI Analytics",
    desc: "Predictive revenue models, budget risk detection, and audience sentiment analysis. Forecast your Q3 OTT deal before you negotiate it.",
    accent: "#a78bfa",
    features: ["Revenue forecasting", "Risk flagging", "Sentiment analysis", "Audience insights"],
  },
  {
    icon: UserCheck,
    title: "Investor Management",
    desc: "ROI distribution dashboards, shareholding reports, funding history, and real-time investor notifications. Your financiers get full visibility.",
    accent: "#2dd4bf",
    features: ["ROI dashboards", "Shareholding reports", "Investor portal", "Deal tracking"],
  },
];

const complianceTags = [
  "SOC 2 Type II",
  "GDPR Compliant",
  "DPDP Act",
  "ISO 27001",
  "99.99% SLA",
  "AES-256 Encryption",
  "Audit Logs (7yr)",
  "Zero-Knowledge Vaults",
];

function FeaturesPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#000", color: "#fff", fontFamily: F }}>
      <Nav />

      {/* Hero */}
      <section
        style={{
          paddingTop: "10rem",
          paddingBottom: "5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              style={{
                fontSize: "0.6875rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "#52525b",
                display: "block",
                marginBottom: "1.25rem",
              }}
            >
              The full reel
            </span>
            <h1
              style={{
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.055em",
                lineHeight: 0.9,
                marginBottom: "1.75rem",
              }}
            >
              Every tool a<br />
              <span
                style={{
                  background: "linear-gradient(135deg, #71717a 0%, #3f3f46 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                producer needs.
              </span>
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#71717a",
                fontWeight: 300,
                lineHeight: 1.75,
                maxWidth: "42rem",
                marginBottom: "2.5rem",
              }}
            >
              Designed with studios releasing 4–40 titles a year. From a single indie short to a
              ₹200 Cr tentpole — 20 modules cover every aspect of your production.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link
                to="/signup"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  borderRadius: 999,
                  background: "#fff",
                  color: "#000",
                  padding: "0.875rem 2rem",
                  fontSize: "0.9375rem",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Start Free Trial <ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
              <Link
                to="/app"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.05)",
                  color: "#fff",
                  padding: "0.875rem 2rem",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Explore Dashboard →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlight Feature Deep-Dives */}
      <section style={{ padding: "6rem 1.5rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "82rem", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: "center", marginBottom: "4rem" }}
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
              Core Capabilities
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.05em",
                lineHeight: 0.95,
              }}
            >
              The four pillars
              <br />
              <span style={{ color: "#3f3f46" }}>of studio operations.</span>
            </h2>
          </motion.div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  padding: "2rem",
                  borderRadius: "1.5rem",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "background 0.25s",
                }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "1rem",
                    background: `${h.accent}18`,
                    border: `1px solid ${h.accent}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <h.icon style={{ width: 22, height: 22, color: h.accent }} />
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "0.75rem",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {h.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#71717a",
                    lineHeight: 1.7,
                    fontWeight: 300,
                    marginBottom: "1.5rem",
                  }}
                >
                  {h.desc}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  {h.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <CheckCircle2
                        style={{ width: 14, height: 14, color: h.accent, flexShrink: 0 }}
                      />
                      <span style={{ fontSize: "0.8125rem", color: "#a1a1aa" }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Modules Grid */}
      <FeaturesGrid />

      {/* Compliance */}
      <section
        style={{
          padding: "6rem 1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          background: "#000",
        }}
      >
        <div style={{ maxWidth: "56rem", margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
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
              Security & Compliance
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.05em",
                lineHeight: 0.95,
                marginBottom: "1.25rem",
              }}
            >
              Enterprise-grade.
              <br />
              <span style={{ color: "#3f3f46" }}>Studio-tested.</span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "#71717a",
                fontWeight: 300,
                lineHeight: 1.75,
                marginBottom: "2.5rem",
              }}
            >
              Your scripts, contracts, and financial data are protected with the same standards used
              by global financial institutions.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.625rem",
                justifyContent: "center",
                marginBottom: "3rem",
              }}
            >
              {complianceTags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "0.5rem 1.125rem",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                    color: "#a1a1aa",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              to="/signup"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                borderRadius: 999,
                background: "#fff",
                color: "#000",
                padding: "0.875rem 2.25rem",
                fontSize: "0.9375rem",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 0 40px rgba(255,255,255,0.15)",
              }}
            >
              Start Free Trial <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
