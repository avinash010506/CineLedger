import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Clapperboard, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/signup")({
  component: SignupPage,
  head: () => ({
    meta: [
      { title: "Start your studio — CineLedger" },
      {
        name: "description",
        content: "Create your CineLedger studio workspace. All roles welcome.",
      },
    ],
  }),
});

const F = "'Inter', ui-sans-serif, system-ui, sans-serif";

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

const PERKS = [
  "14-day free trial, no credit card",
  "All 20 modules unlocked from day 1",
  "Access level set per role automatically",
  "Onboarding support included",
  "Cancel any time, export all data",
];

// What each role sees in the app
const ROLE_ACCESS: Record<RoleId, string[]> = {
  admin: ["Dashboard", "All modules", "Team management", "Settings", "Billing"],
  producer: ["Dashboard", "Projects", "Budgets", "Schedule", "Assets", "Team"],
  financier: ["Dashboard", "Revenue", "Investor reports", "Analytics", "Compliance"],
  accountant: ["Dashboard", "Expenses", "Revenue", "Reports", "Compliance"],
  manager: ["Dashboard", "Projects", "Schedule", "Team", "Activity"],
  crew: ["My Schedule", "Call Sheets", "Activity Feed"],
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

function SignupPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState<RoleId>("admin");
  const [step, setStep] = useState<"role" | "details">("role");

  const selected = ROLES.find((r) => r.id === role)!;

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
          justifyContent: "center",
          padding: "4rem 3rem",
          overflow: "hidden",
          borderRight: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* Ambient glow changes with role */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at 20% 50%, ${selected.accent}10 0%, transparent 65%)`,
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
            marginBottom: "3rem",
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

        <div style={{ position: "relative", zIndex: 1 }}>
          <h1
            style={{
              fontSize: "2.75rem",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.045em",
              lineHeight: 0.95,
              marginBottom: "1.25rem",
            }}
          >
            Your studio,
            <br />
            <span style={{ color: "#3f3f46" }}>fully operational.</span>
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "#71717a",
              fontWeight: 300,
              lineHeight: 1.7,
              marginBottom: "2.25rem",
              maxWidth: "28rem",
            }}
          >
            One platform for every person on your production — from producers and financiers to cast
            and crew.
          </p>

          {/* Perks list */}
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              marginBottom: "2.5rem",
            }}
          >
            {PERKS.map((p) => (
              <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "0.1rem",
                  }}
                >
                  <Check
                    style={{ width: 11, height: 11, color: "#fff", opacity: 0.6 }}
                    strokeWidth={2.5}
                  />
                </div>
                <span style={{ fontSize: "0.9375rem", color: "#a1a1aa", fontWeight: 300 }}>
                  {p}
                </span>
              </li>
            ))}
          </ul>

          {/* Role access preview — animates with selected role */}
          <AnimatePresence mode="wait">
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: "1.25rem",
                borderRadius: "1rem",
                background: `${selected.accent}08`,
                border: `1px solid ${selected.accent}20`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.875rem",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: selected.accent,
                    display: "inline-block",
                    boxShadow: `0 0 8px ${selected.accent}`,
                  }}
                />
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.18em",
                    color: selected.accent,
                  }}
                >
                  {selected.label} — Access Preview
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                {ROLE_ACCESS[role].map((mod) => (
                  <span
                    key={mod}
                    style={{
                      padding: "0.25rem 0.75rem",
                      borderRadius: 999,
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      color: "#a1a1aa",
                    }}
                  >
                    {mod}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
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
                key="role"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.04em",
                    marginBottom: "0.375rem",
                  }}
                >
                  Create your workspace
                </h2>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#52525b",
                    marginBottom: "1.75rem",
                    fontWeight: 300,
                  }}
                >
                  First, select your role at the studio.
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
                  onClick={() => setStep("details")}
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
                  Continue as {selected.label} <ArrowRight style={{ width: 16, height: 16 }} />
                </button>

                <p
                  style={{
                    marginTop: "1.25rem",
                    textAlign: "center",
                    fontSize: "0.875rem",
                    color: "#52525b",
                  }}
                >
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    style={{ color: "#fff", fontWeight: 600, textDecoration: "none" }}
                  >
                    Sign in →
                  </Link>
                </p>
              </motion.div>
            ) : (
              /* ── STEP 2: Fill in details ── */
              <motion.div
                key="details"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Back + role badge */}
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
                      background: `${selected.accent}15`,
                      border: `1px solid ${selected.accent}30`,
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: selected.accent,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: selected.accent,
                        display: "inline-block",
                      }}
                    />
                    {selected.label}
                  </span>
                </div>

                <h2
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.04em",
                    marginBottom: "0.375rem",
                  }}
                >
                  Your details
                </h2>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#52525b",
                    marginBottom: "1.75rem",
                    fontWeight: 300,
                  }}
                >
                  Get started in under 2 minutes.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    navigate({ to: "/app" });
                  }}
                  style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}
                >
                  {[
                    { placeholder: "Studio name", type: "text", required: true },
                    { placeholder: "Your full name", type: "text", required: true },
                    { placeholder: "Work email", type: "email", required: true },
                    { placeholder: "Phone number", type: "tel", required: false },
                    { placeholder: "Password", type: "password", required: true },
                  ].map((f) => (
                    <input
                      key={f.placeholder}
                      type={f.type}
                      placeholder={f.placeholder}
                      required={f.required}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = `${selected.accent}60`)}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                    />
                  ))}

                  <select style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="">Team size…</option>
                    <option>Just me</option>
                    <option>2–5 people</option>
                    <option>6–20 people</option>
                    <option>21–100 people</option>
                    <option>100+ people</option>
                  </select>

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
                    Create workspace <ArrowRight style={{ width: 16, height: 16 }} />
                  </button>

                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "0.8125rem",
                      color: "#3f3f46",
                      lineHeight: 1.6,
                    }}
                  >
                    By signing up you agree to our{" "}
                    <a href="/terms" style={{ color: "#71717a", textDecoration: "underline" }}>
                      Terms
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" style={{ color: "#71717a", textDecoration: "underline" }}>
                      Privacy Policy
                    </a>
                    .
                  </p>
                  <p style={{ textAlign: "center", fontSize: "0.875rem", color: "#52525b" }}>
                    Already on CineLedger?{" "}
                    <Link
                      to="/login"
                      style={{ color: "#fff", fontWeight: 600, textDecoration: "none" }}
                    >
                      Sign in →
                    </Link>
                  </p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
