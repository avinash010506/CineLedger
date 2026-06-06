import {
  ArrowRight,
  Play,
  TrendingUp,
  Wallet,
  Eye,
  Clapperboard,
  CheckCircle2,
  ShieldCheck,
  ArrowUpRight,
  Film,
} from "lucide-react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const F = "'Inter', ui-sans-serif, -apple-system, sans-serif";

const STATS = [
  { v: "₹4,200 Cr+", l: "Budgets Tracked" },
  { v: "180+", l: "Studios & Houses" },
  { v: "2,400+", l: "Crew Members" },
  { v: "99.9%", l: "Platform Uptime" },
];

const KPIS = [
  { label: "Total Budget", value: "₹482 Cr", delta: "+8.2%", color: "#60a5fa", icon: Wallet },
  { label: "Revenue YTD", value: "₹914 Cr", delta: "+38%", color: "#34d399", icon: TrendingUp },
  { label: "Active Projects", value: "12", delta: "+3 new", color: "#a78bfa", icon: Clapperboard },
  { label: "Net ROI", value: "+96%", delta: "↑12pt", color: "#fbbf24", icon: Eye },
];

const PRODUCTIONS = [
  { title: "Moonlight Bazaar", status: "Post-Production", pct: 78, color: "#60a5fa" },
  { title: "The Last Monsoon", status: "Shooting · Day 42", pct: 54, color: "#34d399" },
  { title: "Neon Saints", status: "Released", pct: 100, color: "#a78bfa" },
];

const GLOBAL_CSS = `
  @keyframes heroGlowPulse {
    0%,100% { opacity:0.5; transform:scale(1) translate(-50%,-50%); }
    50%     { opacity:0.9; transform:scale(1.15) translate(-50%,-50%); }
  }
  @keyframes floatPhysics {
    0%,100% { transform: translateY(0px) rotate(-0.5deg); }
    33%     { transform: translateY(-18px) rotate(0.5deg); }
    66%     { transform: translateY(-8px) rotate(-0.3deg); }
  }
  @keyframes cardFloat1 { 0%,100%{transform:translateY(0px) rotate(-2deg);}  50%{transform:translateY(-14px) rotate(1deg);} }
  @keyframes cardFloat2 { 0%,100%{transform:translateY(-8px) rotate(1.5deg);} 50%{transform:translateY(10px) rotate(-1deg);} }
  @keyframes cardFloat3 { 0%,100%{transform:translateY(4px) rotate(1deg);}   50%{transform:translateY(-18px) rotate(-1.5deg);} }
  @keyframes cardFloat4 { 0%,100%{transform:translateY(-4px) rotate(-1deg);} 50%{transform:translateY(12px) rotate(2deg);} }
  @keyframes scanLine   { 0%{top:-2px;opacity:0.8;} 100%{top:calc(100% + 2px);opacity:0;} }
  @keyframes gridDrift  { from{backgroundPosition:0 0;} to{backgroundPosition:60px 60px;} }
  @keyframes fadeSlideUp { from{opacity:0;transform:translateY(20px);} to{opacity:1;transform:translateY(0);} }
  @keyframes shimmerGlow {
    0%,100%{ backgroundPosition:-200% 0; }
    to     { backgroundPosition: 200% 0; }
  }
`;

