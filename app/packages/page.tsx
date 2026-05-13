"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import PackageCard from "@/components/PackageCard";
import { packages } from "@/lib/data";

const categories = ["All Place", "Couples", "Family", "Solo", "Adventure"];
const durations = ["All", "2-3 Days", "4-5 Days", "6+ Days"];
const priceRanges = ["All", "Under ₹300", "₹300–₹600", "₹600+"];

export default function PackagesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Place");
  const [duration, setDuration] = useState("All");
  const [price, setPrice] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = packages.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.country.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase());

    const matchCat =
      category === "All Place" || p.category.includes(category);

    const matchDur =
      duration === "All" ||
      (() => {
        const days = parseInt(p.duration);
        if (duration === "2-3 Days") return days <= 3;
        if (duration === "4-5 Days") return days >= 4 && days <= 5;
        if (duration === "6+ Days") return days >= 6;
        return true;
      })();

    const matchPrice =
      price === "All" ||
      (() => {
        if (price === "Under ₹300") return p.price < 300;
        if (price === "₹300–₹600") return p.price >= 300 && p.price <= 600;
        if (price === "₹600+") return p.price > 600;
        return true;
      })();

    return matchSearch && matchCat && matchDur && matchPrice;
  });

  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="relative pt-32 pb-20 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=60"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-charcoal to-charcoal/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-coral mb-4 text-sm uppercase tracking-wider"
          >
            Explore Our Packages
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Find Your Perfect <span className="text-coral">Adventure</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Browse {packages.length} handcrafted travel packages across 40+ countries.
          </motion.p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">

          <div className="flex flex-col md:flex-row gap-4">

            {/* SEARCH */}
            <div className="relative flex-1 max-w-sm">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Search destinations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-coral"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X size={14} className="text-gray-400" />
                </button>
              )}
            </div>

            {/* CATEGORY */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`text-xs px-4 py-2 rounded-full transition ${
                    category === c
                      ? "bg-coral text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* FILTER BUTTON */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border rounded-xl hover:border-coral"
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>
          </div>

          {/* EXTRA FILTERS */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 pt-4 border-t flex gap-6 flex-wrap"
            >
              <div>
                <p className="text-xs font-semibold mb-2">Duration</p>
                <div className="flex gap-2">
                  {durations.map((d) => (
                    <button
                      key={d}
                      onClick={() => setDuration(d)}
                      className={`text-xs px-3 py-1 rounded ${
                        duration === d ? "bg-black text-white" : "bg-gray-100"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold mb-2">Price Range</p>
                <div className="flex gap-2">
                  {priceRanges.map((pr) => (
                    <button
                      key={pr}
                      onClick={() => setPrice(pr)}
                      className={`text-xs px-3 py-1 rounded ${
                        price === pr ? "bg-black text-white" : "bg-gray-100"
                      }`}
                    >
                      {pr}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-sm text-gray-500 mb-6">
            Showing <span className="font-bold">{filtered.length}</span> packages
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-5xl">🌍</p>
              <h3 className="text-xl font-bold mt-4">No packages found</h3>
              <p className="text-gray-500">Try changing filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((pkg, i) => (
                <PackageCard key={pkg.id} pkg={pkg} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

    </main>
  );
}