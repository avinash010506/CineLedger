import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Stat, Card, PrimaryButton, GhostButton } from "@/components/app/ui";
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const Route = createFileRoute("/app/budgets")({
  component: BudgetsPage,
});

const data = [
  { dept: "Cast", planned: 84, actual: 88 },
  { dept: "Crew", planned: 62, actual: 58 },
  { dept: "Locations", planned: 41, actual: 47 },
  { dept: "VFX", planned: 96, actual: 102 },
  { dept: "Music", planned: 18, actual: 16 },
  { dept: "Marketing", planned: 55, actual: 61 },
  { dept: "Post", planned: 38, actual: 36 },
];

const TT = {
  contentStyle: {
    background: "#0d0d0d",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 10,
    fontSize: 12,
    color: "#fff",
  },
};

const S = "'Inter', ui-sans-serif, system-ui, sans-serif";

function BudgetsPage() {
  return (
    <>
      <PageHeader
        eyebrow="The ledger"
        title="Budgets"
        sub="Planned vs actual across the active slate, in ₹ crore."
        actions={
          <>
            <GhostButton>Export CSV</GhostButton>
            <PrimaryButton>Create budget</PrimaryButton>
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
        <Stat label="Total planned" value="₹394 Cr" accent="neutral" />
        <Stat label="Total actual" value="₹408 Cr" delta="+3.5% over plan" accent="red" />
        <Stat label="Committed" value="₹62 Cr" accent="blue" />
        <Stat label="Variance" value="-₹14 Cr" delta="Largest: VFX" accent="red" />
      </div>

      <Card title="Planned vs Actual — By Department">
        <div style={{ height: 320, marginLeft: -16 }}>
          <ResponsiveContainer>
            <BarChart data={data} barCategoryGap="28%">
              <XAxis
                dataKey="dept"
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
              <Bar
                dataKey="planned"
                name="Planned (₹Cr)"
                fill="rgba(96,165,250,0.6)"
                radius={[6, 6, 0, 0]}
              />
              <Bar
                dataKey="actual"
                name="Actual (₹Cr)"
                fill="rgba(251,191,36,0.6)"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div style={{ marginTop: "1.25rem" }}>
        <Card title="Department Breakdown">
          <table style={{ width: "100%", fontSize: "0.875rem", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {["Department", "Planned", "Actual", "Variance", "Utilization"].map((h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: "left",
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
              {data.map((d) => {
                const variance = d.actual - d.planned;
                const util = Math.min(100, (d.actual / d.planned) * 100);
                const overBudget = variance > 0;
                return (
                  <tr key={d.dept} style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <td
                      style={{
                        padding: "0.75rem 0.5rem 0.75rem 0",
                        fontWeight: 500,
                        color: "#fff",
                        fontFamily: S,
                      }}
                    >
                      {d.dept}
                    </td>
                    <td style={{ padding: "0 0.5rem", color: "#71717a", fontFamily: S }}>
                      ₹{d.planned} Cr
                    </td>
                    <td style={{ padding: "0 0.5rem", color: "#a1a1aa", fontFamily: S }}>
                      ₹{d.actual} Cr
                    </td>
                    <td
                      style={{
                        padding: "0 0.5rem",
                        fontWeight: 600,
                        color: overBudget ? "#f87171" : "#34d399",
                        fontFamily: S,
                      }}
                    >
                      {variance > 0 ? "+" : ""}₹{variance} Cr
                    </td>
                    <td style={{ padding: "0 0 0 0.5rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                        <div
                          style={{
                            width: 120,
                            height: 4,
                            borderRadius: 4,
                            background: "rgba(255,255,255,0.06)",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              height: "100%",
                              borderRadius: 4,
                              background:
                                util > 100
                                  ? "#f87171"
                                  : util > 90
                                    ? "#fbbf24"
                                    : "rgba(255,255,255,0.4)",
                              width: `${Math.min(100, util)}%`,
                            }}
                          />
                        </div>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            color: util > 100 ? "#f87171" : "#52525b",
                            fontFamily: S,
                            minWidth: "2.5rem",
                          }}
                        >
                          {util.toFixed(0)}%
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}
