"use client";
import { motion } from "framer-motion";
import { contactOptions } from "@/lib/supportData";

export default function SupportContact() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Reach Us Instantly</p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-charcoal">
            Contact Options
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactOptions.map((opt, i) => (
            <motion.div
              key={opt.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-coral/30 hover:shadow-2xl transition-all duration-300 cursor-pointer text-center overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-coral/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              <div className="relative z-10">
                <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300">{opt.icon}</span>
                <h3 className="font-display font-black text-xl text-charcoal mb-1 group-hover:text-coral transition-colors">{opt.title}</h3>
                <p className="text-sm font-medium text-gray-500 mb-1">{opt.desc}</p>
                <p className="text-xs text-gray-400 mb-6">{opt.sub}</p>
                <button className="w-full py-3 px-5 rounded-2xl bg-sand group-hover:bg-coral text-sm font-bold text-charcoal group-hover:text-white transition-all duration-300">
                  {opt.action}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
