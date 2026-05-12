"use client";
import { motion } from "framer-motion";
import { Shield, TrendingUp, Award } from "lucide-react";

const reasons = [
  {
    icon: Shield, num: "01", title: "Trusted Experience",
    desc: "We've curated unforgettable travel experiences that cater to every taste, budget and adventure level.",
  },
  {
    icon: TrendingUp, num: "02", title: "Best Price Guarantee",
    desc: "Save more with our competitive prices, special discounts, and exclusive member-only offers.",
  },
  {
    icon: Award, num: "03", title: "Customer Satisfaction",
    desc: "Our growing reviews and loyal clients speak for our dedication to delivering 5-star travel moments.",
  },
];

export default function HomeWhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Why Choose Trippoo</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal">
            Why Travellers Trust Us
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            We believe every child holds incredible potential. We're dedicated to making travel accessible, joyful and memorable for all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map(({ icon: Icon, num, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative p-8 rounded-3xl border-2 border-gray-100 hover:border-coral/30 hover:shadow-xl transition-all group"
            >
              <div className="absolute top-6 right-6 font-display text-6xl font-bold text-gray-100 group-hover:text-coral/10 transition-colors">
                {num}
              </div>
              <div className="w-14 h-14 bg-sand rounded-2xl flex items-center justify-center mb-5 group-hover:bg-coral transition-colors">
                <Icon size={24} className="text-coral group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-charcoal mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
