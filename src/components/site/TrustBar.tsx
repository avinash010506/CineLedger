import { motion } from "framer-motion";

const F = "'Inter', ui-sans-serif, -apple-system, sans-serif";

// Partner logos with distinct colors/styles
const logos = [
  { name: "Dharma Productions", color: "#f472b6" },
  { name: "T-Series Films", color: "#60a5fa" },
  { name: "Red Chillies", color: "#f87171" },
  { name: "Eros STX", color: "#a78bfa" },
  { name: "PVR Pictures", color: "#fbbf24" },
  { name: "Excel Entertainment", color: "#34d399" },
  { name: "Jio Studios", color: "#38bdf8" },
  { name: "Zee Studios", color: "#fb923c" },
  { name: "BookMyShow", color: "#f472b6" },
  { name: "INOX", color: "#60a5fa" },
  { name: "Prime Video", color: "#38bdf8" },
  { name: "Netflix India", color: "#f87171" },
];

const CSS = `
  @keyframes scrollLogos {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
`;

export function TrustBar() {
  return (
    <section
      style={{
        background: "#000",
        padding: "3.5rem 0",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style>{CSS}</style>

      {/* Fade edges */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 120,
          background: "linear-gradient(90deg, #000, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: 120,
          background: "linear-gradient(-90deg, #000, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <span
          style={{
            fontSize: "0.6875rem",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#3f3f46",
            fontFamily: F,
          }}
        >
          Trusted by India's top production houses
        </span>
      </div>

      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            width: "max-content",
            animation: "scrollLogos 30s linear infinite",
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                flexShrink: 0,
                padding: "0.5rem 1.25rem",
                borderRadius: 999,
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${logo.color}20`,
                transition: "border-color 0.2s",
              }}
            >
              {/* Colored dot instead of generic icon */}
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: logo.color,
                  boxShadow: `0 0 8px ${logo.color}`,
                  flexShrink: 0,
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "#52525b",
                  letterSpacing: "-0.01em",
                  whiteSpace: "nowrap",
                  fontFamily: F,
                }}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
