"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/lib/blogData";

export default function BlogFeatured() {
  const featured = blogPosts.filter(p => p.featured);
  const [main, ...rest] = featured;

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="section-label mb-2">Editor's Pick</p>
            <h2 className="font-display text-4xl md:text-5xl font-black text-charcoal">
              Featured Stories
            </h2>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-sm font-semibold text-coral hover:gap-3 transition-all">
            All Articles <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main feature */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <Link href={`/blog/${main.slug}`} className="group block bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm card-lift">
              <div className="img-zoom relative h-72 md:h-96">
                <img src={main.image} alt={main.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="pill bg-coral text-white text-xs font-semibold">{main.category}</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-display text-2xl md:text-3xl font-black text-white leading-tight mb-3 group-hover:text-coral-light transition-colors">
                    {main.title}
                  </h3>
                  <div className="flex items-center gap-4 text-white/70 text-sm">
                    <div className="flex items-center gap-2">
                      <img src={main.author.avatar} className="w-6 h-6 rounded-full object-cover" alt={main.author.name} />
                      <span>{main.author.name}</span>
                    </div>
                    <span className="flex items-center gap-1"><Clock size={12} /> {main.readTime}</span>
                    <span>{main.date}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm leading-relaxed">{main.excerpt}</p>
                <div className="flex items-center gap-2 mt-4 text-coral text-sm font-semibold group-hover:gap-3 transition-all">
                  Read Article <ArrowRight size={15} />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Side features */}
          <div className="flex flex-col gap-6">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                <Link href={`/blog/${post.slug}`} className="group flex gap-4 bg-white rounded-2xl p-4 border border-gray-100 hover:border-coral/30 hover:shadow-lg transition-all">
                  <div className="img-zoom w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-coral uppercase tracking-wider">{post.category}</span>
                    <h4 className="font-display font-bold text-charcoal text-sm leading-snug mt-1 mb-2 line-clamp-2 group-hover:text-coral transition-colors">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
