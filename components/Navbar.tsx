"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const links = [
    { name: "Destinations", href: "/packages" },
    { name: "Trips", href: "/packages" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Support", href: "/support" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 lg:px-8 pt-3"
      >
        <div
          className={`mx-auto max-w-7xl transition-all duration-500 rounded-2xl border ${
            scrolled
              ? "bg-white/80 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-white/40"
              : "bg-transparent border-transparent"
          }`}
        >
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled
                ? "px-4 py-3 sm:px-6"
                : "px-2 py-2 sm:px-4 sm:py-3"
            }`}
          >
            {/* LOGO */}
            <Link
              href="/"
              className="relative z-50 flex items-center select-none"
            >
              <span
                className={`font-display text-2xl sm:text-3xl font-black tracking-tight transition-colors ${
                  scrolled ? "text-charcoal" : "text-coral"
                }`}
              >
                Tripp
              </span>

              <span
                className={`font-display text-2xl sm:text-3xl font-black tracking-tight transition-colors ${
                  scrolled ? "text-coral" : "text-white"
                }`}
              >
                oo
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium tracking-wide transition-all duration-300 hover:text-coral after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-coral after:transition-all hover:after:w-full ${
                    scrolled ? "text-charcoal" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* DESKTOP CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919524723017"
                className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:text-coral ${
                  scrolled ? "text-charcoal/80" : "text-white/80"
                }`}
              >
                <Phone size={15} />
                +91 9524723017
              </a>

              <Link
                href="/packages"
                className="rounded-full bg-coral px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-coral/30 transition-all duration-300 hover:scale-105 hover:bg-[#ff5f52]"
              >
                Book Now
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`relative z-50 flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 lg:hidden ${
                scrolled
                  ? "bg-black/5 text-charcoal"
                  : "bg-white/10 text-white backdrop-blur-md"
              }`}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* MENU PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 24,
                stiffness: 220,
              }}
              className="fixed right-0 top-0 z-50 h-screen w-[82%] max-w-sm overflow-y-auto bg-white shadow-2xl lg:hidden"
            >
              <div className="flex min-h-screen flex-col px-6 pt-24 pb-10">
                {/* NAV LINKS */}
                <div className="flex flex-col gap-2">
                  {links.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: i * 0.08,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-center justify-between rounded-2xl px-5 py-4 text-lg font-semibold text-charcoal transition-all duration-300 hover:bg-coral/10 hover:text-coral"
                      >
                        {link.name}

                        <span className="translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                          →
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* CTA SECTION */}
                <div className="mt-auto pt-10">
                  <a
                    href="tel:+919524723017"
                    className="mb-4 flex items-center justify-center gap-2 rounded-2xl border border-gray-200 px-5 py-4 text-sm font-medium text-charcoal transition-all hover:border-coral hover:text-coral"
                  >
                    <Phone size={16} />
                    +91 9524723017
                  </a>

                  <Link
                    href="/packages"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center rounded-2xl bg-coral px-5 py-4 text-base font-semibold text-white shadow-xl shadow-coral/30 transition-all duration-300 hover:scale-[1.02] hover:bg-[#ff5f52]"
                  >
                    Book Your Trip
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}