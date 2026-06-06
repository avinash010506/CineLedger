import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

const F = "'Inter', ui-sans-serif, -apple-system, sans-serif";

const CSS = `
  @keyframes ctaGlow {
    0%,100% { opacity:0.5; transform:scale(1) translateX(-50%); }
    50%     { opacity:0.9; transform:scale(1.15) translateX(-50%); }
  }
  @keyframes ctaGrid {
    from { backgroundPosition: 0 0; }
    to   { backgroundPosition: 40px 40px; }
  }
  @keyframes sparkle {
    0%,100% { transform:rotate(0deg) scale(1); opacity:0.4; }
    50%     { transform:rotate(180deg) scale(1.2); opacity:1; }
  }
`;

export function CtaSection() {
  return (
    <section style={{ background: "#000", padding: "6rem 2.5rem 8rem", overflow: "hidden" }}>
      <style>{CSS}</style>
      <div style={{ maxWidth: "82rem", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "relative",
            borderRadius: "2.5rem",
            overflow: "hidden",
            padding: "6rem 4rem",
            textAlign: "center",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Animated grid */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              animation: "ctaGrid 16s linear infinite",
              opacity: 0.7,
            }}
          />

          {/* Radial glow */}
          <div
            style={{
              position: "absolute",
              top: "-40%",
              left: "50%",
              width: "80%",
              height: "180%",
              background: "radial-gradient(ellipse, rgba(255,255,255,0.06) 0%, transparent 60%)",
              animation: "ctaGlow 8s ease-in-out infinite",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 10 }}>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.375rem 1rem",
                borderRadius: 999,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                marginBottom: "2rem",
              }}
            >
              <Sparkles
                style={{
                  width: 13,
                  height: 13,
                  color: "#fbbf24",
                  animation: "sparkle 3s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#71717a",
                  fontFamily: F,
                }}
              >
                Start Today — No Setup Fees
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2.5rem,6vw,5rem)",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.05em",
                lineHeight: 0.9,
                marginBottom: "1.5rem",
                fontFamily: F,
              }}
            >
              Your production deserves
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #71717a, #3f3f46)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                better infrastructure.
              </span>
            </h2>

            <p
              style={{
                fontSize: "1.125rem",
                color: "#71717a",
                fontWeight: 300,
                lineHeight: 1.75,
                maxWidth: "36rem",
                margin: "0 auto 3rem",
                fontFamily: F,
              }}
            >
              Join 180+ studios already using CineLedger to manage their productions from
              pre-production to final distribution.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "2rem",
              }}
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
                  padding: "1rem 2.25rem",
                  fontSize: "1rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontFamily: F,
                  boxShadow: "0 0 60px rgba(255,255,255,0.2), 0 4px 24px rgba(0,0,0,0.4)",
                  transition: "transform 0.2s",
                }}
              >
                Start Free Trial <ArrowRight style={{ width: 18, height: 18 }} />
              </Link>
              <Link
                to="/app"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.06)",
                  color: "#fff",
                  padding: "1rem 2.25rem",
                  fontSize: "1rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  fontFamily: F,
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Explore Dashboard →
              </Link>
            </div>

            <p style={{ fontSize: "0.8125rem", color: "#3f3f46", fontFamily: F }}>
              No credit card required · 14-day free trial · Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
