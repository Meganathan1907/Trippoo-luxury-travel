"use client";
import { motion } from "framer-motion";
import { stats } from "@/lib/data";

export default function HomeStatsStrip() {
  return (
    <section className="bg-charcoal py-10">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-display text-3xl font-bold text-coral mb-1">{s.value}</p>
            <p className="text-white/60 text-sm">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
