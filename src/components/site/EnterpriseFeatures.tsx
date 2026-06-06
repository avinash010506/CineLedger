import { motion } from "framer-motion";
import { Lock, Fingerprint, Globe, Server, Zap, Workflow } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Bank-Grade Encryption",
    desc: "End-to-end AES-256 encryption for scripts, contracts, and financial data.",
  },
  {
    icon: Fingerprint,
    title: "SSO & SAML",
    desc: "Integrate with your studio's identity provider. Google, Okta, Azure AD.",
  },
  {
    icon: Workflow,
    title: "Custom Workflows",
    desc: "Adapt the approval and greenlight processes to match your operations.",
  },
  {
    icon: Globe,
    title: "Global Tax Compliance",
    desc: "GST, VAT, and international tax tracking for cross-border co-productions.",
  },
  {
    icon: Server,
    title: "Dedicated Infrastructure",
    desc: "Private, isolated cloud environments for major studios with custom SLAs.",
  },
  {
    icon: Zap,
    title: "REST API Access",
    desc: "Full API access to integrate CineLedger with your existing accounting tools.",
  },
];

const CSS = `
@keyframes lockFloat {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-20px); }
}
@keyframes lockPulse {
  0%, 100% { boxShadow: 0 0 20px rgba(96,165,250,0.5), inset 0 0 20px rgba(96,165,250,0.5); }
  50%      { boxShadow: 0 0 50px rgba(96,165,250,0.8), inset 0 0 40px rgba(96,165,250,0.8); }
}
@keyframes lockScan {
  0%   { top: -20%; opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { top: 120%; opacity: 0; }
}
@keyframes coreSpin {
  from { transform: perspective(800px) rotateX(70deg) rotate(0deg); }
  to   { transform: perspective(800px) rotateX(70deg) rotate(360deg); }
}
@keyframes coreSpinReverse {
  from { transform: perspective(800px) rotateX(70deg) rotateY(10deg) rotate(0deg); }
  to   { transform: perspective(800px) rotateX(70deg) rotateY(10deg) rotate(-360deg); }
}
`;

function Security3DVisual() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        animation: "lockFloat 6s ease-in-out infinite",
        marginBottom: "3rem",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          background: "radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* 3D Lock Body */}
      <div
        style={{
          position: "relative",
          width: 140,
          height: 120,
          background: "rgba(10,10,10,0.9)",
          border: "2px solid rgba(96,165,250,0.6)",
          borderRadius: "1.5rem",
          animation: "lockPulse 4s infinite",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          transform: "perspective(800px) rotateX(10deg) rotateY(-10deg)",
        }}
      >
        {/* Shackle */}
        <div
          style={{
            position: "absolute",
            top: -80,
            left: "50%",
            transform: "translateX(-50%)",
            width: 80,
            height: 100,
            border: "16px solid rgba(96,165,250,0.4)",
            borderBottom: "none",
            borderRadius: "40px 40px 0 0",
          }}
        />

        {/* Scan line */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: 2,
            background: "rgba(96,165,250,0.8)",
            boxShadow: "0 0 20px rgba(96,165,250,1)",
            animation: "lockScan 3s linear infinite",
          }}
        />

        {/* Keyhole glow */}
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "#60a5fa",
            boxShadow: "0 0 30px #60a5fa",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            width: 8,
            height: 20,
            background: "#60a5fa",
            borderRadius: 4,
            transform: "translateY(5px)",
          }}
        />
      </div>

      {/* Orbiting data rings */}
      <div
        style={{
          position: "absolute",
          width: 280,
          height: 280,
          border: "1px dashed rgba(96,165,250,0.3)",
          borderRadius: "50%",
          transform: "perspective(800px) rotateX(70deg)",
          animation: "coreSpin 10s linear infinite",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -5,
            left: "50%",
            width: 10,
            height: 10,
            background: "#60a5fa",
            borderRadius: "50%",
            boxShadow: "0 0 20px #60a5fa",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          width: 340,
          height: 340,
          border: "1px solid rgba(96,165,250,0.2)",
          borderRadius: "50%",
          transform: "perspective(800px) rotateX(70deg) rotateY(10deg)",
          animation: "coreSpinReverse 15s linear infinite",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: -4,
            right: "20%",
            width: 8,
            height: 8,
            background: "#60a5fa",
            borderRadius: "50%",
            boxShadow: "0 0 15px #60a5fa",
          }}
        />
      </div>
    </div>
  );
}

const S = "Inter, ui-sans-serif, sans-serif";

export function EnterpriseFeatures() {
  return (
    <section
      id="enterprise"
      style={{
        background: "#000",
        padding: "10rem 1.5rem",
        overflow: "hidden",
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <style>{CSS}</style>

      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
            alignItems: "flex-start",
          }}
        >
          {/* Left: Heading + 3D Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "sticky", top: "10rem" }}
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
                fontFamily: S,
              }}
            >
              Enterprise Security
            </span>
            <h2
              style={{
                fontSize: "clamp(2.5rem,4vw,3.5rem)",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                fontFamily: S,
              }}
            >
              Bank-Grade Security.
              <br />
              <span style={{ color: "#3f3f46" }}>Studio-Scale Infrastructure.</span>
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "#71717a",
                fontWeight: 300,
                lineHeight: 1.75,
                marginBottom: "3rem",
                fontFamily: S,
              }}
            >
              Built to meet the compliance, security, and scale requirements of India's largest
              production houses and global co-production studios.
            </p>

            <Security3DVisual />

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {[
                "SOC 2 Type II",
                "GDPR Compliant",
                "SAML 2.0",
                "ISO 27001",
                "99.99% SLA",
                "Zero-Knowledge Vaults",
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "0.375rem 1rem",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                    color: "#a1a1aa",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    fontFamily: S,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Feature cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.25rem",
                  padding: "1.5rem",
                  borderRadius: "1.5rem",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.02)")}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "1rem",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <f.icon style={{ width: 20, height: 20, color: "#fff", opacity: 0.7 }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#fff",
                      marginBottom: "0.375rem",
                      fontFamily: S,
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#71717a",
                      lineHeight: 1.6,
                      fontFamily: S,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
