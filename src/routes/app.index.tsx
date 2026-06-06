import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Stat, Card, PrimaryButton, GhostButton, Pill } from "@/components/app/ui";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ArrowUpRight,
  Download,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

export const Route = createFileRoute("/app/")({
  component: Dashboard,
});

import { useDb } from "@/lib/useDb";

const aiInsights = [
  {
    icon: TrendingUp,
    label: "Forecast",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.07)",
    border: "rgba(96,165,250,0.15)",
    text: "Midnight in Bombay projected to clear ₹150 Cr in week 4, +12% over our model.",
  },
  {
    icon: AlertTriangle,
    label: "Risk",
    color: "#f87171",
    bg: "rgba(248,113,113,0.07)",
    border: "rgba(248,113,113,0.15)",
    text: "Salt & Smoke screen share is dropping. Consider OTT window in 9 days.",
  },
  {
    icon: Lightbulb,
    label: "Opportunity",
    color: "#34d399",
    bg: "rgba(52,211,153,0.07)",
    border: "rgba(52,211,153,0.15)",
    text: "Tier-2 markets up 18%. Suggest re-release for Aurora Falls.",
  },
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

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

function Dashboard() {
  const { projects, revenueData: revenue, mixData: mix } = useDb();

  return (
    <>
      <PageHeader
        eyebrow="Studio control"
        title={`${getGreeting()}, Anaya.`}
        sub="Here's how Lumen Pictures is performing today."
        actions={
          <>
            <GhostButton>
              <Download style={{ display: "inline", width: 14, height: 14, marginRight: 6 }} />
              Export
            </GhostButton>
            <PrimaryButton>+ New project</PrimaryButton>
          </>
        }
      />

      {/* KPIs */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "0.875rem",
          marginBottom: "1.25rem",
        }}
      >
        <Stat label="Active projects" value="12" delta="+2 this quarter" accent="neutral" />
        <Stat label="Total budget" value="₹482 Cr" delta="68% deployed" accent="blue" />
        <Stat label="Revenue (YTD)" value="₹914 Cr" delta="+38% YoY" accent="green" />
        <Stat label="Net ROI" value="+96%" delta="Above sector avg 41%" accent="teal" />
      </div>

      {/* Charts row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "0.875rem",
          marginBottom: "1.25rem",
        }}
      >
        <Card title="Revenue trajectory" action={<Pill tone="gold">Last 9 months</Pill>}>
          <div style={{ height: 280, marginLeft: -16 }}>
            <ResponsiveContainer>
              <AreaChart data={revenue}>
                <defs>
                  <linearGradient id="gBox" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gOtt" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#34d399" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="#34d399" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="m"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#52525b", fontSize: 11 }}
                />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#52525b", fontSize: 11 }} />
                <Tooltip {...TT} />
                <Area
                  dataKey="box"
                  name="Box office (₹Cr)"
                  stroke="#60a5fa"
                  fill="url(#gBox)"
                  strokeWidth={1.5}
                />
                <Area
                  dataKey="ott"
                  name="OTT (₹Cr)"
                  stroke="#34d399"
                  fill="url(#gOtt)"
                  strokeWidth={1.5}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Revenue mix">
          <div style={{ height: 280 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={mix}
                  dataKey="value"
                  innerRadius={60}
                  outerRadius={95}
                  paddingAngle={3}
                  stroke="none"
                >
                  {mix.map((m) => (
                    <Cell key={m.name} fill={m.fill} />
                  ))}
                </Pie>
                <Tooltip {...TT} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: 11, color: "#71717a" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Productions + AI row */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "0.875rem" }}>
        <Card
          title="Recent productions"
          action={
            <Link
              to="/app/projects"
              style={{
                fontSize: "0.75rem",
                color: "#60a5fa",
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                textDecoration: "none",
              }}
            >
              All projects <ArrowUpRight style={{ width: 12, height: 12 }} />
            </Link>
          }
        >
          <div>
            {projects.slice(0, 4).map((r, i) => (
              <div
                key={r.title}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.875rem 0",
                  borderTop: i > 0 ? "1px solid rgba(255,255,255,0.05)" : "none",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#fff" }}>
                    {r.title}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#52525b", marginTop: "0.2rem" }}>
                    {r.phase}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                  <div style={{ fontSize: "0.9375rem", color: "#a1a1aa" }}>
                    {r.revenue ? `₹${r.revenue} Cr` : "—"}
                  </div>
                  <Pill tone={r.tone}>{r.roi}</Pill>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="CineAI Insights"
          action={<Sparkles style={{ width: 15, height: 15, color: "#a5b4fc" }} />}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {aiInsights.map((ins) => (
              <div
                key={ins.label}
                style={{
                  borderRadius: "0.875rem",
                  background: ins.bg,
                  border: `1px solid ${ins.border}`,
                  padding: "0.875rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <ins.icon style={{ width: 12, height: 12, color: ins.color }} />
                  <span
                    style={{
                      fontSize: "0.625rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: ins.color,
                    }}
                  >
                    {ins.label}
                  </span>
                </div>
                <p style={{ fontSize: "0.8125rem", color: "#a1a1aa", lineHeight: 1.55 }}>
                  {ins.text}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
