import { motion } from "framer-motion";
import {
  Package,
  LayoutTemplate,
  CheckSquare,
  HardDrive,
  Globe,
  FileCheck,
  AlertCircle,
  Check,
  ExternalLink,
} from "lucide-react";

const F = "'Inter', ui-sans-serif, -apple-system, sans-serif";

// Deliverable vault files
const vaultFiles = [
  { name: "Bombay_Monsoon_4K_Master.mov", size: "214 GB", type: "Video", color: "#60a5fa" },
  { name: "BM_Stereo_Mix_5.1.wav", size: "18.2 GB", type: "Audio", color: "#34d399" },
  { name: "BM_English_Subtitles.srt", size: "48 KB", type: "Subtitle", color: "#a78bfa" },
  { name: "BM_Hindi_Subtitles.srt", size: "51 KB", type: "Subtitle", color: "#a78bfa" },
  { name: "BM_DCP_Package.dcp", size: "386 GB", type: "DCP", color: "#fbbf24" },
  { name: "BM_Poster_PrintReady.pdf", size: "1.2 GB", type: "Image", color: "#f472b6" },
];

// Pitch deck templates
const deckTemplates = [
  {
    name: "Netflix Pitch Deck",
    platform: "Netflix",
    slide: "One Pager + Full Deck",
    accent: "#f87171",
  },
  {
    name: "Amazon Prime Package",
    platform: "Amazon Prime",
    slide: "8-Slide Deck + Trailer",
    accent: "#fbbf24",
  },
  {
    name: "Film Festival Package",
    platform: "Sundance / MAMI",
    slide: "Festival One Sheet",
    accent: "#60a5fa",
  },
  {
    name: "Distributor Sales Deck",
    platform: "Cinema / OTT",
    slide: "15-Slide Pro Deck",
    accent: "#34d399",
  },
];

// Market readiness checklist
const checklist = [
  { item: "Errors & Omissions (E&O) Insurance", done: true, category: "Legal" },
  { item: "Chain of Title documentation", done: true, category: "Legal" },
  { item: "Music Cue Sheet (all licensed tracks)", done: true, category: "Legal" },
  { item: "Signed Actor Release Forms", done: true, category: "Legal" },
  { item: "Closed Caption (CC) file — English", done: true, category: "Technical" },
  { item: "Audio Description (AD) track", done: false, category: "Technical" },
  { item: "IMDB Pro listing & metadata", done: true, category: "Technical" },
  { item: "DCP Package for theatrical", done: false, category: "Technical" },
  { item: "BBFC / CBFC rating certificate", done: true, category: "Regulatory" },
  { item: "International sales agent agreement", done: false, category: "Regulatory" },
];

