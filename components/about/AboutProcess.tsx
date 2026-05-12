"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { process } from "@/lib/aboutData";
import { fadeUp } from "@/lib/motionHelpers";

export default function AboutProcess() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Decorative centre line */}
      <div className="absolute left-1/2 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="section-label mb-4">The Process</p>
          <h2 className="font-display text-5xl md:text-6xl font-black text-charcoal">
            How It Works
          </h2>
          <p className="text-gray-400 mt-5 max-w-xl mx-auto text-base">
            From your first search to your last summit — here's exactly how Trippoo turns a
            spark of wanderlust into the adventure of a lifetime.
          </p>
        </div>

        {/* Steps grid */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-20 lg:gap-y-16">
          {process.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-6 group"
            >
              {/* Icon + step number */}
              <div className="shrink-0">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}22, ${step.color}44)`,
                    border: `2px solid ${step.color}33`,
                  }}
                >
                  <step.icon size={26} style={{ color: step.color }} />
                </div>
                <div className="mt-3 ml-6 font-display text-5xl font-black text-gray-100 leading-none">
                  {step.step}
                </div>
              </div>

              {/* Content */}
              <div className="pt-2">
                <h3 className="font-display text-2xl font-black text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                {/* Animated underline on hover */}
                <div
                  className="mt-4 h-0.5 w-0 group-hover:w-16 transition-all duration-500 rounded-full"
                  style={{ background: step.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...fadeUp(0.2)} className="mt-20 text-center">
          <Link href="/packages" className="btn-primary text-base">
            Find My Adventure <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
