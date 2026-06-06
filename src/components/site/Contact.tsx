import { ArrowRight, Mail, Phone, MapPin, MessageSquare, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "@tanstack/react-router";

const F = "'Inter', ui-sans-serif, -apple-system, sans-serif";

const inputStyle = {
  width: "100%",
  borderRadius: "0.75rem",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  padding: "0.75rem 1rem",
  fontSize: "0.9375rem",
  color: "#fff",
  outline: "none",
  fontFamily: F,
  transition: "border-color 0.15s",
  display: "block",
};

const contactDetails = [
  {
    icon: Mail,
    label: "Sales & Demos",
    value: "sales@cineledger.studio",
    sub: "Reply within 4 hours",
  },
  { icon: Phone, label: "Phone (India)", value: "+91 98765 43210", sub: "Mon–Fri, 9am–7pm IST" },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Bandra Kurla Complex, Mumbai",
    sub: "Maharashtra, India",
  },
  { icon: Clock, label: "Support SLA", value: "< 4 hrs (Studio plan)", sub: "< 1 hr Enterprise" },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    studio: "",
    phone: "",
    message: "",
    interest: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        background: "#000",
        padding: "8rem 1.5rem",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: "5rem" }}
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
            Get in touch
          </span>
          <h2
            style={{
              fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.05em",
              lineHeight: 0.92,
              marginBottom: "1.25rem",
              fontFamily: F,
            }}
          >
            Let's run your
            <br />
            <span style={{ color: "#3f3f46" }}>next release.</span>
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "#71717a",
              fontWeight: 300,
              lineHeight: 1.75,
              maxWidth: "32rem",
              margin: "0 auto",
              fontFamily: F,
            }}
          >
            Book a 30-minute walkthrough. We'll model your last release in real time and show you
            exactly how CineLedger fits your studio.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "4rem",
            alignItems: "flex-start",
          }}
        >
          {/* Left — contact details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                marginBottom: "3rem",
              }}
            >
              {contactDetails.map((c, i) => (
                <div
                  key={c.label}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                    padding: "1.25rem",
                    borderRadius: "1.25rem",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "0.75rem",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <c.icon style={{ width: 16, height: 16, color: "#71717a" }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: "#52525b",
                        marginBottom: "0.25rem",
                        fontFamily: F,
                      }}
                    >
                      {c.label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color: "#fff",
                        marginBottom: "0.125rem",
                        fontFamily: F,
                      }}
                    >
                      {c.value}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#52525b", fontFamily: F }}>
                      {c.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* AI hint */}
            <div
              style={{
                padding: "1.25rem",
                borderRadius: "1.25rem",
                background: "rgba(165,180,252,0.05)",
                border: "1px solid rgba(165,180,252,0.12)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.625rem",
                }}
              >
                <Sparkles style={{ width: 13, height: 13, color: "#a5b4fc" }} />
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#a5b4fc",
                    fontFamily: F,
                  }}
                >
                  Quick Demo
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "#71717a",
                  lineHeight: 1.6,
                  marginBottom: "0.875rem",
                  fontFamily: F,
                }}
              >
                Already want to see the dashboard? Explore the live demo right now — no sign-up
                needed.
              </p>
              <Link
                to="/app"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  fontSize: "0.8125rem",
                  color: "#a5b4fc",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontFamily: F,
                }}
              >
                Explore Dashboard <ArrowRight style={{ width: 13, height: 13 }} />
              </Link>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: "2.5rem",
              borderRadius: "2rem",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "rgba(52,211,153,0.12)",
                    border: "1px solid rgba(52,211,153,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                  }}
                >
                  <MessageSquare style={{ width: 24, height: 24, color: "#34d399" }} />
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "-0.03em",
                    marginBottom: "0.75rem",
                    fontFamily: F,
                  }}
                >
                  Message sent!
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "#71717a",
                    lineHeight: 1.7,
                    maxWidth: "24rem",
                    margin: "0 auto",
                    fontFamily: F,
                  }}
                >
                  Our studio team will reach out within 4 hours to book your walkthrough.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "-0.03em",
                    marginBottom: "0.375rem",
                    fontFamily: F,
                  }}
                >
                  Request a demo
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#52525b",
                    marginBottom: "1.75rem",
                    fontFamily: F,
                  }}
                >
                  We'll get back to you within 4 hours.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
                    <label>
                      <span
                        style={{
                          fontSize: "0.6875rem",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.15em",
                          color: "#52525b",
                          display: "block",
                          marginBottom: "0.5rem",
                          fontFamily: F,
                        }}
                      >
                        Full name *
                      </span>
                      <input
                        required
                        type="text"
                        placeholder="Anaya Rao"
                        value={form.name}
                        onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.25)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                      />
                    </label>
                    <label>
                      <span
                        style={{
                          fontSize: "0.6875rem",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.15em",
                          color: "#52525b",
                          display: "block",
                          marginBottom: "0.5rem",
                          fontFamily: F,
                        }}
                      >
                        Phone
                      </span>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.25)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                      />
                    </label>
                  </div>

                  <label>
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: "#52525b",
                        display: "block",
                        marginBottom: "0.5rem",
                        fontFamily: F,
                      }}
                    >
                      Work email *
                    </span>
                    <input
                      required
                      type="email"
                      placeholder="producer@studio.com"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.25)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                    />
                  </label>

                  <label>
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: "#52525b",
                        display: "block",
                        marginBottom: "0.5rem",
                        fontFamily: F,
                      }}
                    >
                      Studio / Company *
                    </span>
                    <input
                      required
                      type="text"
                      placeholder="Lumen Pictures"
                      value={form.studio}
                      onChange={(e) => setForm((p) => ({ ...p, studio: e.target.value }))}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.25)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                    />
                  </label>

                  <label>
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: "#52525b",
                        display: "block",
                        marginBottom: "0.5rem",
                        fontFamily: F,
                      }}
                    >
                      I'm interested in
                    </span>
                    <select
                      value={form.interest}
                      onChange={(e) => setForm((p) => ({ ...p, interest: e.target.value }))}
                      style={{ ...inputStyle, cursor: "pointer" }}
                    >
                      <option value="">Select a topic…</option>
                      <option>Full product demo</option>
                      <option>Budget & expense tracking</option>
                      <option>Investor management</option>
                      <option>AI analytics</option>
                      <option>Enterprise / custom plan</option>
                      <option>Press / partnership</option>
                    </select>
                  </label>

                  <label>
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: "#52525b",
                        display: "block",
                        marginBottom: "0.5rem",
                        fontFamily: F,
                      }}
                    >
                      Tell us about your slate
                    </span>
                    <textarea
                      rows={4}
                      placeholder="What types of films do you produce? How many titles per year? Any pain points with current tools?"
                      value={form.message}
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      style={{ ...inputStyle, resize: "vertical" as const, minHeight: "7rem" }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.25)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                    />
                  </label>

                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      borderRadius: 999,
                      background: "#fff",
                      color: "#000",
                      padding: "0.9375rem",
                      fontSize: "0.9375rem",
                      fontWeight: 700,
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      fontFamily: F,
                      transition: "background 0.15s",
                      marginTop: "0.25rem",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.background = "#e4e4e7")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.background = "#fff")
                    }
                  >
                    Request demo <ArrowRight style={{ width: 16, height: 16 }} />
                  </button>

                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "0.75rem",
                      color: "#3f3f46",
                      fontFamily: F,
                      marginTop: "0.25rem",
                    }}
                  >
                    No credit card required · Response within 4 hours
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
