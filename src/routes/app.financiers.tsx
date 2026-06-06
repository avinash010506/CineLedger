import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader, Stat, Card, PrimaryButton, GhostButton, Pill } from "@/components/app/ui";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import { Plus, FileText, Pencil, Trash2, Wallet } from "lucide-react";

export const Route = createFileRoute("/app/financiers")({
  component: FinanciersPage,
  head: () => ({ meta: [{ title: "Financiers — CineLedger" }] }),
});

type Instrument = "Equity" | "Debt" | "Mezzanine" | "Pre-sale" | "Soft money";
type Allocation = { project: string; amount: number; roi: number };
type Financier = {
  id: string;
  name: string;
  type: Instrument;
  committed: number; // ₹Cr
  drawn: number;
  irr: number;
  stage: "Pending KYC" | "Drawing" | "Funded" | "Realised" | "Closed";
  allocations: Allocation[];
};

const projectsList = ["Midnight Mirage", "Silver Tide", "Ember Road", "Crimson Hour"];

const seed: Financier[] = [
  {
    id: "f1",
    name: "Meridian Capital",
    type: "Equity",
    committed: 220,
    drawn: 148,
    irr: 26,
    stage: "Funded",
    allocations: [
      { project: "Midnight Mirage", amount: 90, roi: 32 },
      { project: "Silver Tide", amount: 58, roi: 22 },
    ],
  },
  {
    id: "f2",
    name: "Halo Ventures",
    type: "Mezzanine",
    committed: 140,
    drawn: 92,
    irr: 19,
    stage: "Funded",
    allocations: [
      { project: "Ember Road", amount: 52, roi: 18 },
      { project: "Midnight Mirage", amount: 40, roi: 21 },
    ],
  },
  {
    id: "f3",
    name: "Northwind Bank",
    type: "Debt",
    committed: 180,
    drawn: 64,
    irr: 11,
    stage: "Drawing",
    allocations: [{ project: "Crimson Hour", amount: 64, roi: 11 }],
  },
  {
    id: "f4",
    name: "Skyline OTT Fund",
    type: "Pre-sale",
    committed: 85,
    drawn: 85,
    irr: 0,
    stage: "Closed",
    allocations: [{ project: "Silver Tide", amount: 85, roi: 0 }],
  },
];

const stageTone: Record<Financier["stage"], "neutral" | "gold" | "teal" | "crimson" | "green"> = {
  "Pending KYC": "crimson",
  Drawing: "gold",
  Funded: "green",
  Realised: "green",
  Closed: "neutral",
};
const instColor: Record<Instrument, string> = {
  Equity: "oklch(0.82 0.14 82)",
  Debt: "oklch(0.6 0.13 200)",
  Mezzanine: "oklch(0.55 0.12 25)",
  "Pre-sale": "oklch(0.7 0.1 140)",
  "Soft money": "oklch(0.6 0.08 300)",
};

