import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Clapperboard, Eye, EyeOff, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({
    meta: [
      { title: "Sign in — CineLedger" },
      { name: "description", content: "Sign in to your CineLedger studio workspace." },
    ],
  }),
});

const F = "'Inter', ui-sans-serif, system-ui, sans-serif";

// ── All roles in one place ──────────────────────────────────────────
const ROLES = [
  { id: "admin", label: "Studio Admin", sub: "Full access to all modules", accent: "#60a5fa" },
  { id: "producer", label: "Producer", sub: "Projects, budgets & scheduling", accent: "#34d399" },
  {
    id: "financier",
    label: "Financier / Investor",
    sub: "ROI dashboards & financial reports",
    accent: "#fbbf24",
  },
  {
    id: "accountant",
    label: "Accountant",
    sub: "Expenses, revenue & tax reports",
    accent: "#a78bfa",
  },
  {
    id: "manager",
    label: "Project Manager",
    sub: "Schedule, team & compliance",
    accent: "#f472b6",
  },
  { id: "crew", label: "Cast & Crew", sub: "Schedule, call sheets & updates", accent: "#fb923c" },
] as const;

type RoleId = (typeof ROLES)[number]["id"];

// ── Role-based quotes shown on the left panel ───────────────────────
const QUOTES: Record<RoleId, { quote: string; author: string; title: string; initials: string }> = {
  admin: {
    quote: "Closing books used to take three weeks. Now it's a Tuesday morning.",
    author: "Anaya Rao",
    title: "Head of Finance · Lumen Pictures",
    initials: "AR",
  },
  producer: {
    quote: "Managing 6 productions at once felt impossible before CineLedger. Now it's seamless.",
    author: "Rohan Mehta",
    title: "Producer · Excel Entertainment",
    initials: "RM",
  },
  financier: {
    quote: "My investors now have real-time visibility. Deal-close time dropped by 40%.",
    author: "Sunita Rao",
    title: "CFO · Eros Films India",
    initials: "SR",
  },
  accountant: {
    quote: "GST reconciliation and vendor payments — sorted in minutes, not days.",
    author: "Vijay Nair",
    title: "Senior Accountant · Dharma Productions",
    initials: "VN",
  },
  manager: {
    quote: "The schedule planner alone saved our 80-day shoot from going off the rails.",
    author: "Priya Sharma",
    title: "Line Producer · T-Series Films",
    initials: "PS",
  },
  crew: {
    quote: "I get my call sheets instantly. No more confusion on set or missing updates.",
    author: "Deepak Anand",
    title: "Key Grip · Red Chillies Entertainment",
    initials: "DA",
  },
};

