import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader, Card, PrimaryButton, GhostButton, Pill } from "@/components/app/ui";
import {
  Plus,
  Download,
  Trash2,
  Pencil,
  FileDown,
  Tv,
  Radio,
  Clapperboard as Theatre,
} from "lucide-react";

export const Route = createFileRoute("/app/windows")({
  component: WindowsPage,
  head: () => ({ meta: [{ title: "Window Planner — CineLedger" }] }),
});

type Channel = "Theatrical" | "OTT" | "Satellite";
type WindowRow = {
  id: string;
  project: string;
  channel: Channel;
  partner: string;
  territory: string;
  start: string; // YYYY-MM-DD
  end: string;
  value: number; // ₹Cr
  status: "Draft" | "Negotiating" | "Signed" | "Live" | "Closed";
};

const seed: WindowRow[] = [
  {
    id: "w1",
    project: "Midnight Mirage",
    channel: "Theatrical",
    partner: "PVR Inox",
    territory: "India",
    start: "2026-06-12",
    end: "2026-08-07",
    value: 64,
    status: "Signed",
  },
  {
    id: "w2",
    project: "Midnight Mirage",
    channel: "OTT",
    partner: "Netflix",
    territory: "Global",
    start: "2026-09-15",
    end: "2029-09-14",
    value: 88,
    status: "Negotiating",
  },
  {
    id: "w3",
    project: "Midnight Mirage",
    channel: "Satellite",
    partner: "Star Network",
    territory: "India",
    start: "2027-01-10",
    end: "2030-01-09",
    value: 32,
    status: "Draft",
  },
  {
    id: "w4",
    project: "Silver Tide",
    channel: "Theatrical",
    partner: "Cinépolis",
    territory: "LatAm",
    start: "2026-05-01",
    end: "2026-06-26",
    value: 22,
    status: "Live",
  },
  {
    id: "w5",
    project: "Silver Tide",
    channel: "OTT",
    partner: "Prime Video",
    territory: "US/UK",
    start: "2026-08-04",
    end: "2028-08-03",
    value: 54,
    status: "Signed",
  },
  {
    id: "w6",
    project: "Ember Road",
    channel: "OTT",
    partner: "JioCinema",
    territory: "India",
    start: "2026-04-18",
    end: "2027-04-17",
    value: 28,
    status: "Closed",
  },
];

const channelMeta: Record<Channel, { color: string; icon: typeof Theatre }> = {
  Theatrical: { color: "oklch(0.82 0.14 82)", icon: Theatre },
  OTT: { color: "oklch(0.6 0.13 200)", icon: Tv },
  Satellite: { color: "oklch(0.55 0.12 25)", icon: Radio },
};

const statusTone: Record<WindowRow["status"], "neutral" | "gold" | "teal" | "crimson" | "green"> = {
  Draft: "neutral",
  Negotiating: "gold",
  Signed: "teal",
  Live: "green",
  Closed: "neutral",
};

function monthsBetween(a: Date, b: Date) {
  return (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth());
}

