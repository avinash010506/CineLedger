import { motion } from "framer-motion";
import {
  Wallet,
  TrendingDown,
  Eye,
  ArrowUpRight,
  Lock,
  Share2,
  CheckCircle2,
  AlertTriangle,
  BarChart2,
} from "lucide-react";

const F = "'Inter', ui-sans-serif, -apple-system, sans-serif";

// ATL / BTL budget data
const ATL = [
  { label: "Director & Story Rights", budget: 180, spent: 180, color: "#60a5fa" },
  { label: "Lead Cast (3 principals)", budget: 420, spent: 390, color: "#60a5fa" },
  { label: "Producer Fees", budget: 95, spent: 72, color: "#60a5fa" },
];
const BTL = [
  { label: "Camera & Lighting", budget: 220, spent: 198, color: "#34d399" },
  { label: "Art Dept & Locations", budget: 310, spent: 287, color: "#34d399" },
  { label: "Sound & Music", budget: 85, spent: 41, color: "#34d399" },
  { label: "Post Production & VFX", budget: 540, spent: 210, color: "#a78bfa" },
  { label: "Marketing & Publicity", budget: 150, spent: 28, color: "#fbbf24" },
];

// Burn rate data (daily ₹ Cr)
const burnDays = [
  "Day 1",
  "Day 5",
  "Day 10",
  "Day 15",
  "Day 20",
  "Day 25",
  "Day 30",
  "Day 35",
  "Day 40",
  "Day 42",
];
const planned = [2.1, 2.3, 2.8, 3.1, 2.9, 3.4, 3.2, 2.8, 2.6, 0];
const actual = [2.4, 2.7, 3.1, 3.5, 2.8, 3.8, 3.6, 2.9, 3.1, 2.4];

