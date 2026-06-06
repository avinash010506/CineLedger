import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Stat, Card, PrimaryButton, GhostButton, Pill } from "@/components/app/ui";
import { Modal, useToast, inputSt, labelSt, fieldSt, submitBtnSt } from "@/components/app/modal";
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Plus, Truck, MapPin, Phone, Mail, MoreHorizontal, Star } from "lucide-react";
import { useState } from "react";
import { useDb } from "@/lib/useDb";
import { Distributor } from "@/lib/db";

const typeColors: Record<string, { color: string; tone: "blue" | "teal" | "gold" | "green" }> = {
  Theatrical: { color: "#60a5fa", tone: "blue" },
  OTT: { color: "#34d399", tone: "teal" },
  Satellite: { color: "#fbbf24", tone: "gold" },
  International: { color: "#a78bfa", tone: "green" },
};

const statusTone: Record<string, "green" | "gold" | "neutral"> = {
  active: "green",
  negotiating: "gold",
  inactive: "neutral",
};

const barData = [
  { type: "Theatrical", deals: 4, value: 182 },
  { type: "OTT", deals: 5, value: 212 },
  { type: "Satellite", deals: 3, value: 60 },
  { type: "Intl.", deals: 3, value: 74 },
];

const barColors = ["#60a5fa", "#34d399", "#fbbf24", "#a78bfa"];
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

function Stars({ n }: { n: number }) {
  return (
    <div style={{ display: "flex", gap: "0.1rem" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          style={{
            width: 11,
            height: 11,
            fill: i <= n ? "#fbbf24" : "transparent",
            color: i <= n ? "#fbbf24" : "#3f3f46",
          }}
        />
      ))}
    </div>
  );
}

export const Route = createFileRoute("/app/distributors")({
  component: DistributorsPage,
  head: () => ({ meta: [{ title: "Distributors — CineLedger" }] }),
});

