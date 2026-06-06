import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Stat, Card, PrimaryButton, GhostButton, Pill } from "@/components/app/ui";
import { ShieldCheck, FileCheck, AlertTriangle, Lock } from "lucide-react";

export const Route = createFileRoute("/app/compliance")({
  component: CompliancePage,
  head: () => ({ meta: [{ title: "Compliance — CineLedger" }] }),
});

const items = [
  {
    title: "CBFC certification",
    project: "Midnight in Bombay",
    due: "02 Jun 2026",
    status: "Submitted",
    tone: "gold" as const,
    icon: FileCheck,
  },
  {
    title: "ESIC / PF filing",
    project: "All units",
    due: "15 May 2026",
    status: "Filed",
    tone: "green" as const,
    icon: ShieldCheck,
  },
  {
    title: "GST return GSTR-3B",
    project: "Studio entity",
    due: "20 May 2026",
    status: "Due in 3 days",
    tone: "gold" as const,
    icon: FileCheck,
  },
  {
    title: "Stunt safety audit",
    project: "Aurora Falls",
    due: "24 May 2026",
    status: "Action required",
    tone: "crimson" as const,
    icon: AlertTriangle,
  },
  {
    title: "Music licensing — IPRS",
    project: "The Last Reel",
    due: "30 May 2026",
    status: "In progress",
    tone: "neutral" as const,
    icon: Lock,
  },
  {
    title: "Insurance renewal",
    project: "Cast & equipment",
    due: "05 Jun 2026",
    status: "Quote received",
    tone: "gold" as const,
    icon: ShieldCheck,
  },
];

function CompliancePage() {
  return (
    <>
      <PageHeader
        eyebrow="Workspace"
        title="Compliance"
        sub="Regulatory filings, certifications, safety audits and licensing across the slate."
        actions={
          <>
            <GhostButton>Audit log</GhostButton>
            <PrimaryButton>New filing</PrimaryButton>
          </>
        }
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat label="Compliance score" value="94 / 100" delta="A-rated" accent="teal" />
        <Stat label="Filings on schedule" value="38" delta="2 due this week" />
        <Stat label="Open risks" value="3" delta="1 critical" accent="crimson" />
        <Stat label="Auditor sign-offs" value="11 / 12" delta="Q1 complete" accent="teal" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-6">
        <Card title="Open obligations" className="lg:col-span-2">
          <ul className="divide-y divide-white/5 text-sm">
            {items.map((i) => (
              <li key={i.title} className="py-3.5 flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-white/5 grid place-items-center">
                  <i.icon className="h-4 w-4 text-gold" />
                </div>
                <div className="flex-1 min-w-0">
                  <div>{i.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {i.project} · due {i.due}
                  </div>
                </div>
                <Pill tone={i.tone}>{i.status}</Pill>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Policies & approvals">
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between">
              <span className="text-muted-foreground">RBAC enforced</span>
              <Pill tone="green">Yes</Pill>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">SOC 2 controls</span>
              <Pill tone="green">Mapped</Pill>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Data residency</span>
              <Pill tone="green">IN · ap-south-1</Pill>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Encryption at rest</span>
              <Pill tone="green">AES-256</Pill>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Investor NDA library</span>
              <Pill tone="gold">24 templates</Pill>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Whistleblower channel</span>
              <Pill tone="green">Active</Pill>
            </li>
          </ul>
        </Card>
      </div>
    </>
  );
}