export function FinanceWorkspaceSection() {
  const totalBudget = [...ATL, ...BTL].reduce((s, r) => s + r.budget, 0);
  const totalSpent = [...ATL, ...BTL].reduce((s, r) => s + r.spent, 0);
  const burnPct = Math.round((totalSpent / totalBudget) * 100);

  const W = 500,
    H = 100;
  const pts = (arr: number[]) =>
    arr.map((v, i) => `${(i / (arr.length - 1)) * W},${H - (v / 4) * H}`).join(" ");

  return (
    <section
      style={{
        background: "#000",
        padding: "8rem 1.5rem",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "10%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(52,211,153,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "82rem", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "4rem" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.35rem 1rem",
              borderRadius: 999,
              background: "rgba(52,211,153,0.1)",
              border: "1px solid rgba(52,211,153,0.25)",
              marginBottom: "1.5rem",
            }}
          >
            <Wallet style={{ width: 13, height: 13, color: "#34d399" }} />
            <span
              style={{
                fontSize: "0.6875rem",
                fontWeight: 700,
                textTransform: "uppercase" as const,
                letterSpacing: "0.2em",
                color: "#34d399",
                fontFamily: F,
              }}
            >
              Finance Workspace
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2.25rem,4.5vw,3.75rem)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.05em",
              lineHeight: 0.92,
              marginBottom: "1.25rem",
              fontFamily: F,
            }}
          >
            QuickBooks — built
            <br />
            <span style={{ color: "#3f3f46" }}>for cinema.</span>
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "#71717a",
              fontWeight: 300,
              lineHeight: 1.75,
              maxWidth: "36rem",
              fontFamily: F,
            }}
          >
            Industry-standard Above-the-Line / Below-the-Line budgets, real-time burn tracking, and
            a secure investor portal — all in one place.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          {/* ── ATL / BTL Budget Topsheet ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              borderRadius: "1.5rem",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.625rem",
                    color: "#52525b",
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.18em",
                    fontFamily: F,
                    marginBottom: "0.25rem",
                  }}
                >
                  Budget Topsheet
                </div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.04em",
                    fontFamily: F,
                  }}
                >
                  ₹{totalBudget} Lakh
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontSize: "0.625rem",
                    color: "#52525b",
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.18em",
                    fontFamily: F,
                    marginBottom: "0.25rem",
                  }}
                >
                  Burn
                </div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: burnPct > 70 ? "#f87171" : "#34d399",
                    letterSpacing: "-0.04em",
                    fontFamily: F,
                  }}
                >
                  {burnPct}%
                </div>
              </div>
            </div>

            {/* ATL */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.5625rem",
                    fontWeight: 800,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.2em",
                    color: "#60a5fa",
                    fontFamily: F,
                  }}
                >
                  ▲ Above the Line
                </span>
              </div>
              {ATL.map((r) => (
                <div key={r.label} style={{ marginBottom: "0.75rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.25rem",
                    }}
                  >
                    <span style={{ fontSize: "0.75rem", color: "#a1a1aa", fontFamily: F }}>
                      {r.label}
                    </span>
                    <span
                      style={{ fontSize: "0.75rem", color: "#fff", fontWeight: 600, fontFamily: F }}
                    >
                      ₹{r.spent}L <span style={{ color: "#3f3f46" }}>/ {r.budget}L</span>
                    </span>
                  </div>
                  <div
                    style={{
                      height: 4,
                      borderRadius: 4,
                      background: "rgba(255,255,255,0.06)",
                      overflow: "hidden",
                    }}
                  >
                    <motion.div
                      style={{ height: "100%", borderRadius: 4, background: r.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(r.spent / r.budget) * 100}%` }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* BTL */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.5625rem",
                    fontWeight: 800,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.2em",
                    color: "#34d399",
                    fontFamily: F,
                  }}
                >
                  ▼ Below the Line
                </span>
              </div>
              {BTL.map((r) => (
                <div key={r.label} style={{ marginBottom: "0.75rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.25rem",
                    }}
                  >
                    <span style={{ fontSize: "0.75rem", color: "#a1a1aa", fontFamily: F }}>
                      {r.label}
                    </span>
                    <span
                      style={{ fontSize: "0.75rem", color: "#fff", fontWeight: 600, fontFamily: F }}
                    >
                      ₹{r.spent}L <span style={{ color: "#3f3f46" }}>/ {r.budget}L</span>
                    </span>
                  </div>
                  <div
                    style={{
                      height: 4,
                      borderRadius: 4,
                      background: "rgba(255,255,255,0.06)",
                      overflow: "hidden",
                    }}
                  >
                    <motion.div
                      style={{ height: "100%", borderRadius: 4, background: r.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(r.spent / r.budget) * 100}%` }}
                      transition={{ duration: 1.2, delay: 0.4 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right column: Burn Rate + Investor Portal ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Burn Rate Chart */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                borderRadius: "1.5rem",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "1.75rem",
                flex: 1,
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
                <div>
                  <div
                    style={{
                      fontSize: "0.625rem",
                      color: "#52525b",
                      textTransform: "uppercase" as const,
                      letterSpacing: "0.18em",
                      fontFamily: F,
                      marginBottom: "0.25rem",
                    }}
                  >
                    Real-Time Burn Rate
                  </div>
                  <div
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: "#fff",
                      letterSpacing: "-0.04em",
                      fontFamily: F,
                    }}
                  >
                    ₹3.1 Cr{" "}
                    <span style={{ fontSize: "0.75rem", color: "#f87171", fontWeight: 600 }}>
                      today ↑19%
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  {[
                    { c: "#34d399", l: "Planned" },
                    { c: "#f87171", l: "Actual" },
                  ].map((x) => (
                    <div key={x.l} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <div style={{ width: 20, height: 2, background: x.c, borderRadius: 2 }} />
                      <span style={{ fontSize: "0.625rem", color: "#52525b", fontFamily: F }}>
                        {x.l}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <svg
                viewBox={`0 0 ${W} ${H + 10}`}
                style={{ width: "100%", height: 100 }}
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="burnPlan" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#34d399" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#34d399" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="burnAct" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f87171" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="#f87171" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <polyline points={pts(planned)} fill="none" stroke="#34d399" strokeWidth="2" />
                <polygon points={`0,${H} ${pts(planned)} ${W},${H}`} fill="url(#burnPlan)" />
                <polyline
                  points={pts(actual)}
                  fill="none"
                  stroke="#f87171"
                  strokeWidth="2"
                  strokeDasharray="6,3"
                />
                <polygon points={`0,${H} ${pts(actual)} ${W},${H}`} fill="url(#burnAct)" />
              </svg>
              <div
                style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}
              >
                {burnDays
                  .filter((_, i) => i % 3 === 0)
                  .map((d) => (
                    <span key={d} style={{ fontSize: "0.5rem", color: "#3f3f46", fontFamily: F }}>
                      {d}
                    </span>
                  ))}
              </div>
            </motion.div>

            {/* Investor Portal */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                borderRadius: "1.5rem",
                background: "rgba(96,165,250,0.04)",
                border: "1px solid rgba(96,165,250,0.15)",
                padding: "1.75rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "0.75rem",
                    background: "rgba(96,165,250,0.1)",
                    border: "1px solid rgba(96,165,250,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Lock style={{ width: 15, height: 15, color: "#60a5fa" }} />
                </div>
                <div>
                  <div
                    style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff", fontFamily: F }}
                  >
                    Investor Portal
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#52525b", fontFamily: F }}>
                    Read-only · Secure share
                  </div>
                </div>
                <button
                  style={{
                    marginLeft: "auto",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    padding: "0.375rem 0.875rem",
                    borderRadius: 999,
                    background: "rgba(96,165,250,0.12)",
                    border: "1px solid rgba(96,165,250,0.25)",
                    color: "#60a5fa",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: F,
                  }}
                >
                  <Share2 style={{ width: 11, height: 11 }} /> Share Link
                </button>
              </div>
              {[
                { label: "Budget summary", status: "Shared", color: "#34d399" },
                { label: "Expense receipts", status: "Shared", color: "#34d399" },
                { label: "Revenue reports", status: "Pending", color: "#fbbf24" },
                { label: "ROI projections", status: "Draft", color: "#52525b" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.625rem 0",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Eye style={{ width: 12, height: 12, color: "#52525b" }} />
                    <span style={{ fontSize: "0.8125rem", color: "#a1a1aa", fontFamily: F }}>
                      {item.label}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "0.625rem",
                      fontWeight: 700,
                      textTransform: "uppercase" as const,
                      letterSpacing: "0.12em",
                      color: item.color,
                      fontFamily: F,
                    }}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
