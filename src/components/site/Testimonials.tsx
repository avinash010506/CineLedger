import { motion } from "framer-motion";

const F = "'Inter', ui-sans-serif, -apple-system, sans-serif";

const testimonials = [
  {
    quote:
      "CineLedger transformed how we track our productions. What used to take three Excel sheets and two accountants now takes 30 seconds.",
    author: "Arjun Kapoor",
    role: "Producer, Dharma Films",
    initials: "AK",
    accent: "#60a5fa",
  },
  {
    quote:
      "The investor dashboard alone is worth every rupee. My financiers now have real-time visibility, and deal-close time has dropped significantly.",
    author: "Sunita Rao",
    role: "CFO, Eros Films India",
    initials: "SR",
    accent: "#34d399",
  },
  {
    quote:
      "AI revenue forecasting was the game changer. We predicted our Q3 OTT deal within 4% — the board was stunned.",
    author: "Rohan Mehta",
    role: "Head of Finance, Excel Entertainment",
    initials: "RM",
    accent: "#a78bfa",
  },
  {
    quote:
      "Onboarded our entire studio in one afternoon. The multi-project budget view alone has saved us ₹20+ Cr in overruns.",
    author: "Priya Sharma",
    role: "Studio Head, T-Series Films",
    initials: "PS",
    accent: "#fbbf24",
  },
  {
    quote:
      "Managing distributors used to be a nightmare. Now every territory deal, payment, and MG tracking is in one place.",
    author: "Vijay Nair",
    role: "Distribution Head, PVR Pictures",
    initials: "VN",
    accent: "#f472b6",
  },
  {
    quote:
      "The best investment our production house made this year. Box office sync and OTT revenue tracking is seamless.",
    author: "Deepak Anand",
    role: "MD, Red Chillies Entertainment",
    initials: "DA",
    accent: "#34d399",
  },
];

export function Testimonials() {
  return (
    <section
      style={{
        background: "#000",
        padding: "8rem 2.5rem",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: "82rem", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: "4.5rem" }}
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
            What studios say
          </span>
          <h2
            style={{
              fontSize: "clamp(2.25rem,4.5vw,3.75rem)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.05em",
              lineHeight: 0.92,
              fontFamily: F,
            }}
          >
            Loved by 180+ studios
            <br />
            <span style={{ color: "#3f3f46" }}>across India.</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "1.5rem",
                padding: "2rem",
                cursor: "default",
                transition: "background 0.25s",
              }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: "1.25rem" }}>
                {Array.from({ length: 5 }).map((_, si) => (
                  <div
                    key={si}
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: 3,
                      background: t.accent,
                      opacity: si < 5 ? 1 : 0.3,
                    }}
                  >
                    <svg viewBox="0 0 14 14" fill={t.accent}>
                      <path d="M7 1.5l1.5 3 3.5.5-2.5 2.5.5 3.5L7 9.5l-3 1.5.5-3.5L2 5l3.5-.5z" />
                    </svg>
                  </div>
                ))}
              </div>

              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "#a1a1aa",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                  marginBottom: "1.75rem",
                  fontFamily: F,
                }}
              >
                "{t.quote}"
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.875rem",
                  paddingTop: "1.25rem",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: `${t.accent}20`,
                    border: `1px solid ${t.accent}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    color: t.accent,
                    fontFamily: F,
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff", fontFamily: F }}
                  >
                    {t.author}
                  </div>
                  <div
                    style={{ fontSize: "0.75rem", color: "#71717a", fontFamily: F, marginTop: 2 }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
