"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function HomeTestimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="section-label mb-3">Real Stories</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal">
            Traveler Stories & Reviews
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-sand rounded-3xl p-6 hover:shadow-xl transition-shadow"
            >
              <div className="img-zoom rounded-2xl overflow-hidden h-40 mb-5">
                <img src={t.avatar.replace("w=100", "w=400")} className="w-full h-full object-cover" alt={t.name} />
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={13} fill="#F4A261" className="text-gold" />
                ))}
              </div>
              <p className="text-charcoal text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div>
                <p className="font-semibold text-charcoal text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.country} · {t.package}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
