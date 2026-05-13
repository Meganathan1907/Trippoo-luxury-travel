"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Phone } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["Destinations", "Trips", "About", "Blog", "Support"];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-6 flex items-center justify-between rounded-2xl transition-all duration-300 ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5"
              : "bg-transparent"
          }`}
          style={{ padding: scrolled ? "12px 28px" : "0 0" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className={`font-display text-2xl font-bold ${scrolled ? "text-charcoal" : "text-coral"}`}>
              Tripp
            </span>
            <span className={`font-display text-2xl font-bold ${scrolled ? "text-coral" : "text-white"}`}>
              oo
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l}
                href={l === "Destinations" || l === "Trips" ? "/packages" : l === "About" ? "/about" : l === "Blog" ? "/blog" : l === "Support" ? "/support" : "#"}
                className={`text-sm font-medium transition-colors duration-200 hover:text-coral ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
              >
                {l}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+18801746030416"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? "text-charcoal" : "text-white/80"
              } hover:text-coral`}
            >
              <Phone size={14} />
             +91 9524723017
            </a>
            <Link href="/packages" className="btn-primary text-sm" style={{ padding: "10px 22px" }}>
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-xl transition-colors ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {links.map((l, i) => (
              <motion.div
                key={l}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={l === "Destinations" || l === "Trips" ? "/packages" : l === "About" ? "/about" : l === "Blog" ? "/blog" : l === "Support" ? "/support" : "#"}
                  className="font-display text-3xl font-bold text-charcoal hover:text-coral transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {l}
                </Link>
              </motion.div>
            ))}
            <Link href="/packages" className="btn-primary mt-4" onClick={() => setMenuOpen(false)}>
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
