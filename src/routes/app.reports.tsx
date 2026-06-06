import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Card, GhostButton, PrimaryButton, Pill } from "@/components/app/ui";
import { Download, FileText, Plus, BarChart3, Users, Wallet, Globe } from "lucide-react";

export const Route = createFileRoute("/app/reports")({
  component: ReportsPage,
});

const S = "'Inter', ui-sans-serif, system-ui, sans-serif";

const reports = [
  {
    t: "Q1 2026 — Studio P&L",
    d: "Full slate profit & loss across all titles.",
    dt: "31 Mar 2026",
    size: "2.4 MB",
    icon: BarChart3,
    color: "#60a5fa",
  },
  {
    t: "Midnight in Bombay — Final cost report",
    d: "Department-level reconciliation post-release.",
    dt: "18 May 2026",
    size: "1.1 MB",
    icon: Wallet,
    color: "#34d399",
  },
  {
    t: "OTT Revenue — Apr 2026",
    d: "Settlement detail across Netflix, Prime, JioCinema.",
    dt: "10 May 2026",
    size: "640 KB",
    icon: Globe,
    color: "#a78bfa",
  },
  {
    t: "Tax — Form 26AS Reconciliation",
    d: "TDS captured against vendor payouts.",
    dt: "05 May 2026",
    size: "320 KB",
    icon: FileText,
    color: "#fbbf24",
  },
  {
    t: "Investor Pack — H1 2026",
    d: "Slate forecast, ROI scenarios, slate health.",
    dt: "01 May 2026",
    size: "5.8 MB",
    icon: Users,
    color: "#f472b6",
  },
];

function ReportsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Paper trail"
        title="Reports"
        sub="Generate and download cinematic-quality reports for boards, auditors and investors."
        actions={
          <PrimaryButton>
            <Plus style={{ display: "inline", width: 13, height: 13, marginRight: 4 }} />
            Generate report
          </PrimaryButton>
        }
      />

      <Card>
        <div>
          {reports.map((r, i) => (
            <div
              key={r.t}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem 0.5rem",
                borderTop: i > 0 ? "1px solid rgba(255,255,255,0.05)" : "none",
                borderRadius: "0.625rem",
                transition: "background 0.15s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.025)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "transparent")
              }
            >
              {/* Icon */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "0.75rem",
                  flexShrink: 0,
                  background: `${r.color}15`,
                  border: `1px solid ${r.color}25`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <r.icon style={{ width: 16, height: 16, color: r.color }} />
              </div>

              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{ fontWeight: 600, color: "#fff", fontSize: "0.9375rem", fontFamily: S }}
                >
                  {r.t}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#52525b",
                    marginTop: "0.2rem",
                    fontFamily: S,
                  }}
                >
                  {r.d}
                </div>
              </div>

              {/* Meta */}
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#3f3f46",
                  fontFamily: S,
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "0.2rem",
                }}
              >
                <span>{r.dt}</span>
                <span>{r.size}</span>
              </div>

              <div style={{ flexShrink: 0 }}>
                <GhostButton>
                  <Download style={{ display: "inline", width: 12, height: 12, marginRight: 4 }} />
                  PDF
                </GhostButton>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
