"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Clock, Star, ArrowRight, Users } from "lucide-react";
import { Package } from "@/lib/data";

export default function PackageCard({ pkg, index = 0 }: { pkg: Package; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="card-lift group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100"
    >
      {/* Image */}
      <div className="img-zoom relative h-56 bg-gray-100">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Tag */}
        {pkg.tag && (
          <div className="absolute top-4 left-4">
            <span className="pill bg-coral text-white text-xs font-semibold shadow-lg">
              {pkg.tag}
            </span>
          </div>
        )}

        {/* Rating */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5">
          <Star size={12} fill="#F4A261" className="text-gold" />
          <span className="text-xs font-bold text-charcoal">{pkg.rating}</span>
          <span className="text-xs text-gray-400">({(pkg.reviews / 1000).toFixed(1)}k)</span>
        </div>

        {/* Price on image bottom */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div>
            <p className="text-white/70 text-xs mb-0.5 line-through">${pkg.originalPrice}/person</p>
            <p className="text-white font-bold text-xl">${pkg.price}<span className="text-sm font-normal">/person</span></p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-lg text-charcoal mb-2 leading-tight group-hover:text-coral transition-colors">
          {pkg.title}
        </h3>

        <div className="flex items-center gap-1.5 text-gray-500 mb-3">
          <MapPin size={13} className="text-coral" />
          <span className="text-sm">{pkg.location}, {pkg.country}</span>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1.5 text-gray-500">
            <Clock size={13} className="text-coral" />
            <span className="text-xs">{pkg.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500">
            <Users size={13} className="text-coral" />
            <span className="text-xs">{pkg.category.filter(c => c !== "All Place").join(", ")}</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{pkg.description}</p>

        <Link
          href={`/packages/${pkg.id}`}
          className="flex items-center justify-between w-full px-5 py-3 rounded-2xl bg-sand hover:bg-coral group/btn transition-all duration-300"
        >
          <span className="text-sm font-semibold text-charcoal group-hover/btn:text-white transition-colors">
            View Package
          </span>
          <ArrowRight size={16} className="text-coral group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
        </Link>
      </div>
    </motion.div>
  );
}
