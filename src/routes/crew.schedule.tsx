import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Card, PrimaryButton, Pill } from "@/components/app/ui";
import { CalendarDays, MapPin, Clock, FileText, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/crew/schedule")({
  component: CrewSchedulePage,
  head: () => ({ meta: [{ title: "My Schedule — CineLedger" }] }),
});

const mySchedule = [
  { d: "Mon 19", items: [] },
  {
    d: "Tue 20",
    items: [
      {
        project: "Aurora Falls",
        scene: "Sc. 12 — The Cave",
        role: "Key Grip",
        loc: "Studio C",
        time: "10:00 — 16:00",
        tone: "indigo" as const,
      },
    ],
  },
  { d: "Wed 21", items: [] },
  {
    d: "Thu 22",
    items: [
      {
        project: "Midnight in Bombay",
        scene: "Sc. 47 — Dargah Exterior",
        role: "Key Grip (Unit 2)",
        loc: "Bandra West, Mumbai",
        time: "06:00 — 14:00",
        tone: "neutral" as const,
      },
    ],
  },
  {
    d: "Fri 23",
    items: [
      {
        project: "Aurora Falls",
        scene: "Sc. 15 — The Escape",
        role: "Key Grip",
        loc: "Studio C",
        time: "08:00 — 18:00",
        tone: "indigo" as const,
      },
    ],
  },
  { d: "Sat 24", items: [] },
  { d: "Sun 25", items: [] },
];

function CrewSchedulePage() {
  return (
    <>
      <PageHeader
        eyebrow="Production"
        title="My Schedule"
        sub="Your personal call sheets and schedules across all active projects."
        actions={<PrimaryButton>Download PDF</PrimaryButton>}
      />

      <div className="mt-6 space-y-4">
        {mySchedule.map((day) => (
          <Card key={day.d} className={day.items.length === 0 ? "opacity-50" : ""}>
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="w-24 flex-shrink-0">
                <div className="text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-1.5 font-bold">
                  <CalendarDays className="h-4 w-4" />
                  {day.d}
                </div>
              </div>

              <div className="flex-1 w-full space-y-3">
                {day.items.length === 0 ? (
                  <div className="text-sm text-muted-foreground italic">
                    No calls scheduled (Rest day)
                  </div>
                ) : (
                  day.items.map((i, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col md:flex-row gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 relative overflow-hidden group"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500/50"></div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <Pill tone={i.tone}>{i.project}</Pill>
                          <span className="text-xs font-medium text-muted-foreground px-2 py-0.5 rounded bg-white/5">
                            {i.role}
                          </span>
                        </div>
                        <div className="text-sm font-semibold">{i.scene}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {i.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {i.loc}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <button className="flex items-center gap-2 text-xs font-semibold text-indigo-400 bg-indigo-400/10 hover:bg-indigo-400/20 px-3 py-2 rounded-lg transition-colors">
                          <FileText className="w-3.5 h-3.5" /> Open Call Sheet{" "}
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
