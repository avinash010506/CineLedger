import {
  ArrowUpRight,
  Clapperboard,
  Wallet,
  TrendingUp,
  Eye,
  Bell,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const revenueData = [18, 31, 44, 39, 62, 75, 71, 88, 97];
const months = ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];
const max = 97;

const kpis = [
  {
    icon: Wallet,
    label: "Total Budget",
    value: "₹482 Cr",
    change: "+8.2%",
    color: "#60a5fa",
    sub: "68% deployed",
  },
  {
    icon: TrendingUp,
    label: "Revenue (YTD)",
    value: "₹914 Cr",
    change: "+38%",
    color: "#34d399",
    sub: "+₹249 Cr YoY",
  },
  {
    icon: Clapperboard,
    label: "Active Projects",
    value: "12",
    change: "+3 new",
    color: "#a78bfa",
    sub: "4 releasing Q1",
  },
  {
    icon: Eye,
    label: "Net ROI",
    value: "+96%",
    change: "↑12pt",
    color: "#fbbf24",
    sub: "Above sector avg",
  },
];

const productions = [
  {
    title: "Moonlight Bazaar",
    genre: "Drama · Hindi",
    status: "Post-Production",
    progress: 78,
    color: "#60a5fa",
  },
  {
    title: "The Last Monsoon",
    genre: "Thriller · Telugu",
    status: "Shooting · Day 42",
    progress: 54,
    color: "#34d399",
  },
  {
    title: "Neon Saints",
    genre: "Action · Tamil",
    status: "Released",
    progress: 100,
    color: "#a78bfa",
  },
  {
    title: "Desert Bloom",
    genre: "Romance · Malayalam",
    status: "Pre-Production",
    progress: 18,
    color: "#fbbf24",
  },
];

const notifications = [
  { msg: "Neon Saints box office crossed ₹200 Cr", time: "2 min ago", type: "success" },
  { msg: "VFX budget approaching limit — Salt & Smoke", time: "14 min ago", type: "warn" },
  { msg: "Netflix settlement: ₹38 Cr received", time: "1 hr ago", type: "info" },
];

const CSS = `
@keyframes panelFloat {
  0%,100% { transform: perspective(1400px) rotateX(4deg) rotateY(-2deg) translateY(0px); }
  50%     { transform: perspective(1400px) rotateX(-2deg) rotateY(2deg) translateY(-8px); }
}
@keyframes fadeInBar { from { width:0; } }
@keyframes countUp { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
@keyframes notifSlide { from { opacity:0; transform:translateX(-12px); } to { opacity:1; transform:translateX(0); } }
`;

const S = "Inter, ui-sans-serif, sans-serif";

