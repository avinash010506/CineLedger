import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Stat, Card, PrimaryButton, GhostButton, Pill } from "@/components/app/ui";
import { CalendarDays, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/app/schedule")({
  component: SchedulePage,
  head: () => ({ meta: [{ title: "Schedule — CineLedger" }] }),
});

const weeks = [
  {
    label: "Week 21",
    days: [
      {
        d: "Mon 19",
        items: [
          {
            project: "Midnight in Bombay",
            scene: "Sc. 42 — Bandra rooftop",
            loc: "Mumbai",
            time: "05:30 — 18:00",
            tone: "gold" as const,
          },
        ],
      },
      {
        d: "Tue 20",
        items: [
          {
            project: "Midnight in Bombay",
            scene: "Sc. 43 — Marine Drive",
            loc: "Mumbai",
            time: "17:00 — 02:00",
            tone: "gold" as const,
          },
          {
            project: "Aurora Falls",
            scene: "Re-shoot Sc. 12",
            loc: "Studio C",
            time: "10:00 — 16:00",
            tone: "teal" as const,
          },
        ],
      },
      {
        d: "Wed 21",
        items: [
          {
            project: "The Last Reel",
            scene: "VFX review",
            loc: "Lumen HQ",
            time: "14:00",
            tone: "neutral" as const,
          },
        ],
      },
      {
        d: "Thu 22",
        items: [
          {
            project: "Salt & Smoke",
            scene: "ADR session",
            loc: "Studio A",
            time: "11:00 — 18:00",
            tone: "crimson" as const,
          },
        ],
      },
      {
        d: "Fri 23",
        items: [
          {
            project: "Midnight in Bombay",
            scene: "Sc. 47 — Dargah",
            loc: "Mumbai",
            time: "06:00 — 14:00",
            tone: "gold" as const,
          },
        ],
      },
      { d: "Sat 24", items: [] },
      {
        d: "Sun 25",
        items: [
          {
            project: "Aurora Falls",
            scene: "OTT premiere",
            loc: "Online",
            time: "20:00",
            tone: "teal" as const,
          },
        ],
      },
    ],
  },
];

function SchedulePage() {
  return (
    <>
      <PageHeader
        eyebrow="Production"
        title="Schedule"
        sub="Unit, location and post-production calendar across the live slate."
        actions={
          <>
            <GhostButton>Day view</GhostButton>
            <PrimaryButton>Add call sheet</PrimaryButton>
          </>
        }
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat label="Shoot days this week" value="11" delta="3 units active" />
        <Stat label="Locations locked" value="28" delta="92% of plan" accent="teal" />
        <Stat label="Days ahead / behind" value="+2" delta="Aurora Falls leads" />
        <Stat label="Crew on call today" value="186" delta="4 stunts on standby" accent="crimson" />
      </div>

      {weeks.map((w) => (
        <Card key={w.label} title={w.label} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
            {w.days.map((d) => (
              <div
                key={d.d}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-3 min-h-40"
              >
                <div className="text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
                  <CalendarDays className="h-3 w-3" />
                  {d.d}
                </div>
                <div className="mt-3 space-y-2">
                  {d.items.length === 0 ? (
                    <div className="text-xs text-muted-foreground/50 italic">Hold day</div>
                  ) : (
                    d.items.map((i, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg bg-white/[0.03] p-2.5 border border-white/5"
                      >
                        <Pill tone={i.tone}>{i.project}</Pill>
                        <div className="mt-1.5 text-xs">{i.scene}</div>
                        <div className="mt-1.5 text-[11px] text-muted-foreground flex items-center gap-2">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {i.loc}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {i.time}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </>
  );
}
