import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Card } from "@/components/app/ui";
import { CheckCircle2, AlertTriangle, FileEdit, UserPlus, IndianRupee } from "lucide-react";

export const Route = createFileRoute("/app/activity")({
  component: ActivityPage,
});

const log = [
  {
    t: "Vikram Sahni approved a ₹3.2 Cr VFX invoice",
    time: "2 min ago",
    who: "Midnight in Bombay",
    icon: CheckCircle2,
    tone: "text-emerald-300",
  },
  {
    t: "Cine AI flagged Salt & Smoke as underperforming",
    time: "37 min ago",
    who: "Forecasting model",
    icon: AlertTriangle,
    tone: "text-crimson",
  },
  {
    t: "Meera Joshi updated the Aurora Falls OTT deal terms",
    time: "1 hr ago",
    who: "Aurora Falls",
    icon: FileEdit,
    tone: "text-gold",
  },
  {
    t: "Priya Iyer logged ₹14 Cr in marketing spend",
    time: "3 hr ago",
    who: "Saffron Sky",
    icon: IndianRupee,
    tone: "text-teal",
  },
  {
    t: "Anaya Rao invited Devraj Kumar as Auditor",
    time: "Yesterday",
    who: "Team",
    icon: UserPlus,
    tone: "text-gold",
  },
  {
    t: "BookMyShow settlement processed: +₹22.1 Cr",
    time: "Yesterday",
    who: "Midnight in Bombay",
    icon: IndianRupee,
    tone: "text-emerald-300",
  },
  {
    t: "Neon Monsoon production schedule was revised",
    time: "2 days ago",
    who: "Neon Monsoon",
    icon: FileEdit,
    tone: "text-teal",
  },
];

function ActivityPage() {
  return (
    <>
      <PageHeader
        eyebrow="The continuity log"
        title="Activity"
        sub="Every action, immutable, audit-ready."
      />
      <Card>
        <ol className="relative border-l border-white/10 ml-3 space-y-6">
          {log.map((a, i) => (
            <li key={i} className="pl-6">
              <span className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full bg-background border border-white/10 grid place-items-center">
                <a.icon className={`h-3 w-3 ${a.tone}`} />
              </span>
              <div className="text-sm">{a.t}</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {a.who} · {a.time}
              </div>
            </li>
          ))}
        </ol>
      </Card>
    </>
  );
}
