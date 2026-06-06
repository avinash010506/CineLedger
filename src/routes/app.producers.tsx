import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader, Stat, Card, PrimaryButton, GhostButton, Pill } from "@/components/app/ui";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Plus, Pencil, Trash2, Send, Check, Copy, Briefcase } from "lucide-react";

export const Route = createFileRoute("/app/producers")({
  component: ProducersPage,
  head: () => ({ meta: [{ title: "Producers — CineLedger" }] }),
});

type Role =
  | "Executive Producer"
  | "Line Producer"
  | "Creative Producer"
  | "Co-Producer"
  | "Associate Producer";
type Status = "Active" | "On set" | "Reviewing" | "At risk" | "Invited";
type Producer = {
  id: string;
  name: string;
  email: string;
  role: Role;
  deployed: number;
  success: number;
  status: Status;
  projects: string[];
};

const allProjects = [
  "Midnight Mirage",
  "Silver Tide",
  "Ember Road",
  "Crimson Hour",
  "Pale Horizon",
];
const allRoles: Role[] = [
  "Executive Producer",
  "Line Producer",
  "Creative Producer",
  "Co-Producer",
  "Associate Producer",
];

const seed: Producer[] = [
  {
    id: "p1",
    name: "Anaya Rao",
    email: "anaya@lumen.pictures",
    role: "Executive Producer",
    deployed: 182,
    success: 92,
    status: "Active",
    projects: ["Midnight Mirage", "Silver Tide"],
  },
  {
    id: "p2",
    name: "Ishaan Kapoor",
    email: "ishaan@lumen.pictures",
    role: "Line Producer",
    deployed: 86,
    success: 78,
    status: "On set",
    projects: ["Ember Road"],
  },
  {
    id: "p3",
    name: "Mira Sethi",
    email: "mira@lumen.pictures",
    role: "Creative Producer",
    deployed: 54,
    success: 88,
    status: "Active",
    projects: ["Crimson Hour"],
  },
  {
    id: "p4",
    name: "Devan Joshi",
    email: "devan@lumen.pictures",
    role: "Co-Producer",
    deployed: 31,
    success: 64,
    status: "Reviewing",
    projects: [],
  },
  {
    id: "p5",
    name: "Karan Bhatia",
    email: "karan@lumen.pictures",
    role: "Executive Producer",
    deployed: 67,
    success: 55,
    status: "At risk",
    projects: ["Pale Horizon"],
  },
];

const statusTone: Record<Status, "neutral" | "gold" | "teal" | "crimson" | "green"> = {
  Active: "green",
  "On set": "gold",
  Reviewing: "neutral",
  "At risk": "crimson",
  Invited: "teal",
};

