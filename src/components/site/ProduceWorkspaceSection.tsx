import { motion } from "framer-motion";
import {
  Clapperboard,
  FileText,
  Users,
  PenLine,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Sun,
} from "lucide-react";

const F = "'Inter', ui-sans-serif, -apple-system, sans-serif";

// Mock script parse result
const parsedScript = {
  title: "Bombay Monsoon",
  pages: 108,
  scenes: 74,
  characters: ["MAYA", "ROHAN", "INSPECTOR VERMA", "KAVYA", "NARRATOR"],
  locations: [
    "INT. MAYA'S APARTMENT",
    "EXT. MARINE DRIVE",
    "INT. POLICE STATION",
    "EXT. DHARAVI LANES",
    "INT. FILM STUDIO",
  ],
  props: ["RED SUITCASE", "OLD PHOTOGRAPH", "LOADED REVOLVER", "TRAIN TICKET", "FILM REEL"],
};

// Mock call sheet
const callSheet = [
  { time: "05:30", event: "Unit Call — Crew on set", status: "confirmed", count: 42 },
  { time: "06:00", event: "Camera & Lights ready", status: "confirmed", count: 8 },
  { time: "07:00", event: "Maya (KAVYA) — Makeup call", status: "confirmed", count: 1 },
  { time: "08:30", event: "Scene 31 — Marine Drive ext", status: "pending", count: 18 },
  { time: "11:00", event: "Scene 32 — Apt. interior", status: "pending", count: 12 },
  { time: "18:00", event: "Wrap", status: "scheduled", count: 0 },
];

// Crew onboarding
const onboardingDocs = [
  { doc: "NDA — Production", signed: 18, total: 18, color: "#34d399" },
  { doc: "Crew Contract", signed: 15, total: 18, color: "#60a5fa" },
  { doc: "Talent Release Form", signed: 5, total: 6, color: "#a78bfa" },
  { doc: "Location Permit Consent", signed: 3, total: 3, color: "#34d399" },
  { doc: "Safety Waiver", signed: 12, total: 18, color: "#fbbf24" },
];

