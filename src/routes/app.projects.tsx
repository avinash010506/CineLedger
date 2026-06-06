import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Stat, Card, PrimaryButton, GhostButton, Pill } from "@/components/app/ui";
import { Modal, useToast, inputSt, labelSt, fieldSt, submitBtnSt } from "@/components/app/modal";
import { Search, Filter, Plus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/app/projects")({
  component: ProjectsPage,
});

import { useDb } from "@/lib/useDb";

const phases = [
  "All",
  "Pre-production",
  "Production",
  "Post-production",
  "Theatrical",
  "OTT Window",
  "Distribution",
];

function ProjectsPage() {
  const { projects: allProjects } = useDb();
  const { toast } = useToast();
  const [q, setQ] = useState("");
  const [phase, setPhase] = useState("All");
  const [showNew, setShowNew] = useState(false);
  const [form, setForm] = useState({
    title: "",
    director: "",
    genre: "Thriller",
    phase: "Pre-production",
    budget: "",
  });

  const filtered = allProjects.filter(
    (p) =>
      (phase === "All" || p.phase === phase) &&
      (q === "" ||
        p.title.toLowerCase().includes(q.toLowerCase()) ||
        p.director.toLowerCase().includes(q.toLowerCase())),
  );

  const handleNew = () => {
    if (!form.title || !form.director) {
      toast("Title and director are required", "error");
      return;
    }
    const np = {
      id: form.title.toLowerCase().replace(/\s+/g, "-"),
      title: form.title,
      director: form.director,
      genre: form.genre,
      phase: form.phase,
      budget: Number(form.budget) || 0,
      spent: 0,
      revenue: 0,
      roi: "0%",
      theatrical: 0,
      ottAdvance: 0,
      tone: "neutral" as const,
      releaseYear: new Date().getFullYear(),
      runtime: 120,
    };
    allProjects.unshift(np); // Mutation for mock prototyping
    import("@/lib/db").then((m) => m.dbNotify());
    setForm({ title: "", director: "", genre: "Thriller", phase: "Pre-production", budget: "" });
    setShowNew(false);
    toast(`"${np.title}" added to the slate`);
  };

  return (
    <>
      <PageHeader
        eyebrow="The slate"
        title="Projects"
        sub="Every film in motion across the studio."
        actions={
          <>
            <GhostButton onClick={() => toast("Filter panel coming soon", "info")}>
              <Filter style={{ display: "inline", width: 13, height: 13, marginRight: 5 }} />
              Filters
            </GhostButton>
            <PrimaryButton onClick={() => setShowNew(true)}>
              <Plus style={{ display: "inline", width: 13, height: 13, marginRight: 4 }} />
              New project
            </PrimaryButton>
          </>
        }
      />

      {/* Search + Phase filter */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "1.5rem",
        }}
      >
        <div style={{ position: "relative", flex: 1, minWidth: "16rem" }}>
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
            placeholder="Search title or director…"
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
              fontFamily: "inherit",
            }}
          />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
          {phases.map((p) => (
            <button
              key={p}
              onClick={() => setPhase(p)}
              style={{
                borderRadius: 999,
                padding: "0.375rem 0.875rem",
                fontSize: "0.75rem",
                fontWeight: 500,
                border: `1px solid ${phase === p ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.07)"}`,
                background: phase === p ? "rgba(255,255,255,0.08)" : "transparent",
                color: phase === p ? "#fff" : "#52525b",
                cursor: "pointer",
                transition: "all 0.15s",
                fontFamily: "inherit",
              }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <Card>
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              fontSize: "0.875rem",
              borderCollapse: "collapse",
              minWidth: 760,
            }}
          >
            <thead>
              <tr>
                {["Title", "Phase", "Budget", "Spent", "Revenue", "ROI", "Status"].map((h, i) => (
                  <th
                    key={h}
                    style={{
                      textAlign: i === 6 ? "right" : "left",
                      padding: "0 0 0.875rem",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      color: "#3f3f46",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => {
                const roi = p.revenue > 0 ? ((p.revenue - p.budget) / p.budget) * 100 : null;
                const spentPct = Math.round((p.spent / p.budget) * 100);
                return (
                  <tr
                    key={p.id}
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
                      <Link
                        to={`/app/projects/${p.id}` as "/app/projects/$id"}
                        params={{ id: p.id }}
                        style={{
                          fontWeight: 600,
                          color: "#fff",
                          textDecoration: "none",
                          display: "block",
                        }}
                        onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#60a5fa")}
                        onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#fff")}
                      >
                        {p.title}
                      </Link>
                      <div style={{ fontSize: "0.75rem", color: "#52525b", marginTop: "0.125rem" }}>
                        {p.director} · {p.genre}
                      </div>
                    </td>
                    <td style={{ color: "#71717a", padding: "0 0.5rem" }}>{p.phase}</td>
                    <td style={{ padding: "0 0.5rem" }}>₹{p.budget} Cr</td>
                    <td style={{ padding: "0 0.5rem" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                        <span>₹{p.spent} Cr</span>
                        <div
                          style={{
                            width: 80,
                            height: 3,
                            borderRadius: 3,
                            background: "rgba(255,255,255,0.07)",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              height: "100%",
                              borderRadius: 3,
                              background: spentPct > 95 ? "#f87171" : "rgba(255,255,255,0.4)",
                              width: `${Math.min(100, spentPct)}%`,
                            }}
                          />
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: "0 0.5rem" }}>{p.revenue ? `₹${p.revenue} Cr` : "—"}</td>
                    <td
                      style={{
                        padding: "0 0.5rem",
                        color: roi == null ? "#52525b" : roi >= 0 ? "#34d399" : "#f87171",
                        fontWeight: roi != null ? 600 : 400,
                      }}
                    >
                      {roi == null ? "—" : `${roi > 0 ? "+" : ""}${roi.toFixed(0)}%`}
                    </td>
                    <td style={{ textAlign: "right", padding: "0 0 0 0.5rem" }}>
                      <Pill tone={p.tone}>{p.phase}</Pill>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      <Modal open={showNew} onClose={() => setShowNew(false)} title="New project">
        <div style={fieldSt}>
          <div>
            <label style={labelSt}>Film title *</label>
            <input
              style={inputSt}
              placeholder="e.g. The Golden Hour"
              value={form.title}
              onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
              onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.25)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            <div>
              <label style={labelSt}>Director *</label>
              <input
                style={inputSt}
                placeholder="Director name"
                value={form.director}
                onChange={(e) => setForm((p) => ({ ...p, director: e.target.value }))}
                onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.25)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
            </div>
            <div>
              <label style={labelSt}>Genre</label>
              <select
                style={{ ...inputSt, cursor: "pointer" }}
                value={form.genre}
                onChange={(e) => setForm((p) => ({ ...p, genre: e.target.value }))}
              >
                {[
                  "Thriller",
                  "Drama",
                  "Action",
                  "Romance",
                  "Sci-fi",
                  "Comedy",
                  "Documentary",
                  "Period",
                  "Mystery",
                ].map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            <div>
              <label style={labelSt}>Phase</label>
              <select
                style={{ ...inputSt, cursor: "pointer" }}
                value={form.phase}
                onChange={(e) => setForm((p) => ({ ...p, phase: e.target.value }))}
              >
                {["Pre-production", "Production", "Post-production"].map((ph) => (
                  <option key={ph}>{ph}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={labelSt}>Budget (₹ Cr)</label>
              <input
                style={inputSt}
                type="number"
                placeholder="e.g. 50"
                value={form.budget}
                onChange={(e) => setForm((p) => ({ ...p, budget: e.target.value }))}
                onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.25)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
            </div>
          </div>
          <button style={submitBtnSt} onClick={handleNew}>
            Add to slate →
          </button>
        </div>
      </Modal>
    </>
  );
}