function WindowsPage() {
  const [rows, setRows] = useState<WindowRow[]>(seed);
  const [filter, setFilter] = useState<"All" | Channel>("All");
  const [editing, setEditing] = useState<WindowRow | null>(null);
  const [open, setOpen] = useState(false);

  const filtered = filter === "All" ? rows : rows.filter((r) => r.channel === filter);
  const projects = Array.from(new Set(rows.map((r) => r.project)));

  const range = useMemo(() => {
    const dates = filtered.flatMap((r) => [new Date(r.start), new Date(r.end)]);
    if (!dates.length) return { start: new Date(), months: 12 };
    const start = new Date(Math.min(...dates.map((d) => d.getTime())));
    start.setDate(1);
    const end = new Date(Math.max(...dates.map((d) => d.getTime())));
    const months = Math.max(12, monthsBetween(start, end) + 2);
    return { start, months };
  }, [filtered]);

  const monthLabels = Array.from({ length: range.months }, (_, i) => {
    const d = new Date(range.start);
    d.setMonth(d.getMonth() + i);
    return d.toLocaleString("en", { month: "short", year: "2-digit" });
  });

  function barStyle(r: WindowRow) {
    const s = new Date(r.start),
      e = new Date(r.end);
    const offset = Math.max(0, monthsBetween(range.start, s));
    const span = Math.max(0.5, monthsBetween(s, e));
    return {
      left: `${(offset / range.months) * 100}%`,
      width: `${(span / range.months) * 100}%`,
      background: `linear-gradient(90deg, ${channelMeta[r.channel].color}, color-mix(in oklab, ${channelMeta[r.channel].color} 55%, transparent))`,
    };
  }

  function openNew() {
    setEditing({
      id: "",
      project: projects[0] ?? "New Project",
      channel: "Theatrical",
      partner: "",
      territory: "India",
      start: "",
      end: "",
      value: 0,
      status: "Draft",
    });
    setOpen(true);
  }
  function openEdit(r: WindowRow) {
    setEditing({ ...r });
    setOpen(true);
  }
  function remove(id: string) {
    setRows((rs) => rs.filter((r) => r.id !== id));
  }
  function save() {
    if (!editing) return;
    if (!editing.project || !editing.partner || !editing.start || !editing.end) return;
    if (editing.id) setRows((rs) => rs.map((r) => (r.id === editing.id ? editing : r)));
    else setRows((rs) => [...rs, { ...editing, id: `w${Date.now()}` }]);
    setOpen(false);
    setEditing(null);
  }

  function exportCSV() {
    const header = "Project,Channel,Partner,Territory,Start,End,Value (Cr),Status";
    const lines = rows.map((r) =>
      [r.project, r.channel, r.partner, r.territory, r.start, r.end, r.value, r.status].join(","),
    );
    download("window-plan.csv", [header, ...lines].join("\n"), "text/csv");
  }

  function exportDealMemo(r: WindowRow) {
    const memo = `DEAL MEMO — CineLedger\n${"=".repeat(40)}\n
Project:    ${r.project}
Channel:    ${r.channel}
Partner:    ${r.partner}
Territory:  ${r.territory}
Window:     ${r.start} → ${r.end}
Value:      ₹${r.value} Cr
Status:     ${r.status}

Terms
-----
• Exclusive ${r.channel.toLowerCase()} rights for the territory above during the licensing window.
• Minimum guarantee payable per schedule appended to this memo.
• Standard CineLedger reporting cadence: monthly reconciliation, quarterly audit.

Issued by Lumen Pictures · ${new Date().toLocaleDateString()}
`;
    download(`deal-memo-${r.project.replace(/\s+/g, "-")}-${r.channel}.txt`, memo, "text/plain");
  }

  function download(name: string, content: string, mime: string) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <PageHeader
        eyebrow="Distribution"
        title="Window Planner"
        sub="Editable timelines for theatrical, OTT and satellite windows. Drag deal memos out as you negotiate."
        actions={
          <>
            <GhostButton onClick={exportCSV}>
              <Download className="inline h-4 w-4 mr-1.5" />
              Export plan
            </GhostButton>
            <PrimaryButton onClick={openNew}>
              <Plus className="inline h-4 w-4 mr-1.5" />
              New window
            </PrimaryButton>
          </>
        }
      />

      <div className="flex items-center gap-2 mb-5">
        {(["All", "Theatrical", "OTT", "Satellite"] as const).map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-3.5 py-1.5 text-xs border transition ${filter === c ? "bg-white/10 border-white/20 text-foreground" : "border-white/10 text-muted-foreground hover:bg-white/5"}`}
          >
            {c}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-4 text-xs text-muted-foreground">
          {(Object.keys(channelMeta) as Channel[]).map((c) => (
            <span key={c} className="flex items-center gap-1.5">
              <span className="h-2 w-3 rounded-sm" style={{ background: channelMeta[c].color }} />
              {c}
            </span>
          ))}
        </div>
      </div>

      <Card title="Release timeline">
        <div className="overflow-x-auto">
          <div className="min-w-[900px]">
            <div className="grid" style={{ gridTemplateColumns: `200px 1fr` }}>
              <div />
              <div
                className="grid border-b border-white/5 pb-2 text-[10px] uppercase tracking-widest text-muted-foreground"
                style={{ gridTemplateColumns: `repeat(${range.months}, 1fr)` }}
              >
                {monthLabels.map((m, i) => (
                  <div key={i} className="text-center">
                    {m}
                  </div>
                ))}
              </div>
            </div>
            {projects.map((proj) => {
              const projRows = filtered.filter((r) => r.project === proj);
              if (!projRows.length) return null;
              return (
                <div
                  key={proj}
                  className="grid items-stretch border-b border-white/5"
                  style={{ gridTemplateColumns: `200px 1fr` }}
                >
                  <div className="py-4 pr-4 text-sm font-medium">
                    {proj}
                    <div className="text-xs text-muted-foreground">
                      {projRows.length} window{projRows.length > 1 ? "s" : ""}
                    </div>
                  </div>
                  <div className="relative py-4 space-y-2">
                    {projRows.map((r) => {
                      const Icon = channelMeta[r.channel].icon;
                      return (
                        <div key={r.id} className="relative h-8">
                          <button
                            onClick={() => openEdit(r)}
                            className="absolute top-0 h-8 rounded-lg flex items-center gap-1.5 px-2.5 text-xs text-primary-foreground/90 hover:ring-2 hover:ring-white/30 transition overflow-hidden whitespace-nowrap shadow-lg"
                            style={barStyle(r)}
                            title={`${r.partner} · ${r.start} → ${r.end}`}
                          >
                            <Icon className="h-3 w-3 shrink-0" />
                            <span className="font-medium">{r.partner}</span>
                            <span className="opacity-70">· ₹{r.value}Cr</span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      <Card title="Deals" className="mt-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs uppercase tracking-widest text-muted-foreground">
              <tr className="border-b border-white/5">
                <th className="text-left py-3 font-normal">Project</th>
                <th className="text-left font-normal">Channel</th>
                <th className="text-left font-normal">Partner</th>
                <th className="text-left font-normal">Territory</th>
                <th className="text-left font-normal">Window</th>
                <th className="text-left font-normal">Value</th>
                <th className="text-left font-normal">Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((r) => (
                <tr key={r.id} className="hover:bg-white/[0.02]">
                  <td className="py-3.5 font-medium">{r.project}</td>
                  <td className="text-muted-foreground">{r.channel}</td>
                  <td>{r.partner}</td>
                  <td className="text-muted-foreground">{r.territory}</td>
                  <td className="text-xs text-muted-foreground">
                    {r.start} → {r.end}
                  </td>
                  <td>₹{r.value} Cr</td>
                  <td>
                    <Pill tone={statusTone[r.status]}>{r.status}</Pill>
                  </td>
                  <td>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <button
                        className="p-1.5 rounded-md hover:bg-white/5"
                        onClick={() => exportDealMemo(r)}
                        title="Export deal memo"
                      >
                        <FileDown className="h-3.5 w-3.5" />
                      </button>
                      <button
                        className="p-1.5 rounded-md hover:bg-white/5"
                        onClick={() => openEdit(r)}
                        title="Edit"
                      >
                        <Pencil className="h-3.5 w-3.5" />
                      </button>
                      <button
                        className="p-1.5 rounded-md hover:bg-white/5 hover:text-crimson"
                        onClick={() => remove(r.id)}
                        title="Delete"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {open && editing && (
        <Modal title={editing.id ? "Edit window" : "New window"} onClose={() => setOpen(false)}>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Project">
              <input
                className={inp}
                value={editing.project}
                onChange={(e) => setEditing({ ...editing, project: e.target.value })}
              />
            </Field>
            <Field label="Channel">
              <select
                className={inp}
                value={editing.channel}
                onChange={(e) => setEditing({ ...editing, channel: e.target.value as Channel })}
              >
                {(Object.keys(channelMeta) as Channel[]).map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </Field>
            <Field label="Partner">
              <input
                className={inp}
                value={editing.partner}
                onChange={(e) => setEditing({ ...editing, partner: e.target.value })}
              />
            </Field>
            <Field label="Territory">
              <input
                className={inp}
                value={editing.territory}
                onChange={(e) => setEditing({ ...editing, territory: e.target.value })}
              />
            </Field>
            <Field label="Start date">
              <input
                type="date"
                className={inp}
                value={editing.start}
                onChange={(e) => setEditing({ ...editing, start: e.target.value })}
              />
            </Field>
            <Field label="End date">
              <input
                type="date"
                className={inp}
                value={editing.end}
                onChange={(e) => setEditing({ ...editing, end: e.target.value })}
              />
            </Field>
            <Field label="Value (₹Cr)">
              <input
                type="number"
                className={inp}
                value={editing.value}
                onChange={(e) => setEditing({ ...editing, value: Number(e.target.value) })}
              />
            </Field>
            <Field label="Status">
              <select
                className={inp}
                value={editing.status}
                onChange={(e) =>
                  setEditing({ ...editing, status: e.target.value as WindowRow["status"] })
                }
              >
                {(["Draft", "Negotiating", "Signed", "Live", "Closed"] as const).map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </Field>
          </div>
          <div className="mt-5 flex items-center justify-end gap-2">
            <GhostButton onClick={() => setOpen(false)}>Cancel</GhostButton>
            <PrimaryButton onClick={save}>Save window</PrimaryButton>
          </div>
        </Modal>
      )}
    </>
  );
}

const inp =
  "w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-gold/40";
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block text-xs">
      <div className="text-muted-foreground uppercase tracking-widest mb-1.5">{label}</div>
      {children}
    </label>
  );
}
function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="glass-strong w-full max-w-2xl rounded-2xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-display text-xl">{title}</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
