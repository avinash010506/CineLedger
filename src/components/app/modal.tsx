import React, { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { X, CheckCircle } from "lucide-react";

// ─── Toast ────────────────────────────────────────────────────────────
type Toast = { id: string; message: string; type: "success" | "info" | "error" };
type ToastCtx = { toast: (msg: string, type?: Toast["type"]) => void };
const ToastContext = createContext<ToastCtx>({ toast: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const toast = useCallback((message: string, type: Toast["type"] = "success") => {
    const id = Date.now().toString();
    setToasts((p) => [...p, { id, message, type }]);
    setTimeout(() => setToasts((p) => p.filter((t) => t.id !== id)), 3200);
  }, []);

  const colors: Record<Toast["type"], { bg: string; border: string; icon: string }> = {
    success: { bg: "rgba(52,211,153,0.1)", border: "rgba(52,211,153,0.25)", icon: "#34d399" },
    info: { bg: "rgba(96,165,250,0.1)", border: "rgba(96,165,250,0.25)", icon: "#60a5fa" },
    error: { bg: "rgba(248,113,113,0.1)", border: "rgba(248,113,113,0.25)", icon: "#f87171" },
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {/* Toast container */}
      <div
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          pointerEvents: "none",
        }}
      >
        {toasts.map((t) => {
          const c = colors[t.type];
          return (
            <div
              key={t.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                borderRadius: "0.875rem",
                padding: "0.875rem 1.25rem",
                background: "rgba(0,0,0,0.95)",
                border: `1px solid ${c.border}`,
                boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
                minWidth: "18rem",
                maxWidth: "24rem",
                animation: "slideInUp 0.3s cubic-bezier(0.16,1,0.3,1)",
                pointerEvents: "all",
              }}
            >
              <CheckCircle style={{ width: 16, height: 16, color: c.icon, flexShrink: 0 }} />
              <span
                style={{
                  fontSize: "0.875rem",
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  flex: 1,
                }}
              >
                {t.message}
              </span>
            </div>
          );
        })}
      </div>
      <style>{`@keyframes slideInUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </ToastContext.Provider>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────
type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  maxWidth?: string;
};

export function Modal({ open, onClose, title, children, maxWidth = "30rem" }: ModalProps) {
  if (!open) return null;
  const S = "'Inter', ui-sans-serif, system-ui, sans-serif";
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Backdrop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(8px)",
        }}
        onClick={onClose}
      />
      {/* Panel */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth,
          borderRadius: "1.5rem",
          background: "#0a0a0a",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.8)",
          animation: "modalIn 0.25s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.5rem 1.5rem 1.25rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <h3
            style={{
              fontSize: "1.125rem",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.03em",
              fontFamily: S,
            }}
          >
            {title}
          </h3>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "0.5rem",
              width: 30,
              height: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#71717a",
            }}
          >
            <X style={{ width: 14, height: 14 }} />
          </button>
        </div>
        {/* Body */}
        <div style={{ padding: "1.5rem" }}>{children}</div>
      </div>
      <style>{`@keyframes modalIn { from { opacity:0; transform:scale(0.96) translateY(8px); } to { opacity:1; transform:scale(1) translateY(0); } }`}</style>
    </div>
  );
}

// ─── Form helpers ─────────────────────────────────────────────────────
const S = "'Inter', ui-sans-serif, system-ui, sans-serif";

export const inputSt: React.CSSProperties = {
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
  boxSizing: "border-box",
};

export const labelSt: React.CSSProperties = {
  fontSize: "0.6875rem",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.15em",
  color: "#52525b",
  display: "block",
  marginBottom: "0.4rem",
  fontFamily: S,
};

export const fieldSt: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
};

export const submitBtnSt: React.CSSProperties = {
  width: "100%",
  borderRadius: 999,
  background: "#fff",
  color: "#000",
  padding: "0.8125rem",
  fontSize: "0.9375rem",
  fontWeight: 700,
  border: "none",
  cursor: "pointer",
  fontFamily: S,
  marginTop: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
};
