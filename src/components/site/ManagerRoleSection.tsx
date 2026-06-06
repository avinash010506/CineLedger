import { motion } from "framer-motion";
import {
  LayoutGrid,
  ShieldCheck,
  MapPin,
  HardHat,
  Clock,
  AlertTriangle,
  CloudRain,
  ShieldAlert,
} from "lucide-react";

const F = "'Inter', ui-sans-serif, -apple-system, sans-serif";

export function ManagerRoleSection() {
  return (
    <section
      style={{
        background: "#000",
        padding: "8rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "-5%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(244,114,182,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "82rem", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* ── Left column: UI Visuals ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              position: "relative",
            }}
          >
            {/* Stripboard Scheduler UI */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                borderRadius: "1.5rem",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "1.25rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff", fontFamily: F }}
                >
                  Day 24 Stripboard
                </span>
                <span style={{ fontSize: "0.6875rem", color: "#52525b", fontFamily: F }}>
                  Drag & drop to reorder
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                {[
                  {
                    sc: "31",
                    io: "EXT",
                    d: "D",
                    loc: "Marine Drive",
                    chars: "1, 4",
                    desc: "Chase sequence begins",
                  },
                  {
                    sc: "32",
                    io: "INT",
                    d: "D",
                    loc: "Police Station",
                    chars: "2, 3",
                    desc: "Verma finds the file",
                    active: true,
                  },
                  {
                    sc: "44",
                    io: "EXT",
                    d: "N",
                    loc: "Dharavi Lanes",
                    chars: "1, 2, 4",
                    desc: "Showdown",
                  },
                ].map((s) => (
                  <div
                    key={s.sc}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      background: s.active
                        ? "rgba(244,114,182,0.15)"
                        : s.io === "EXT"
                          ? "rgba(52,211,153,0.05)"
                          : "rgba(96,165,250,0.05)",
                      border: `1px solid ${s.active ? "rgba(244,114,182,0.3)" : "rgba(255,255,255,0.05)"}`,
                      borderRadius: "0.5rem",
                      padding: "0.5rem",
                      gap: "0.75rem",
                      cursor: "grab",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        width: "2rem",
                        color: s.active ? "#f472b6" : "#fff",
                        fontFamily: F,
                      }}
                    >
                      {s.sc}
                    </div>
                    <div
                      style={{
                        fontSize: "0.625rem",
                        fontWeight: 700,
                        padding: "0.15rem 0.35rem",
                        borderRadius: "0.25rem",
                        background: s.io === "EXT" ? "#34d399" : "#60a5fa",
                        color: "#000",
                        fontFamily: F,
                      }}
                    >
                      {s.io} {s.d}
                    </div>
                    <div
                      style={{
                        flex: 1,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap" as const,
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: s.active ? "#fff" : "#a1a1aa",
                          fontWeight: 600,
                          fontFamily: F,
                        }}
                      >
                        {s.loc}
                      </span>
                      <span
                        style={{
                          fontSize: "0.6875rem",
                          color: "#71717a",
                          marginLeft: "0.5rem",
                          fontFamily: F,
                        }}
                      >
                        — {s.desc}
                      </span>
                    </div>
                    <div style={{ fontSize: "0.625rem", color: "#a1a1aa", fontFamily: F }}>
                      {s.chars}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
              {/* Compliance Checklist */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  borderRadius: "1.5rem",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <ShieldCheck style={{ width: 16, height: 16, color: "#f472b6" }} />
                  <span
                    style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#fff", fontFamily: F }}
                  >
                    Clearance
                  </span>
                </div>
                {[
                  { label: "Stunt Coordinator Signoff", icon: ShieldAlert, done: true },
                  { label: "Weather Clear (No Rain)", icon: CloudRain, done: false },
                  { label: "Location Permit Valid", icon: HardHat, done: true },
                ].map((c) => (
                  <div
                    key={c.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.375rem 0",
                    }}
                  >
                    <div
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        border: `1px solid ${c.done ? "#34d399" : "#52525b"}`,
                        background: c.done ? "rgba(52,211,153,0.2)" : "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {c.done && (
                        <div
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "#34d399",
                          }}
                        />
                      )}
                    </div>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: c.done ? "#a1a1aa" : "#52525b",
                        fontFamily: F,
                      }}
                    >
                      {c.label}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Geofenced Clock-In */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  borderRadius: "1.5rem",
                  background: "rgba(244,114,182,0.04)",
                  border: "1px solid rgba(244,114,182,0.15)",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <MapPin
                  style={{ width: 24, height: 24, color: "#f472b6", marginBottom: "0.75rem" }}
                />
                <div
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 800,
                    color: "#fff",
                    fontFamily: F,
                    marginBottom: "0.25rem",
                  }}
                >
                  114 / 120
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#a1a1aa",
                    fontFamily: F,
                    marginBottom: "0.75rem",
                  }}
                >
                  Crew members on set
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    color: "#f472b6",
                    fontSize: "0.6875rem",
                    fontFamily: F,
                  }}
                >
                  <AlertTriangle style={{ width: 12, height: 12 }} /> 6 pending clock-ins
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── Right column: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 1rem",
                borderRadius: 999,
                background: "rgba(244,114,182,0.1)",
                border: "1px solid rgba(244,114,182,0.25)",
                marginBottom: "1.5rem",
              }}
            >
              <HardHat style={{ width: 13, height: 13, color: "#f472b6" }} />
              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.2em",
                  color: "#f472b6",
                  fontFamily: F,
                }}
              >
                Project Manager
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(2.25rem,4vw,3.5rem)",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
                marginBottom: "1.25rem",
                fontFamily: F,
              }}
            >
              Built for
              <br />
              <span style={{ color: "#3f3f46" }}>Line Producers & 1st ADs.</span>
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "#71717a",
                fontWeight: 300,
                lineHeight: 1.75,
                maxWidth: "32rem",
                marginBottom: "2.5rem",
                fontFamily: F,
              }}
            >
              Build the daily shooting schedule instantly, manage crew safety proactively, and
              ensure union legal compliance on every set.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                {
                  title: "Drag-and-Drop Stripboard",
                  desc: "A classic digital stripboard. Drag scenes to reorder. Actor availability and locations update automatically.",
                  icon: LayoutGrid,
                },
                {
                  title: "Automated Safety & Compliance",
                  desc: "Force department heads to digitally sign off on stunt safety and weather before the call sheet unlocks.",
                  icon: ShieldCheck,
                },
                {
                  title: "Real-Time Labor Clock-In",
                  desc: "Geofenced mobile check-in allows crew to clock in when they physically arrive on set, syncing direct to payroll.",
                  icon: Clock,
                },
              ].map((f, i) => (
                <div key={f.title} style={{ display: "flex", gap: "1rem" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "0.75rem",
                      background: "rgba(244,114,182,0.08)",
                      border: "1px solid rgba(244,114,182,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <f.icon style={{ width: 20, height: 20, color: "#f472b6" }} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: "0.25rem",
                        fontFamily: F,
                      }}
                    >
                      {f.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "#a1a1aa",
                        lineHeight: 1.6,
                        fontFamily: F,
                      }}
                    >
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
