import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Film,
  Wallet,
  TrendingUp,
  BarChart3,
  Users,
  Calendar,
  FolderOpen,
  UserCheck,
  Bell,
  Search,
  Globe,
  Settings,
  Brain,
  FileText,
  Shield,
  Clapperboard,
  Star,
  Camera,
  Scale,
} from "lucide-react";

const F = "'Inter', ui-sans-serif, -apple-system, sans-serif";

const modules = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    desc: "Live P&L, ROI, revenue trends, and budget usage in one command center",
    accent: "#60a5fa",
    tag: "Core",
  },
  {
    icon: Film,
    title: "Movie Projects",
    desc: "Manage productions from pre-prod to release with full timeline tracking",
    accent: "#a78bfa",
    tag: "Core",
  },
  {
    icon: Wallet,
    title: "Budget Planning",
    desc: "Department-wise allocation, forecasting, and multi-level approval workflows",
    accent: "#34d399",
    tag: "Core",
  },
  {
    icon: TrendingUp,
    title: "Expense Management",
    desc: "Track bills, vendor payments, GST, and auto-generate daily/weekly summaries",
    accent: "#fb923c",
    tag: "Core",
  },
  {
    icon: BarChart3,
    title: "Box Office Revenue",
    desc: "Domestic, overseas, OTT, satellite, and streaming revenue tracking in real-time",
    accent: "#f472b6",
    tag: "Core",
  },
  {
    icon: Brain,
    title: "Profit & ROI",
    desc: "Budget vs revenue comparison, ROI calculation, and investor return distribution",
    accent: "#fbbf24",
    tag: "Core",
  },
  {
    icon: Users,
    title: "Cast & Crew",
    desc: "Actor profiles, contracts, salary tracking, and shooting availability management",
    accent: "#38bdf8",
    tag: "People",
  },
  {
    icon: Calendar,
    title: "Shooting Schedule",
    desc: "Scene scheduling, daily shoot reports, location management, conflict detection",
    accent: "#a3e635",
    tag: "People",
  },
  {
    icon: Star,
    title: "Talent & Casting",
    desc: "Manage auditions, talent profiles, casting directors, and character assignments",
    accent: "#f87171",
    tag: "People",
  },
  {
    icon: Camera,
    title: "Equipment & Rentals",
    desc: "Track cameras, lenses, grip trucks, and manage vendor rental agreements seamlessly",
    accent: "#fb923c",
    tag: "Production",
  },
  {
    icon: FolderOpen,
    title: "Document Vault",
    desc: "Scripts, contracts, legal docs, and production media files — securely stored",
    accent: "#c084fc",
    tag: "Docs",
  },
  {
    icon: Scale,
    title: "Legal & IP",
    desc: "Tracking distribution rights, copyright filings, NDA agreements, and music licensing",
    accent: "#f43f5e",
    tag: "Docs",
  },
  {
    icon: UserCheck,
    title: "Investor Management",
    desc: "ROI distribution, shareholding reports, funding history, and investor notifications",
    accent: "#2dd4bf",
    tag: "Finance",
  },
  {
    icon: FileText,
    title: "Reports & Export",
    desc: "Budget, expense, revenue, and tax reports exported as PDF, Excel, or CSV",
    accent: "#fb7185",
    tag: "Finance",
  },
  {
    icon: Bell,
    title: "Notifications",
    desc: "Budget limit alerts, payment reminders, shoot alerts, and release notifications",
    accent: "#facc15",
    tag: "System",
  },
  {
    icon: Search,
    title: "Search & Filter",
    desc: "Search by movie, director, cast, status, revenue, or profitability instantly",
    accent: "#94a3b8",
    tag: "System",
  },
  {
    icon: Globe,
    title: "Multi-Language",
    desc: "English, Hindi, Telugu, Tamil, Malayalam, and Kannada language support",
    accent: "#86efac",
    tag: "System",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    desc: "Admin, Producer, Accountant, Project Manager, and Investor role permissions",
    accent: "#f9a8d4",
    tag: "Security",
  },
  {
    icon: Settings,
    title: "Studio Settings",
    desc: "Company, currency, tax configuration, API integrations, and security settings",
    accent: "#cbd5e1",
    tag: "System",
  },
  {
    icon: Clapperboard,
    title: "AI Analytics",
    desc: "Box office prediction, budget risk detection, and audience sentiment analysis",
    accent: "#a5b4fc",
    tag: "AI ✦",
  },
];

const CSS = `
  @keyframes moduleHover {
    from { transform: scale(1); }
    to   { transform: scale(1.03); }
  }
`;

export function FeaturesGrid() {
  return (
    <section
      id="features"
      style={{
        background: "#000",
        padding: "8rem 2.5rem",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{CSS}</style>

      {/* 2D Grid Background */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.2, pointerEvents: "none" }}>
        <svg width="100%" height="100%">
          <pattern id="features-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#features-grid)" />
        </svg>
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100%",
          background:
            "radial-gradient(ellipse at 50% -20%, rgba(255,255,255,0.05), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "82rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", maxWidth: "42rem", margin: "0 auto 5rem" }}
        >
          <span
            style={{
              fontSize: "0.6875rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              color: "#52525b",
              display: "block",
              marginBottom: "1rem",
              fontFamily: F,
            }}
          >
            20 Powerful Modules
          </span>
          <h2
            style={{
              fontSize: "clamp(2.25rem,4.5vw,3.75rem)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.05em",
              lineHeight: 0.92,
              marginBottom: "1.25rem",
              fontFamily: F,
            }}
          >
            Everything your studio
            <br />
            <span style={{ color: "#3f3f46" }}>needs to operate.</span>
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "#71717a",
              fontWeight: 300,
              lineHeight: 1.75,
              fontFamily: F,
            }}
          >
            From budgets to AI analytics and investor reporting — CineLedger covers every aspect of
            film production management.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1rem",
          }}
        >
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 8) * 0.05, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: "1.5rem",
                borderRadius: "1.25rem",
                background: "rgba(10,10,10,0.6)",
                border: "1px solid rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                cursor: "default",
                transition: "background 0.25s, border-color 0.25s, transform 0.25s",
              }}
              whileHover={{ scale: 1.025, backgroundColor: "rgba(255,255,255,0.06)" }}
            >
              {/* Icon + Tag row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "0.875rem",
                    background: `${mod.accent}18`,
                    border: `1px solid ${mod.accent}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <mod.icon style={{ width: 18, height: 18, color: mod.accent }} />
                </div>
                <span
                  style={{
                    fontSize: "0.5875rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "3px 8px",
                    borderRadius: 999,
                    background: `${mod.accent}18`,
                    color: mod.accent,
                    fontFamily: F,
                  }}
                >
                  {mod.tag}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "0.5rem",
                  letterSpacing: "-0.02em",
                  fontFamily: F,
                }}
              >
                {mod.title}
              </h3>
              <p
                style={{ fontSize: "0.8125rem", color: "#52525b", lineHeight: 1.65, fontFamily: F }}
              >
                {mod.desc}
              </p>

              {/* Bottom accent line */}
              <div
                style={{
                  marginTop: "1.25rem",
                  height: 1,
                  background: `linear-gradient(90deg, ${mod.accent}40, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