function ProducersPage() {
  const [rows, setRows] = useState<Producer[]>(seed);
  const [editing, setEditing] = useState<Producer | null>(null);
  const [open, setOpen] = useState(false);
  const [invite, setInvite] = useState<{ email: string; role: Role; projects: string[] } | null>(
    null,
  );
  const [inviteSent, setInviteSent] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const stats = useMemo(() => {
    const deployed = rows.reduce((s, r) => s + r.deployed, 0);
    const success = rows.length
      ? Math.round(rows.reduce((s, r) => s + r.success, 0) / rows.length)
      : 0;
    const atRisk = rows.filter((r) => r.status === "At risk").length;
    return { deployed, success, atRisk };
  }, [rows]);

  const slateBudget = rows.map((p) => ({ name: p.name.split(" ")[0], deployed: p.deployed }));

  function openNew() {
    setEditing({
      id: "",
      name: "",
      email: "",
      role: "Executive Producer",
      deployed: 0,
      success: 0,
      status: "Active",
      projects: [],
    });
    setOpen(true);
  }
  function openEdit(p: Producer) {
    setEditing({ ...p, projects: [...p.projects] });
    setOpen(true);
  }
  function remove(id: string) {
    setRows((rs) => rs.filter((r) => r.id !== id));
  }
  function save() {
    if (!editing || !editing.name || !editing.email) return;
    if (editing.id) setRows((rs) => rs.map((r) => (r.id === editing.id ? editing : r)));
    else setRows((rs) => [...rs, { ...editing, id: `p${Date.now()}` }]);
    setOpen(false);
    setEditing(null);
  }
  function toggleProject(name: string) {
    if (!editing) return;
    setEditing({
      ...editing,
      projects: editing.projects.includes(name)
        ? editing.projects.filter((p) => p !== name)
        : [...editing.projects, name],
    });
  }

  function sendInvite() {
    if (!invite || !invite.email) return;
    const newP: Producer = {
      id: `p${Date.now()}`,
      name: invite.email
        .split("@")[0]
        .replace(/\./g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
      email: invite.email,
      role: invite.role,
      deployed: 0,
      success: 0,
      status: "Invited",
      projects: invite.projects,
    };
    setRows((rs) => [...rs, newP]);
    setInviteSent(invite.email);
    setTimeout(() => {
      setInviteSent(null);
      setInvite(null);
    }, 1800);
  }

  const inviteLink = `https://app.cineledger.studio/invite/${btoa(invite?.email ?? "").slice(0, 14)}`;

  return (
    <>
      <PageHeader
        eyebrow="Stakeholders"
        title="Producers"
        sub="Roster, project assignments and invitation flow across the Lumen Pictures slate."
        actions={
          <>
            <GhostButton
              onClick={() => setInvite({ email: "", role: "Co-Producer", projects: [] })}
            >
              <Send className="inline h-4 w-4 mr-1.5" />
              Invite producer
            </GhostButton>
            <PrimaryButton onClick={openNew}>
              <Plus className="inline h-4 w-4 mr-1.5" />
              Add producer
            </PrimaryButton>
          </>
        }
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat
          label="Producers on roster"
          value={String(rows.length)}
          delta={`${rows.filter((r) => r.status === "Invited").length} pending invites`}
        />
        <Stat
          label="Capital deployed"
          value={`₹${stats.deployed} Cr`}
          delta="Across slate"
          accent="teal"
        />
        <Stat label="Avg success rate" value={`${stats.success}%`} delta="Blended" />
        <Stat
          label="At-risk producers"
          value={String(stats.atRisk)}
          delta="Mitigation needed"
          accent="crimson"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-6">
        <Card title="Budget deployment by producer" className="lg:col-span-2">
          <div className="h-72 -ml-4">
            <ResponsiveContainer>
              <BarChart data={slateBudget}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.05)" />
                <XAxis dataKey="name" stroke="oklch(1 0 0 / 0.4)" fontSize={11} />
                <YAxis stroke="oklch(1 0 0 / 0.4)" fontSize={11} />
                <Tooltip
                  contentStyle={{
                    background: "oklch(0.17 0.012 60)",
                    border: "1px solid oklch(1 0 0 / 0.1)",
                    borderRadius: 12,
                  }}
                />
                <Bar
                  dataKey="deployed"
                  name="Deployed (₹Cr)"
                  fill="oklch(0.82 0.14 82)"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card title="Project coverage">
          <ul className="space-y-2.5 text-sm">
            {allProjects.map((proj) => {
              const assigned = rows.filter((r) => r.projects.includes(proj));
              return (
                <li
                  key={proj}
                  className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0"
                >
                  <div>
                    <div>{proj}</div>
                    <div className="text-xs text-muted-foreground">
                      {assigned.length
                        ? assigned.map((a) => a.name.split(" ")[0]).join(", ")
                        : "Unassigned"}
                    </div>
                  </div>
                  <Pill tone={assigned.length ? "green" : "crimson"}>{assigned.length}</Pill>
                </li>
              );
            })}
          </ul>
        </Card>
      </div>

      <Card title="Producer roster" className="mt-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs uppercase tracking-widest text-muted-foreground">
              <tr className="border-b border-white/5">
                <th className="text-left py-3 font-normal">Producer</th>
                <th className="text-left font-normal">Role</th>
                <th className="text-left font-normal">Projects</th>
                <th className="text-left font-normal">Deployed</th>
                <th className="text-left font-normal">Success</th>
                <th className="text-left font-normal">Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {rows.map((p) => (
                <tr key={p.id} className="hover:bg-white/[0.02]">
                  <td className="py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-white/5 grid place-items-center text-xs">
                        {p.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                      <div>
                        <div>{p.name}</div>
                        <div className="text-xs text-muted-foreground">{p.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-muted-foreground">{p.role}</td>
                  <td className="text-xs text-muted-foreground max-w-[200px]">
                    {p.projects.length ? p.projects.join(", ") : "—"}
                  </td>
                  <td>₹{p.deployed} Cr</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-20 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-gold to-gold-soft"
                          style={{ width: `${p.success}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">{p.success}%</span>
                    </div>
                  </td>
                  <td>
                    <Pill tone={statusTone[p.status]}>{p.status}</Pill>
                  </td>
                  <td>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <button
                        className="p-1.5 rounded-md hover:bg-white/5"
                        onClick={() => openEdit(p)}
                        title="Edit"
                      >
                        <Pencil className="h-3.5 w-3.5" />
                      </button>
                      <button
                        className="p-1.5 rounded-md hover:bg-white/5 hover:text-crimson"
                        onClick={() => remove(p.id)}
                        title="Delete"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {open && editing && (
        <Modal title={editing.id ? "Edit producer" : "Add producer"} onClose={() => setOpen(false)}>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Full name">
              <input
                className={inp}
                value={editing.name}
                onChange={(e) => setEditing({ ...editing, name: e.target.value })}
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                className={inp}
                value={editing.email}
                onChange={(e) => setEditing({ ...editing, email: e.target.value })}
              />
            </Field>
            <Field label="Role">
              <select
                className={inp}
                value={editing.role}
                onChange={(e) => setEditing({ ...editing, role: e.target.value as Role })}
              >
                {allRoles.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </Field>
            <Field label="Status">
              <select
                className={inp}
                value={editing.status}
                onChange={(e) => setEditing({ ...editing, status: e.target.value as Status })}
              >
                {(["Active", "On set", "Reviewing", "At risk", "Invited"] as Status[]).map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </Field>
            <Field label="Deployed (₹Cr)">
              <input
                type="number"
                className={inp}
                value={editing.deployed}
                onChange={(e) => setEditing({ ...editing, deployed: Number(e.target.value) })}
              />
            </Field>
            <Field label="Success rate (%)">
              <input
                type="number"
                min={0}
                max={100}
                className={inp}
                value={editing.success}
                onChange={(e) => setEditing({ ...editing, success: Number(e.target.value) })}
              />
            </Field>
          </div>

          <div className="mt-5">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
              <Briefcase className="h-3.5 w-3.5" />
              Project assignments
            </div>
            <div className="flex flex-wrap gap-2">
              {allProjects.map((proj) => {
                const on = editing.projects.includes(proj);
                return (
                  <button
                    key={proj}
                    onClick={() => toggleProject(proj)}
                    className={`rounded-full px-3 py-1.5 text-xs border transition ${on ? "bg-gold/15 border-gold/40 text-gold" : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10"}`}
                  >
                    {on && <Check className="inline h-3 w-3 mr-1" />}
                    {proj}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-2">
            <GhostButton onClick={() => setOpen(false)}>Cancel</GhostButton>
            <PrimaryButton onClick={save}>Save producer</PrimaryButton>
          </div>
        </Modal>
      )}

      {invite && (
        <Modal title="Invite producer" onClose={() => setInvite(null)}>
          {inviteSent ? (
            <div className="py-8 text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500/15 grid place-items-center">
                <Check className="h-6 w-6 text-emerald-300" />
              </div>
              <div className="mt-3 font-display text-xl">Invitation sent</div>
              <div className="text-sm text-muted-foreground">
                {inviteSent} has been added to the roster as Invited.
              </div>
            </div>
          ) : (
            <>
              <div className="grid gap-3">
                <Field label="Work email">
                  <input
                    type="email"
                    placeholder="name@studio.com"
                    className={inp}
                    value={invite.email}
                    onChange={(e) => setInvite({ ...invite, email: e.target.value })}
                  />
                </Field>
                <Field label="Role">
                  <select
                    className={inp}
                    value={invite.role}
                    onChange={(e) => setInvite({ ...invite, role: e.target.value as Role })}
                  >
                    {allRoles.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Assign to projects">
                  <div className="flex flex-wrap gap-2 mt-1">
                    {allProjects.map((proj) => {
                      const on = invite.projects.includes(proj);
                      return (
                        <button
                          key={proj}
                          type="button"
                          onClick={() =>
                            setInvite({
                              ...invite,
                              projects: on
                                ? invite.projects.filter((p) => p !== proj)
                                : [...invite.projects, proj],
                            })
                          }
                          className={`rounded-full px-3 py-1.5 text-xs border transition ${on ? "bg-gold/15 border-gold/40 text-gold" : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10"}`}
                        >
                          {on && <Check className="inline h-3 w-3 mr-1" />}
                          {proj}
                        </button>
                      );
                    })}
                  </div>
                </Field>
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Shareable invite link
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="text-xs text-gold truncate flex-1">{inviteLink}</code>
                    <button
                      onClick={() => {
                        navigator.clipboard?.writeText(inviteLink);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 1200);
                      }}
                      className="rounded-md p-1.5 hover:bg-white/10 text-muted-foreground"
                    >
                      <Copy className="h-3.5 w-3.5" />
                      {copied && <span className="ml-1 text-[10px] text-emerald-300">Copied</span>}
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-2">
                <GhostButton onClick={() => setInvite(null)}>Cancel</GhostButton>
                <PrimaryButton onClick={sendInvite}>
                  <Send className="inline h-4 w-4 mr-1.5" />
                  Send invitation
                </PrimaryButton>
              </div>
            </>
          )}
        </Modal>
      )}
    </>
  );
}

const inp =
  "w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-gold/40";
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block text-xs">
      <div className="text-muted-foreground uppercase tracking-widest mb-1.5">{label}</div>
      {children}
    </label>
  );
}
function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="glass-strong w-full max-w-2xl rounded-2xl p-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-display text-xl">{title}</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
