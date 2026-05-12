"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PackageCard from "@/components/PackageCard";
import { packages } from "@/lib/data";

const categories = ["All Place", "Couples", "Family", "Solo", "Adventure"];

export default function HomePackages() {
  const [activeCategory, setActiveCategory] = useState("All Place");

  const filtered = packages.filter(p =>
    activeCategory === "All Place" ? true : p.category.includes(activeCategory)
  );

  return (
    <section className="py-24 mesh-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="section-label mb-3">Popular Packages</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal leading-tight">
              Explore The World's<br />
              <span className="shimmer-text">Finest Destinations</span>
            </h2>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-coral text-white shadow-lg shadow-coral/30"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-coral hover:text-coral"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.slice(0, 8).map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/packages" className="btn-primary">
            View All Packages <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
