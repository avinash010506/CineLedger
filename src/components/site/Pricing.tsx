import { motion } from "framer-motion";
import { Check, Zap, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

const F = "'Inter', ui-sans-serif, -apple-system, sans-serif";

const tiers = [
  {
    name: "Indie",
    price: "₹24,000",
    period: "/month",
    annual: "₹2,40,000/yr · Save ₹48,000",
    description: "For single-project producers and indie houses getting started.",
    cta: "Start Free Trial",
    href: "/signup",
    featured: false,
    features: [
      "1 active production",
      "Budget & expense tracking",
      "Box office sync",
      "5 team members",
      "Document vault (5GB)",
      "Email support",
    ],
  },
  {
    name: "Studio",
    price: "₹89,000",
    period: "/month",
    annual: "₹8,90,000/yr · Save ₹1,78,000",
    description: "The complete studio OS. Everything you need to run a production house.",
    cta: "Get Started",
    href: "/signup",
    featured: true,
    features: [
      "Up to 10 productions",
      "All revenue integrations",
      "AI revenue forecasting",
      "25 team members",
      "Role-based access control",
      "Document vault (100GB)",
      "BookMyShow / PVR / INOX sync",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "annual",
    annual: "Bespoke SLA & deployment",
    description: "For majors, global financiers, and multi-studio groups.",
    cta: "Talk to Sales",
    href: "/contact",
    featured: false,
    features: [
      "Unlimited productions",
      "White-glove onboarding",
      "Custom API integrations",
      "Unlimited team members",
      "SOC 2 & full audit logs",
      "Dedicated infrastructure",
      "Dedicated Customer Success",
      "24/7 SLA guarantee",
    ],
  },
];

const CSS = `
  @keyframes blocksFloat {
    0%,100% { transform: translateY(0px); }
    50%     { transform: translateY(-16px); }
  }
  @keyframes blocksGlow {
    0%,100% { opacity:0.4; }
    50%     { opacity:0.9; }
  }
`;

export function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        background: "#000",
        padding: "6rem 2.5rem 8rem",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style>{CSS}</style>

      {/* Premium 3D blocks background visual */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: 900,
          height: 420,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 60%)",
            animation: "blocksGlow 8s ease-in-out infinite",
          }}
        />
        {/* PREMIUM 2D BACKGROUND VISUAL */}
        <div
          style={{
            position: "absolute",
            inset: "-10%",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            animate={{ rotateX: [20, -20, 20], rotateY: [-20, 20, -20] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "80%",
              height: "80%",
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 60%)",
              border: "1px dashed rgba(255,255,255,0.1)",
              borderRadius: "3rem",
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          />
        </div>
        {/* Fade to black at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60%",
            background: "linear-gradient(to top, #000 0%, transparent 100%)",
          }}
        />
      </div>

      <div style={{ maxWidth: "82rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", maxWidth: "38rem", margin: "0 auto 5rem" }}
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
              fontFamily: F,
            }}
          >
            Pricing
          </span>
          <h2
            style={{
              fontSize: "clamp(2.25rem,4.5vw,3.75rem)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.05em",
              lineHeight: 0.92,
              marginBottom: "1rem",
              fontFamily: F,
            }}
          >
            Plans that scale
            <br />
            <span style={{ color: "#3f3f46" }}>with your slate.</span>
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "#71717a",
              fontWeight: 300,
              lineHeight: 1.75,
              fontFamily: F,
            }}
          >
            Pay monthly or annually — no setup fees, no hidden charges.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "1.25rem",
            alignItems: "start",
          }}
        >
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "relative",
                borderRadius: "2rem",
                padding: "2rem",
                background: t.featured ? "rgba(255,255,255,0.055)" : "rgba(255,255,255,0.02)",
                border: t.featured
                  ? "1px solid rgba(255,255,255,0.2)"
                  : "1px solid rgba(255,255,255,0.06)",
                boxShadow: t.featured
                  ? "0 0 80px rgba(255,255,255,0.06), 0 0 0 1px rgba(255,255,255,0.06)"
                  : "none",
                transform: t.featured ? "scale(1.03)" : "none",
              }}
            >
              {t.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: -14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    background: "#fff",
                    borderRadius: 999,
                    padding: "4px 16px",
                    fontSize: "0.6875rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#000",
                    whiteSpace: "nowrap",
                    fontFamily: F,
                  }}
                >
                  <Zap style={{ width: 11, height: 11 }} />
                  Most Chosen
                </div>
              )}

              <div
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.375rem",
                  fontFamily: F,
                }}
              >
                {t.name}
              </div>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "#52525b",
                  marginBottom: "1.75rem",
                  lineHeight: 1.55,
                  minHeight: "2.5rem",
                  fontFamily: F,
                }}
              >
                {t.description}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.25rem",
                  marginBottom: "0.375rem",
                }}
              >
                <span
                  style={{
                    fontSize: t.price === "Custom" ? "2.5rem" : "2.875rem",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.045em",
                    lineHeight: 1,
                    fontFamily: F,
                  }}
                >
                  {t.price}
                </span>
                <span style={{ fontSize: "0.875rem", color: "#52525b", fontFamily: F }}>
                  {t.period}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#3f3f46",
                  marginBottom: "2rem",
                  fontFamily: F,
                }}
              >
                {t.annual}
              </p>

              <Link
                to={t.href}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  borderRadius: 999,
                  padding: "0.875rem",
                  fontSize: "0.9375rem",
                  fontWeight: 700,
                  background: t.featured ? "#fff" : "rgba(255,255,255,0.06)",
                  color: t.featured ? "#000" : "#fff",
                  border: t.featured ? "none" : "1px solid rgba(255,255,255,0.1)",
                  textDecoration: "none",
                  marginBottom: "2rem",
                  fontFamily: F,
                }}
              >
                {t.cta}
              </Link>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem" }}>
                <p
                  style={{
                    fontSize: "0.625rem",
                    color: "#3f3f46",
                    textTransform: "uppercase",
                    letterSpacing: "0.18em",
                    fontWeight: 700,
                    marginBottom: "1rem",
                    fontFamily: F,
                  }}
                >
                  What's included
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {t.features.map((f) => (
                    <li
                      key={f}
                      style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}
                    >
                      <Check
                        style={{
                          width: 14,
                          height: 14,
                          color: t.featured ? "#fff" : "#52525b",
                          opacity: t.featured ? 0.8 : 0.5,
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                        strokeWidth={2.5}
                      />
                      <span
                        style={{
                          fontSize: "0.875rem",
                          color: "#71717a",
                          fontWeight: 300,
                          fontFamily: F,
                        }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            textAlign: "center",
            marginTop: "3rem",
            fontSize: "0.875rem",
            color: "#3f3f46",
            fontFamily: F,
          }}
        >
          All plans include a 14-day free trial. No credit card required.&nbsp;
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
  );
}
