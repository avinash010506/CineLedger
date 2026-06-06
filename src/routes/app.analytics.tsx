import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Stat, Card } from "@/components/app/ui";
import {
  Bar,
  BarChart,
  Cell,
  Radar,
  RadarChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import { Sparkles, TrendingUp, AlertTriangle, Lightbulb } from "lucide-react";

export const Route = createFileRoute("/app/analytics")({
  component: AnalyticsPage,
});

const genres = [
  { g: "Thriller", roi: 142 },
  { g: "Drama", roi: 78 },
  { g: "Sci-fi", roi: 188 },
  { g: "Romance", roi: 32 },
  { g: "Action", roi: 96 },
  { g: "Documentary", roi: 12 },
];

const genreColors = ["#60a5fa", "#34d399", "#a78bfa", "#f87171", "#fbbf24", "#71717a"];

const audience = [
  { axis: "Tier 1 metros", v: 88 },
  { axis: "Tier 2 cities", v: 74 },
  { axis: "Tier 3", v: 41 },
  { axis: "Overseas", v: 62 },
  { axis: "OTT 18–34", v: 92 },
  { axis: "OTT 35+", v: 56 },
];

const scatter = [
  { budget: 14, roi: 12, name: "The Last Reel" },
  { budget: 22, roi: 88, name: "Aurora Falls" },
  { budget: 31, roi: 128, name: "Violet Hour" },
  { budget: 38, roi: -34, name: "Salt & Smoke" },
  { budget: 64, roi: 22, name: "Saffron Sky" },
  { budget: 78, roi: 212, name: "Midnight in Bombay" },
  { budget: 142, roi: 64, name: "Neon Monsoon" },
];

const aiCards = [
  {
    icon: TrendingUp,
    label: "Greenlight",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.07)",
    border: "rgba(96,165,250,0.15)",
    text: "Sci-fi at ₹80–150 Cr budgets returning 1.9× slate average. Greenlight Neon Monsoon sequel.",
  },
  {
    icon: Lightbulb,
    label: "Opportunity",
    color: "#34d399",
    bg: "rgba(52,211,153,0.07)",
    border: "rgba(52,211,153,0.15)",
    text: "Aurora Falls OTT exclusivity ends in 11 days. AVOD release projected to add ₹14 Cr.",
  },
  {
    icon: AlertTriangle,
    label: "Caution",
    color: "#f87171",
    bg: "rgba(248,113,113,0.07)",
    border: "rgba(248,113,113,0.15)",
    text: "Romance underperforming in metros. Salt & Smoke regional dub may recover ₹4 Cr.",
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
const S = "'Inter', ui-sans-serif, system-ui, sans-serif";

function AnalyticsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Cine AI"
        title="Analytics & Insights"
        sub="Predictive intelligence trained on a decade of South Asian box office data."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "0.875rem",
          marginBottom: "1.25rem",
        }}
      >
        <Stat label="Predicted Q3 revenue" value="₹412 Cr" delta="±8% confidence" accent="teal" />
        <Stat label="Slate health score" value="84/100" delta="A-tier" accent="green" />
        <Stat label="Risk-weighted ROI" value="+71%" accent="blue" />
        <Stat label="Forecast accuracy" value="93.4%" delta="Trailing 12-mo" accent="neutral" />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0.875rem",
          marginBottom: "1.25rem",
        }}
      >
        {/* ROI by genre */}
        <Card title="ROI by Genre">
          <div style={{ height: 280, marginLeft: -12 }}>
            <ResponsiveContainer>
              <BarChart data={genres}>
                <XAxis
                  dataKey="g"
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
                <Bar dataKey="roi" name="ROI %" radius={[6, 6, 0, 0]}>
                  {genres.map((_, i) => (
                    <Cell key={i} fill={genreColors[i % genreColors.length]} fillOpacity={0.75} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Audience radar */}
        <Card title="Audience Resonance">
          <div style={{ height: 280 }}>
            <ResponsiveContainer>
              <RadarChart data={audience} outerRadius={95}>
                <PolarGrid stroke="rgba(255,255,255,0.07)" />
                <PolarAngleAxis
                  dataKey="axis"
                  tick={{ fill: "#71717a", fontSize: 10, fontFamily: S }}
                />
                <PolarRadiusAxis tick={false} axisLine={false} />
                <Radar
                  dataKey="v"
                  stroke="#60a5fa"
                  fill="#60a5fa"
                  fillOpacity={0.2}
                  strokeWidth={1.5}
                />
                <Tooltip {...TT} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Scatter plot */}
      <Card
        title="Budget vs ROI"
        action={
          <span style={{ fontSize: "0.75rem", color: "#52525b", fontFamily: S }}>
            Bubble size = ROI magnitude
          </span>
        }
      >
        <div style={{ height: 300, marginLeft: -12 }}>
          <ResponsiveContainer>
            <ScatterChart>
              <XAxis
                type="number"
                dataKey="budget"
                name="Budget (₹Cr)"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#52525b", fontSize: 11, fontFamily: S }}
                label={{
                  value: "Budget ₹Cr",
                  position: "insideBottom",
                  offset: -4,
                  fill: "#3f3f46",
                  fontSize: 11,
                }}
              />
              <YAxis
                type="number"
                dataKey="roi"
                name="ROI %"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#52525b", fontSize: 11, fontFamily: S }}
              />
              <ZAxis type="number" dataKey="roi" range={[60, 500]} />
              <Tooltip
                {...TT}
                cursor={{ strokeDasharray: "3 3", stroke: "rgba(255,255,255,0.1)" }}
              />
              <Scatter data={scatter} fill="rgba(96,165,250,0.7)" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* AI insights */}
      <div style={{ marginTop: "1.25rem" }}>
        <Card
          title="CineAI Movie Insights"
          action={<Sparkles style={{ width: 15, height: 15, color: "#a5b4fc" }} />}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0.875rem" }}>
            {aiCards.map((c) => (
              <div
                key={c.label}
                style={{
                  borderRadius: "0.875rem",
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                  padding: "1rem",
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
                  <c.icon style={{ width: 12, height: 12, color: c.color }} />
                  <span
                    style={{
                      fontSize: "0.625rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: c.color,
                      fontFamily: S,
                    }}
                  >
                    {c.label}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "#a1a1aa",
                    lineHeight: 1.6,
                    fontFamily: S,
                  }}
                >
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
