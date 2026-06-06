import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Card, Pill, PrimaryButton } from "@/components/app/ui";
import { Mail, MoreHorizontal } from "lucide-react";

export const Route = createFileRoute("/app/team")({
  component: TeamPage,
});

const S = "'Inter', ui-sans-serif, system-ui, sans-serif";

const team = [
  {
    n: "Anaya Rao",
    r: "Admin · Head of Finance",
    e: "anaya@lumen.studio",
    s: "online",
    role: "Admin",
  },
  { n: "Vikram Sahni", r: "Producer", e: "vikram@lumen.studio", s: "online", role: "Producer" },
  { n: "Meera Joshi", r: "Producer", e: "meera@lumen.studio", s: "away", role: "Producer" },
  {
    n: "Ahaan Kapoor",
    r: "Project Manager",
    e: "ahaan@lumen.studio",
    s: "offline",
    role: "Manager",
  },
  { n: "Priya Iyer", r: "Accountant", e: "priya@lumen.studio", s: "online", role: "Finance" },
  {
    n: "Devraj Kumar",
    r: "Read-only · Auditor",
    e: "devraj@kpmg.com",
    s: "offline",
    role: "Auditor",
  },
];

const rolePill: Record<string, "blue" | "teal" | "green" | "neutral" | "gold"> = {
  Admin: "blue",
  Producer: "teal",
  Manager: "green",
  Finance: "gold",
  Auditor: "neutral",
};

const statusColor: Record<string, string> = {
  online: "#34d399",
  away: "#fbbf24",
  offline: "rgba(255,255,255,0.15)",
};

const initials = (n: string) =>
  n
    .split(" ")
    .map((w) => w[0])
    .join("");

const avatarBg = [
  "rgba(96,165,250,0.15)",
  "rgba(52,211,153,0.15)",
  "rgba(167,139,250,0.15)",
  "rgba(251,191,36,0.15)",
  "rgba(244,114,182,0.15)",
  "rgba(148,163,184,0.15)",
];

function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="The crew"
        title="Team"
        sub="Role-based access for the people in your studio."
        actions={<PrimaryButton>+ Invite member</PrimaryButton>}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0.875rem" }}>
        {team.map((m, i) => (
          <Card key={m.e}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.875rem",
                marginBottom: "1rem",
              }}
            >
              {/* Avatar */}
              <div style={{ position: "relative", flexShrink: 0 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: avatarBg[i % avatarBg.length],
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "#fff",
                    fontFamily: S,
                  }}
                >
                  {initials(m.n)}
                </div>
                <span
                  style={{
                    position: "absolute",
                    bottom: 1,
                    right: 1,
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    background: statusColor[m.s],
                    border: "2px solid #050505",
                  }}
                />
              </div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontWeight: 600,
                    color: "#fff",
                    fontSize: "0.9375rem",
                    fontFamily: S,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {m.n}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#52525b",
                    marginTop: "0.15rem",
                    fontFamily: S,
                  }}
                >
                  {m.r}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#3f3f46",
                    marginTop: "0.125rem",
                    fontFamily: S,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {m.e}
                </div>
              </div>

              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#3f3f46",
                  padding: "0.25rem",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#3f3f46")}
              >
                <MoreHorizontal style={{ width: 15, height: 15 }} />
              </button>
            </div>

            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.05)",
                paddingTop: "0.875rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Pill tone={rolePill[m.role] ?? "neutral"}>{m.role}</Pill>
              <button
                style={{
                  fontSize: "0.75rem",
                  color: "#52525b",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: S,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#52525b")}
              >
                <Mail style={{ width: 12, height: 12 }} /> Message
              </button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
