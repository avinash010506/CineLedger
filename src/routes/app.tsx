import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Clapperboard,
  Wallet,
  Receipt,
  TrendingUp,
  BarChart3,
  Users,
  FileText,
  Activity,
  Settings,
  Search,
  Bell,
  Sparkles,
  Briefcase,
  Landmark,
  CalendarDays,
  Megaphone,
  ShieldCheck,
  Boxes,
  LayoutGrid,
  ChevronRight,
  Truck,
} from "lucide-react";
import { ToastProvider } from "@/components/app/modal";
import { CommandMenu } from "@/components/app/CommandMenu";

export const Route = createFileRoute("/app")({
  component: AppLayout,
  head: () => ({ meta: [{ title: "Studio — CineLedger" }] }),
});

const navItems: {
  to: string;
  label: string;
  icon: typeof LayoutDashboard;
  exact?: boolean;
  group: string;
}[] = [
  { to: "/app", label: "Dashboard", icon: LayoutDashboard, exact: true, group: "Overview" },
  { to: "/app/projects", label: "Projects", icon: Clapperboard, group: "Production" },
  { to: "/app/schedule", label: "Schedule", icon: CalendarDays, group: "Production" },
  { to: "/app/assets", label: "Assets & Vendors", icon: Boxes, group: "Production" },
  { to: "/app/budgets", label: "Budgets", icon: Wallet, group: "Finance" },
  { to: "/app/expenses", label: "Expenses", icon: Receipt, group: "Finance" },
  { to: "/app/revenue", label: "Revenue", icon: TrendingUp, group: "Finance" },
  { to: "/app/producers", label: "Producers", icon: Briefcase, group: "Stakeholders" },
  { to: "/app/financiers", label: "Financiers", icon: Landmark, group: "Stakeholders" },
  { to: "/app/distribution", label: "Distribution", icon: Megaphone, group: "Stakeholders" },
  { to: "/app/distributors", label: "Distributors", icon: Truck, group: "Stakeholders" },
  { to: "/app/windows", label: "Window Planner", icon: LayoutGrid, group: "Stakeholders" },
  { to: "/app/analytics", label: "Analytics", icon: BarChart3, group: "Intelligence" },
  { to: "/app/reports", label: "Reports", icon: FileText, group: "Intelligence" },
  { to: "/app/team", label: "Team", icon: Users, group: "Workspace" },
  { to: "/app/activity", label: "Activity", icon: Activity, group: "Workspace" },
  { to: "/app/compliance", label: "Compliance", icon: ShieldCheck, group: "Workspace" },
  { to: "/app/settings", label: "Settings", icon: Settings, group: "Workspace" },
];

const groupColors: Record<string, string> = {
  Overview: "#a1a1aa",
  Production: "#60a5fa",
  Finance: "#34d399",
  Stakeholders: "#f472b6",
  Intelligence: "#a78bfa",
  Workspace: "#71717a",
};

function AppLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <ToastProvider>
      <CommandMenu />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          background: "#050505",
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
            background: "#000",
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
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Clapperboard style={{ width: 14, height: 14, color: "#000" }} />
            </div>
            <span
              style={{ fontWeight: 700, fontSize: "1rem", color: "#fff", letterSpacing: "-0.03em" }}
            >
              Cine<span style={{ color: "#3f3f46" }}>Ledger</span>
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
                    opacity: 0.7,
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
                        to={n.to as "/app"}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.625rem",
                          padding: "0.45rem 0.75rem",
                          borderRadius: "0.625rem",
                          fontSize: "0.8125rem",
                          fontWeight: active ? 600 : 400,
                          color: active ? "#fff" : "#52525b",
                          background: active ? "rgba(255,255,255,0.06)" : "transparent",
                          border: `1px solid ${active ? "rgba(255,255,255,0.09)" : "transparent"}`,
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
                            opacity: active ? 1 : 0.45,
                          }}
                          strokeWidth={active ? 2 : 1.5}
                        />
                        <span style={{ flex: 1 }}>{n.label}</span>
                        {active && (
                          <span
                            style={{
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              background: groupColors[group] ?? "#fff",
                              flexShrink: 0,
                            }}
                          />
                        )}
                      </Link>
                    );
                  })}
              </div>
            ))}
          </nav>

          {/* AI hint */}
          <div
            style={{
              borderRadius: "0.875rem",
              background: "rgba(165,180,252,0.06)",
              border: "1px solid rgba(165,180,252,0.12)",
              padding: "0.875rem",
              marginTop: "0.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                color: "#a5b4fc",
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
                Cine AI
              </span>
            </div>
            <p style={{ fontSize: "0.75rem", color: "#71717a", lineHeight: 1.55 }}>
              3 underperformers detected this week. Open analytics for forecast.
            </p>
            <Link
              to="/app/analytics"
              style={{
                marginTop: "0.625rem",
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                fontSize: "0.6875rem",
                color: "#a5b4fc",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              View insights <ChevronRight style={{ width: 11, height: 11 }} />
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
              background: "rgba(0,0,0,0.75)",
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
                  color: "#52525b",
                }}
              />
              <button
                onClick={() =>
                  document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))
                }
                style={{
                  width: "100%",
                  textAlign: "left",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  paddingLeft: "2.25rem",
                  paddingRight: "1rem",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  fontSize: "0.8125rem",
                  color: "#a1a1aa",
                  outline: "none",
                  cursor: "text",
                  fontFamily: "inherit",
                }}
              >
                Search projects, transactions, people...{" "}
                <span style={{ opacity: 0.5, float: "right" }}>Cmd+K</span>
              </button>
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
                <Bell style={{ width: 14, height: 14, color: "#71717a" }} />
                <span
                  style={{
                    position: "absolute",
                    top: 7,
                    right: 7,
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#fbbf24",
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
                    background: "rgba(96,165,250,0.15)",
                    border: "1px solid rgba(96,165,250,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    color: "#60a5fa",
                  }}
                >
                  AR
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
                    Anaya Rao
                  </div>
                  <div style={{ fontSize: "0.6875rem", color: "#52525b", lineHeight: 1 }}>
                    Lumen Pictures · Admin
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
