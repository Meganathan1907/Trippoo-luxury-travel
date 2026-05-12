"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight, ArrowLeft, Tag, Share2, BookOpen, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogNewsletter from "@/components/blog/BlogNewsletter";
import { blogPosts } from "@/lib/blogData";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  const related = blogPosts.filter(p => p.slug !== slug && p.category === post?.category).slice(0, 3);

  if (!post) return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <span className="text-6xl mb-4 block">📄</span>
        <h2 className="font-display text-3xl font-bold text-charcoal mb-2">Article not found</h2>
        <Link href="/blog" className="btn-primary mt-4 inline-flex">Back to Journal</Link>
      </div>
    </main>
  );

  // Auto-generate readable body from excerpt
  const paragraphs = [
    post.excerpt,
    "Every adventure begins long before you arrive. The best travellers we know spend just as much time reading, researching, and refining their mental map of a destination as they do packing. It's not obsession — it's preparation that looks like curiosity.",
    "The details that get overlooked in most travel content are exactly the ones that make the difference on the ground. Timing. Local etiquette. The right season vs the Instagram season. The guesthouse run by a family who's been there for four generations vs the hotel that topped a listicle in 2019.",
    "We've been sending people to extraordinary places for over 12 years. Here's what we've learned: the trips that go right aren't lucky. They're thought through. This guide is designed to make sure yours goes right.",
    "Start with the fundamentals — the right months, the entry requirements, the transport reality — then layer in the nuances that only show up when you've actually been. That's exactly what our guides are built to give you.",
    "Ready? Let's go.",
  ];

  return (
    <main className="min-h-screen bg-cream">

      {/* Hero */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[55vh] min-h-[400px]"
        >
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-black/20 to-black/40" />
        </motion.div>
      </section>

      {/* Article */}
      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-coral">Home</Link>
              <ChevronRight size={14} />
              <Link href="/blog" className="hover:text-coral">Journal</Link>
              <ChevronRight size={14} />
              <span className="text-charcoal font-medium line-clamp-1">{post.category}</span>
            </div>

            {/* Article card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5 border border-gray-100"
            >
              {/* Meta */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="pill bg-coral text-white text-xs font-bold">{post.category}</span>
                <span className="flex items-center gap-1.5 text-gray-400 text-sm"><Clock size={13} /> {post.readTime}</span>
                <span className="text-gray-400 text-sm">{post.date}</span>
              </div>

              <h1 className="font-display text-3xl md:text-5xl font-black text-charcoal leading-tight mb-6">
                {post.title}
              </h1>

              {/* Author */}
              <div className="flex items-center gap-4 pb-8 border-b border-gray-100 mb-10">
                <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full object-cover border-2 border-coral/20" />
                <div>
                  <p className="font-bold text-charcoal">{post.author.name}</p>
                  <p className="text-gray-400 text-sm">{post.author.role}</p>
                </div>
                <button className="ml-auto flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-coral hover:text-white text-sm font-medium transition-all">
                  <Share2 size={14} /> Share
                </button>
              </div>

              {/* Body */}
              <div className="prose prose-lg max-w-none">
                {paragraphs.map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    className={`text-gray-600 leading-relaxed mb-6 text-base ${i === 0 ? "text-lg font-medium text-charcoal border-l-4 border-coral pl-5 py-1" : ""}`}
                  >
                    {para}
                  </motion.p>
                ))}

                {/* Pull quote */}
                <motion.blockquote
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="my-10 p-8 bg-sand rounded-2xl border-l-4 border-coral"
                >
                  <p className="font-display text-2xl font-bold text-charcoal italic leading-snug">
                    "The trips that go right aren't lucky. They're thought through."
                  </p>
                  <footer className="mt-3 text-sm text-gray-500">— {post.author.name}, Trippoo</footer>
                </motion.blockquote>

                {paragraphs.slice(2).map((para, i) => (
                  <p key={`b${i}`} className="text-gray-600 leading-relaxed mb-6 text-base">{para}</p>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100 mt-8">
                {post.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-gray-100 rounded-full text-gray-500 font-medium hover:bg-coral hover:text-white transition-all cursor-pointer">
                    <Tag size={10} /> {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Back link */}
            <Link href="/blog" className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-gray-400 hover:text-coral transition-colors">
              <ArrowLeft size={15} /> Back to Journal
            </Link>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* About author */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Written by</p>
                <div className="flex items-center gap-3 mb-4">
                  <img src={post.author.avatar} alt={post.author.name} className="w-14 h-14 rounded-2xl object-cover" />
                  <div>
                    <p className="font-bold text-charcoal">{post.author.name}</p>
                    <p className="text-xs text-coral font-semibold">{post.author.role}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  One of Trippoo's founding team members. Has visited {post.category === "Destinations" ? "over 40 countries" : "dozens of destinations"} to personally vet every itinerary.
                </p>
              </div>

              {/* CTA book */}
              <div className="bg-charcoal rounded-3xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-coral/15 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <BookOpen size={28} className="text-coral mb-3" />
                  <h4 className="font-display text-xl font-black mb-2">Inspired to visit?</h4>
                  <p className="text-white/60 text-sm mb-5 leading-relaxed">Browse curated packages to {post.tags[0]} and beyond.</p>
                  <Link href="/packages" className="btn-primary w-full justify-center text-sm" style={{ padding: "12px 20px" }}>
                    View Packages <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Related */}
              {related.length > 0 && (
                <div className="bg-white rounded-3xl p-6 border border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">More in {post.category}</p>
                  <div className="space-y-4">
                    {related.map(r => (
                      <Link key={r.slug} href={`/blog/${r.slug}`} className="flex gap-3 group">
                        <div className="img-zoom w-16 h-16 rounded-xl overflow-hidden shrink-0">
                          <img src={r.image} alt={r.title} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-charcoal line-clamp-2 group-hover:text-coral transition-colors leading-snug">
                            {r.title}
                          </p>
                          <p className="text-xs text-gray-400 mt-1 flex items-center gap-1"><Clock size={10} /> {r.readTime}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <BlogNewsletter />

    </main>
  );
}
