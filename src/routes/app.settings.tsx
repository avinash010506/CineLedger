import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Card, PrimaryButton, Pill } from "@/components/app/ui";
import { useState } from "react";
import { Check, Zap } from "lucide-react";

export const Route = createFileRoute("/app/settings")({
  component: SettingsPage,
});

const S = "'Inter', ui-sans-serif, system-ui, sans-serif";

const inputStyle = {
  width: "100%",
  borderRadius: "0.75rem",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  padding: "0.75rem 1rem",
  fontSize: "0.9rem",
  color: "#fff",
  outline: "none",
  fontFamily: S,
  transition: "border-color 0.15s",
};

function getNextInvoiceDate() {
  const now = new Date();
  const next = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  return next.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

const integrations = [
  "BookMyShow",
  "PVR ICE",
  "INOX",
  "Paytm Insider",
  "Netflix Partner",
  "Razorpay",
  "Tally Prime",
  "DocuSign",
  "Slack",
];

const notifItems = [
  "Budget overrun > 5%",
  "New OTT settlement",
  "CineAI risk flags",
  "Team mentions",
  "Weekly slate digest",
];

function SettingsPage() {
  const [tab, setTab] = useState("studio");
  const [notifs, setNotifs] = useState(new Set(notifItems));
  const tabs = ["studio", "billing", "security", "integrations", "notifications"];

  return (
    <>
      <PageHeader
        eyebrow="The control room"
        title="Settings"
        sub="Tune your CineLedger studio workspace."
      />

      {/* Tab bar */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginBottom: "1.5rem" }}>
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              borderRadius: 999,
              padding: "0.4rem 1rem",
              fontSize: "0.75rem",
              fontWeight: 500,
              textTransform: "capitalize",
              letterSpacing: "0.02em",
              border: `1px solid ${tab === t ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.07)"}`,
              background: tab === t ? "rgba(255,255,255,0.08)" : "transparent",
              color: tab === t ? "#fff" : "#52525b",
              cursor: "pointer",
              fontFamily: S,
              transition: "all 0.15s",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Studio tab */}
      {tab === "studio" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <Card title="Studio Identity">
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                ["Studio name", "Lumen Pictures"],
                ["Tagline", "Where stories light up."],
                ["GST Number", "29AADCL1234F1Z5"],
              ].map(([label, val]) => (
                <label key={label}>
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "#52525b",
                      display: "block",
                      marginBottom: "0.5rem",
                      fontFamily: S,
                    }}
                  >
                    {label}
                  </span>
                  <input
                    defaultValue={val}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.25)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </label>
              ))}
              <label>
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#52525b",
                    display: "block",
                    marginBottom: "0.5rem",
                    fontFamily: S,
                  }}
                >
                  Base currency
                </span>
                <select style={{ ...inputStyle, cursor: "pointer" }}>
                  <option>INR — Indian Rupee</option>
                  <option>USD — US Dollar</option>
                  <option>EUR — Euro</option>
                </select>
              </label>
              <div>
                <PrimaryButton>Save changes</PrimaryButton>
              </div>
            </div>
          </Card>

          <Card title="Workspace Usage">
            <div style={{ display: "flex", flexDirection: "column" }}>
              {[
                [
                  "Plan",
                  <span
                    key="p"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      color: "#fff",
                    }}
                  >
                    <Zap style={{ width: 13, height: 13, color: "#fbbf24" }} />
                    Studio · ₹1.2L/mo
                  </span>,
                ],
                ["Members", "6 / 25"],
                ["Storage", "184 GB / 1 TB"],
                ["API calls (mo)", "42,182"],
                ["Data region", "Mumbai (ap-south-1)"],
              ].map(([k, v], i, arr) => (
                <div
                  key={k as string}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.875rem 0",
                    borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  }}
                >
                  <span style={{ fontSize: "0.875rem", color: "#71717a", fontFamily: S }}>{k}</span>
                  <span
                    style={{ fontSize: "0.875rem", color: "#fff", fontWeight: 500, fontFamily: S }}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* Billing tab */}
      {tab === "billing" && (
        <Card title="Billing">
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div
              style={{
                borderRadius: "0.875rem",
                background: "rgba(251,191,36,0.07)",
                border: "1px solid rgba(251,191,36,0.15)",
                padding: "1.25rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{ fontWeight: 600, color: "#fff", marginBottom: "0.25rem", fontFamily: S }}
                >
                  Studio Plan
                </div>
                <div style={{ fontSize: "0.8125rem", color: "#71717a", fontFamily: S }}>
                  Next invoice: ₹1,20,000 + GST on {getNextInvoiceDate()}
                </div>
              </div>
              <Pill tone="gold">Active</Pill>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0.875rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <span style={{ color: "#71717a", fontFamily: S }}>Payment method</span>
              <span style={{ color: "#fff", fontFamily: S }}>Visa •••• 4218</span>
            </div>
            <div
              style={{ display: "flex", justifyContent: "space-between", padding: "0.875rem 0" }}
            >
              <span style={{ color: "#71717a", fontFamily: S }}>Billing cycle</span>
              <span style={{ color: "#fff", fontFamily: S }}>Monthly · auto-renews</span>
            </div>
            <div>
              <PrimaryButton>Manage billing</PrimaryButton>
            </div>
          </div>
        </Card>
      )}

      {/* Security tab */}
      {tab === "security" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <Card title="Authentication">
            <div style={{ display: "flex", flexDirection: "column" }}>
              {[
                ["Two-Factor Auth", "Enabled"],
                ["Session timeout", "30 minutes"],
                ["Active sessions", "3 devices"],
              ].map(([k, v], i, arr) => (
                <div
                  key={k}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.875rem 0",
                    borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  }}
                >
                  <span style={{ color: "#71717a", fontFamily: S }}>{k}</span>
                  <span style={{ color: "#34d399", fontWeight: 600, fontFamily: S }}>{v}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card title="Compliance">
            <p style={{ fontSize: "0.875rem", color: "#71717a", lineHeight: 1.7, fontFamily: S }}>
              SOC 2 Type II certified · Audit logs retained 7 years · DPDP compliant · ISO 27001
              aligned. Report available on request.
            </p>
          </Card>
        </div>
      )}

      {/* Integrations tab */}
      {tab === "integrations" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0.875rem" }}>
          {integrations.map((name) => (
            <Card key={name}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "0.5rem",
                }}
              >
                <span
                  style={{ fontWeight: 600, color: "#fff", fontSize: "0.9375rem", fontFamily: S }}
                >
                  {name}
                </span>
                <Pill tone="green">Connected</Pill>
              </div>
              <p style={{ fontSize: "0.75rem", color: "#52525b", fontFamily: S }}>
                Last synced 4 min ago
              </p>
            </Card>
          ))}
        </div>
      )}

      {/* Notifications tab */}
      {tab === "notifications" && (
        <Card title="Notification Preferences">
          <div style={{ display: "flex", flexDirection: "column" }}>
            {notifItems.map((n, i) => (
              <label
                key={n}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem 0",
                  borderBottom:
                    i < notifItems.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  cursor: "pointer",
                }}
              >
                <span style={{ fontSize: "0.9375rem", color: "#a1a1aa", fontFamily: S }}>{n}</span>
                <div
                  onClick={() =>
                    setNotifs((prev) => {
                      const n2 = new Set(prev);
                      if (n2.has(n)) n2.delete(n);
                      else n2.add(n);
                      return n2;
                    })
                  }
                  style={{
                    width: 44,
                    height: 24,
                    borderRadius: 999,
                    cursor: "pointer",
                    background: notifs.has(n) ? "#fff" : "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    position: "relative",
                    transition: "background 0.2s",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 3,
                      borderRadius: "50%",
                      width: 16,
                      height: 16,
                      background: notifs.has(n) ? "#000" : "rgba(255,255,255,0.3)",
                      left: notifs.has(n) ? 24 : 3,
                      transition: "left 0.2s, background 0.2s",
                    }}
                  />
                </div>
              </label>
            ))}
          </div>
        </Card>
      )}
    </>
  );
}