function FinanciersPage() {
  const [rows, setRows] = useState<Financier[]>(seed);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Financier | null>(null);

  const stats = useMemo(() => {
    const committed = rows.reduce((s, r) => s + r.committed, 0);
    const drawn = rows.reduce((s, r) => s + r.drawn, 0);
    const irr = rows.length ? rows.reduce((s, r) => s + r.irr, 0) / rows.length : 0;
    return { committed, drawn, irr, util: committed ? Math.round((drawn / committed) * 100) : 0 };
  }, [rows]);

  const stack = useMemo(() => {
    const map = new Map<Instrument, number>();
    rows.forEach((r) => map.set(r.type, (map.get(r.type) ?? 0) + r.committed));
    return Array.from(map.entries()).map(([name, value]) => ({
      name,
      value,
      fill: instColor[name],
    }));
  }, [rows]);

  const drawdown = [
    { m: "Jan", capital: Math.round(stats.drawn * 0.05) },
    { m: "Feb", capital: Math.round(stats.drawn * 0.12) },
    { m: "Mar", capital: Math.round(stats.drawn * 0.22) },
    { m: "Apr", capital: Math.round(stats.drawn * 0.36) },
    { m: "May", capital: Math.round(stats.drawn * 0.52) },
    { m: "Jun", capital: Math.round(stats.drawn * 0.7) },
    { m: "Jul", capital: Math.round(stats.drawn * 0.85) },
    { m: "Aug", capital: stats.drawn },
  ];

  const roiByProject = useMemo(() => {
    const map = new Map<string, { invested: number; weighted: number }>();
    rows.forEach((r) =>
      r.allocations.forEach((a) => {
        const cur = map.get(a.project) ?? { invested: 0, weighted: 0 };
        map.set(a.project, {
          invested: cur.invested + a.amount,
          weighted: cur.weighted + a.amount * a.roi,
        });
      }),
    );
    return Array.from(map.entries()).map(([project, v]) => ({
      project,
      invested: v.invested,
      roi: v.invested ? +(v.weighted / v.invested).toFixed(1) : 0,
    }));
  }, [rows]);

  function openNew() {
    setEditing({
      id: "",
      name: "",
      type: "Equity",
      committed: 0,
      drawn: 0,
      irr: 0,
      stage: "Pending KYC",
      allocations: [],
    });
    setOpen(true);
  }
  function openEdit(f: Financier) {
    setEditing(structuredClone(f));
    setOpen(true);
  }
  function remove(id: string) {
    setRows((rs) => rs.filter((r) => r.id !== id));
  }
  function save() {
    if (!editing || !editing.name) return;
    if (editing.id) setRows((rs) => rs.map((r) => (r.id === editing.id ? editing : r)));
    else setRows((rs) => [...rs, { ...editing, id: `f${Date.now()}` }]);
    setOpen(false);
    setEditing(null);
  }
  function addAlloc() {
    if (!editing) return;
    setEditing({
      ...editing,
      allocations: [...editing.allocations, { project: projectsList[0], amount: 0, roi: 0 }],
    });
  }
  function setAlloc(i: number, patch: Partial<Allocation>) {
    if (!editing) return;
    setEditing({
      ...editing,
      allocations: editing.allocations.map((a, idx) => (idx === i ? { ...a, ...patch } : a)),
    });
  }
  function rmAlloc(i: number) {
    if (!editing) return;
    setEditing({ ...editing, allocations: editing.allocations.filter((_, idx) => idx !== i) });
  }

  return (
    <>
      <PageHeader
        eyebrow="Stakeholders"
        title="Financiers"
        sub="Capital stack, commitments, drawdown schedules and per-project investor ROI."
        actions={
          <>
            <GhostButton>
              <FileText className="inline h-4 w-4 mr-1.5" />
              Cap table
            </GhostButton>
            <PrimaryButton onClick={openNew}>
              <Plus className="inline h-4 w-4 mr-1.5" />
              Add financier
            </PrimaryButton>
          </>
        }
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat
          label="Committed capital"
          value={`₹${stats.committed} Cr`}
          delta={`${rows.length} partners`}
        />
        <Stat
          label="Drawn to date"
          value={`₹${stats.drawn} Cr`}
          delta={`${stats.util}% utilisation`}
          accent="teal"
        />
        <Stat label="Avg projected IRR" value={`${stats.irr.toFixed(1)}%`} delta="Blended" />
        <Stat
          label="Projects financed"
          value={String(roiByProject.length)}
          delta="Active capital"
          accent="teal"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-6">
        <Card
          title="Capital drawdown curve"
          className="lg:col-span-2"
          action={<Pill tone="gold">YTD</Pill>}
        >
          <div className="h-72 -ml-4">
            <ResponsiveContainer>
              <AreaChart data={drawdown}>
                <defs>
                  <linearGradient id="gf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.6 0.13 200)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="oklch(0.6 0.13 200)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.05)" />
                <XAxis dataKey="m" stroke="oklch(1 0 0 / 0.4)" fontSize={11} />
                <YAxis stroke="oklch(1 0 0 / 0.4)" fontSize={11} />
                <Tooltip
                  contentStyle={{
                    background: "oklch(0.17 0.012 60)",
                    border: "1px solid oklch(1 0 0 / 0.1)",
                    borderRadius: 12,
                  }}
                />
                <Area
                  dataKey="capital"
                  name="Drawn (₹Cr)"
                  stroke="oklch(0.6 0.13 200)"
                  fill="url(#gf)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card title="Capital stack">
          <div className="h-72">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={stack}
                  dataKey="value"
                  innerRadius={55}
                  outerRadius={90}
                  paddingAngle={3}
                  stroke="none"
                >
                  {stack.map((s) => (
                    <Cell key={s.name} fill={s.fill} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "oklch(0.17 0.012 60)",
                    border: "1px solid oklch(1 0 0 / 0.1)",
                    borderRadius: 12,
                  }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: 11 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card
        title="Investor ROI by project"
        className="mt-6"
        action={<Pill tone="teal">Weighted</Pill>}
      >
        <div className="h-64 -ml-4">
          <ResponsiveContainer>
            <BarChart data={roiByProject}>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.05)" />
              <XAxis dataKey="project" stroke="oklch(1 0 0 / 0.4)" fontSize={11} />
              <YAxis stroke="oklch(1 0 0 / 0.4)" fontSize={11} />
              <Tooltip
                contentStyle={{
                  background: "oklch(0.17 0.012 60)",
                  border: "1px solid oklch(1 0 0 / 0.1)",
                  borderRadius: 12,
                }}
              />
              <Bar
                dataKey="invested"
                name="Invested (₹Cr)"
                fill="oklch(0.6 0.13 200)"
                radius={[6, 6, 0, 0]}
              />
              <Bar
                dataKey="roi"
                name="Weighted ROI (%)"
                fill="oklch(0.82 0.14 82)"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card title="Funding partners" className="mt-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs uppercase tracking-widest text-muted-foreground">
              <tr className="border-b border-white/5">
                <th className="text-left py-3 font-normal">Partner</th>
                <th className="text-left font-normal">Instrument</th>
                <th className="text-left font-normal">Committed</th>
                <th className="text-left font-normal">Drawn</th>
                <th className="text-left font-normal">Projects</th>
                <th className="text-left font-normal">IRR</th>
                <th className="text-left font-normal">Stage</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {rows.map((f) => (
                <tr key={f.id} className="hover:bg-white/[0.02]">
                  <td className="py-3.5 font-medium">{f.name}</td>
                  <td className="text-muted-foreground">{f.type}</td>
                  <td>₹{f.committed} Cr</td>
                  <td>₹{f.drawn} Cr</td>
                  <td className="text-xs text-muted-foreground">
                    {f.allocations.length ? f.allocations.map((a) => a.project).join(", ") : "—"}
                  </td>
                  <td className="text-teal">
                    {f.irr || "—"}
                    {f.irr ? "%" : ""}
                  </td>
                  <td>
                    <Pill tone={stageTone[f.stage]}>{f.stage}</Pill>
                  </td>
                  <td>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <button
                        className="p-1.5 rounded-md hover:bg-white/5"
                        onClick={() => openEdit(f)}
                        title="Edit"
                      >
                        <Pencil className="h-3.5 w-3.5" />
                      </button>
                      <button
                        className="p-1.5 rounded-md hover:bg-white/5 hover:text-crimson"
                        onClick={() => remove(f.id)}
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
        <Modal
          title={editing.id ? "Edit financier" : "Add financier"}
          onClose={() => setOpen(false)}
        >
          <div className="grid grid-cols-2 gap-3">
            <Field label="Name">
              <input
                className={inp}
                value={editing.name}
                onChange={(e) => setEditing({ ...editing, name: e.target.value })}
              />
            </Field>
            <Field label="Instrument">
              <select
                className={inp}
                value={editing.type}
                onChange={(e) => setEditing({ ...editing, type: e.target.value as Instrument })}
              >
                {(Object.keys(instColor) as Instrument[]).map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </Field>
            <Field label="Committed (₹Cr)">
              <input
                type="number"
                className={inp}
                value={editing.committed}
                onChange={(e) => setEditing({ ...editing, committed: Number(e.target.value) })}
              />
            </Field>
            <Field label="Drawn (₹Cr)">
              <input
                type="number"
                className={inp}
                value={editing.drawn}
                onChange={(e) => setEditing({ ...editing, drawn: Number(e.target.value) })}
              />
            </Field>
            <Field label="Projected IRR (%)">
              <input
                type="number"
                className={inp}
                value={editing.irr}
                onChange={(e) => setEditing({ ...editing, irr: Number(e.target.value) })}
              />
            </Field>
            <Field label="Stage">
              <select
                className={inp}
                value={editing.stage}
                onChange={(e) =>
                  setEditing({ ...editing, stage: e.target.value as Financier["stage"] })
                }
              >
                {(["Pending KYC", "Drawing", "Funded", "Realised", "Closed"] as const).map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </Field>
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <Wallet className="h-3.5 w-3.5" />
                Capital allocation
              </div>
              <button onClick={addAlloc} className="text-xs text-gold hover:underline">
                + Add project
              </button>
            </div>
            <div className="space-y-2">
              {editing.allocations.length === 0 && (
                <div className="text-xs text-muted-foreground italic">No allocations yet.</div>
              )}
              {editing.allocations.map((a, i) => (
                <div key={i} className="grid grid-cols-[1fr_120px_120px_36px] gap-2 items-center">
                  <select
                    className={inp}
                    value={a.project}
                    onChange={(e) => setAlloc(i, { project: e.target.value })}
                  >
                    {projectsList.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                  <input
                    type="number"
                    placeholder="₹Cr"
                    className={inp}
                    value={a.amount}
                    onChange={(e) => setAlloc(i, { amount: Number(e.target.value) })}
                  />
                  <input
                    type="number"
                    placeholder="ROI %"
                    className={inp}
                    value={a.roi}
                    onChange={(e) => setAlloc(i, { roi: Number(e.target.value) })}
                  />
                  <button
                    onClick={() => rmAlloc(i)}
                    className="p-2 rounded-md text-muted-foreground hover:text-crimson hover:bg-white/5"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-2">
            <GhostButton onClick={() => setOpen(false)}>Cancel</GhostButton>
            <PrimaryButton onClick={save}>Save</PrimaryButton>
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
        className="glass-strong w-full max-w-2xl rounded-2xl p-6 max-h-[90vh] overflow-y-auto"
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
