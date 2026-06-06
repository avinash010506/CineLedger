import { useState, useEffect } from "react";
import { Command } from "cmdk";
import { useNavigate } from "@tanstack/react-router";
import { Search, Clapperboard, Truck, BarChart3, Wallet, Users } from "lucide-react";
import { useDb } from "@/lib/useDb";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { projects, distributors } = useDb();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/60 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-xl bg-zinc-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        <Command label="Global Command Menu" className="flex flex-col w-full h-full">
          <div className="flex items-center px-4 border-b border-white/10">
            <Search className="w-4 h-4 text-zinc-500 mr-2" />
            <Command.Input
              placeholder="Search projects, distributors, or pages... (Ctrl+K)"
              className="w-full bg-transparent border-none py-4 text-sm text-white placeholder-zinc-500 outline-none"
              autoFocus
            />
          </div>

          <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-thin">
            <Command.Empty className="py-6 text-center text-sm text-zinc-500">
              No results found.
            </Command.Empty>

            <Command.Group
              heading={
                <div className="px-2 py-1.5 text-[0.65rem] font-bold text-zinc-500 uppercase tracking-widest">
                  Pages
                </div>
              }
            >
              <Command.Item
                onSelect={() => runCommand(() => navigate({ to: "/app/projects" }))}
                className="flex items-center gap-2 px-2 py-2.5 text-sm text-zinc-300 rounded-md cursor-pointer hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white"
              >
                <Clapperboard className="w-4 h-4 text-blue-400" /> Projects
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => navigate({ to: "/app/distributors" }))}
                className="flex items-center gap-2 px-2 py-2.5 text-sm text-zinc-300 rounded-md cursor-pointer hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white"
              >
                <Truck className="w-4 h-4 text-emerald-400" /> Distributors
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => navigate({ to: "/app/analytics" }))}
                className="flex items-center gap-2 px-2 py-2.5 text-sm text-zinc-300 rounded-md cursor-pointer hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white"
              >
                <BarChart3 className="w-4 h-4 text-purple-400" /> Analytics
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => navigate({ to: "/app/budgets" }))}
                className="flex items-center gap-2 px-2 py-2.5 text-sm text-zinc-300 rounded-md cursor-pointer hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white"
              >
                <Wallet className="w-4 h-4 text-amber-400" /> Budgets
              </Command.Item>
            </Command.Group>

            {projects.length > 0 && (
              <Command.Group
                heading={
                  <div className="px-2 py-1.5 text-[0.65rem] font-bold text-zinc-500 uppercase tracking-widest mt-2">
                    Projects
                  </div>
                }
              >
                {projects.map((p) => (
                  <Command.Item
                    key={p.id}
                    onSelect={() =>
                      runCommand(() => navigate({ to: "/app/projects/$id", params: { id: p.id } }))
                    }
                    className="flex items-center justify-between gap-2 px-2 py-2.5 text-sm text-zinc-300 rounded-md cursor-pointer hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white"
                  >
                    <div className="flex items-center gap-2">
                      <Clapperboard className="w-3.5 h-3.5 text-zinc-500" /> {p.title}
                    </div>
                    <span className="text-xs text-zinc-500">{p.phase}</span>
                  </Command.Item>
                ))}
              </Command.Group>
            )}

            {distributors.length > 0 && (
              <Command.Group
                heading={
                  <div className="px-2 py-1.5 text-[0.65rem] font-bold text-zinc-500 uppercase tracking-widest mt-2">
                    Distributors
                  </div>
                }
              >
                {distributors.map((d) => (
                  <Command.Item
                    key={d.id}
                    onSelect={() => runCommand(() => navigate({ to: "/app/distributors" }))}
                    className="flex items-center justify-between gap-2 px-2 py-2.5 text-sm text-zinc-300 rounded-md cursor-pointer hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white"
                  >
                    <div className="flex items-center gap-2">
                      <Truck className="w-3.5 h-3.5 text-zinc-500" /> {d.name}
                    </div>
                    <span className="text-xs text-zinc-500">{d.type}</span>
                  </Command.Item>
                ))}
              </Command.Group>
            )}
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
