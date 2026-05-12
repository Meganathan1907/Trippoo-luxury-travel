"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeAboutSnippet() {
  return (
    <section className="py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Images collage */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="img-zoom rounded-3xl overflow-hidden h-72">
              <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80" className="w-full h-full object-cover" alt="Travel" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="img-zoom rounded-3xl overflow-hidden h-32">
                <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=400&q=80" className="w-full h-full object-cover" alt="Travel" />
              </div>
              <div className="img-zoom rounded-3xl overflow-hidden flex-1">
                <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80" className="w-full h-full object-cover" alt="Travel" />
              </div>
            </div>
          </div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-6 -right-6 bg-coral text-white rounded-2xl px-6 py-4 shadow-2xl"
          >
            <p className="font-display text-4xl font-bold">12+</p>
            <p className="text-white/80 text-sm">Years of Excellence</p>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-2 mb-6">
            {["Travel", "Best Place", "Tourism"].map(tag => (
              <span key={tag} className="pill bg-white text-coral border border-coral/20 text-xs">{tag}</span>
            ))}
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
            Our Story: Driven By Wanderlust, Powered By Experience
          </h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            We believe that travel is more than just visiting a new place — it's about creating lasting memories. We are committed to providing exceptional service and making every journey seamless and memorable.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Join us and let's turn your travel aspirations into the adventures of a lifetime.
          </p>
          <div className="deco-line mb-8" />
          <Link href="/about" className="btn-primary">
            Learn More About Us <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
