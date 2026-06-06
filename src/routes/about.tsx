import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { motion } from "framer-motion";
import { Film, Heart, Lock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — CineLedger" },
      {
        name: "description",
        content:
          "Why we're building the operating system for cinema's business side. Born on a Mumbai set in 2022.",
      },
      { property: "og:title", content: "About — CineLedger" },
      {
        property: "og:description",
        content: "Why we're building the operating system for cinema's business side.",
      },
    ],
  }),
});

const F = "'Inter', ui-sans-serif, -apple-system, sans-serif";

const stats = [
  { k: "180+", v: "Studios on board" },
  { k: "320+", v: "Titles tracked" },
  { k: "₹4,200 Cr", v: "Revenue reconciled" },
  { k: "2,400+", v: "Crew members managed" },
];

const values = [
  {
    icon: Film,
    title: "Cinema first.",
    desc: "Every feature is shaped by people who've actually finished a film. We build for the set, not the spreadsheet.",
    accent: "#60a5fa",
  },
  {
    icon: Lock,
    title: "Numbers you trust.",
    desc: "Bank-grade reconciliation, immutable audit logs, and real-time ledgers so your financiers sleep easy.",
    accent: "#34d399",
  },
  {
    icon: Heart,
    title: "Quiet design.",
    desc: "The dashboard should feel like the colour grade — calm, precise, and beautiful. Not like a call sheet.",
    accent: "#a78bfa",
  },
];

const timeline = [
  {
    year: "2022",
    event:
      "Founded on a Mumbai sound stage by a line producer and a fintech engineer counting twelve spreadsheets between them.",
  },
  {
    year: "2023",
    event:
      "Launched beta with 12 studios. Processed first ₹100 Cr in production budgets within 60 days.",
  },
  {
    year: "2024",
    event:
      "Series A funding. Expanded to 100+ studios across Hindi, Tamil, Telugu, and Malayalam cinema.",
  },
  {
    year: "2025",
    event:
      "Crossed 180 studios, launched CineAI revenue forecasting, and integrated BookMyShow & PVR real-time box office sync.",
  },
  {
    year: "2026",
    event:
      "Expanding globally — co-productions with UK, UAE, and US studios. Multi-currency support for cross-border deals.",
  },
];

function AboutPage() {
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
              Our story
            </span>
            <h1
              style={{
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.055em",
                lineHeight: 0.9,
                marginBottom: "2rem",
              }}
            >
              A love letter
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #71717a 0%, #3f3f46 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                to the producer.
              </span>
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#71717a",
                fontWeight: 300,
                lineHeight: 1.75,
                maxWidth: "42rem",
                marginBottom: "0",
              }}
            >
              CineLedger was born on a Mumbai sound stage in 2022, when our founders — a line
              producer and a fintech engineer — counted twelve spreadsheets between them and decided
              enough was enough. Today we power the books of indie auteurs, regional studios, and
              South Asia's largest distributors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section
        style={{
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "6rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ maxWidth: "56rem", margin: "0 auto", paddingTop: "4rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2rem",
            }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  padding: "2rem",
                  borderRadius: "1.5rem",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.055em",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {s.k}
                </div>
                <div
                  style={{
                    fontSize: "0.8125rem",
                    color: "#52525b",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    fontWeight: 600,
                  }}
                >
                  {s.v}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        style={{
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "6rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ maxWidth: "56rem", margin: "0 auto", paddingTop: "5rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: "3.5rem" }}
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
              What we stand for
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.05em",
                lineHeight: 0.95,
              }}
            >
              Our values
            </h2>
          </motion.div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  padding: "2rem",
                  borderRadius: "1.5rem",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "1rem",
                    background: `${v.accent}18`,
                    border: `1px solid ${v.accent}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <v.icon style={{ width: 20, height: 20, color: v.accent }} />
                </div>
                <h3
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "0.625rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{ fontSize: "0.9rem", color: "#71717a", lineHeight: 1.7, fontWeight: 300 }}
                >
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        style={{
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "6rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ maxWidth: "56rem", margin: "0 auto", paddingTop: "5rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: "3.5rem" }}
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
              The journey
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.05em",
                lineHeight: 0.95,
              }}
            >
              Our milestones
            </h2>
          </motion.div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "flex",
                  gap: "2rem",
                  paddingBottom: "2.5rem",
                  position: "relative",
                }}
              >
                {/* Timeline line */}
                {i < timeline.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      left: "3rem",
                      top: "2.5rem",
                      width: 1,
                      height: "100%",
                      background: "rgba(255,255,255,0.06)",
                    }}
                  />
                )}
                <div style={{ width: "6rem", flexShrink: 0, paddingTop: "0.25rem" }}>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 800,
                      color: "#3f3f46",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {t.year}
                  </span>
                </div>
                <div
                  style={{
                    flex: 1,
                    padding: "1.25rem 1.5rem",
                    borderRadius: "1rem",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "#a1a1aa",
                      lineHeight: 1.7,
                      margin: 0,
                      fontWeight: 300,
                    }}
                  >
                    {t.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "8rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          style={{ maxWidth: "56rem", margin: "0 auto", paddingTop: "5rem", textAlign: "center" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.05em",
                lineHeight: 0.95,
                marginBottom: "1.25rem",
              }}
            >
              Join the story.
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "#71717a",
                fontWeight: 300,
                lineHeight: 1.75,
                maxWidth: "30rem",
                margin: "0 auto 2.5rem",
              }}
            >
              180+ studios already trust CineLedger with every frame and every rupee. It's your
              turn.
            </p>
            <div
              style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
            >
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
                  boxShadow: "0 0 40px rgba(255,255,255,0.15)",
                }}
              >
                Start Free Trial <ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
              <Link
                to="/contact"
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
                Talk to us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
