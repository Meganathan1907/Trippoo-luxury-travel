"use client";
import { motion } from "framer-motion";
import { partners, sustainabilityStats } from "@/lib/aboutData";
import { fadeUp } from "@/lib/motionHelpers";

export default function AboutPartners() {
  return (
    <section className="py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Trust & Transparency</p>
          <h2 className="font-display text-5xl md:text-6xl font-black text-charcoal">
            Partners &<br />Certifications
          </h2>
          <p className="text-gray-500 mt-5 max-w-xl mx-auto">
            Every partnership we maintain reflects a commitment to quality, safety, and
            sustainable adventure. We don't partner with just anyone.
          </p>
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white rounded-2xl p-6 text-center border-2 border-gray-100 hover:border-coral/30 hover:shadow-xl transition-all group card-lift"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform inline-block">
                {partner.logo}
              </div>
              <p className="font-bold text-charcoal text-sm mb-1">{partner.name}</p>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-coral bg-coral/10 px-2 py-0.5 rounded-full">
                {partner.type}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Sustainability pledge banner */}
        <motion.div {...fadeUp(0.2)} className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=60"
              alt="Forest"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-green-900/80" />
          </div>

          <div className="relative z-10 p-12 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Copy */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-400/20 border border-green-400/30 text-green-300 text-xs font-semibold mb-5">
                🌿 Sustainability Pledge
              </span>
              <h3 className="font-display text-4xl font-black text-white mb-4">
                We Offset 110%<br />of Every Trip's Carbon
              </h3>
              <p className="text-white/65 leading-relaxed">
                Partnered with Gold Standard certified projects across India, Kenya and Peru
                — reforestation, clean cookstoves, and renewable energy — Trippoo ensures
                your adventure gives back more than it takes.
              </p>
            </div>

            {/* Stats mini grid */}
            <div className="grid grid-cols-2 gap-4">
              {sustainabilityStats.map(item => (
                <div
                  key={item.label}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/15 text-center"
                >
                  <p className="font-display text-3xl font-black text-green-300 mb-1">{item.value}</p>
                  <p className="text-white/60 text-xs">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
