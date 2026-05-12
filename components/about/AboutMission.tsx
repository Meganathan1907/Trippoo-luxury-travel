"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Target, Compass } from "lucide-react";
import { values } from "@/lib/aboutData";
import { fadeUp } from "@/lib/motionHelpers";

export default function AboutMission() {
  const [activeValue, setActiveValue] = useState(0);

  return (
    <section className="py-28 bg-charcoal relative overflow-hidden">
      {/* Bg image texture */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=40"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-charcoal/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="section-label mb-4 text-coral-light">What Drives Us</p>
          <h2 className="font-display text-5xl md:text-6xl font-black text-white">
            Mission & Vision
          </h2>
        </div>

        {/* Mission + Vision cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <motion.div
            {...fadeUp(0)}
            className="relative p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden group hover:border-coral/40 transition-all"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-coral/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
            <Target size={36} className="text-coral mb-6" />
            <h3 className="font-display text-3xl font-black text-white mb-4">Our Mission</h3>
            <p className="text-white/60 leading-relaxed text-base">
              To design and deliver the world's most thrilling, safe, and responsibly crafted
              adventure travel experiences — making the extraordinary accessible to every
              curious soul willing to step off the beaten path.
            </p>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-white/40 text-sm italic">"Adventure is not a luxury. It's a necessity."</p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            {...fadeUp(0.15)}
            className="relative p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden group hover:border-gold/40 transition-all"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
            <Compass size={36} className="text-gold mb-6" />
            <h3 className="font-display text-3xl font-black text-white mb-4">Our Vision</h3>
            <p className="text-white/60 leading-relaxed text-base">
              A world where every person has at least one life-defining adventure — and where
              that adventure leaves the destination more beautiful, the local community
              stronger, and the traveller permanently transformed.
            </p>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-white/40 text-sm italic">"Leave the trail better than you found it."</p>
            </div>
          </motion.div>
        </div>

        {/* Core values — interactive toggle */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <motion.button
              key={v.title}
              {...fadeUp(i * 0.1)}
              onClick={() => setActiveValue(i)}
              className={`text-left p-6 rounded-2xl border transition-all duration-300 ${
                activeValue === i
                  ? "bg-coral border-coral shadow-2xl shadow-coral/30 scale-105"
                  : "bg-white/5 border-white/10 hover:border-white/25"
              }`}
            >
              <v.icon
                size={28}
                className={`mb-4 ${activeValue === i ? "text-white" : "text-coral"}`}
              />
              <h4 className={`font-bold text-base mb-2 ${activeValue === i ? "text-white" : "text-white/90"}`}>
                {v.title}
              </h4>
              <p className={`text-sm leading-relaxed ${activeValue === i ? "text-white/85" : "text-white/50"}`}>
                {v.desc}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
