import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import {
  BrainCircuit,
  ScanSearch,
  LineChart,
  TrendingUp,
  Activity,
  Users,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { useRef, useEffect } from "react";

const F = "'Inter', ui-sans-serif, -apple-system, sans-serif";

const aiFeatures = [
  {
    icon: TrendingUp,
    title: "Box Office Prediction",
    desc: "ML models trained on 1,000+ Indian and global films. Predicts opening weekend, week 2 hold, and lifetime collection per territory.",
    score: 94,
    label: "Model Accuracy",
    color: "#60a5fa",
    glowColor: "rgba(96,165,250,0.25)",
  },
  {
    icon: Activity,
    title: "Budget Risk Detection",
    desc: "Monitors spending velocity across every department. Flags overrun risk 2–3 weeks before it happens so you can course-correct.",
    score: 87,
    label: "Risk Flagged Early",
    color: "#fbbf24",
    glowColor: "rgba(251,191,36,0.25)",
  },
  {
    icon: Users,
    title: "Audience Sentiment",
    desc: "Aggregates social media signals, search trends, and historical demographic data to score audience appetite before release.",
    score: 82,
    label: "Sentiment Score",
    color: "#a78bfa",
    glowColor: "rgba(167,139,250,0.25)",
  },
  {
    icon: BarChart3,
    title: "Revenue Forecasting",
    desc: "Dynamic P&L projections updated daily based on marketing spend, trailer views, and competitive release slate.",
    score: 91,
    label: "Forecast Confidence",
    color: "#34d399",
    glowColor: "rgba(52,211,153,0.25)",
  },
];

const CSS = `
  @keyframes neuralFloat {
    0%,100% { transform: translateY(0px) rotate(-1deg); }
    50%     { transform: translateY(-22px) rotate(1deg); }
  }
  @keyframes neuralGlow {
    0%,100% { opacity: 0.4; transform: scale(1); }
    50%     { opacity: 1; transform: scale(1.08); }
  }
  @keyframes featurePulse {
    0%,100% { transform: scale(1); }
    50%     { transform: scale(1.03); }
  }
`;

export function AiAnalyticsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Which feature is active (0–3) based on scroll
  const featureProgress = useTransform(scrollYProgress, [0, 1], [0, aiFeatures.length - 1]);

  return (
    <section
      id="ai-analytics"
      style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <style>{CSS}</style>

      {/* ── Centered header — scrolls away ── */}
      <div style={{ padding: "9rem 2.5rem 5rem", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.375rem 1.125rem",
              borderRadius: 999,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              marginBottom: "1.75rem",
            }}
          >
            <Sparkles style={{ width: 12, height: 12, color: "#a78bfa" }} />
            <span
              style={{
                fontSize: "0.6875rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "#71717a",
                fontFamily: F,
              }}
            >
              Future-Ready AI Module
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2.5rem,6vw,5rem)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.055em",
              lineHeight: 0.88,
              marginBottom: "1.25rem",
              fontFamily: F,
            }}
          >
            Predict Outcomes.
            <br />
            <span style={{ color: "#52525b" }}>Before They Happen.</span>
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#71717a",
              fontWeight: 300,
              lineHeight: 1.75,
              maxWidth: "38rem",
              margin: "0 auto",
              fontFamily: F,
            }}
          >
            Harness machine learning trained on Indian and global film data to forecast box office,
            detect budget risks, and maximize profitability — automatically.
          </p>
        </motion.div>
      </div>

      {/* ── Sticky 2-column scroll section ── */}
      <div
        ref={sectionRef}
        style={{ position: "relative", height: `${aiFeatures.length * 100}vh` }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {/* LEFT: Neural 3D render — PINNED, with scroll-reactive color filter */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              padding: "2rem",
            }}
          >
            {/* Dynamic glow — changes color based on active feature */}
            {aiFeatures.map((f, i) => (
              <motion.div
                key={i}
                style={{
                  position: "absolute",
                  inset: "-10%",
                  background: `radial-gradient(ellipse, ${f.glowColor} 0%, transparent 65%)`,
                  filter: "blur(40px)",
                  animation: "neuralGlow 6s ease-in-out infinite",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
              />
            ))}

            {/* 2D CSS Neural Network Illustration */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}
              >
                {Array.from({ length: 15 }).map((_, i) => {
                  const seed1 = ((i * 13) % 20) - 10;
                  const seed2 = ((i * 7) % 20) - 10;
                  const seed3 = ((i * 23) % 20) - 10;
                  const top = 20 + ((i * 17) % 60);
                  const left = 20 + ((i * 31) % 60);
                  const dur = 5 + ((i * 11) % 5);

                  return (
                    <motion.div
                      key={i}
                      animate={{
                        x: [seed1, seed2, seed3],
                        y: [seed2, seed1, seed3],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{ duration: dur, repeat: Infinity, ease: "easeInOut" }}
                      style={{
                        position: "absolute",
                        top: `${top}%`,
                        left: `${left}%`,
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: i % 2 === 0 ? "#60a5fa" : "#a78bfa",
                        boxShadow: `0 0 12px ${i % 2 === 0 ? "#60a5fa" : "#a78bfa"}`,
                      }}
                    />
                  );
                })}
                {/* Connection lines (simplified) */}
                <svg
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    opacity: 0.15,
                    pointerEvents: "none",
                  }}
                >
                  <pattern id="neural-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#neural-grid)" color="#60a5fa" />
                </svg>
              </div>
            </div>

            {/* Text overlapping the bottom-left of the image */}
            <div style={{ position: "absolute", bottom: "8%", left: "8%", zIndex: 10 }}>
              <div
                style={{
                  fontSize: "0.5625rem",
                  color: "#52525b",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontFamily: F,
                }}
              >
                Intelligence Engine
              </div>
              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "#fff",
                  letterSpacing: "-0.03em",
                  fontFamily: F,
                  marginTop: "0.25rem",
                }}
              >
                CineLedger AI v2.0
              </div>
            </div>
          </div>

          {/* RIGHT: Feature cards — scroll through them */}
          <div
            style={{
              padding: "2rem 4rem 2rem 0",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {aiFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-30% 0px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid ${f.color}25`,
                  borderRadius: "1.5rem",
                  padding: "2rem",
                  cursor: "default",
                  transition: "background 0.3s, border-color 0.3s",
                }}
                whileHover={{
                  backgroundColor: `${f.color}08`,
                  borderColor: `${f.color}50`,
                  scale: 1.02,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        background: `${f.color}15`,
                        border: `1px solid ${f.color}30`,
                        borderRadius: "1rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <f.icon style={{ width: 20, height: 20, color: f.color }} />
                    </div>
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: 800,
                        color: "#fff",
                        letterSpacing: "-0.025em",
                        fontFamily: F,
                      }}
                    >
                      {f.title}
                    </h3>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div
                      style={{
                        fontSize: "2rem",
                        fontWeight: 800,
                        color: f.color,
                        letterSpacing: "-0.045em",
                        lineHeight: 1,
                        fontFamily: F,
                      }}
                    >
                      {f.score}%
                    </div>
                    <div
                      style={{
                        fontSize: "0.5625rem",
                        color: "#52525b",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        fontFamily: F,
                      }}
                    >
                      {f.label}
                    </div>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "#71717a",
                    lineHeight: 1.7,
                    fontFamily: F,
                    marginBottom: "1.25rem",
                  }}
                >
                  {f.desc}
                </p>
                <div
                  style={{
                    height: 3,
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: 999,
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    style={{
                      height: "100%",
                      background: `linear-gradient(90deg, ${f.color}, ${f.color}80)`,
                      borderRadius: 999,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${f.score}%` }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