function StatPill({
  style,
  color,
  label,
  value,
  sub,
}: {
  style?: React.CSSProperties;
  color: string;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div style={{ position: "absolute", zIndex: 10, ...style }}>
      <div
        style={{
          background: "rgba(4,4,4,0.85)",
          border: `1px solid ${color}35`,
          borderRadius: "1rem",
          padding: "0.875rem 1.25rem",
          backdropFilter: "blur(24px)",
          boxShadow: `0 16px 48px rgba(0,0,0,0.7), 0 0 0 1px ${color}12`,
          minWidth: 130,
        }}
      >
        <div
          style={{
            fontSize: "0.5625rem",
            color,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            fontWeight: 700,
            marginBottom: "0.35rem",
            fontFamily: F,
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            fontFamily: F,
          }}
        >
          {value}
        </div>
        <div style={{ fontSize: "0.625rem", color, marginTop: "0.25rem", fontFamily: F }}>
          {sub}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Scroll-driven transforms
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.12]);
  const heroRotate = useTransform(scrollYProgress, [0, 0.5], [0, 8]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const dashY = useTransform(scrollYProgress, [0.1, 0.7], [0, 80]);
  const dashOpacity = useTransform(scrollYProgress, [0.1, 0.6], [1, 0]);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });
  const imgRotateX = useTransform(springY, [-300, 300], [4, -4]);
  const imgRotateY = useTransform(springX, [-400, 400], [-6, 6]);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseX.set(e.clientX - cx);
      mouseY.set(e.clientY - cy);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={sectionRef}
      style={{ position: "relative", background: "#000", overflowX: "hidden" }}
    >
      <style>{GLOBAL_CSS}</style>

      {/* ── Moving grid canvas ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "gridDrift 24s linear infinite",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── PART 1: Canvas-first hero — text centered, 3D image as canvas element ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Centered headline */}
        <motion.div
          style={{
            opacity: textOpacity,
            y: textY,
            position: "relative",
            zIndex: 20,
            textAlign: "center",
            paddingTop: "14rem",
            paddingBottom: "2rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.625rem",
              padding: "0.4rem 1.25rem",
              borderRadius: 999,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              marginBottom: "2.25rem",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#34d399",
                boxShadow: "0 0 10px #34d399",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#71717a",
                fontFamily: F,
              }}
            >
              Film Studio Operating System
            </span>
          </motion.div>

          {/* H1 — massive, centered */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{
              fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.06em",
              lineHeight: 0.88,
              color: "#fff",
              marginBottom: "2rem",
              fontFamily: F,
            }}
          >
            Manage Every Frame.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #71717a 0%, #3f3f46 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Every Rupee.
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "#71717a",
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: "36rem",
              margin: "0 auto 2.75rem",
              fontFamily: F,
            }}
          >
            CineLedger is the complete operating system for modern film production — connecting
            producers, investors, cast, and crew with real-time budgets, box office tracking, and
            daily schedules.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.48 }}
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link
              to="/signup"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                borderRadius: 999,
                background: "#fff",
                color: "#000",
                padding: "1rem 2.25rem",
                fontSize: "1rem",
                fontWeight: 700,
                textDecoration: "none",
                fontFamily: F,
                boxShadow: "0 0 60px rgba(255,255,255,0.18), 0 4px 20px rgba(0,0,0,0.5)",
              }}
            >
              Start Free Trial <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
            <Link
              to="/app"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                borderRadius: 999,
                background: "rgba(255,255,255,0.05)",
                color: "#fff",
                padding: "1rem 1.75rem",
                fontSize: "1rem",
                fontWeight: 500,
                border: "1px solid rgba(255,255,255,0.1)",
                textDecoration: "none",
                fontFamily: F,
              }}
            >
              <span
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "#fff",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Play
                  style={{ width: 12, height: 12, fill: "#000", color: "#000", marginLeft: 2 }}
                />
              </span>
              Watch Demo
            </Link>
          </motion.div>
        </motion.div>

        {/* ── THE 3D IMAGE AS CANVAS — no box, text overlaps it ── */}
        <div style={{ position: "relative", width: "100%", maxWidth: 1000, margin: "0 auto" }}>
          {/* Ambient glow — behind the image */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 700,
              height: 700,
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse, rgba(96,165,250,0.08) 0%, rgba(167,139,250,0.05) 40%, transparent 70%)",
              transform: "translate(-50%,-50%)",
              filter: "blur(60px)",
              animation: "heroGlowPulse 8s ease-in-out infinite",
              pointerEvents: "none",
            }}
          />

          {/* Floating stat cards — they overlap the image edges (Apple style) */}
          <StatPill
            style={{ top: "18%", left: "-2%", animation: "cardFloat1 6s ease-in-out infinite" }}
            color="#60a5fa"
            label="Revenue YTD"
            value="₹914 Cr"
            sub="↑ +38% this year"
          />
          <StatPill
            style={{ top: "12%", right: "-2%", animation: "cardFloat2 7.5s ease-in-out infinite" }}
            color="#a78bfa"
            label="Net ROI"
            value="+96%"
            sub="↑ 12pt vs last year"
          />
          <StatPill
            style={{ bottom: "22%", left: "-3%", animation: "cardFloat3 8s ease-in-out infinite" }}
            color="#34d399"
            label="Cast & Crew"
            value="2,400+"
            sub="Across 12 active projects"
          />
          <StatPill
            style={{
              bottom: "18%",
              right: "-2%",
              animation: "cardFloat4 5.5s ease-in-out infinite",
            }}
            color="#fbbf24"
            label="Budget"
            value="₹482 Cr"
            sub="68% deployed"
          />

          {/* PREMIUM 2D VISUAL: Glowing Mesh & Glass Dashboard Mockup */}
          <motion.div
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              scale: heroScale,
              opacity: heroOpacity,
              position: "relative",
              zIndex: 2,
              width: "100%",
              height: 500,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Center abstract orb cluster */}
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                borderRadius: "2rem",
              }}
            >
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "20%",
                  width: "40%",
                  height: "60%",
                  background: "radial-gradient(circle, rgba(96,165,250,0.4) 0%, transparent 70%)",
                  filter: "blur(60px)",
                }}
              />
              <motion.div
                animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  bottom: "10%",
                  right: "20%",
                  width: "45%",
                  height: "65%",
                  background: "radial-gradient(circle, rgba(167,139,250,0.3) 0%, transparent 70%)",
                  filter: "blur(60px)",
                }}
              />
            </div>

            {/* Central Glassmorphic Card (Abstract Dashboard) */}
            <div
              style={{
                position: "relative",
                width: "80%",
                height: "70%",
                background: "rgba(10, 10, 10, 0.6)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "1.5rem",
                backdropFilter: "blur(24px)",
                boxShadow:
                  "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
                display: "flex",
                flexDirection: "column",
                padding: "1.5rem",
                gap: "1rem",
                overflow: "hidden",
              }}
            >
              {/* Fake dashboard header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  paddingBottom: "1rem",
                }}
              >
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <div
                    style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444" }}
                  />
                  <div
                    style={{ width: 12, height: 12, borderRadius: "50%", background: "#eab308" }}
                  />
                  <div
                    style={{ width: 12, height: 12, borderRadius: "50%", background: "#22c55e" }}
                  />
                </div>
                <div
                  style={{
                    width: "30%",
                    height: 16,
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: 999,
                  }}
                />
              </div>
              {/* Fake dashboard body */}
              <div style={{ display: "flex", gap: "1rem", flex: 1 }}>
                <div
                  style={{
                    width: "30%",
                    height: "100%",
                    background: "rgba(255,255,255,0.02)",
                    borderRadius: "0.75rem",
                    border: "1px solid rgba(255,255,255,0.03)",
                  }}
                />
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div
                    style={{
                      width: "100%",
                      height: "40%",
                      background:
                        "linear-gradient(to right, rgba(96,165,250,0.1), rgba(167,139,250,0.1))",
                      borderRadius: "0.75rem",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  />
                  <div style={{ display: "flex", gap: "1rem", flex: 1 }}>
                    <div
                      style={{
                        flex: 1,
                        background: "rgba(255,255,255,0.02)",
                        borderRadius: "0.75rem",
                        border: "1px solid rgba(255,255,255,0.03)",
                      }}
                    />
                    <div
                      style={{
                        flex: 1,
                        background: "rgba(255,255,255,0.02)",
                        borderRadius: "0.75rem",
                        border: "1px solid rgba(255,255,255,0.03)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text physically overlapping bottom edge of 3D render */}
          <motion.div
            style={{ opacity: textOpacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "8%",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 20,
                textAlign: "center",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  fontSize: "0.625rem",
                  color: "#3f3f46",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  fontFamily: F,
                }}
              >
                ↓ Scroll to explore
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Stats row ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        style={{
          maxWidth: "82rem",
          margin: "0 auto",
          padding: "0 2.5rem 4rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          paddingTop: "2.5rem",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
          {STATS.map((s) => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  fontWeight: 800,
                  color: "#fff",
                  letterSpacing: "-0.05em",
                  lineHeight: 1,
                  fontFamily: F,
                }}
              >
                {s.v}
              </div>
              <div
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#3f3f46",
                  marginTop: "0.4rem",
                  fontFamily: F,
                }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Full-width floating dashboard (parallax on scroll) ── */}
      <motion.div
        style={{ y: dashY, opacity: dashOpacity }}
        initial={{ y: 80, scale: 0.96 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div style={{ maxWidth: "82rem", margin: "0 auto", padding: "0 2.5rem 10rem" }}>
          {/* Browser chrome */}
          <div
            style={{
              borderRadius: "1.5rem 1.5rem 0 0",
              background: "rgba(8,8,8,0.98)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderBottom: "1px solid rgba(255,255,255,0.04)",
              padding: "0.875rem 1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
            }}
          >
            {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
              <div
                key={c}
                style={{ width: 12, height: 12, borderRadius: "50%", background: c, opacity: 0.85 }}
              />
            ))}
            <div style={{ flex: 1, textAlign: "center" }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "#3f3f46",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 6,
                  padding: "3px 20px",
                  fontFamily: F,
                }}
              >
                cineLedger.studio/app/dashboard
              </span>
            </div>
          </div>

          {/* Dashboard body */}
          <div
            style={{
              background: "rgba(4,4,4,0.98)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderTop: "none",
              borderRadius: "0 0 1.5rem 1.5rem",
              padding: "1.5rem",
              boxShadow: "0 80px 160px rgba(0,0,0,0.95)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "0.75rem",
                marginBottom: "0.875rem",
              }}
            >
              {KPIS.map((k, i) => (
                <motion.div
                  key={k.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1.0 + i * 0.08 }}
                  style={{
                    borderRadius: "1rem",
                    background: `${k.color}08`,
                    border: `1px solid ${k.color}20`,
                    padding: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.875rem",
                    }}
                  >
                    <k.icon style={{ width: 14, height: 14, color: k.color, opacity: 0.8 }} />
                    <span
                      style={{
                        fontSize: "0.625rem",
                        color: k.color,
                        fontWeight: 700,
                        fontFamily: F,
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      {k.delta} <ArrowUpRight style={{ width: 10, height: 10 }} />
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: "#fff",
                      letterSpacing: "-0.045em",
                      lineHeight: 1,
                      fontFamily: F,
                    }}
                  >
                    {k.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.625rem",
                      color: "#52525b",
                      marginTop: "0.375rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      fontFamily: F,
                    }}
                  >
                    {k.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "0.75rem" }}>
              {/* SVG Chart */}
              <div
                style={{
                  borderRadius: "1rem",
                  background: "rgba(255,255,255,0.015)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "0.625rem",
                        color: "#52525b",
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        fontFamily: F,
                      }}
                    >
                      Revenue Trajectory
                    </div>
                    <div
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 800,
                        color: "#fff",
                        letterSpacing: "-0.04em",
                        fontFamily: F,
                        marginTop: "0.25rem",
                      }}
                    >
                      ₹914 Cr YTD
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    {[
                      { c: "#34d399", l: "Theatrical" },
                      { c: "#60a5fa", l: "OTT" },
                    ].map((l) => (
                      <div key={l.l} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <div style={{ width: 20, height: 2, background: l.c, borderRadius: 2 }} />
                        <span style={{ fontSize: "0.625rem", color: "#52525b", fontFamily: F }}>
                          {l.l}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <svg
                  viewBox="0 0 500 90"
                  style={{ width: "100%", height: 90 }}
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="g1h" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#34d399" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="#34d399" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="g2h" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.2} />
                      <stop offset="100%" stopColor="#60a5fa" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,80 C80,60 150,40 230,18 C310,4 380,14 500,3"
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M0,80 C80,60 150,40 230,18 C310,4 380,14 500,3 L500,90 L0,90Z"
                    fill="url(#g1h)"
                  />
                  <path
                    d="M0,84 C80,74 150,64 230,50 C310,38 380,44 500,28"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="1.5"
                    opacity={0.7}
                  />
                  <path
                    d="M0,84 C80,74 150,64 230,50 C310,38 380,44 500,28 L500,90 L0,90Z"
                    fill="url(#g2h)"
                  />
                </svg>
              </div>
              {/* Productions */}
              <div
                style={{
                  borderRadius: "1rem",
                  background: "rgba(255,255,255,0.015)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.625rem",
                    color: "#52525b",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    fontFamily: F,
                    marginBottom: "1.25rem",
                  }}
                >
                  Active Slate
                </div>
                {PRODUCTIONS.map((p) => (
                  <div key={p.title} style={{ marginBottom: "0.875rem" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "0.3rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "#a1a1aa",
                          fontFamily: F,
                        }}
                      >
                        {p.title}
                      </span>
                      <span
                        style={{
                          fontSize: "0.625rem",
                          color: p.color,
                          fontWeight: 700,
                          fontFamily: F,
                        }}
                      >
                        {p.pct}%
                      </span>
                    </div>
                    <div
                      style={{
                        height: 3,
                        borderRadius: 3,
                        background: "rgba(255,255,255,0.06)",
                        overflow: "hidden",
                      }}
                    >
                      <motion.div
                        style={{ height: "100%", background: p.color, borderRadius: 3 }}
                        initial={{ width: 0 }}
                        animate={{ width: `${p.pct}%` }}
                        transition={{ duration: 1.4, delay: 1.3 }}
                      />
                    </div>
                    <div
                      style={{
                        fontSize: "0.5625rem",
                        color: "#52525b",
                        marginTop: "0.2rem",
                        fontFamily: F,
                      }}
                    >
                      {p.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
