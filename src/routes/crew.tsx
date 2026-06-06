import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Clapperboard,
  CalendarDays,
  Boxes,
  ShieldCheck,
  Search,
  Bell,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { ToastProvider } from "@/components/app/modal";

export const Route = createFileRoute("/crew")({
  component: CrewLayout,
  head: () => ({ meta: [{ title: "Crew Portal — CineLedger" }] }),
});

const navItems = [
  { to: "/crew", label: "Dashboard", icon: LayoutDashboard, exact: true, group: "Overview" },
  { to: "/crew/schedule", label: "My Schedule", icon: CalendarDays, group: "Production" },
  { to: "/crew/projects", label: "Projects", icon: Clapperboard, group: "Production" },
  { to: "/crew/assets", label: "Assets & Scripts", icon: Boxes, group: "Resources" },
  { to: "/crew/compliance", label: "Compliance", icon: ShieldCheck, group: "Resources" },
];

const groupColors: Record<string, string> = {
  Overview: "#a1a1aa",
  Production: "#818cf8", // Indigo
  Resources: "#c084fc", // Purple
};

function CrewLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <ToastProvider>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          background: "#0a0a0f",
          color: "#fff",
          fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
        }}
      >
        {/* ── Sidebar ── */}
        <aside
          style={{
            width: "15rem",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            borderRight: "1px solid rgba(255,255,255,0.05)",
            padding: "1.5rem 0.75rem",
            position: "sticky",
            top: 0,
            height: "100vh",
            overflowY: "auto",
            background: "#050508", // Slightly darker/blueish tint
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
              padding: "0 0.75rem",
              marginBottom: "2rem",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "0.5rem",
                background: "#818cf8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Clapperboard style={{ width: 14, height: 14, color: "#fff" }} />
            </div>
            <span
              style={{ fontWeight: 700, fontSize: "1rem", color: "#fff", letterSpacing: "-0.03em" }}
            >
              Cine<span style={{ color: "#6366f1" }}>Crew</span>
            </span>
          </Link>

          {/* Nav groups */}
          <nav style={{ flex: 1 }}>
            {Array.from(new Set(navItems.map((n) => n.group))).map((group) => (
              <div key={group} style={{ marginBottom: "1.25rem" }}>
                <div
                  style={{
                    padding: "0 0.75rem",
                    marginBottom: "0.35rem",
                    fontSize: "0.625rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.18em",
                    color: groupColors[group] ?? "#3f3f46",
                    opacity: 0.8,
                  }}
                >
                  {group}
                </div>
                {navItems
                  .filter((n) => n.group === group)
                  .map((n) => {
                    const active = n.exact ? pathname === n.to : pathname.startsWith(n.to);
                    return (
                      <Link
                        key={n.to}
                        to={n.to as "/crew"}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.625rem",
                          padding: "0.45rem 0.75rem",
                          borderRadius: "0.625rem",
                          fontSize: "0.8125rem",
                          fontWeight: active ? 600 : 400,
                          color: active ? "#fff" : "#9ca3af",
                          background: active ? "rgba(129, 140, 248, 0.1)" : "transparent",
                          border: `1px solid ${active ? "rgba(129, 140, 248, 0.15)" : "transparent"}`,
                          textDecoration: "none",
                          marginBottom: "0.1rem",
                          transition: "all 0.12s",
                        }}
                      >
                        <n.icon
                          style={{
                            width: 14,
                            height: 14,
                            flexShrink: 0,
                            opacity: active ? 1 : 0.6,
                            color: active ? "#818cf8" : "inherit",
                          }}
                          strokeWidth={active ? 2 : 1.5}
                        />
                        <span style={{ flex: 1 }}>{n.label}</span>
                      </Link>
                    );
                  })}
              </div>
            ))}
          </nav>

          {/* Updates hint */}
          <div
            style={{
              borderRadius: "0.875rem",
              background: "rgba(192, 132, 252, 0.08)",
              border: "1px solid rgba(192, 132, 252, 0.15)",
              padding: "0.875rem",
              marginTop: "0.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                color: "#c084fc",
                marginBottom: "0.5rem",
              }}
            >
              <Sparkles style={{ width: 12, height: 12 }} />
              <span
                style={{
                  fontSize: "0.625rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                }}
              >
                Call Sheet
              </span>
            </div>
            <p style={{ fontSize: "0.75rem", color: "#a1a1aa", lineHeight: 1.55 }}>
              Tomorrow's call time has been updated to 06:00 AM.
            </p>
            <Link
              to="/crew/schedule"
              style={{
                marginTop: "0.625rem",
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                fontSize: "0.6875rem",
                color: "#c084fc",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              View schedule <ChevronRight style={{ width: 11, height: 11 }} />
            </Link>
          </div>
        </aside>

        {/* ── Main ── */}
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
          {/* Top bar */}
          <header
            style={{
              position: "sticky",
              top: 0,
              zIndex: 20,
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "0 2rem",
              height: "3.75rem",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              backdropFilter: "blur(24px)",
              background: "rgba(10,10,15,0.75)",
            }}
          >
            <div style={{ position: "relative", flex: 1, maxWidth: "28rem" }}>
              <Search
                style={{
                  position: "absolute",
                  left: "0.75rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 14,
                  height: 14,
                  color: "#71717a",
                }}
              />
              <input
                placeholder="Search resources..."
                style={{
                  width: "100%",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  paddingLeft: "2.25rem",
                  paddingRight: "1rem",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  fontSize: "0.8125rem",
                  color: "#fff",
                  outline: "none",
                  fontFamily: "inherit",
                }}
              />
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginLeft: "auto" }}
            >
              <button
                style={{
                  position: "relative",
                  width: 34,
                  height: 34,
                  borderRadius: "0.5rem",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Bell style={{ width: 14, height: 14, color: "#9ca3af" }} />
                <span
                  style={{
                    position: "absolute",
                    top: 7,
                    right: 7,
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#818cf8",
                  }}
                />
              </button>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  padding: "0.375rem 0.75rem 0.375rem 0.375rem",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "rgba(129, 140, 248, 0.15)",
                    border: "1px solid rgba(129, 140, 248, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    color: "#818cf8",
                  }}
                >
                  JD
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "#fff",
                      lineHeight: 1.2,
                    }}
                  >
                    Jack Dawson
                  </div>
                  <div style={{ fontSize: "0.6875rem", color: "#9ca3af", lineHeight: 1 }}>
                    Key Grip
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main style={{ flex: 1, padding: "2rem 2.5rem", overflowY: "auto" }}>
            <Outlet />
          </main>
        </div>
      </div>
    </ToastProvider>
  );
}
