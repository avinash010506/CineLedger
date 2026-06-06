import { motion } from "framer-motion";
import {
  Users,
  Smartphone,
  FileLock2,
  WalletCards,
  MapPin,
  CloudSun,
  Navigation,
  EyeOff,
} from "lucide-react";

const F = "'Inter', ui-sans-serif, -apple-system, sans-serif";

export function CrewRoleSection() {
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
          bottom: "10%",
          left: "40%",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(251,146,60,0.05) 0%, transparent 60%)",
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
          {/* ── Left column: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
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
                background: "rgba(251,146,60,0.1)",
                border: "1px solid rgba(251,146,60,0.25)",
                marginBottom: "1.5rem",
              }}
            >
              <Users style={{ width: 13, height: 13, color: "#fb923c" }} />
              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.2em",
                  color: "#fb923c",
                  fontFamily: F,
                }}
              >
                The Frontline Workers
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
              <span style={{ color: "#3f3f46" }}>Cast & Crew.</span>
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
              Know exactly when and where to show up, securely read your script sides, and get paid
              on time with a digital onboarding wallet.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                {
                  title: "Mobile-First 'My Day' Dashboard",
                  desc: "A simplified smartphone view showing exact call time, map links, parking instructions, and weather for the shoot day.",
                  icon: Smartphone,
                },
                {
                  title: "Watermarked Script Sides",
                  desc: "A secure PDF viewer showing only the pages being filmed that day, dynamically watermarked with the user's name to prevent leaks.",
                  icon: FileLock2,
                },
                {
                  title: "Digital Profile & Onboarding Wallet",
                  desc: "Upload passport, tax forms, union cards, and bank details once. Instantly onboard to any new movie on the platform.",
                  icon: WalletCards,
                },
              ].map((f, i) => (
                <div key={f.title} style={{ display: "flex", gap: "1rem" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "0.75rem",
                      background: "rgba(251,146,60,0.08)",
                      border: "1px solid rgba(251,146,60,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <f.icon style={{ width: 20, height: 20, color: "#fb923c" }} />
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

          {/* ── Right column: UI Visuals ── */}
          <div
            style={{
              display: "flex",
              gap: "1.25rem",
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Mobile App Frame (My Day Dashboard) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: 280,
                borderRadius: "2rem",
                background: "#09090b",
                border: "8px solid #27272a",
                padding: "1.25rem",
                position: "relative",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
              }}
            >
              {/* Dynamic Island Notch */}
              <div
                style={{
                  position: "absolute",
                  top: 8,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 90,
                  height: 24,
                  borderRadius: 999,
                  background: "#000",
                  zIndex: 10,
                }}
              />

              <div style={{ marginTop: "1rem", textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "0.625rem",
                    fontWeight: 700,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.15em",
                    color: "#fb923c",
                    marginBottom: "0.25rem",
                    fontFamily: F,
                  }}
                >
                  Your Call Time
                </div>
                <div
                  style={{
                    fontSize: "3rem",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.05em",
                    lineHeight: 1,
                    fontFamily: F,
                  }}
                >
                  05:30<span style={{ fontSize: "1rem", color: "#71717a" }}>AM</span>
                </div>
              </div>

              <div
                style={{
                  marginTop: "1.5rem",
                  borderRadius: "1rem",
                  background: "rgba(255,255,255,0.05)",
                  padding: "1rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.625rem",
                    marginBottom: "1rem",
                  }}
                >
                  <MapPin
                    style={{
                      width: 16,
                      height: 16,
                      color: "#a1a1aa",
                      flexShrink: 0,
                      marginTop: "0.15rem",
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "#fff",
                        fontFamily: F,
                      }}
                    >
                      Marine Drive, Mumbai
                    </div>
                    <div
                      style={{
                        fontSize: "0.6875rem",
                        color: "#71717a",
                        fontFamily: F,
                        marginTop: "0.15rem",
                      }}
                    >
                      Basecamp at Wilson College
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "#fff",
                    color: "#000",
                    padding: "0.5rem",
                    borderRadius: "0.5rem",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    fontFamily: F,
                  }}
                >
                  <Navigation style={{ width: 14, height: 14 }} /> Get Directions
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
                <div
                  style={{
                    flex: 1,
                    borderRadius: "1rem",
                    background: "rgba(255,255,255,0.05)",
                    padding: "1rem",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CloudSun
                    style={{ width: 20, height: 20, color: "#fbbf24", marginBottom: "0.375rem" }}
                  />
                  <div
                    style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff", fontFamily: F }}
                  >
                    27°C
                  </div>
                  <div style={{ fontSize: "0.625rem", color: "#71717a", fontFamily: F }}>
                    Overcast
                  </div>
                </div>
                <div
                  style={{
                    flex: 1,
                    borderRadius: "1rem",
                    background: "rgba(251,146,60,0.1)",
                    padding: "1rem",
                    border: "1px solid rgba(251,146,60,0.25)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FileLock2
                    style={{ width: 20, height: 20, color: "#fb923c", marginBottom: "0.375rem" }}
                  />
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#fb923c",
                      fontFamily: F,
                      textAlign: "center",
                      lineHeight: 1.2,
                    }}
                  >
                    View
                    <br />
                    Sides
                  </div>
                </div>
              </div>

              {/* Watermark overlay effect */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0.03,
                  pointerEvents: "none",
                  overflow: "hidden",
                  borderRadius: "1.5rem",
                }}
              >
                <div
                  style={{
                    transform: "rotate(-45deg)",
                    fontSize: "2rem",
                    fontWeight: 900,
                    color: "#fff",
                    whiteSpace: "nowrap" as const,
                    fontFamily: F,
                  }}
                >
                  J. DAWSON CONFIDENTIAL
                </div>
              </div>
            </motion.div>

            {/* Wallet & Security Badges */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  borderRadius: "1.5rem",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "1.5rem",
                  width: 220,
                }}
              >
                <WalletCards
                  style={{ width: 20, height: 20, color: "#fb923c", marginBottom: "0.75rem" }}
                />
                <div
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "#fff",
                    fontFamily: F,
                    marginBottom: "0.75rem",
                  }}
                >
                  Onboarding Wallet
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {[
                    { l: "Passport Copy", s: "Verified" },
                    { l: "W-9 Tax Form", s: "Verified" },
                    { l: "Direct Deposit", s: "Verified" },
                  ].map((w) => (
                    <div key={w.l} style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontSize: "0.6875rem", color: "#a1a1aa", fontFamily: F }}>
                        {w.l}
                      </span>
                      <span
                        style={{
                          fontSize: "0.625rem",
                          fontWeight: 700,
                          color: "#34d399",
                          fontFamily: F,
                        }}
                      >
                        {w.s}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  borderRadius: "1.5rem",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "1.5rem",
                  width: 220,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(251,146,60,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <EyeOff style={{ width: 16, height: 16, color: "#fb923c" }} />
                </div>
                <div>
                  <div
                    style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#fff", fontFamily: F }}
                  >
                    Anti-Leak Tech
                  </div>
                  <div style={{ fontSize: "0.625rem", color: "#71717a", fontFamily: F }}>
                    Dynamic watermarking
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
