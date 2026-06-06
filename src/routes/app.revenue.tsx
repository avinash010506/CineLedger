import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Stat, Card, Pill, GhostButton } from "@/components/app/ui";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const Route = createFileRoute("/app/revenue")({
  component: RevenuePage,
});

const days = Array.from({ length: 30 }, (_, i) => ({
  d: `D${i + 1}`,
  box: Math.round(8 + 14 * Math.exp(-i / 12) + Math.sin(i / 3) * 2),
  ott: Math.round(2 + i * 0.6),
}));

const ott = [
  { p: "Netflix", deals: 4, value: 184 },
  { p: "Prime Video", deals: 3, value: 142 },
  { p: "JioCinema", deals: 5, value: 98 },
  { p: "ZEE5", deals: 2, value: 41 },
  { p: "SonyLiv", deals: 2, value: 36 },
];

const sources = [
  ["BookMyShow", "₹248 Cr", 62],
  ["PVR ICE", "₹146 Cr", 36],
  ["INOX", "₹128 Cr", 32],
  ["Paytm", "₹74 Cr", 18],
  ["Independent", "₹32 Cr", 8],
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

function RevenuePage() {
  return (
    <>
      <PageHeader
        eyebrow="Cash in"
        title="Revenue"
        sub="Box office, OTT, satellite and ancillary — reconciled daily."
        actions={<GhostButton>Sync settlements</GhostButton>}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "0.875rem",
          marginBottom: "1.25rem",
        }}
      >
        <Stat label="Box office YTD" value="₹628 Cr" delta="+24% YoY" accent="green" />
        <Stat label="OTT YTD" value="₹246 Cr" delta="+62% YoY" accent="blue" />
        <Stat label="Satellite" value="₹84 Cr" accent="neutral" />
        <Stat label="Music & ancillary" value="₹38 Cr" accent="teal" />
      </div>

      <Card title="30-Day Collection Trajectory">
        <div style={{ height: 300, marginLeft: -16 }}>
          <ResponsiveContainer>
            <AreaChart data={days}>
              <defs>
                <linearGradient id="rBox" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34d399" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#34d399" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="rOtt" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="d"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#52525b", fontSize: 10, fontFamily: S }}
                interval={4}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#52525b", fontSize: 11, fontFamily: S }}
              />
              <Tooltip {...TT} />
              <Area
                dataKey="box"
                name="Box office (₹Cr)"
                stroke="#34d399"
                fill="url(#rBox)"
                strokeWidth={1.5}
              />
              <Area
                dataKey="ott"
                name="OTT (₹Cr)"
                stroke="#60a5fa"
                fill="url(#rOtt)"
                strokeWidth={1.5}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0.875rem",
          marginTop: "1.25rem",
        }}
      >
        <Card title="Box Office Sources">
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {sources.map(([name, val, pct]) => (
              <div
                key={name as string}
                style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}
              >
                <span
                  style={{
                    width: "7rem",
                    fontSize: "0.875rem",
                    color: "#a1a1aa",
                    fontFamily: S,
                    flexShrink: 0,
                  }}
                >
                  {name}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: 4,
                    borderRadius: 4,
                    background: "rgba(255,255,255,0.07)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      borderRadius: 4,
                      background: "rgba(52,211,153,0.6)",
                      width: `${pct as number}%`,
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: "0.8125rem",
                    color: "#71717a",
                    fontFamily: S,
                    width: "5rem",
                    textAlign: "right",
                  }}
                >
                  {val}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="OTT Partners">
          <table style={{ width: "100%", fontSize: "0.875rem", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {["Platform", "Deals", "Value"].map((h, i) => (
                  <th
                    key={h}
                    style={{
                      textAlign: i === 2 ? "right" : "left",
                      paddingBottom: "0.875rem",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      color: "#3f3f46",
                      fontFamily: S,
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ott.map((o) => (
                <tr key={o.p} style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <td
                    style={{
                      padding: "0.75rem 0.5rem 0.75rem 0",
                      fontWeight: 500,
                      color: "#fff",
                      fontFamily: S,
                    }}
                  >
                    {o.p}
                  </td>
                  <td style={{ padding: "0 0.5rem" }}>
                    <Pill tone="blue">{o.deals}</Pill>
                  </td>
                  <td
                    style={{ textAlign: "right", color: "#34d399", fontWeight: 600, fontFamily: S }}
                  >
                    ₹{o.value} Cr
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}
