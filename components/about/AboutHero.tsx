"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Mountain, ArrowRight, Play } from "lucide-react";
import { fadeUp } from "@/lib/motionHelpers";

export default function AboutHero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY     = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
        <img
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=85"
          alt="Adventure hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }}
        />
      </motion.div>

      {/* Floating side labels */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2"
      >
        {["Adventure", "Culture", "Wilderness"].map((tag, i) => (
          <span
            key={tag}
            style={{ animationDelay: `${i * 0.5}s` }}
            className="float-badge inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-medium"
          >
            ✦ {tag}
          </span>
        ))}
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-20"
        style={{ opacity: heroOpacity }}
      >
        <motion.div {...fadeUp(0.2)}>
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-coral/20 border border-coral/40 text-coral-light text-xs font-semibold mb-6 backdrop-blur-sm">
            <Mountain size={12} /> Est. 2012 · Born on a Mountain
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.35)}
          className="font-display text-6xl md:text-8xl font-black text-white leading-[1.0] mb-6 max-w-5xl"
        >
          We Don't Sell<br />
          <span className="italic text-coral-light">Trips.</span>
          <br />We Build
          <span className="italic text-gold"> Legends.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.5)}
          className="text-white/65 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
        >
          Trippoo was born at 5,400 m altitude when our founder realised the travel industry
          was playing it safe. We don't. Every package is designed to push your edge —
          then bring you home with stories you'll tell forever.
        </motion.p>

        <motion.div {...fadeUp(0.65)} className="flex flex-wrap gap-4 justify-center">
          <Link href="/packages" className="btn-primary text-base">
            Start Your Adventure <ArrowRight size={18} />
          </Link>
          <button className="flex items-center gap-3 px-7 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold hover:bg-white/20 transition-all">
            <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center shrink-0">
              <Play size={13} fill="var(--coral)" className="text-coral ml-0.5" />
            </span>
            Our Story in 90s
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
