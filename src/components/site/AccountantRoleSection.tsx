import { motion } from "framer-motion";
import {
  Receipt,
  ScanLine,
  Calculator,
  Landmark,
  Camera,
  FileText,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

const F = "'Inter', ui-sans-serif, -apple-system, sans-serif";

export function AccountantRoleSection() {
  return (
    <section
      style={{
        background: "#000",
        padding: "8rem 1.5rem",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "82rem", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* ── Left column: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 1rem",
                borderRadius: 999,
                background: "rgba(167,139,250,0.1)",
                border: "1px solid rgba(167,139,250,0.25)",
                marginBottom: "1.5rem",
              }}
            >
              <Calculator style={{ width: 13, height: 13, color: "#a78bfa" }} />
              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.2em",
                  color: "#a78bfa",
                  fontFamily: F,
                }}
              >
                The Financial Gatekeeper
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(2.25rem,4vw,3.5rem)",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
                marginBottom: "1.25rem",
                fontFamily: F,
              }}
            >
              Built for
              <br />
              <span style={{ color: "#3f3f46" }}>Production Accountants.</span>
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "#71717a",
                fontWeight: 300,
                lineHeight: 1.75,
                maxWidth: "32rem",
                marginBottom: "2.5rem",
                fontFamily: F,
              }}
            >
              Process payroll effortlessly, capture daily receipts with AI, and maximize film tax
              credits without the endless spreadsheets.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                {
                  title: "Digital Receipt & Invoice Scanner",
                  desc: "Crew snap photos of receipts via mobile. OCR instantly logs vendor, amount, and tax category.",
                  icon: ScanLine,
                },
                {
                  title: "Automated Film Tax Incentive Engine",
                  desc: "Automatically flags and categorizes expenses qualifying for local state or country tax rebates.",
                  icon: Landmark,
                },
                {
                  title: "Union Payroll Integration",
                  desc: "Built-in calculators for SAG-AFTRA and local guilds. Auto-flags overtime and meal penalties.",
                  icon: FileText,
                },
              ].map((f, i) => (
                <div key={f.title} style={{ display: "flex", gap: "1rem" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "0.75rem",
                      background: "rgba(167,139,250,0.08)",
                      border: "1px solid rgba(167,139,250,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <f.icon style={{ width: 20, height: 20, color: "#a78bfa" }} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: "0.25rem",
                        fontFamily: F,
                      }}
                    >
                      {f.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "#a1a1aa",
                        lineHeight: 1.6,
                        fontFamily: F,
                      }}
                    >
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right column: UI Visuals ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              position: "relative",
            }}
          >
            {/* Receipt Scanner UI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                borderRadius: "1.5rem",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "1.75rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <span
                  style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff", fontFamily: F }}
                >
                  Recent Receipts (OCR)
                </span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.75rem",
                    color: "#a78bfa",
                    background: "rgba(167,139,250,0.1)",
                    padding: "0.3rem 0.75rem",
                    borderRadius: 999,
                    border: "1px solid rgba(167,139,250,0.2)",
                    fontFamily: F,
                  }}
                >
                  <Camera style={{ width: 12, height: 12 }} /> Upload
                </div>
              </div>
              {[
                {
                  vendor: "Catering Plus",
                  amount: "₹45,200",
                  status: "Logged",
                  tax: "GST Input",
                  date: "Today, 1:15 PM",
                },
                {
                  vendor: "Prop House Mumbai",
                  amount: "₹1,12,000",
                  status: "Logged",
                  tax: "Rebate Eligible",
                  date: "Yesterday",
                },
                {
                  vendor: "Lumber Depot",
                  amount: "₹18,500",
                  status: "Pending Review",
                  tax: "Uncategorized",
                  date: "Yesterday",
                },
              ].map((r) => (
                <div
                  key={r.vendor}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.875rem",
                    padding: "0.75rem",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: "0.75rem",
                    marginBottom: "0.5rem",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "0.5rem",
                      background: "rgba(255,255,255,0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Receipt style={{ width: 16, height: 16, color: "#a1a1aa" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "#fff",
                        fontFamily: F,
                      }}
                    >
                      {r.vendor}
                    </div>
                    <div style={{ fontSize: "0.6875rem", color: "#71717a", fontFamily: F }}>
                      {r.date}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 700,
                        color: "#fff",
                        fontFamily: F,
                      }}
                    >
                      {r.amount}
                    </div>
                    <div
                      style={{
                        fontSize: "0.625rem",
                        color: r.tax.includes("Eligible") ? "#34d399" : "#a78bfa",
                        fontFamily: F,
                      }}
                    >
                      {r.tax}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
              {/* Tax Engine */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  borderRadius: "1.5rem",
                  background: "rgba(167,139,250,0.04)",
                  border: "1px solid rgba(167,139,250,0.15)",
                  padding: "1.5rem",
                }}
              >
                <Landmark
                  style={{ width: 24, height: 24, color: "#a78bfa", marginBottom: "1rem" }}
                />
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "#fff",
                    fontFamily: F,
                    marginBottom: "0.25rem",
                  }}
                >
                  ₹14.2 Cr
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#a1a1aa",
                    fontFamily: F,
                    marginBottom: "1rem",
                  }}
                >
                  Maharashtra Tax Rebate Projected
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    color: "#34d399",
                    fontSize: "0.6875rem",
                    fontFamily: F,
                  }}
                >
                  <CheckCircle2 style={{ width: 12, height: 12 }} /> 82% expenses qualify
                </div>
              </motion.div>

              {/* Payroll */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  borderRadius: "1.5rem",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.15em",
                    color: "#71717a",
                    marginBottom: "1rem",
                    fontFamily: F,
                  }}
                >
                  Payroll Alerts
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <div
                    style={{ width: 8, height: 8, borderRadius: "50%", background: "#f87171" }}
                  />
                  <span style={{ fontSize: "0.75rem", color: "#fff", fontFamily: F }}>
                    3 Meal Penalties
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <div
                    style={{ width: 8, height: 8, borderRadius: "50%", background: "#fbbf24" }}
                  />
                  <span style={{ fontSize: "0.75rem", color: "#fff", fontFamily: F }}>
                    SAG-AFTRA Overtime (4)
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div
                    style={{ width: 8, height: 8, borderRadius: "50%", background: "#34d399" }}
                  />
                  <span style={{ fontSize: "0.75rem", color: "#fff", fontFamily: F }}>
                    All timesheets synced
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
