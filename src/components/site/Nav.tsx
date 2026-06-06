import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Clapperboard, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Overview", href: "/#features" },
  { label: "Produce", href: "/#produce" },
  { label: "Finance", href: "/#finance" },
  { label: "Distribute", href: "/#distribute" },
  { label: "AI Analytics", href: "/#ai-analytics" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/85 backdrop-blur-2xl border-b border-white/[0.06] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
            <Clapperboard className="w-4 h-4 text-black" strokeWidth={2} />
          </div>
          <span
            className="font-bold text-white text-lg tracking-tight"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Cine<span className="text-zinc-500">Ledger</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-500 hover:text-white transition-colors duration-200"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-4">
          <Link
            to="/app"
            className="hidden sm:block text-sm font-medium text-zinc-500 hover:text-white transition-colors"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="rounded-full bg-white text-black text-sm font-semibold px-5 py-2.5 hover:bg-zinc-100 transition-colors"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Book Demo
          </Link>
          <button
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full inset-x-0 bg-black/95 backdrop-blur-2xl border-b border-white/[0.06] px-6 pb-6 pt-4"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base font-medium text-zinc-400 hover:text-white transition-colors py-1"
                  style={{ fontFamily: "Inter, sans-serif" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