function DistributorsPage() {
  const { toast } = useToast();
  const { distributors } = useDb();
  const [showAdd, setShowAdd] = useState(false);
  const [showDeal, setShowDeal] = useState(false);
  const [selected, setSelected] = useState<Distributor | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    phone: "",
    territory: "",
    type: "Theatrical",
  });

  const types = ["All", "Theatrical", "OTT", "Satellite", "International"];
  const filtered = distributors.filter((d) => filter === "All" || d.type === filter);

  const handleAdd = () => {
    if (!form.name || !form.email) {
      toast("Please fill all required fields", "error");
      return;
    }
    const nd: Distributor = {
      id: Date.now(),
      name: form.name,
      contact: form.contact,
      email: form.email,
      phone: form.phone,
      territory: form.territory,
      type: form.type as "Theatrical" | "OTT" | "Satellite" | "International",
      activeDeals: 0,
      totalValue: "₹0 Cr",
      rating: 3,
      status: "negotiating",
    };
    distributors.unshift(nd);
    import("@/lib/db").then((m) => m.dbNotify());
    setForm({ name: "", contact: "", email: "", phone: "", territory: "", type: "Theatrical" });
    setShowAdd(false);
    toast(`${nd.name} added as a distributor`);
  };

  const handleDeal = () => {
    setShowDeal(false);
    toast(`Deal memo sent to ${selected?.name}`, "success");
  };

  return (
    <>
      <PageHeader
        eyebrow="Stakeholders"
        title="Distributors"
        sub="Manage theatrical, OTT, satellite and international distribution partners."
        actions={
          <>
            <GhostButton
              onClick={() => {
                setShowDeal(true);
                setSelected(distributors[0]);
              }}
            >
              New deal memo
            </GhostButton>
            <PrimaryButton onClick={() => setShowAdd(true)}>
              <Plus style={{ display: "inline", width: 13, height: 13, marginRight: 4 }} />
              Add distributor
            </PrimaryButton>
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
        <Stat label="Total distributors" value={`${distributors.length}`} accent="neutral" />
        <Stat
          label="Active deals"
          value={`${distributors.reduce((a, d) => a + d.activeDeals, 0)}`}
          delta="across all types"
          accent="blue"
        />
        <Stat label="Total deal value" value="₹528 Cr" delta="YTD" accent="green" />
        <Stat label="Territories" value="48" delta="12 overseas" accent="teal" />
      </div>

      {/* Chart + type split */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "0.875rem",
          marginBottom: "1.25rem",
        }}
      >
        <Card title="Deal value by distribution type">
          <div style={{ height: 240, marginLeft: -12 }}>
            <ResponsiveContainer>
              <BarChart data={barData}>
                <XAxis
                  dataKey="type"
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
                <Bar dataKey="value" name="₹ Cr" radius={[6, 6, 0, 0]}>
                  {barData.map((_, i) => (
                    <Cell key={i} fill={barColors[i]} fillOpacity={0.75} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Type breakdown">
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {types
              .filter((t) => t !== "All")
              .map((t, i) => {
                const count = distributors.filter((d) => d.type === t).length;
                const pct = Math.round((count / distributors.length) * 100);
                return (
                  <div key={t}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "0.3rem",
                      }}
                    >
                      <span style={{ fontSize: "0.8125rem", color: "#a1a1aa", fontFamily: S }}>
                        {t}
                      </span>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: barColors[i],
                          fontFamily: S,
                          fontWeight: 600,
                        }}
                      >
                        {count} partners
                      </span>
                    </div>
                    <div
                      style={{
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
                          background: barColors[i],
                          width: `${pct}%`,
                          opacity: 0.7,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </Card>
      </div>

      {/* Filter + Table */}
      <Card>
        {/* Type filter */}
        <div style={{ display: "flex", gap: "0.375rem", marginBottom: "1.25rem" }}>
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              style={{
                borderRadius: 999,
                padding: "0.35rem 0.875rem",
                fontSize: "0.75rem",
                fontWeight: 500,
                border: `1px solid ${filter === t ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.07)"}`,
                background: filter === t ? "rgba(255,255,255,0.08)" : "transparent",
                color: filter === t ? "#fff" : "#52525b",
                cursor: "pointer",
                fontFamily: S,
                transition: "all 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              fontSize: "0.875rem",
              borderCollapse: "collapse",
              minWidth: 800,
            }}
          >
            <thead>
              <tr>
                {[
                  "Partner",
                  "Territory",
                  "Type",
                  "Contact",
                  "Active Deals",
                  "Total Value",
                  "Rating",
                  "Status",
                  "",
                ].map((h, i) => (
                  <th
                    key={h + i}
                    style={{
                      textAlign: "left",
                      paddingBottom: "0.875rem",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
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
              {filtered.map((d) => {
                const tc = typeColors[d.type];
                return (
                  <tr
                    key={d.id}
                    style={{
                      borderTop: "1px solid rgba(255,255,255,0.05)",
                      transition: "background 0.1s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.background =
                        "rgba(255,255,255,0.025)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.background = "transparent")
                    }
                  >
                    <td style={{ padding: "0.875rem 0.5rem 0.875rem 0" }}>
                      <div style={{ fontWeight: 600, color: "#fff", fontFamily: S }}>{d.name}</div>
                    </td>
                    <td
                      style={{
                        padding: "0 0.5rem",
                        color: "#71717a",
                        fontFamily: S,
                        fontSize: "0.8125rem",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                        <MapPin style={{ width: 11, height: 11, color: "#3f3f46" }} />
                        {d.territory}
                      </div>
                    </td>
                    <td style={{ padding: "0 0.5rem" }}>
                      <Pill tone={tc.tone}>{d.type}</Pill>
                    </td>
                    <td style={{ padding: "0 0.5rem" }}>
                      <div style={{ fontSize: "0.8125rem", color: "#a1a1aa", fontFamily: S }}>
                        {d.contact}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#3f3f46", fontFamily: S }}>
                        {d.email}
                      </div>
                    </td>
                    <td
                      style={{ padding: "0 0.5rem", fontWeight: 600, color: "#fff", fontFamily: S }}
                    >
                      {d.activeDeals}
                    </td>
                    <td
                      style={{
                        padding: "0 0.5rem",
                        color: "#34d399",
                        fontWeight: 600,
                        fontFamily: S,
                      }}
                    >
                      {d.totalValue}
                    </td>
                    <td style={{ padding: "0 0.5rem" }}>
                      <Stars n={d.rating} />
                    </td>
                    <td style={{ padding: "0 0.5rem" }}>
                      <Pill tone={statusTone[d.status]}>{d.status}</Pill>
                    </td>
                    <td style={{ padding: "0 0 0 0.5rem" }}>
                      <button
                        onClick={() => {
                          setSelected(d);
                          setShowDeal(true);
                        }}
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: "0.5rem",
                          padding: "0.35rem 0.75rem",
                          fontSize: "0.75rem",
                          color: "#a1a1aa",
                          cursor: "pointer",
                          fontFamily: S,
                          whiteSpace: "nowrap",
                        }}
                      >
                        New deal
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      {/* ── Add Distributor Modal ── */}
      <Modal open={showAdd} onClose={() => setShowAdd(false)} title="Add Distributor">
        <div style={fieldSt}>
          <div>
            <label style={labelSt}>Company name *</label>
            <input
              style={inputSt}
              placeholder="e.g. Sun Pictures"
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.25)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            <div>
              <label style={labelSt}>Contact person</label>
              <input
                style={inputSt}
                placeholder="Name"
                value={form.contact}
                onChange={(e) => setForm((p) => ({ ...p, contact: e.target.value }))}
                onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.25)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
            </div>
            <div>
              <label style={labelSt}>Type</label>
              <select
                style={{ ...inputSt, cursor: "pointer" }}
                value={form.type}
                onChange={(e) => setForm((p) => ({ ...p, type: e.target.value }))}
              >
                {["Theatrical", "OTT", "Satellite", "International"].map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label style={labelSt}>Work email *</label>
            <input
              style={inputSt}
              type="email"
              placeholder="deals@company.com"
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.25)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            <div>
              <label style={labelSt}>Phone</label>
              <input
                style={inputSt}
                placeholder="+91 98xxx xxxxx"
                value={form.phone}
                onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.25)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
            </div>
            <div>
              <label style={labelSt}>Territory</label>
              <input
                style={inputSt}
                placeholder="e.g. Pan-India"
                value={form.territory}
                onChange={(e) => setForm((p) => ({ ...p, territory: e.target.value }))}
                onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.25)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
            </div>
          </div>
          <button style={submitBtnSt} onClick={handleAdd}>
            Add distributor →
          </button>
        </div>
      </Modal>

      {/* ── New Deal Modal ── */}
      <Modal
        open={showDeal}
        onClose={() => setShowDeal(false)}
        title={`New deal — ${selected?.name ?? ""}`}
      >
        <div style={fieldSt}>
          <div>
            <label style={labelSt}>Title / project</label>
            <select style={{ ...inputSt, cursor: "pointer" }}>
              {["Midnight in Bombay", "Aurora Falls", "Neon Monsoon", "The Last Reel"].map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            <div>
              <label style={labelSt}>Deal type</label>
              <select style={{ ...inputSt, cursor: "pointer" }}>
                <option>Minimum Guarantee</option>
                <option>Revenue Share</option>
                <option>Flat fee</option>
                <option>Letter of Intent</option>
              </select>
            </div>
            <div>
              <label style={labelSt}>Value (₹ Cr)</label>
              <input
                style={inputSt}
                type="number"
                placeholder="e.g. 24"
                onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.25)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
            </div>
          </div>
          <div>
            <label style={labelSt}>Window / exclusivity</label>
            <input
              style={inputSt}
              placeholder="e.g. 8 weeks post-theatrical"
              onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.25)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
            />
          </div>
          <div>
            <label style={labelSt}>Notes</label>
            <textarea
              style={{ ...inputSt, resize: "vertical", minHeight: "4rem" }}
              placeholder="Key terms, conditions, payment schedule…"
            />
          </div>
          <button style={submitBtnSt} onClick={handleDeal}>
            Send deal memo →
          </button>
        </div>
      </Modal>
    </>
  );
}
