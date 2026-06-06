import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader, Stat, Card, PrimaryButton, GhostButton, Pill } from "@/components/app/ui";
import { Modal, useToast, inputSt, labelSt, fieldSt, submitBtnSt } from "@/components/app/modal";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ArrowLeft } from "lucide-react";
import { useDb } from "@/lib/useDb";

export const Route = createFileRoute("/app/projects/$id")({
  component: ProjectDetail,
});

const budgetBreakdown = [
  { c: "Cast", v: 22 },
  { c: "Crew", v: 14 },
  { c: "Locations", v: 9 },
  { c: "VFX", v: 18 },
  { c: "Music", v: 4 },
  { c: "Marketing", v: 11 },
];
const barColors = ["#60a5fa", "#34d399", "#a78bfa", "#fbbf24", "#f472b6", "#2dd4bf"];
const collections = [
  { w: "W1", v: 38 },
  { w: "W2", v: 34 },
  { w: "W3", v: 22 },
  { w: "W4", v: 18 },
  { w: "W5", v: 12 },
  { w: "W6", v: 4 },
];

const TT = {
  contentStyle: {
    background: "#0d0d0d",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 10,
    fontSize: 12,
    color: "#fff",
  },
  itemStyle: { color: "#fff" },
};
const S = "'Inter', ui-sans-serif, system-ui, sans-serif";