export function DistributeHubSection() {
  const done = checklist.filter((c) => c.done).length;
  const total = checklist.length;

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
          bottom: "10%",
          left: "5%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(251,191,36,0.04) 0%, transparent 70%)",
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
              background: "rgba(251,191,36,0.1)",
              border: "1px solid rgba(251,191,36,0.25)",
              marginBottom: "1.5rem",
            }}
          >
            <Globe style={{ width: 13, height: 13, color: "#fbbf24" }} />
            <span
              style={{
                fontSize: "0.6875rem",
                fontWeight: 700,
                textTransform: "uppercase" as const,
                letterSpacing: "0.2em",
                color: "#fbbf24",
                fontFamily: F,
              }}
            >
              Distribute Hub
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
            Get your film
            <br />
            <span style={{ color: "#3f3f46" }}>seen globally.</span>
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
            Secure deliverable vault, professional pitch deck templates for Netflix and Amazon, and
            an interactive market readiness checklist — everything you need to sell your film
            worldwide.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          {/* ── Left column: Vault + Pitch Decks ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Deliverable Vault */}
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
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1.25rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <Package style={{ width: 15, height: 15, color: "#60a5fa" }} />
                  <span
                    style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff", fontFamily: F }}
                  >
                    Deliverable Vault
                  </span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      fontSize: "0.625rem",
                      color: "#52525b",
                      textTransform: "uppercase" as const,
                      letterSpacing: "0.15em",
                      fontFamily: F,
                    }}
                  >
                    Used
                  </div>
                  <div
                    style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff", fontFamily: F }}
                  >
                    619 GB <span style={{ color: "#52525b", fontSize: "0.75rem" }}>/ 5 TB</span>
                  </div>
                </div>
              </div>

              {/* Storage bar */}
              <div
                style={{
                  height: 4,
                  borderRadius: 4,
                  background: "rgba(255,255,255,0.06)",
                  overflow: "hidden",
                  marginBottom: "1.25rem",
                }}
              >
                <motion.div
                  style={{
                    height: "100%",
                    borderRadius: 4,
                    background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "12.4%" }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {vaultFiles.map((f) => (
                  <div
                    key={f.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.625rem 0.875rem",
                      borderRadius: "0.75rem",
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.04)",
                    }}
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: 2,
                        background: f.color,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        flex: 1,
                        fontSize: "0.75rem",
                        color: "#a1a1aa",
                        fontFamily: F,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap" as const,
                      }}
                    >
                      {f.name}
                    </span>
                    <span
                      style={{
                        fontSize: "0.5625rem",
                        fontWeight: 700,
                        color: "#3f3f46",
                        fontFamily: F,
                        flexShrink: 0,
                      }}
                    >
                      {f.size}
                    </span>
                    <span
                      style={{
                        fontSize: "0.5rem",
                        fontWeight: 700,
                        textTransform: "uppercase" as const,
                        letterSpacing: "0.12em",
                        color: f.color,
                        fontFamily: F,
                        flexShrink: 0,
                      }}
                    >
                      {f.type}
                    </span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                }}
              >
                <HardDrive style={{ width: 11, height: 11, color: "#3f3f46" }} />
                <span style={{ fontSize: "0.6875rem", color: "#3f3f46", fontFamily: F }}>
                  256-bit AES encrypted · CDN-backed · 99.99% uptime
                </span>
              </div>
            </motion.div>

            {/* Pitch Deck Builder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
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
                <LayoutTemplate style={{ width: 15, height: 15, color: "#f472b6" }} />
                <span
                  style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff", fontFamily: F }}
                >
                  Pitch Deck Builder
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem" }}>
                {deckTemplates.map((t) => (
                  <div
                    key={t.name}
                    style={{
                      borderRadius: "0.875rem",
                      background: `${t.accent}08`,
                      border: `1px solid ${t.accent}20`,
                      padding: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: t.accent,
                        marginBottom: "0.625rem",
                        boxShadow: `0 0 8px ${t.accent}`,
                      }}
                    />
                    <div
                      style={{
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: "0.2rem",
                        fontFamily: F,
                      }}
                    >
                      {t.name}
                    </div>
                    <div style={{ fontSize: "0.625rem", color: "#52525b", fontFamily: F }}>
                      {t.platform}
                    </div>
                    <div
                      style={{
                        marginTop: "0.75rem",
                        fontSize: "0.5625rem",
                        textTransform: "uppercase" as const,
                        letterSpacing: "0.12em",
                        color: t.accent,
                        fontFamily: F,
                      }}
                    >
                      {t.slide}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Market Readiness Checklist ── */}
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
                <FileCheck style={{ width: 15, height: 15, color: "#34d399" }} />
                <span
                  style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff", fontFamily: F }}
                >
                  Market Readiness Checklist
                </span>
              </div>
              <div
                style={{
                  padding: "0.3rem 0.875rem",
                  borderRadius: 999,
                  background: "rgba(52,211,153,0.1)",
                  border: "1px solid rgba(52,211,153,0.2)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#34d399",
                  fontFamily: F,
                }}
              >
                {done}/{total} Ready
              </div>
            </div>

            {/* Progress ring */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                marginBottom: "1.5rem",
              }}
            >
              <svg width="72" height="72" viewBox="0 0 72 72">
                <circle
                  cx="36"
                  cy="36"
                  r="28"
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="6"
                />
                <motion.circle
                  cx="36"
                  cy="36"
                  r="28"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 28}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 28 }}
                  whileInView={{ strokeDashoffset: 2 * Math.PI * 28 * (1 - done / total) }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  transform="rotate(-90 36 36)"
                />
                <text
                  x="36"
                  y="40"
                  textAnchor="middle"
                  fill="#fff"
                  fontSize="14"
                  fontWeight="800"
                  fontFamily="Inter, sans-serif"
                >
                  {Math.round((done / total) * 100)}%
                </text>
              </svg>
              <div>
                <div style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", fontFamily: F }}>
                  {done} of {total} requirements
                </div>
                <div
                  style={{
                    fontSize: "0.8125rem",
                    color: "#52525b",
                    fontFamily: F,
                    marginTop: "0.25rem",
                  }}
                >
                  Ready for global distribution
                </div>
              </div>
            </div>

            {/* Items by category */}
            {["Legal", "Technical", "Regulatory"].map((cat) => (
              <div key={cat} style={{ marginBottom: "1.25rem" }}>
                <div
                  style={{
                    fontSize: "0.5625rem",
                    fontWeight: 700,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.2em",
                    color: "#52525b",
                    marginBottom: "0.625rem",
                    fontFamily: F,
                  }}
                >
                  {cat}
                </div>
                {checklist
                  .filter((c) => c.category === cat)
                  .map((item) => (
                    <div
                      key={item.item}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.625rem",
                        padding: "0.5rem 0",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          background: item.done
                            ? "rgba(52,211,153,0.12)"
                            : "rgba(255,255,255,0.04)",
                          border: `1px solid ${item.done ? "rgba(52,211,153,0.3)" : "rgba(255,255,255,0.08)"}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "0.1rem",
                        }}
                      >
                        {item.done ? (
                          <Check
                            style={{ width: 10, height: 10, color: "#34d399" }}
                            strokeWidth={3}
                          />
                        ) : (
                          <AlertCircle style={{ width: 9, height: 9, color: "#52525b" }} />
                        )}
                      </div>
                      <span
                        style={{
                          fontSize: "0.8125rem",
                          color: item.done ? "#a1a1aa" : "#52525b",
                          fontFamily: F,
                          lineHeight: 1.4,
                          textDecoration: item.done ? "none" : "none",
                        }}
                      >
                        {item.item}
                      </span>
                      {!item.done && (
                        <span
                          style={{
                            marginLeft: "auto",
                            flexShrink: 0,
                            fontSize: "0.5rem",
                            fontWeight: 700,
                            textTransform: "uppercase" as const,
                            letterSpacing: "0.12em",
                            color: "#f87171",
                            fontFamily: F,
                          }}
                        >
                          Needed
                        </span>
                      )}
                    </div>
                  ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
