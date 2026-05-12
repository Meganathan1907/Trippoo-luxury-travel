"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, Clock, ArrowRight, X } from "lucide-react";
import { blogPosts, blogCategories } from "@/lib/blogData";

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = blogPosts.filter(p => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Filter bar */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-12">
          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles, topics..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-coral transition-colors"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                <X size={14} className="text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {blogCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-4 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-coral text-white shadow-lg shadow-coral/25"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-400 mb-8">
          Showing <span className="font-bold text-charcoal">{filtered.length}</span> article{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Grid */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="text-center py-24">
              <span className="text-5xl mb-4 block">📖</span>
              <h3 className="font-display text-2xl font-bold text-charcoal mb-2">No articles found</h3>
              <p className="text-gray-400 mb-6">Try a different category or search term.</p>
              <button onClick={() => { setSearch(""); setActiveCategory("All"); }}
                className="btn-primary">Clear Filters</button>
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory + search}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={`/blog/${post.slug}`} className="group block bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-coral/20 hover:shadow-2xl transition-all duration-300">
                    {/* Image */}
                    <div className="img-zoom relative h-52 bg-gray-100">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className="absolute top-4 left-4 pill bg-coral text-white text-xs font-semibold">
                        {post.category}
                      </span>
                      <div className="absolute bottom-4 right-4 glass text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 font-medium">
                        <Clock size={11} /> {post.readTime}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {post.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-[10px] px-2 py-1 bg-gray-100 rounded-full text-gray-500 font-medium">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="font-display font-black text-charcoal text-lg leading-snug mb-3 line-clamp-2 group-hover:text-coral transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>

                      {/* Author + date */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <img src={post.author.avatar} alt={post.author.name}
                            className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm" />
                          <div>
                            <p className="text-xs font-semibold text-charcoal">{post.author.name}</p>
                            <p className="text-[10px] text-gray-400">{post.date}</p>
                          </div>
                        </div>
                        <span className="flex items-center gap-1 text-xs text-coral font-semibold group-hover:gap-2 transition-all">
                          Read <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
