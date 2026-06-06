import { Clapperboard, Twitter, Linkedin, Github } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";

const cols = [
  {
    title: "Product",
    links: [
      ["Dashboard", "/app"],
      ["Projects", "/app/projects"],
      ["Budgets", "/app/budgets"],
      ["Revenue", "/app/revenue"],
      ["AI Analytics", "/app/analytics"],
      ["Pricing", "/pricing"],
    ],
  },
  {
    title: "Studio",
    links: [
      ["About", "/about"],
      ["Features", "/features"],
      ["Contact", "/contact"],
      ["Login", "/login"],
      ["Sign Up", "/signup"],
    ],
  },
  {
    title: "Workspace",
    links: [
      ["Producers", "/app/producers"],
      ["Financiers", "/app/financiers"],
      ["Schedule", "/app/schedule"],
      ["Cast & Crew", "/app/team"],
      ["Reports", "/app/reports"],
      ["Settings", "/app/settings"],
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };
  return (
    <footer
      style={{
        background: "#000",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        paddingTop: "5rem",
        paddingBottom: "3rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        {/* Top row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          {/* Brand column */}
          <div>
            <Link
              to="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                marginBottom: "1.25rem",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "0.625rem",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Clapperboard style={{ width: 16, height: 16, color: "#000" }} />
              </div>
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "1.0625rem",
                  color: "#fff",
                  letterSpacing: "-0.03em",
                }}
              >
                Cine<span style={{ color: "#52525b" }}>Ledger</span>
              </span>
            </Link>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#52525b",
                fontWeight: 300,
                lineHeight: 1.7,
                maxWidth: "22rem",
                marginBottom: "1.75rem",
              }}
            >
              The cinematic operating system for film studios, producers, and financiers. Every
              frame. Every rupee.
            </p>
            {/* Newsletter */}
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#71717a",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginBottom: "0.75rem",
              }}
            >
              Product Updates
            </p>
            {subscribed ? (
              <p style={{ fontSize: "0.875rem", color: "#34d399", fontWeight: 500 }}>
                ✓ You're subscribed!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: "flex", gap: "0.5rem" }}>
                <input
                  type="email"
                  placeholder="your@studio.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    flex: 1,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "0.625rem",
                    padding: "0.625rem 1rem",
                    fontSize: "0.875rem",
                    color: "#fff",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: "#fff",
                    color: "#000",
                    borderRadius: "0.625rem",
                    padding: "0.625rem 1.25rem",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    border: "none",
                    whiteSpace: "nowrap",
                    transition: "background 0.2s",
                  }}
                >
                  Subscribe
                </button>
              </form>
            )}
            {/* Social */}
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem" }}>
              {[
                { Icon: Twitter, href: "https://twitter.com/cineledger" },
                { Icon: Linkedin, href: "https://linkedin.com/company/cineledger" },
                { Icon: Github, href: "https://github.com/cineledger" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "0.625rem",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(255,255,255,0.09)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "rgba(255,255,255,0.04)")
                  }
                >
                  <Icon style={{ width: 15, height: 15, color: "#71717a" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <p
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "#52525b",
                  marginBottom: "1.25rem",
                }}
              >
                {col.title}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      to={href}
                      style={{
                        fontSize: "0.875rem",
                        color: "#3f3f46",
                        fontWeight: 300,
                        textDecoration: "none",
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#3f3f46")}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: "1.75rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <p style={{ fontSize: "0.8125rem", color: "#3f3f46" }}>
            © {new Date().getFullYear()} CineLedger Studios Pvt. Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "2rem" }}>
            {[
              { l: "Privacy Policy", href: "/privacy" },
              { l: "Terms of Service", href: "/terms" },
              { l: "Security", href: "/security" },
            ].map(({ l, href }) => (
              <a
                key={l}
                href={href}
                style={{
                  fontSize: "0.8125rem",
                  color: "#3f3f46",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#71717a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#3f3f46")}
              >
                {l}
              </a>
            ))}
          </div>
          <p style={{ fontSize: "0.8125rem", color: "#3f3f46" }}>
            Crafted for the people who make the movies.
          </p>
        </div>
      </div>
    </footer>
  );
}
