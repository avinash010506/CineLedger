import { motion } from "framer-motion";
import { Film, Calendar, Users, CheckCircle } from "lucide-react";

const CSS = `
@keyframes reelSpin {
  0%   { transform: perspective(1000px) rotateX(60deg) rotateY(10deg) rotateZ(0deg); }
  100% { transform: perspective(1000px) rotateX(60deg) rotateY(10deg) rotateZ(360deg); }
}
@keyframes floatElement {
  0%, 100% { transform: translateY(0px); }
  50%      { transform: translateY(-15px); }
}
`;

const S = "Inter, ui-sans-serif, sans-serif";

export function MovieProjectShowcase() {
  return (
    <section
      id="projects"
      style={{
        background: "#000",
        padding: "10rem 1.5rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style>{CSS}</style>

      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
            alignItems: "center",
          }}
        >
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
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
              Project Management
            </span>
            <h2
              style={{
                fontSize: "clamp(2.5rem,4vw,3.5rem)",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                fontFamily: S,
              }}
            >
              The Command
              <br />
              Center for Every
              <br />
              <span style={{ color: "#3f3f46" }}>Production.</span>
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "#71717a",
                fontWeight: 300,
                lineHeight: 1.75,
                marginBottom: "2.5rem",
                fontFamily: S,
              }}
            >
              Manage movies from concept to release. Track shooting schedules, upload posters,
              manage cast and crew, and monitor production status in real time.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                "Movie project creation with poster & banner upload",
                "Production status: Pre-Prod → Shooting → VFX → Released",
                "Shooting calendar, daily call sheets & crew assignments",
                "Scene scheduling with conflict detection",
              ].map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <CheckCircle
                    style={{
                      width: 20,
                      height: 20,
                      color: "#fff",
                      opacity: 0.4,
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.9375rem",
                      color: "#a1a1aa",
                      fontFamily: S,
                      lineHeight: 1.5,
                    }}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Premium WebGL 3D Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "relative",
              minHeight: 600,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* 2D PREMIUM CINEMATIC VISUALIZATION */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                perspective: "1000px",
              }}
            >
              {/* Abstract glowing cinematic gradient */}
              <div
                style={{
                  position: "absolute",
                  width: "120%",
                  height: "120%",
                  background:
                    "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.08) 0%, transparent 60%)",
                  filter: "blur(40px)",
                }}
              />

              {/* Floating glass slate cards */}
              <motion.div
                animate={{ rotateY: [-5, 5, -5], rotateX: [2, -2, 2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "relative",
                  width: "60%",
                  height: "45%",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "1rem",
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                  transformStyle: "preserve-3d",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Clapperboard stripes */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "20%",
                    background:
                      "repeating-linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1) 10px, transparent 10px, transparent 20px)",
                    borderRadius: "1rem 1rem 0 0",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                  }}
                />
              </motion.div>
            </div>
            {/* UI Card */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                background: "rgba(10,10,10,0.75)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "2rem",
                padding: "1.5rem",
                backdropFilter: "blur(32px)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.8)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.25rem",
                  padding: "0 0.5rem",
                }}
              >
                <span
                  style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff", fontFamily: S }}
                >
                  Active Productions
                </span>
                <span
                  style={{
                    fontSize: "0.6875rem",
                    color: "#a1a1aa",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "4px 12px",
                    borderRadius: 999,
                    fontFamily: S,
                  }}
                >
                  12 projects
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  {
                    title: "Moonlight Bazaar",
                    genre: "Drama · Hindi",
                    status: "Post-Production",
                    progress: 78,
                    color: "#e4e4e7",
                  },
                  {
                    title: "The Last Monsoon",
                    genre: "Thriller · Telugu",
                    status: "Shooting · Day 42",
                    progress: 54,
                    color: "#a1a1aa",
                  },
                  {
                    title: "Neon Saints",
                    genre: "Action · Tamil",
                    status: "Released",
                    progress: 100,
                    color: "#71717a",
                  },
                  {
                    title: "Desert Bloom",
                    genre: "Romance · Malayalam",
                    status: "Pre-Production",
                    progress: 18,
                    color: "#52525b",
                  },
                ].map((p) => (
                  <div
                    key={p.title}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "1rem",
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.04)",
                      borderRadius: "1.25rem",
                      cursor: "pointer",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "rgba(255,255,255,0.04)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "rgba(255,255,255,0.02)")
                    }
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "0.75rem",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Film style={{ width: 16, height: 16, color: "#a1a1aa" }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          color: "#fff",
                          fontFamily: S,
                        }}
                      >
                        {p.title}
                      </div>
                      <div
                        style={{
                          fontSize: "0.6875rem",
                          color: "#71717a",
                          fontFamily: S,
                          marginTop: 2,
                        }}
                      >
                        {p.genre}
                      </div>
                    </div>
                    <div
                      style={{
                        textAlign: "right",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        width: 100,
                      }}
                    >
                      <div
                        style={{
                          fontSize: "0.625rem",
                          color: "#71717a",
                          marginBottom: "0.3rem",
                          fontFamily: S,
                        }}
                      >
                        {p.status}
                      </div>
                      <div
                        style={{
                          width: "100%",
                          height: 3,
                          background: "rgba(255,255,255,0.08)",
                          borderRadius: 999,
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            width: `${p.progress}%`,
                            background: p.color,
                            borderRadius: 999,
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: "0.6875rem",
                        color: "#71717a",
                        width: 32,
                        textAlign: "right",
                        fontFamily: S,
                      }}
                    >
                      {p.progress}%
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                  marginTop: "0.75rem",
                }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "1.25rem",
                    padding: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <Calendar style={{ width: 20, height: 20, color: "#71717a" }} />
                  <div>
                    <div
                      style={{
                        fontSize: "0.625rem",
                        color: "#71717a",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        fontFamily: S,
                      }}
                    >
                      Next Shoot
                    </div>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "#fff",
                        marginTop: 2,
                        fontFamily: S,
                      }}
                    >
                      Tomorrow, 6 AM
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "1.25rem",
                    padding: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <Users style={{ width: 20, height: 20, color: "#71717a" }} />
                  <div>
                    <div
                      style={{
                        fontSize: "0.625rem",
                        color: "#71717a",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        fontFamily: S,
                      }}
                    >
                      Crew Today
                    </div>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "#fff",
                        marginTop: 2,
                        fontFamily: S,
                      }}
                    >
                      84 members
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