const inputStyle = {
  width: "100%",
  borderRadius: "0.75rem",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  padding: "0.75rem 1rem",
  fontSize: "0.9375rem",
  color: "#fff",
  outline: "none",
  fontFamily: F,
  transition: "border-color 0.15s",
  display: "block",
  boxSizing: "border-box" as const,
};

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [role, setRole] = useState<RoleId>("admin");
  const [step, setStep] = useState<"role" | "credentials">("role");

  const selectedRole = ROLES.find((r) => r.id === role)!;
  const q = QUOTES[role];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === "crew") {
      navigate({ to: "/crew" });
    } else {
      navigate({ to: "/app" });
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        background: "#000",
        color: "#fff",
        fontFamily: F,
      }}
    >
      {/* ── LEFT PANEL ── */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "2.5rem",
          overflow: "hidden",
          borderRight: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* Ambient glow — changes color with role */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at 30% 40%, ${selectedRole.accent}12 0%, transparent 70%)`,
            transition: "background 0.5s",
            pointerEvents: "none",
          }}
        />

        {/* Logo */}
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.625rem",
            textDecoration: "none",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "0.625rem",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Clapperboard style={{ width: 16, height: 16, color: "#000" }} />
          </div>
          <span
            style={{
              fontWeight: 700,
              fontSize: "1.0625rem",
              color: "#fff",
              letterSpacing: "-0.03em",
            }}
          >
            Cine<span style={{ color: "#52525b" }}>Ledger</span>
          </span>
        </Link>

        {/* Quote — animates on role change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={role}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "relative", zIndex: 1, maxWidth: "28rem" }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.875rem",
                borderRadius: 999,
                background: `${selectedRole.accent}15`,
                border: `1px solid ${selectedRole.accent}30`,
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: selectedRole.accent,
                  display: "inline-block",
                  boxShadow: `0 0 8px ${selectedRole.accent}`,
                }}
              />
              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.18em",
                  color: selectedRole.accent,
                }}
              >
                {selectedRole.label}
              </span>
            </div>

            <blockquote
              style={{
                fontSize: "1.625rem",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.28,
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
              }}
            >
              "{q.quote}"
            </blockquote>

            <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: `${selectedRole.accent}20`,
                  border: `1px solid ${selectedRole.accent}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  color: selectedRole.accent,
                }}
              >
                {q.initials}
              </div>
              <div>
                <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#fff" }}>
                  {q.author}
                </div>
                <div style={{ fontSize: "0.75rem", color: "#52525b" }}>{q.title}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Stats */}
        <div style={{ display: "flex", gap: "2.5rem", position: "relative", zIndex: 1 }}>
          {[
            ["₹4,200 Cr+", "Budgets tracked"],
            ["180+", "Studios"],
            ["99.9%", "Uptime"],
          ].map(([v, l]) => (
            <div key={l}>
              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "#fff",
                  letterSpacing: "-0.04em",
                }}
              >
                {v}
              </div>
              <div
                style={{
                  fontSize: "0.6875rem",
                  color: "#52525b",
                  marginTop: "0.2rem",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.15em",
                  fontWeight: 600,
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          overflowY: "auto",
        }}
      >
        <div style={{ width: "100%", maxWidth: "26rem" }}>
          <AnimatePresence mode="wait">
            {step === "role" ? (
              /* ── STEP 1: Pick your role ── */
              <motion.div
                key="role-step"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.045em",
                    marginBottom: "0.5rem",
                  }}
                >
                  Welcome back.
                </h1>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "#52525b",
                    marginBottom: "2rem",
                    fontWeight: 300,
                  }}
                >
                  Select your role to continue.
                </p>

                {/* Role grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.625rem",
                    marginBottom: "1.75rem",
                  }}
                >
                  {ROLES.map((r) => {
                    const active = role === r.id;
                    return (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => setRole(r.id)}
                        style={{
                          position: "relative",
                          textAlign: "left",
                          padding: "0.875rem 1rem",
                          borderRadius: "0.875rem",
                          background: active ? `${r.accent}10` : "rgba(255,255,255,0.02)",
                          border: `1px solid ${active ? r.accent + "40" : "rgba(255,255,255,0.07)"}`,
                          cursor: "pointer",
                          transition: "all 0.2s",
                          outline: "none",
                          fontFamily: F,
                        }}
                        onMouseEnter={(e) => {
                          if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                        }}
                        onMouseLeave={(e) => {
                          if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                        }}
                      >
                        {/* Check mark when selected */}
                        {active && (
                          <span
                            style={{
                              position: "absolute",
                              top: 8,
                              right: 8,
                              width: 18,
                              height: 18,
                              borderRadius: "50%",
                              background: r.accent,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Check
                              style={{ width: 10, height: 10, color: "#000" }}
                              strokeWidth={3}
                            />
                          </span>
                        )}
                        {/* Color dot */}
                        <span
                          style={{
                            display: "block",
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: r.accent,
                            marginBottom: "0.5rem",
                            boxShadow: active ? `0 0 10px ${r.accent}` : "none",
                          }}
                        />
                        <span
                          style={{
                            display: "block",
                            fontSize: "0.8125rem",
                            fontWeight: 700,
                            color: active ? "#fff" : "#a1a1aa",
                            marginBottom: "0.2rem",
                          }}
                        >
                          {r.label}
                        </span>
                        <span
                          style={{
                            display: "block",
                            fontSize: "0.625rem",
                            color: "#52525b",
                            lineHeight: 1.4,
                          }}
                        >
                          {r.sub}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => setStep("credentials")}
                  style={{
                    width: "100%",
                    borderRadius: 999,
                    background: "#fff",
                    color: "#000",
                    padding: "0.875rem",
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    fontFamily: F,
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#e4e4e7")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
                >
                  Continue as {selectedRole.label} <ArrowRight style={{ width: 16, height: 16 }} />
                </button>

                <p
                  style={{
                    marginTop: "1.25rem",
                    textAlign: "center",
                    fontSize: "0.875rem",
                    color: "#52525b",
                  }}
                >
                  New here?{" "}
                  <Link
                    to="/signup"
                    style={{ color: "#fff", fontWeight: 600, textDecoration: "none" }}
                  >
                    Request access →
                  </Link>
                </p>
              </motion.div>
            ) : (
              /* ── STEP 2: Enter credentials ── */
              <motion.div
                key="cred-step"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Back button + role badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "2rem",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setStep("role")}
                    style={{
                      padding: "0.375rem 0.875rem",
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#71717a",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: F,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.375rem",
                    }}
                  >
                    ← Back
                  </button>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      padding: "0.375rem 0.875rem",
                      borderRadius: 999,
                      background: `${selectedRole.accent}15`,
                      border: `1px solid ${selectedRole.accent}30`,
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: selectedRole.accent,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: selectedRole.accent,
                        display: "inline-block",
                      }}
                    />
                    {selectedRole.label}
                  </span>
                </div>

                <h1
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.045em",
                    marginBottom: "0.4rem",
                  }}
                >
                  Sign in.
                </h1>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "#52525b",
                    marginBottom: "2rem",
                    fontWeight: 300,
                  }}
                >
                  Enter your credentials to access CineLedger.
                </p>

                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <label>
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        textTransform: "uppercase" as const,
                        letterSpacing: "0.15em",
                        color: "#71717a",
                        display: "block",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Email
                    </span>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      required
                      placeholder="you@studio.com"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = `${selectedRole.accent}60`)}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                    />
                  </label>

                  <label>
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        textTransform: "uppercase" as const,
                        letterSpacing: "0.15em",
                        color: "#71717a",
                        display: "block",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Password
                    </span>
                    <div style={{ position: "relative" }}>
                      <input
                        type={showPw ? "text" : "password"}
                        required
                        placeholder="••••••••"
                        style={{ ...inputStyle, paddingRight: "2.75rem" }}
                        onFocus={(e) => (e.target.style.borderColor = `${selectedRole.accent}60`)}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPw(!showPw)}
                        style={{
                          position: "absolute",
                          right: "0.875rem",
                          top: "50%",
                          transform: "translateY(-50%)",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: "#52525b",
                        }}
                      >
                        {showPw ? (
                          <EyeOff style={{ width: 15, height: 15 }} />
                        ) : (
                          <Eye style={{ width: 15, height: 15 }} />
                        )}
                      </button>
                    </div>
                  </label>

                  <div style={{ textAlign: "right" }}>
                    <a
                      href="/forgot-password"
                      style={{ fontSize: "0.8125rem", color: "#52525b", textDecoration: "none" }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#52525b")}
                    >
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      borderRadius: 999,
                      background: "#fff",
                      color: "#000",
                      padding: "0.875rem",
                      fontSize: "0.9375rem",
                      fontWeight: 700,
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      fontFamily: F,
                      transition: "background 0.15s",
                      marginTop: "0.25rem",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#e4e4e7")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
                  >
                    Enter the studio <ArrowRight style={{ width: 16, height: 16 }} />
                  </button>
                </form>

                <p
                  style={{
                    marginTop: "1.5rem",
                    textAlign: "center",
                    fontSize: "0.875rem",
                    color: "#52525b",
                  }}
                >
                  New here?{" "}
                  <Link
                    to="/signup"
                    style={{ color: "#fff", fontWeight: 600, textDecoration: "none" }}
                  >
                    Request access →
                  </Link>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
