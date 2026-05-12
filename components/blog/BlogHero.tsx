"use client";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative pt-32 pb-24 bg-charcoal overflow-hidden">
      {/* bg texture */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=50" className="w-full h-full object-cover opacity-15" alt="" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 to-charcoal" />
      </div>
      {/* decorative rings */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full border border-white/5 animate-[spin_40s_linear_infinite]" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full border border-white/5 animate-[spin_25s_linear_infinite_reverse]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-coral/20 border border-coral/30 text-coral-light text-xs font-semibold mb-6">
            <BookOpen size={12} /> Stories, Tips & Insider Guides
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
        >
          The Trippoo<br />
          <span className="italic text-coral-light">Journal</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Real guides from real adventurers. No sponsored fluff. Just honest destination breakdowns,
          packing secrets, and the insider knowledge our guides have gathered across 120+ countries.
        </motion.p>
        {/* scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="mt-14 flex flex-col items-center gap-2">
          <span className="text-white/30 text-xs tracking-widest uppercase">Explore stories</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
