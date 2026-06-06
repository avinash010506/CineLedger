import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Stat, Card, PrimaryButton, Pill } from "@/components/app/ui";
import { Clock, MapPin, CheckCircle2, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/crew/")({
  component: CrewDashboard,
  head: () => ({ meta: [{ title: "Crew Dashboard — CineLedger" }] }),
});

function CrewDashboard() {
  return (
    <>
      <PageHeader
        eyebrow="Overview"
        title="Welcome back, Jack"
        sub="Here is your upcoming schedule and action items."
        actions={<PrimaryButton>View full schedule</PrimaryButton>}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Stat label="Next Call Time" value="06:00 AM" delta="Tomorrow" accent="gold" />
        <Stat label="Location" value="Studio C" delta="Aurora Falls Set" accent="indigo" />
        <Stat
          label="Pending Actions"
          value="2"
          delta="Review NDA, Sign Timecard"
          accent="crimson"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <Card title="Up Next" className="lg:col-span-2">
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-indigo-400" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold flex items-center gap-2">
                  Call Time: 06:00 AM <Pill tone="indigo">Aurora Falls</Pill>
                </div>
                <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Studio C, Main Lot
                </div>
              </div>
              <PrimaryButton>View Call Sheet</PrimaryButton>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 flex gap-4 items-center opacity-70">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold flex items-center gap-2">
                  Call Time: 08:30 AM <Pill tone="neutral">Midnight in Bombay</Pill>
                </div>
                <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Bandra West, Mumbai (Unit 2)
                </div>
              </div>
              <div className="text-xs text-muted-foreground font-medium pr-2">Thursday</div>
            </div>
          </div>
        </Card>

        <Card title="Action Items">
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
              <AlertCircle className="w-4 h-4 text-rose-400" />
              <div className="text-sm flex-1">Sign Weekly Timecard</div>
              <button className="text-xs font-semibold text-indigo-400">Review</button>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <div className="text-sm flex-1 text-muted-foreground line-through">
                Safety Briefing Acknowledgment
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <div className="text-sm flex-1 text-muted-foreground line-through">
                Onboarding Documents
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
