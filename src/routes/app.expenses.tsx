import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Card, Pill, GhostButton, PrimaryButton, Stat } from "@/components/app/ui";
import { Search, Plus, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/app/expenses")({
  component: ExpensesPage,
});

const expenses = [
  {
    d: "2026-05-19",
    project: "Midnight in Bombay",
    cat: "VFX",
    vendor: "Phantom Studios",
    amt: 32000000,
    status: "Paid",
  },
  {
    d: "2026-05-18",
    project: "Neon Monsoon",
    cat: "Cast",
    vendor: "Arjun Vora Talent",
    amt: 65000000,
    status: "Pending",
  },
  {
    d: "2026-05-18",
    project: "Aurora Falls",
    cat: "Marketing",
    vendor: "Saffron Media",
    amt: 14000000,
    status: "Paid",
  },
  {
    d: "2026-05-17",
    project: "Saffron Sky",
    cat: "Locations",
    vendor: "Jaisalmer Forts",
    amt: 4200000,
    status: "Approved",
  },
  {
    d: "2026-05-17",
    project: "The Last Reel",
    cat: "Crew",
    vendor: "Unit Payroll May",
    amt: 8800000,
    status: "Paid",
  },
  {
    d: "2026-05-16",
    project: "Salt & Smoke",
    cat: "Music",
    vendor: "T-Series License",
    amt: 2500000,
    status: "Disputed",
  },
  {
    d: "2026-05-15",
    project: "Midnight in Bombay",
    cat: "Post",
    vendor: "Prime Focus",
    amt: 7600000,
    status: "Paid",
  },
];

const statusTone: Record<string, "green" | "gold" | "crimson" | "teal" | "blue" | "neutral"> = {
  Paid: "green",
  Pending: "gold",
  Approved: "blue",
  Disputed: "crimson",
};

const inr = (n: number) => "₹" + (n / 10000000).toFixed(2) + " Cr";

const total = expenses.reduce((a, e) => a + e.amt, 0);
const paid = expenses.filter((e) => e.status === "Paid").reduce((a, e) => a + e.amt, 0);
const pend = expenses.filter((e) => e.status === "Pending").reduce((a, e) => a + e.amt, 0);

const S = "'Inter', ui-sans-serif, system-ui, sans-serif";

function ExpensesPage() {
  const [q, setQ] = useState("");
  const filtered = expenses.filter((e) =>
    [e.project, e.cat, e.vendor, e.status].some((f) => f.toLowerCase().includes(q.toLowerCase())),
  );

  return (
    <>
      <PageHeader
        eyebrow="Cash out"
        title="Expenses"
        sub="Every rupee leaving the studio, with full audit trail."
        actions={
          <>
            <GhostButton>Export</GhostButton>
            <PrimaryButton>
              <Plus style={{ display: "inline", width: 13, height: 13, marginRight: 4 }} />
              Log expense
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
        <Stat label="Total expenses" value={inr(total)} accent="neutral" />
        <Stat label="Paid" value={inr(paid)} delta="cleared" accent="green" />
        <Stat label="Pending" value={inr(pend)} delta="awaiting" accent="gold" />
        <Stat label="Transactions" value={`${expenses.length}`} accent="neutral" />
      </div>

      <Card>
        {/* Search */}
        <div style={{ position: "relative", maxWidth: "22rem", marginBottom: "1.25rem" }}>
          <Search
            style={{
              position: "absolute",
              left: "0.75rem",
              top: "50%",
              transform: "translateY(-50%)",
              width: 13,
              height: 13,
              color: "#52525b",
            }}
          />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search expenses, vendors, categories…"
            style={{
              width: "100%",
              borderRadius: 999,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              paddingLeft: "2.25rem",
              paddingRight: "1rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              fontSize: "0.8125rem",
              color: "#fff",
              outline: "none",
              fontFamily: S,
            }}
          />
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              fontSize: "0.875rem",
              borderCollapse: "collapse",
              minWidth: 700,
            }}
          >
            <thead>
              <tr>
                {["Date", "Project", "Category", "Vendor", "Amount", "Status"].map((h, i) => (
                  <th
                    key={h}
                    style={{
                      textAlign: i >= 4 ? "right" : "left",
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
              {filtered.map((e, i) => (
                <tr
                  key={i}
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                    transition: "background 0.1s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(ev) =>
                    ((ev.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.025)")
                  }
                  onMouseLeave={(ev) =>
                    ((ev.currentTarget as HTMLElement).style.background = "transparent")
                  }
                >
                  <td
                    style={{
                      padding: "0.75rem 0.5rem 0.75rem 0",
                      color: "#52525b",
                      fontFamily: S,
                      fontSize: "0.8125rem",
                    }}
                  >
                    {e.d}
                  </td>
                  <td
                    style={{ padding: "0 0.5rem", fontWeight: 600, color: "#fff", fontFamily: S }}
                  >
                    {e.project}
                  </td>
                  <td style={{ padding: "0 0.5rem", color: "#71717a", fontFamily: S }}>{e.cat}</td>
                  <td style={{ padding: "0 0.5rem", color: "#71717a", fontFamily: S }}>
                    {e.vendor}
                  </td>
                  <td
                    style={{
                      textAlign: "right",
                      padding: "0 0.5rem",
                      fontWeight: 600,
                      color: "#a1a1aa",
                      fontFamily: S,
                    }}
                  >
                    {inr(e.amt)}
                  </td>
                  <td style={{ textAlign: "right", padding: "0 0 0 0.5rem" }}>
                    <Pill tone={statusTone[e.status] ?? "neutral"}>{e.status}</Pill>
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
