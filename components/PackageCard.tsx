"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Clock, Star, ArrowRight, Users } from "lucide-react";
import { Package } from "@/lib/data";

export default function PackageCard({
  pkg,
  index = 0,
}: {
  pkg: Package;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -8, scale: 1.01 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Tag */}
        {pkg.tag && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-coral text-white shadow-lg animate-pulse">
              {pkg.tag}
            </span>
          </div>
        )}

        {/* Rating */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-md rounded-full px-3 py-1.5 shadow-sm">
          <Star size={12} fill="#F4A261" className="text-coral" />
          <span className="text-xs font-bold text-gray-800">
            {pkg.rating}
          </span>
          <span className="text-xs text-gray-400">
            ({(pkg.reviews / 1000).toFixed(1)}k)
          </span>
        </div>

        {/* Price */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 + index * 0.05 }}
          className="absolute bottom-4 left-4 right-4 flex items-end justify-between"
        >
          <div>
            <p className="text-white/70 text-xs line-through">
              ₹{pkg.originalPrice}/person
            </p>

            <motion.p
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-white font-extrabold text-2xl tracking-wide"
            >
              ₹{pkg.price}
              <span className="text-sm font-normal"> /person</span>
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-coral transition-colors">
          {pkg.title}
        </h3>

        <div className="flex items-center gap-1.5 text-gray-500 mb-3">
          <MapPin size={13} className="text-coral" />
          <span className="text-sm">
            {pkg.location}, {pkg.country}
          </span>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1.5 text-gray-500">
            <Clock size={13} className="text-coral" />
            <span className="text-xs">{pkg.duration}</span>
          </div>

          <div className="flex items-center gap-1.5 text-gray-500">
            <Users size={13} className="text-coral" />
            <span className="text-xs">
              {pkg.category
                .filter((c) => c !== "All Place")
                .join(", ")}
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
          {pkg.description}
        </p>

        {/* CTA Button */}
        <Link
          href={`/packages/${pkg.id}`}
          className="flex items-center justify-between w-full px-5 py-3 rounded-2xl bg-gradient-to-r  hover:from-coral-dark  hover:to-coral-dark transition-all duration-300 group/btn shadow-md hover:shadow-xl hover:scale-105"
        >
          <span className="text-sm font-semibold text-charcoal group-hover/btn:text-white transition-colors">
            View Package
          </span>

          <ArrowRight
            size={16}
            className="text-white group-hover/btn:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </motion.div>
  );
}