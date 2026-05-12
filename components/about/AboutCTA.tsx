"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mountain, ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/motionHelpers";

export default function AboutCTA() {
  return (
    <section className="py-28 bg-charcoal relative overflow-hidden">
      {/* Faint bg photo */}
      <div className="absolute inset-0 opacity-15">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=40"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal" />

      {/* Decorative spinning rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 animate-[spin_40s_linear_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5 animate-[spin_25s_linear_infinite_reverse]" />

      <motion.div
        {...fadeUp(0)}
        className="relative z-10 text-center max-w-3xl mx-auto px-6"
      >
        <Mountain size={48} className="text-coral mx-auto mb-6" />
        <h2 className="font-display text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          Your Summit<br />Is Waiting.
        </h2>
        <p className="text-white/60 text-lg mb-10">
          120+ destinations. 50,000 adventurers. Zero boring trips.<br />
          What are you waiting for?
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/packages" className="btn-primary text-base">
            Browse Adventures <ArrowRight size={18} />
          </Link>
          <Link
            href="/packages"
            className="flex items-center gap-2 px-7 py-4 rounded-full border-2 border-white/20 text-white font-semibold hover:border-white/40 transition-all text-base"
          >
            View All Destinations
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