export function DashboardPreview() {
  const pathD = revenueData
    .map((v, i) => {
      const x = (i / (revenueData.length - 1)) * 460;
      const y = 90 - (v / max) * 80;
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");

  const areaD = pathD + ` L460,90 L0,90 Z`;

  return (
    <section
      id="overview"
      style={{
        background: "#000",
        padding: "9rem 1.5rem 10rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style>{CSS}</style>

      {/* Subtle background radial */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 600,
          background: "radial-gradient(ellipse, rgba(96,165,250,0.03) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        {/* Section header — Apple style */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", maxWidth: "38rem", margin: "0 auto 6rem" }}
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
              fontFamily: S,
            }}
          >
            The Control Room
          </span>
          <h2
            style={{
              fontSize: "clamp(2.5rem,5vw,4rem)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.05em",
              lineHeight: 0.92,
              marginBottom: "1.25rem",
              fontFamily: S,
            }}
          >
            Your slate,
            <br />
            <span style={{ color: "#3f3f46" }}>in focus.</span>
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "#71717a",
              fontWeight: 300,
              lineHeight: 1.75,
              fontFamily: S,
            }}
          >
            Budgets, collections, crew, and investors — making nine-figure decisions feel
            effortless.
          </p>
        </motion.div>

        {/* ── 3D Floating Dashboard Panel ── */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            animation: "panelFloat 10s ease-in-out infinite",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Browser chrome */}
          <div
            style={{
              borderRadius: "1.5rem 1.5rem 0 0",
              background: "#0a0a0a",
              border: "1px solid rgba(255,255,255,0.08)",
              borderBottom: "none",
              padding: "0.875rem 1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
            }}
          >
            {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
              <span
                key={c}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: c,
                  opacity: 0.9,
                  display: "block",
                }}
              />
            ))}
            <div style={{ flex: 1, textAlign: "center" }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "#3f3f46",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 8,
                  padding: "3px 16px",
                  fontFamily: S,
                }}
              >
                cineLedger.studio/app/dashboard
              </span>
            </div>
            <Bell style={{ width: 14, height: 14, color: "#3f3f46" }} />
          </div>

          {/* Main dashboard body */}
          <div
            style={{
              background: "#050505",
              border: "1px solid rgba(255,255,255,0.07)",
              borderTop: "none",
              borderRadius: "0 0 1.5rem 1.5rem",
              padding: "1.25rem",
              boxShadow: "0 60px 120px rgba(0,0,0,0.8)",
            }}
          >
            {/* KPI strip */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "0.75rem",
                marginBottom: "0.875rem",
              }}
            >
              {kpis.map((k, i) => (
                <motion.div
                  key={k.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.07 }}
                  style={{
                    borderRadius: "1rem",
                    background: "rgba(255,255,255,0.035)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    padding: "1.125rem",
                    cursor: "default",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.background = `${k.color}0d`)
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.background =
                      "rgba(255,255,255,0.035)")
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <k.icon style={{ width: 14, height: 14, color: k.color, opacity: 0.7 }} />
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        color: k.color,
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        fontWeight: 600,
                        fontFamily: S,
                      }}
                    >
                      {k.change}
                      <ArrowUpRight style={{ width: 11, height: 11 }} />
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: "#fff",
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                      fontFamily: S,
                    }}
                  >
                    {k.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.6875rem",
                      color: "#3f3f46",
                      marginTop: "0.375rem",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontFamily: S,
                    }}
                  >
                    {k.label}
                  </div>
                  <div
                    style={{
                      marginTop: "0.5rem",
                      fontSize: "0.6875rem",
                      color: "#52525b",
                      fontFamily: S,
                    }}
                  >
                    {k.sub}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Charts row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.75rem" }}>
              {/* Area chart */}
              <div
                style={{
                  gridColumn: "span 2",
                  borderRadius: "1rem",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "0.6875rem",
                        color: "#52525b",
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        marginBottom: "0.3rem",
                        fontFamily: S,
                      }}
                    >
                      Revenue & OTT
                    </div>
                    <div
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 800,
                        color: "#fff",
                        letterSpacing: "-0.04em",
                        fontFamily: S,
                      }}
                    >
                      ₹914 Cr YTD
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    {[
                      { c: "#34d399", l: "Theatrical" },
                      { c: "#60a5fa", l: "OTT" },
                    ].map((leg) => (
                      <div
                        key={leg.l}
                        style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}
                      >
                        <div style={{ width: 24, height: 2, background: leg.c, borderRadius: 2 }} />
                        <span style={{ fontSize: "0.6875rem", color: "#52525b", fontFamily: S }}>
                          {leg.l}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <svg
                  viewBox="0 0 460 90"
                  style={{ width: "100%", height: 100 }}
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#34d399" stopOpacity={0.25} />
                      <stop offset="100%" stopColor="#34d399" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <path d={areaD} fill="url(#g1)" />
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  {/* Month labels */}
                  {months.map((m, i) => (
                    <text
                      key={m}
                      x={(i / (months.length - 1)) * 460}
                      y={88}
                      fontSize={8}
                      fill="#3f3f46"
                      textAnchor="middle"
                      fontFamily={S}
                    >
                      {m}
                    </text>
                  ))}
                </svg>
              </div>

              {/* Right panel — productions + notifications */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {/* Productions */}
                <div
                  style={{
                    borderRadius: "1rem",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    padding: "1rem",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.875rem",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.6875rem",
                        color: "#52525b",
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        fontFamily: S,
                      }}
                    >
                      Productions
                    </div>
                    <ChevronRight style={{ width: 12, height: 12, color: "#3f3f46" }} />
                  </div>
                  {productions.map((p) => (
                    <div key={p.title} style={{ marginBottom: "0.625rem" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "0.25rem",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            color: "#a1a1aa",
                            fontFamily: S,
                          }}
                        >
                          {p.title}
                        </span>
                        <span
                          style={{
                            fontSize: "0.625rem",
                            color: p.color,
                            fontFamily: S,
                            fontWeight: 600,
                          }}
                        >
                          {p.progress}%
                        </span>
                      </div>
                      <div
                        style={{
                          height: 3,
                          borderRadius: 3,
                          background: "rgba(255,255,255,0.06)",
                          overflow: "hidden",
                        }}
                      >
                        <motion.div
                          style={{ height: "100%", borderRadius: 3, background: p.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${p.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Notifications */}
                <div
                  style={{
                    borderRadius: "1rem",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    padding: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.6875rem",
                        color: "#52525b",
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        fontFamily: S,
                      }}
                    >
                      Live Alerts
                    </div>
                    <Bell style={{ width: 12, height: 12, color: "#52525b" }} />
                  </div>
                  {notifications.map((n, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "flex-start",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <div
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          marginTop: 4,
                          flexShrink: 0,
                          background:
                            n.type === "warn"
                              ? "#fbbf24"
                              : n.type === "success"
                                ? "#34d399"
                                : "#60a5fa",
                        }}
                      />
                      <div>
                        <div
                          style={{
                            fontSize: "0.6875rem",
                            color: "#a1a1aa",
                            lineHeight: 1.4,
                            fontFamily: S,
                          }}
                        >
                          {n.msg}
                        </div>
                        <div
                          style={{
                            fontSize: "0.5875rem",
                            color: "#3f3f46",
                            marginTop: 2,
                            fontFamily: S,
                          }}
                        >
                          {n.time}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