export function ProduceWorkspaceSection() {
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
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(96,165,250,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
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
              background: "rgba(96,165,250,0.1)",
              border: "1px solid rgba(96,165,250,0.25)",
              marginBottom: "1.5rem",
            }}
          >
            <Clapperboard style={{ width: 13, height: 13, color: "#60a5fa" }} />
            <span
              style={{
                fontSize: "0.6875rem",
                fontWeight: 700,
                textTransform: "uppercase" as const,
                letterSpacing: "0.2em",
                color: "#60a5fa",
                fontFamily: F,
              }}
            >
              Produce Workspace
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
            From script to wrap.
            <br />
            <span style={{ color: "#3f3f46" }}>Zero chaos.</span>
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
            AI-powered script parsing, digital call sheets with delivery tracking, and crew
            onboarding with e-signature — your entire production coordinated in one workspace.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          {/* ── AI Script Parser ── */}
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
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                marginBottom: "1.25rem",
              }}
            >
              <FileText style={{ width: 16, height: 16, color: "#a78bfa" }} />
              <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff", fontFamily: F }}>
                AI Script Parser
              </span>
              <span
                style={{
                  marginLeft: "auto",
                  padding: "0.2rem 0.625rem",
                  borderRadius: 999,
                  background: "rgba(167,139,250,0.1)",
                  border: "1px solid rgba(167,139,250,0.25)",
                  fontSize: "0.5625rem",
                  fontWeight: 700,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.15em",
                  color: "#a78bfa",
                  fontFamily: F,
                }}
              >
                AI Powered
              </span>
            </div>

            {/* Upload zone */}
            <div
              style={{
                borderRadius: "1rem",
                border: "1px dashed rgba(255,255,255,0.12)",
                padding: "1.25rem",
                textAlign: "center",
                marginBottom: "1.25rem",
                background: "rgba(255,255,255,0.01)",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "0.75rem",
                  background: "rgba(167,139,250,0.1)",
                  border: "1px solid rgba(167,139,250,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 0.625rem",
                }}
              >
                <FileText style={{ width: 18, height: 18, color: "#a78bfa" }} />
              </div>
              <p style={{ fontSize: "0.8125rem", color: "#52525b", fontFamily: F }}>
                <span style={{ color: "#a78bfa", fontWeight: 600 }}>Upload PDF script</span> · FDX ·
                Fountain
              </p>
              <p
                style={{
                  fontSize: "0.6875rem",
                  color: "#3f3f46",
                  marginTop: "0.25rem",
                  fontFamily: F,
                }}
              >
                AI extracts characters, locations, props in seconds
              </p>
            </div>

            {/* Parse results */}
            <div
              style={{
                background: "rgba(167,139,250,0.04)",
                borderRadius: "1rem",
                border: "1px solid rgba(167,139,250,0.12)",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.875rem",
                }}
              >
                <span
                  style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff", fontFamily: F }}
                >
                  {parsedScript.title}
                </span>
                <span style={{ fontSize: "0.6875rem", color: "#52525b", fontFamily: F }}>
                  {parsedScript.pages} pages · {parsedScript.scenes} scenes
                </span>
              </div>
              {[
                { label: "Characters", items: parsedScript.characters, color: "#60a5fa" },
                {
                  label: "Locations",
                  items: parsedScript.locations.map((l) => l.split(".")[1]?.trim() ?? l),
                  color: "#34d399",
                },
                { label: "Props", items: parsedScript.props, color: "#fbbf24" },
              ].map((g) => (
                <div key={g.label} style={{ marginBottom: "0.75rem" }}>
                  <div
                    style={{
                      fontSize: "0.5625rem",
                      fontWeight: 700,
                      textTransform: "uppercase" as const,
                      letterSpacing: "0.18em",
                      color: g.color,
                      marginBottom: "0.375rem",
                      fontFamily: F,
                    }}
                  >
                    {g.label} ({g.items.length})
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
                    {g.items.slice(0, 4).map((item) => (
                      <span
                        key={item}
                        style={{
                          padding: "0.2rem 0.625rem",
                          borderRadius: 999,
                          background: `${g.color}12`,
                          border: `1px solid ${g.color}20`,
                          fontSize: "0.6875rem",
                          color: "#a1a1aa",
                          fontFamily: F,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                    {g.items.length > 4 && (
                      <span
                        style={{
                          fontSize: "0.6875rem",
                          color: "#3f3f46",
                          padding: "0.2rem 0.5rem",
                          fontFamily: F,
                        }}
                      >
                        +{g.items.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right column: Call Sheet + Crew Onboarding ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Call Sheet */}
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
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.25rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <Sun style={{ width: 14, height: 14, color: "#fbbf24" }} />
                  <span
                    style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff", fontFamily: F }}
                  >
                    Day 24 Call Sheet
                  </span>
                </div>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    padding: "0.3rem 0.75rem",
                    borderRadius: 999,
                    background: "rgba(52,211,153,0.1)",
                    border: "1px solid rgba(52,211,153,0.2)",
                    color: "#34d399",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontFamily: F,
                  }}
                >
                  <Mail style={{ width: 10, height: 10 }} /> Send to Crew
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                <MapPin style={{ width: 11, height: 11, color: "#52525b" }} />
                <span style={{ fontSize: "0.75rem", color: "#52525b", fontFamily: F }}>
                  Marine Drive, Mumbai — Overcast, 27°C
                </span>
              </div>
              {callSheet.map((item) => (
                <div
                  key={item.event}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      color: "#3f3f46",
                      width: "2.5rem",
                      flexShrink: 0,
                      fontFamily: F,
                    }}
                  >
                    {item.time}
                  </span>
                  <span style={{ flex: 1, fontSize: "0.8125rem", color: "#a1a1aa", fontFamily: F }}>
                    {item.event}
                  </span>
                  <span
                    style={{
                      fontSize: "0.5rem",
                      fontWeight: 700,
                      textTransform: "uppercase" as const,
                      letterSpacing: "0.12em",
                      fontFamily: F,
                      color:
                        item.status === "confirmed"
                          ? "#34d399"
                          : item.status === "pending"
                            ? "#fbbf24"
                            : "#52525b",
                    }}
                  >
                    {item.status === "confirmed" ? "✓" : item.status === "pending" ? "⏳" : "–"}
                  </span>
                </div>
              ))}
              <div style={{ marginTop: "0.875rem", display: "flex", gap: "1.5rem" }}>
                {[
                  { l: "Sent", v: "62" },
                  { l: "Opened", v: "58" },
                  { l: "Confirmed", v: "49" },
                ].map((s) => (
                  <div key={s.l}>
                    <div
                      style={{ fontSize: "1rem", fontWeight: 800, color: "#fff", fontFamily: F }}
                    >
                      {s.v}
                    </div>
                    <div
                      style={{
                        fontSize: "0.5rem",
                        textTransform: "uppercase" as const,
                        letterSpacing: "0.15em",
                        color: "#52525b",
                        fontFamily: F,
                      }}
                    >
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Crew Onboarding */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                borderRadius: "1.5rem",
                background: "rgba(52,211,153,0.03)",
                border: "1px solid rgba(52,211,153,0.1)",
                padding: "1.75rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  marginBottom: "1.25rem",
                }}
              >
                <PenLine style={{ width: 14, height: 14, color: "#34d399" }} />
                <span
                  style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff", fontFamily: F }}
                >
                  Crew Onboarding & E-Signatures
                </span>
              </div>
              {onboardingDocs.map((doc) => (
                <div key={doc.doc} style={{ marginBottom: "0.875rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.3rem",
                    }}
                  >
                    <span style={{ fontSize: "0.8125rem", color: "#a1a1aa", fontFamily: F }}>
                      {doc.doc}
                    </span>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: doc.signed === doc.total ? "#34d399" : "#fbbf24",
                        fontWeight: 700,
                        fontFamily: F,
                      }}
                    >
                      {doc.signed}/{doc.total}
                    </span>
                  </div>
                  <div
                    style={{
                      height: 3,
                      borderRadius: 3,
                      background: "rgba(255,255,255,0.05)",
                      overflow: "hidden",
                    }}
                  >
                    <motion.div
                      style={{ height: "100%", borderRadius: 3, background: doc.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(doc.signed / doc.total) * 100}%` }}
                      transition={{ duration: 1, delay: 0.4 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
              <div
                style={{
                  marginTop: "1rem",
                  padding: "0.75rem 1rem",
                  borderRadius: "0.75rem",
                  background: "rgba(52,211,153,0.07)",
                  border: "1px solid rgba(52,211,153,0.15)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                }}
              >
                <CheckCircle2 style={{ width: 14, height: 14, color: "#34d399", flexShrink: 0 }} />
                <span style={{ fontSize: "0.8125rem", color: "#71717a", fontFamily: F }}>
                  DocuSign & DigiLocker integration — crew sign digitally from any device.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
