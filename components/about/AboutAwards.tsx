"use client";
import { motion } from "framer-motion";
import { awards } from "@/lib/aboutData";
import { fadeUp } from "@/lib/motionHelpers";

export default function AboutAwards() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* ── LEFT: headline + counters ── */}
          <motion.div {...fadeUp(0)}>
            <p className="section-label mb-4">Recognition</p>
            <h2 className="font-display text-5xl md:text-6xl font-black text-charcoal mb-6 leading-tight">
              Awards &<br />
              <span className="text-coral">Recognition</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              We don't chase awards. But when the industry's leading voices recognise what
              we're building, it validates every early morning and every late-night itinerary
              revision.
            </p>
            <div className="flex gap-8">
              {[
                { value: "6",  label: "Major Awards" },
                { value: "4",  label: "Years Running" },
                { value: "#1", label: "Adventure Platform" },
              ].map(item => (
                <div key={item.label}>
                  <p className="font-display text-4xl font-black text-charcoal">{item.value}</p>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: awards list ── */}
          <div className="space-y-4">
            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-5 p-5 rounded-2xl border-2 border-gray-100 hover:border-coral/30 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-sand rounded-2xl flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
                  {award.icon}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-charcoal group-hover:text-coral transition-colors">
                    {award.title}
                  </p>
                  <p className="text-gray-400 text-sm">{award.body}</p>
                </div>
                <span className="text-xs font-bold text-coral bg-coral/10 px-3 py-1.5 rounded-full shrink-0">
                  {award.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
