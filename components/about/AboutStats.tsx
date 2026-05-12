"use client";
import { motion } from "framer-motion";
import { aboutStats } from "@/lib/aboutData";

export default function AboutStats() {
  return (
    <section className="bg-charcoal py-12 relative overflow-hidden">
      {/* Diagonal stripe texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #FF4D6D 0, #FF4D6D 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 relative">
        {aboutStats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center group"
          >
            <div className="w-10 h-10 bg-coral/15 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-coral/30 transition-colors">
              <s.icon size={18} className="text-coral" />
            </div>
            <p className="font-display text-4xl font-black text-white mb-1">{s.value}</p>
            <p className="text-white/50 text-sm">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
