"use client";
import { motion } from "framer-motion";
import { Phone, Clock } from "lucide-react";
import { emergencyContacts } from "@/lib/supportData";

export default function SupportEmergency() {
  return (
    <section className="py-20 bg-sand">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold mb-6">
              🆘 Emergency Support
            </span>
            <h3 className="font-display text-4xl font-black text-charcoal mb-4 leading-tight">
              In an Emergency?<br />We Answer 24/7.
            </h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              If you're in the field and facing an emergency — medical, safety, or otherwise —
              call your regional line directly. Our on-ground team responds immediately, around the clock, every day of the year.
            </p>
            <div className="flex items-center gap-3 text-sm text-charcoal font-medium">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Clock size={14} className="text-green-600" />
              </div>
              Average emergency response time: <strong className="text-green-600">under 3 minutes</strong>
            </div>
          </motion.div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {emergencyContacts.map((c, i) => (
              <motion.div
                key={c.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-coral/30 hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 bg-coral/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-coral transition-colors">
                  <Phone size={16} className="text-coral group-hover:text-white transition-colors" />
                </div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{c.region}</p>
                <p className="font-bold text-charcoal mb-1 group-hover:text-coral transition-colors">{c.number}</p>
                <span className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded-full font-semibold">
                  {c.hours}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
