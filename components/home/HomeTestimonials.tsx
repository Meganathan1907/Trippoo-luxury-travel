"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function HomeTestimonials() {
  const [index, setIndex] = useState(0);

  // ───── AUTO SLIDE (3 seconds) ─────
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // Manual controls
  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-12">
          <p className="section-label mb-3">Real Stories</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal">
            Traveler Stories & Reviews
          </h2>
        </div>

        {/* ───────── DESKTOP GRID ───────── */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-sand rounded-3xl p-6 hover:shadow-xl transition-shadow "
            >
              <div className="flex items-center justify-center">
                 <img
                src={t.avatar.replace("w=100", "w=400")}
                className="w-40 h-40 object-cover rounded-full mb-5 "
                alt={t.name}
              />
              </div>
             

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={13} fill="#F4A261" className="text-gold" />
                ))}
              </div>

              <p className="text-sm italic mb-5 text-charcoal">
                "{t.text}"
              </p>

              <p className="font-semibold text-sm">{t.name}</p>
              <p className="text-xs text-gray-400">
                {t.country} · {t.package}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ───────── MOBILE CAROUSEL ───────── */}
        <div className="md:hidden relative">

          {/* CARD */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[index].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-sand rounded-3xl p-6"
              >
                <img
                  src={testimonials[index].avatar.replace("w=100", "w=400")}
                  className="w-full h-50 object-cover rounded-2xl mb-5"
                  alt={testimonials[index].name}
                />

                <div className="flex gap-1 mb-4">
                  {Array.from({
                    length: testimonials[index].rating,
                  }).map((_, j) => (
                    <Star
                      key={j}
                      size={13}
                      fill="#F4A261"
                      className="text-gold"
                    />
                  ))}
                </div>

                <p className="text-sm italic mb-5 text-charcoal">
                  "{testimonials[index].text}"
                </p>

                <p className="font-semibold text-sm">
                  {testimonials[index].name}
                </p>

                <p className="text-xs text-gray-400">
                  {testimonials[index].country} ·{" "}
                  {testimonials[index].package}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* NAV BUTTONS */}
          <div className="flex justify-between mt-4">
            <button
              onClick={prev}
              className="px-4 py-2 bg-gray-100 rounded-xl text-sm"
            >
              Prev
            </button>

            <button
              onClick={next}
              className="px-4 py-2 bg-coral text-white rounded-xl text-sm"
            >
              Next
            </button>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all rounded-full ${
                  i === index
                    ? "bg-coral w-6 h-2"
                    : "bg-gray-300 w-2 h-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}