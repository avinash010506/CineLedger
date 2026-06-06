import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — CineLedger" },
      {
        name: "description",
        content:
          "Talk to our studio team — demos, partnerships and press. We reply within 4 hours.",
      },
      { property: "og:title", content: "Contact — CineLedger" },
      {
        property: "og:description",
        content: "Book a 30-minute walkthrough. We'll model your last release in real time.",
      },
    ],
  }),
});

function ContactPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        fontFamily: "'Inter', ui-sans-serif, -apple-system, sans-serif",
      }}
    >
      <Nav />
      <div style={{ paddingTop: "4rem" }}>
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
