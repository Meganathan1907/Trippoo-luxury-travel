"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeAboutSnippet() {
  return (
    <section className="relative overflow-hidden bg-sand py-20 sm:py-24 lg:py-32">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-coral/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
        
        {/* IMAGE COLLAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-1"
        >
          {/* Floating Decoration */}
          <div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-full border border-coral/20 lg:block" />

          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            
            {/* Large Image */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group overflow-hidden rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="h-[260px] sm:h-[340px] lg:h-[420px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=80"
                  alt="Travel"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </motion.div>

            {/* Right Side Images */}
            <div className="flex flex-col gap-3 sm:gap-5">
              
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group overflow-hidden rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
              >
                <div className="h-32 sm:h-40 lg:h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=700&q=80"
                    alt="Adventure"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group flex-1 overflow-hidden rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
              >
                <div className="h-[180px] sm:h-[250px] lg:h-[350px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=80"
                    alt="Nature"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* EXPERIENCE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="absolute -bottom-5 right-2 sm:-bottom-8 sm:right-6"
          >
            <div className="rounded-3xl bg-coral px-5 py-4 text-white shadow-[0_15px_50px_rgba(255,107,90,0.35)] backdrop-blur-xl sm:px-7 sm:py-5">
              <p className="font-display text-3xl font-black sm:text-5xl">
                12+
              </p>
              <p className="mt-1 text-xs text-white/80 sm:text-sm">
                Years of Excellence
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          {/* TAGS */}
          <div className="mb-6 flex flex-wrap gap-2">
            {["Travel", "Best Place", "Tourism"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-coral/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-coral shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* HEADING */}
          <h2 className="font-display text-3xl font-black leading-tight text-charcoal sm:text-4xl lg:text-5xl xl:text-6xl">
            Our Story:
            <span className="block text-coral">
              Driven By Wanderlust
            </span>
            Powered By Experience
          </h2>

          {/* TEXT */}
          <p className="mt-6 text-base leading-relaxed text-gray-500 sm:text-lg">
            We believe travel is more than visiting destinations —
            it’s about discovering unforgettable moments, meaningful
            experiences, and stories that stay with you forever.
          </p>

          <p className="mt-5 text-base leading-relaxed text-gray-500 sm:text-lg">
            From luxury escapes to adventurous getaways, we create
            seamless journeys designed with passion, comfort, and
            extraordinary attention to detail.
          </p>

          {/* STATS */}
          <div className="mt-8 grid grid-cols-3 gap-4 border-y border-black/5 py-6">
            <div>
              <h4 className="text-2xl font-black text-charcoal sm:text-3xl">
                5K+
              </h4>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Happy Travelers
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-black text-charcoal sm:text-3xl">
                120+
              </h4>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Destinations
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-black text-charcoal sm:text-3xl">
                12+
              </h4>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Years Experience
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <div className="mt-8">
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 rounded-full bg-coral px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(255,107,90,0.3)] transition-all duration-300 hover:scale-105 hover:bg-[#ff5f52]"
            >
              Learn More About Us

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}