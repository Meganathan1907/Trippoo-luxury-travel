"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { fadeUp } from "@/lib/motionHelpers";

export default function AboutStory() {
  return (
    <section className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* ── IMAGE COLLAGE ── */}
        <motion.div {...fadeUp(0)} className="relative">
          <div className="grid grid-cols-2 gap-4">
            {/* Tall left image */}
            <div className="img-zoom rounded-3xl overflow-hidden h-80">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80"
                alt="Mountain summit"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Two stacked right images */}
            <div className="flex flex-col gap-4 pt-8">
              <div className="img-zoom rounded-3xl overflow-hidden h-40">
                <img
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=400&q=80"
                  alt="Hiking"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="img-zoom rounded-3xl overflow-hidden flex-1">
                <img
                  src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=80"
                  alt="Adventure"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Founder quote card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-8 -right-4 lg:-right-8 bg-white rounded-3xl p-6 shadow-2xl shadow-black/10 max-w-xs border border-gray-100"
          >
            <Quote size={24} className="text-coral mb-3" />
            <p className="text-charcoal text-sm font-medium leading-relaxed italic mb-4">
              "The best view comes after the hardest climb. We built Trippoo so more people
              get to experience that moment."
            </p>
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                alt="Founder"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-charcoal text-sm">Arjun Mehta</p>
                <p className="text-gray-400 text-xs">Founder, Trippoo</p>
              </div>
            </div>
          </motion.div>

          {/* 12 years badge */}
          <div className="absolute -top-5 -left-5 w-20 h-20 bg-coral rounded-2xl flex items-center justify-center rotate-6 shadow-xl">
            <div className="text-center -rotate-6">
              <p className="text-white font-black text-xl leading-none">12</p>
              <p className="text-white/80 text-xs">Years</p>
            </div>
          </div>
        </motion.div>

        {/* ── STORY TEXT ── */}
        <motion.div {...fadeUp(0.15)}>
          <p className="section-label mb-4">Our Story</p>
          <h2 className="font-display text-5xl md:text-6xl font-black text-charcoal leading-tight mb-8">
            Born at<br />5,400 Metres<br />
            <span className="text-coral italic">Above Sea Level</span>
          </h2>

          <p className="text-gray-500 leading-relaxed mb-5 text-base">
            In 2012, Arjun Mehta stood at the summit of Stok Kangri in Ladakh, India —
            exhausted, exhilarated, and completely changed. He'd booked the trip through
            three different agencies, navigated contradictory information, and nearly given
            up twice before even reaching base camp.
          </p>
          <p className="text-gray-500 leading-relaxed mb-5 text-base">
            He came home and built Trippoo. One platform, end-to-end — from inspiration to
            summit. No confusing middlemen. No vague itineraries. Just meticulously designed
            adventures, led by people who've actually done them.
          </p>
          <p className="text-gray-500 leading-relaxed mb-10 text-base">
            Today, 50,000+ adventurers across 120 destinations later, the mission hasn't
            changed: make extraordinary travel accessible without stripping out the
            extraordinary.
          </p>

          {/* Destination tags */}
          <div className="flex flex-wrap gap-3 mb-10">
            {["Patagonia", "Himalayas", "Amazon", "Sahara", "Arctic", "Dolomites"].map(place => (
              <span
                key={place}
                className="px-4 py-2 bg-sand rounded-full text-sm font-medium text-charcoal border border-gold/20"
              >
                📍 {place}
              </span>
            ))}
          </div>

          <div className="deco-line" />
        </motion.div>
      </div>
    </section>
  );
}
