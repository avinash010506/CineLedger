import { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  sub,
  actions,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 mb-8 font-sans">
      <div>
        {eyebrow && (
          <div className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-zinc-500 mb-2">
            {eyebrow}
          </div>
        )}
        <h1 className="text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold text-white tracking-[-0.04em] leading-none">
          {title}
        </h1>
        {sub && <p className="mt-2 text-[0.9375rem] text-zinc-500 font-light max-w-2xl">{sub}</p>}
      </div>
      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </div>
  );
}

export function Stat({
  label,
  value,
  delta,
  accent = "neutral",
}: {
  label: string;
  value: string;
  delta?: string;
  accent?: "neutral" | "blue" | "green" | "red" | "teal" | "gold" | "crimson";
}) {
  const accentClasses: Record<string, string> = {
    neutral: "text-zinc-500",
    blue: "text-blue-400",
    green: "text-emerald-400",
    red: "text-red-400",
    teal: "text-teal-400",
    gold: "text-amber-400",
    crimson: "text-red-400",
  };
  const colClass = accentClasses[accent] ?? "text-zinc-500";

  return (
    <div className="rounded-[1.25rem] bg-white/5 border border-white/10 px-5 pt-5 pb-4 transition-colors hover:bg-white/10 font-sans">
      <div className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-zinc-500">
        {label}
      </div>
      <div className="mt-3 text-3xl font-extrabold text-white tracking-[-0.04em] leading-none">
        {value}
      </div>
      {delta && <div className={`mt-1.5 text-xs font-medium ${colClass}`}>{delta}</div>}
    </div>
  );
}

export function Card({
  title,
  action,
  children,
  className = "",
}: {
  title?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[1.25rem] bg-white/5 border border-white/10 p-6 font-sans ${className}`}
    >
      {(title || action) && (
        <div className="flex items-center justify-between mb-5">
          {title && <h3 className="text-base font-bold text-white tracking-[-0.02em]">{title}</h3>}
          {action}
        </div>
      )}
      {children}
    </div>
  );
}

export function PrimaryButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-full bg-white text-black px-4.5 py-2 text-sm font-semibold border-none cursor-pointer inline-flex items-center gap-1.5 transition-colors hover:bg-neutral-200 font-sans"
    >
      {children}
    </button>
  );
}

export function GhostButton({ children, onClick }: { children: ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-full bg-white/5 border border-white/10 text-zinc-400 px-4.5 py-2 text-sm font-medium cursor-pointer inline-flex items-center gap-1.5 transition-all hover:bg-white/10 hover:text-white font-sans"
    >
      {children}
    </button>
  );
}

export function Pill({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "gold" | "teal" | "crimson" | "green" | "blue";
}) {
  const styles: Record<string, string> = {
    neutral: "bg-white/5 text-zinc-500 border-white/10",
    blue: "bg-blue-400/10 text-blue-400 border-blue-400/20",
    green: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
    gold: "bg-amber-400/10 text-amber-400 border-amber-400/20",
    teal: "bg-teal-400/10 text-teal-400 border-teal-400/20",
    crimson: "bg-red-400/10 text-red-400 border-red-400/20",
  };
  const s = styles[tone] ?? styles.neutral;
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.6875rem] font-semibold font-sans tracking-[0.02em] ${s}`}
    >
      {children}
    </span>
  );
}

