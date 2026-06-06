import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Stat, Card, PrimaryButton, GhostButton, Pill } from "@/components/app/ui";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const Route = createFileRoute("/app/distribution")({
  component: DistributionPage,
  head: () => ({ meta: [{ title: "Distribution — CineLedger" }] }),
});

const regions = [
  { r: "North", screens: 982, occ: 64 },
  { r: "West", screens: 1140, occ: 71 },
  { r: "South", screens: 1280, occ: 58 },
  { r: "East", screens: 540, occ: 49 },
  { r: "Overseas", screens: 312, occ: 44 },
];

const deals = [
  {
    partner: "PVR Inox",
    territory: "Pan-India theatrical",
    title: "Midnight in Bombay",
    value: "₹46 Cr MG",
    window: "6 weeks",
    status: "Locked",
    tone: "green" as const,
  },
  {
    partner: "Netflix India",
    territory: "OTT global SVOD",
    title: "Aurora Falls",
    value: "₹38 Cr",
    window: "8 weeks post-theatrical",
    status: "Signed",
    tone: "green" as const,
  },
  {
    partner: "Amazon Prime",
    territory: "OTT IN + ME",
    title: "The Last Reel",
    value: "₹22 Cr",
    window: "Direct-to-OTT",
    status: "In LOI",
    tone: "gold" as const,
  },
  {
    partner: "Star Network",
    territory: "Satellite IN",
    title: "Midnight in Bombay",
    value: "₹14 Cr",
    window: "12 months hold-back",
    status: "Negotiating",
    tone: "neutral" as const,
  },
  {
    partner: "MUBI",
    territory: "Festival + Art-house",
    title: "Salt & Smoke",
    value: "₹2.4 Cr",
    window: "Exclusive 90 days",
    status: "Closed",
    tone: "green" as const,
  },
];

function DistributionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Stakeholders"
        title="Distribution"
        sub="Theatrical bookings, OTT windows, satellite and overseas deals across active titles."
        actions={
          <>
            <GhostButton>Window planner</GhostButton>
            <PrimaryButton>New deal memo</PrimaryButton>
          </>
        }
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat label="Screens booked" value="4,254" delta="+612 wk-on-wk" />
        <Stat label="Avg occupancy" value="61%" delta="Above sector 47%" accent="teal" />
        <Stat label="OTT MG signed" value="₹148 Cr" delta="3 platforms" />
        <Stat label="Territories" value="38" delta="11 overseas" accent="teal" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-6">
        <Card title="Screen footprint by region" className="lg:col-span-2">
          <div className="h-72 -ml-4">
            <ResponsiveContainer>
              <BarChart data={regions}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.05)" />
                <XAxis dataKey="r" stroke="oklch(1 0 0 / 0.4)" fontSize={11} />
                <YAxis stroke="oklch(1 0 0 / 0.4)" fontSize={11} />
                <Tooltip
                  contentStyle={{
                    background: "oklch(0.17 0.012 60)",
                    border: "1px solid oklch(1 0 0 / 0.1)",
                    borderRadius: 12,
                  }}
                />
                <Bar
                  dataKey="screens"
                  name="Screens"
                  fill="oklch(0.82 0.14 82)"
                  radius={[8, 8, 0, 0]}
                />
                <Bar
                  dataKey="occ"
                  name="Occupancy %"
                  fill="oklch(0.6 0.13 200)"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Window strategy">
          <ul className="space-y-4 text-sm">
            <li>
              <div className="text-xs uppercase tracking-widest text-gold">Theatrical</div>
              <div className="mt-1">6–8 weeks exclusive · Pan-India</div>
            </li>
            <li>
              <div className="text-xs uppercase tracking-widest text-teal">OTT premiere</div>
              <div className="mt-1">Week 8 · SVOD global</div>
            </li>
            <li>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Satellite
              </div>
              <div className="mt-1">Month 12 · National broadcasters</div>
            </li>
            <li>
              <div className="text-xs uppercase tracking-widest text-crimson">Library</div>
              <div className="mt-1">Year 2+ · catalogue licensing</div>
            </li>
          </ul>
        </Card>
      </div>

      <Card title="Active distribution deals" className="mt-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs uppercase tracking-widest text-muted-foreground">
              <tr className="border-b border-white/5">
                <th className="text-left py-3 font-normal">Partner</th>
                <th className="text-left font-normal">Title</th>
                <th className="text-left font-normal">Territory</th>
                <th className="text-left font-normal">Value</th>
                <th className="text-left font-normal">Window</th>
                <th className="text-left font-normal">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {deals.map((d) => (
                <tr key={d.partner + d.title} className="hover:bg-white/[0.02]">
                  <td className="py-3.5 font-medium">{d.partner}</td>
                  <td>{d.title}</td>
                  <td className="text-muted-foreground">{d.territory}</td>
                  <td>{d.value}</td>
                  <td className="text-muted-foreground">{d.window}</td>
                  <td>
                    <Pill tone={d.tone}>{d.status}</Pill>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