function ProjectDetail() {
  const { id } = Route.useParams();
  const { projects } = useDb();
  const project = projects.find((p) => p.id === id);
  const { toast } = useToast();

  const [showExpense, setShowExpense] = useState(false);
  const [expenseForm, setExpenseForm] = useState({ cat: "VFX", vendor: "", amount: "", note: "" });
  const [expenses, setExpenses] = useState([
    { t: "VFX final invoice", v: "-₹3.2 Cr", pos: false },
    { t: "BMS settlement W3", v: "+₹22.1 Cr", pos: true },
    { t: "Marketing — Tier 2", v: "-₹1.4 Cr", pos: false },
    { t: "INOX settlement W3", v: "+₹14.7 Cr", pos: true },
  ]);

  if (!project) return <div style={{ color: "white", padding: "2rem" }}>Project not found</div>;

  const title = project.title;

  const handleExpense = () => {
    if (!expenseForm.vendor || !expenseForm.amount) {
      toast("Fill in vendor and amount", "error");
      return;
    }
    setExpenses((p) => [
      {
        t: `${expenseForm.cat} — ${expenseForm.vendor}`,
        v: `-₹${expenseForm.amount} Cr`,
        pos: false,
      },
      ...p,
    ]);
    setExpenseForm({ cat: "VFX", vendor: "", amount: "", note: "" });
    setShowExpense(false);
    toast(`Expense logged for ${title}`);
  };

  return (
    <>
      <Link
        to="/app/projects"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.375rem",
          fontSize: "0.8125rem",
          color: "#52525b",
          textDecoration: "none",
          marginBottom: "1rem",
        }}
        onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
        onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#52525b")}
      >
        <ArrowLeft style={{ width: 13, height: 13 }} /> All projects
      </Link>

      <PageHeader
        eyebrow="Production file"
        title={title}
        sub={`${project.releaseYear} ${project.phase.toLowerCase()} release · ${project.genre} · ${project.runtime} min · Director: ${project.director}`}
        actions={
          <>
            <GhostButton onClick={() => toast("Ledger export started — PDF ready in 30s", "info")}>
              Export ledger
            </GhostButton>
            <PrimaryButton onClick={() => setShowExpense(true)}>+ Log expense</PrimaryButton>
          </>
        }
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "0.875rem",
          marginBottom: "1.25rem",
        }}
      >
        <Stat label="Budget" value={`₹${project.budget} Cr`} accent="neutral" />
        <Stat
          label="Spent"
          value={`₹${project.spent} Cr`}
          delta={`${Math.round((project.spent / (project.budget || 1)) * 100)}% deployed`}
          accent="blue"
        />
        <Stat
          label="Theatrical"
          value={`₹${project.theatrical} Cr`}
          delta={`${project.roi} ROI`}
          accent="green"
        />
        <Stat label="OTT advance" value={`₹${project.ottAdvance} Cr`} accent="teal" />
      </div>

      {/* Charts */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0.875rem",
          marginBottom: "1.25rem",
        }}
      >
        <Card title="Budget by department">
          <div style={{ height: 240, marginLeft: -12 }}>
            <ResponsiveContainer>
              <BarChart data={budgetBreakdown}>
                <XAxis
                  dataKey="c"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#52525b", fontSize: 11, fontFamily: S }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#52525b", fontSize: 11, fontFamily: S }}
                />
                <Tooltip {...TT} />
                <Bar dataKey="v" name="₹ Cr" radius={[6, 6, 0, 0]}>
                  {budgetBreakdown.map((_, i) => (
                    <Cell key={i} fill={barColors[i % barColors.length]} fillOpacity={0.75} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Weekly collections">
          <div style={{ height: 240, marginLeft: -12 }}>
            <ResponsiveContainer>
              <AreaChart data={collections}>
                <defs>
                  <linearGradient id="collGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#34d399" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#34d399" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="w"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#52525b", fontSize: 11, fontFamily: S }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#52525b", fontSize: 11, fontFamily: S }}
                />
                <Tooltip {...TT} />
                <Area
                  dataKey="v"
                  name="₹ Cr"
                  stroke="#34d399"
                  fill="url(#collGrad)"
                  strokeWidth={1.5}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Info cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0.875rem" }}>
        <Card title="Key people">
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              [project.director, "Director"],
              ["Anaya Rao", "Producer"],
              ["Priya Iyer", "Cinematographer"],
              ["Devraj Kumar", "Editor"],
            ].map(([n, r], i, a) => (
              <div
                key={n}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0.625rem 0",
                  borderBottom: i < a.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                }}
              >
                <span
                  style={{ fontSize: "0.875rem", fontWeight: 500, color: "#fff", fontFamily: S }}
                >
                  {n}
                </span>
                <span style={{ fontSize: "0.75rem", color: "#52525b", fontFamily: S }}>{r}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Distribution">
          <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            {[
              ["PVR · INOX", "green", "Active"],
              ["BookMyShow", "green", "Active"],
              ["Netflix · India", "gold", "Window 14d"],
              ["Star Vijay TV", "neutral", "Q3 2026"],
            ].map(([k, t, v]) => (
              <div
                key={k}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <span style={{ fontSize: "0.875rem", color: "#a1a1aa", fontFamily: S }}>{k}</span>
                <Pill tone={t as "green" | "gold" | "neutral" | "crimson" | "blue" | "teal"}>
                  {v}
                </Pill>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Recent transactions">
          <div style={{ display: "flex", flexDirection: "column" }}>
            {expenses.slice(0, 5).map((e, i, a) => (
              <div
                key={e.t + i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0.6rem 0",
                  borderBottom: i < a.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                }}
              >
                <span style={{ fontSize: "0.8125rem", color: "#71717a", fontFamily: S }}>
                  {e.t}
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: e.pos ? "#34d399" : "#f87171",
                    fontFamily: S,
                  }}
                >
                  {e.v}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Log Expense Modal */}
      <Modal
        open={showExpense}
        onClose={() => setShowExpense(false)}
        title={`Log expense — ${title}`}
      >
        <div style={fieldSt}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            <div>
              <label style={labelSt}>Category</label>
              <select
                style={{ ...inputSt, cursor: "pointer" }}
                value={expenseForm.cat}
                onChange={(e) => setExpenseForm((p) => ({ ...p, cat: e.target.value }))}
              >
                {["Cast", "Crew", "VFX", "Music", "Marketing", "Locations", "Post"].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={labelSt}>Amount (₹ Cr)</label>
              <input
                style={inputSt}
                type="number"
                step="0.1"
                placeholder="e.g. 3.2"
                value={expenseForm.amount}
                onChange={(e) => setExpenseForm((p) => ({ ...p, amount: e.target.value }))}
                onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.25)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
            </div>
          </div>
          <div>
            <label style={labelSt}>Vendor *</label>
            <input
              style={inputSt}
              placeholder="Vendor or payee name"
              value={expenseForm.vendor}
              onChange={(e) => setExpenseForm((p) => ({ ...p, vendor: e.target.value }))}
              onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.25)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
            />
          </div>
          <div>
            <label style={labelSt}>Notes</label>
            <textarea
              style={{ ...inputSt, resize: "vertical", minHeight: "3rem" }}
              placeholder="Invoice number, PO reference…"
              value={expenseForm.note}
              onChange={(e) => setExpenseForm((p) => ({ ...p, note: e.target.value }))}
            />
          </div>
          <button style={submitBtnSt} onClick={handleExpense}>
            Log expense →
          </button>
        </div>
      </Modal>
    </>
  );
}
